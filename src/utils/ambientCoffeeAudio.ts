/**
 * Procedural Web Audio API soundscape generator for Aura Espresso Bar.
 * Simulates gentle espresso steaming, warm room resonance, and occasional
 * ceramic cup / porcelain spoon clinks without relying on external audio files.
 */

class CoffeeSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private clinkTimer: number | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private steamFilter: BiquadFilterNode | null = null;
  private roomGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Create pink/brownish noise for milk steam & espresso extraction
  private createNoiseBuffer(durationSeconds = 5): AudioBuffer {
    if (!this.ctx) throw new Error('AudioContext missing');
    const sampleRate = this.ctx.sampleRate;
    const bufferSize = sampleRate * durationSeconds;
    const buffer = this.ctx.createBuffer(2, bufferSize, sampleRate);

    for (let channel = 0; channel < 2; channel++) {
      const output = buffer.getChannelData(channel);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }
    }
    return buffer;
  }

  // Synthesizes a delicate ceramic cup / porcelain spoon clink
  private playCeramicClink() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;

    const now = this.ctx.currentTime;
    // Choose fundamental frequency between 2200Hz and 3400Hz (resonant porcelain ceramic)
    const baseFreq = 2200 + Math.random() * 1200;

    // Primary bell tone
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const clinkGain = this.ctx.createGain();
    const bandpass = this.ctx.createBiquadFilter();

    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(baseFreq, now);
    bandpass.Q.setValueAtTime(14, now);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 0.98, now + 0.15);

    // Harmonic overtone
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq * 2.76, now);

    // Fast ceramic ping envelope
    const peakVolume = 0.04 + Math.random() * 0.03;
    clinkGain.gain.setValueAtTime(0.0001, now);
    clinkGain.gain.exponentialRampToValueAtTime(peakVolume, now + 0.003);
    clinkGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12 + Math.random() * 0.1);

    osc1.connect(clinkGain);
    osc2.connect(clinkGain);
    clinkGain.connect(bandpass);
    bandpass.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.25);
    osc2.stop(now + 0.25);

    // Schedule next organic clink between 3.5s and 8s
    if (this.isPlaying) {
      const nextDelay = 3500 + Math.random() * 4500;
      this.clinkTimer = window.setTimeout(() => this.playCeramicClink(), nextDelay);
    }
  }

  public start(volume = 0.6) {
    if (this.isPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime;

    // Master Gain with smooth fade in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(volume, now + 1.2);
    this.masterGain.connect(this.ctx.destination);

    // 1. Steam Wand Hiss & Microfoam Texture (Filtered Noise)
    const noiseBuffer = this.createNoiseBuffer(6);
    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Lowpass filter for smooth cafe steam hiss
    this.steamFilter = this.ctx.createBiquadFilter();
    this.steamFilter.type = 'lowpass';
    this.steamFilter.frequency.setValueAtTime(1400, now);
    this.steamFilter.Q.setValueAtTime(1.5, now);

    // Gentle LFO to modulate the steam intensity like natural frothing
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.25, now); // slow breath 4s cycle
    lfoGain.gain.setValueAtTime(400, now);
    lfo.connect(this.steamFilter.frequency);
    lfo.start(now);

    const steamGain = this.ctx.createGain();
    steamGain.gain.setValueAtTime(0.35, now);

    this.noiseNode.connect(this.steamFilter);
    this.steamFilter.connect(steamGain);
    steamGain.connect(this.masterGain);
    this.noiseNode.start(now);

    // 2. Warm Room Presence (Low frequency rumble)
    const roomOsc = this.ctx.createOscillator();
    const roomFilter = this.ctx.createBiquadFilter();
    this.roomGain = this.ctx.createGain();

    roomOsc.type = 'triangle';
    roomOsc.frequency.setValueAtTime(85, now);

    roomFilter.type = 'lowpass';
    roomFilter.frequency.setValueAtTime(160, now);

    this.roomGain.gain.setValueAtTime(0.08, now);

    roomOsc.connect(roomFilter);
    roomFilter.connect(this.roomGain);
    this.roomGain.connect(this.masterGain);
    roomOsc.start(now);

    // 3. Start organic cup clinks after 1.5s
    this.clinkTimer = window.setTimeout(() => {
      this.playCeramicClink();
    }, 1500);
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(Math.max(0, Math.min(1, vol)), now + 0.1);
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    if (this.clinkTimer) {
      clearTimeout(this.clinkTimer);
      this.clinkTimer = null;
    }

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    setTimeout(() => {
      if (this.noiseNode) {
        try {
          this.noiseNode.stop();
          this.noiseNode.disconnect();
        } catch {}
        this.noiseNode = null;
      }
      this.isPlaying = false;
    }, 850);
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const coffeeSoundscape = new CoffeeSoundscape();
