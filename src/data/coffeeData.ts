export interface CoffeeItem {
  id: string;
  name: string;
  category: 'Popular' | 'Espresso' | 'Milk' | 'Cold' | 'Signature';
  tagline: string;
  composition: string;
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  roast: 'Light Citrus' | 'Medium Honey' | 'Dark Velvet' | 'Reserve Geisha';
  flavorNotes: string[];
  description: string;
}

export const POPULAR_BREWS: CoffeeItem[] = [
  {
    id: 'cappuccino',
    name: 'Aura Velvet Cappuccino',
    category: 'Popular',
    tagline: 'Classic Italian harmony with silky microfoam',
    composition: '30% Espresso, 70% Steamed Milk & Dense Microfoam',
    rating: 4.9,
    reviewsCount: 384,
    price: 6.25,
    image: '/src/assets/images/aura_cappuccino_1791441747281.jpg',
    roast: 'Dark Velvet',
    flavorNotes: ['Dark Cocoa', 'Toasted Hazelnut', 'Warm Brioche'],
    description: 'Double ristretto extracted at 9 bars of pressure, enveloped in silky textured microfoam and dusted with Ecuadorian single-estate cacao.'
  },
  {
    id: 'latte',
    name: 'Artisan Silk Latte',
    category: 'Popular',
    tagline: 'Gentle, balanced sweetness with pristine micro-texture',
    composition: '25% Espresso, 75% Silky Steamed Milk',
    rating: 4.95,
    reviewsCount: 520,
    price: 6.75,
    image: '/src/assets/images/aura_latte_1791441768170.jpg',
    roast: 'Medium Honey',
    flavorNotes: ['Brown Sugar', 'Vanilla Bean', 'Pecan'],
    description: 'A delicate extraction of our Ethiopian Guji heirloom beans poured over velvety steamed whole milk or oat milk, finished with hand-poured rosetta art.'
  },
  {
    id: 'mocha',
    name: 'Valrhona Noir Mocha',
    category: 'Popular',
    tagline: 'Gourmet 72% dark chocolate melted into rich crema',
    composition: '30% Espresso, 20% Valrhona Ganache, 50% Milk',
    rating: 4.88,
    reviewsCount: 295,
    price: 7.25,
    image: '/src/assets/images/aura_mocha_1791441778647.jpg',
    roast: 'Dark Velvet',
    flavorNotes: ['72% Valrhona Dark', 'Smoked Espresso Crema', 'Salted Toffee'],
    description: 'Decadent melted French single-origin dark chocolate, paired with our signature Obsidian espresso blend and topped with delicate cocoa shavings.'
  }
];

export const ALL_MENU_ITEMS: CoffeeItem[] = [
  ...POPULAR_BREWS,
  {
    id: 'espresso-doppio',
    name: 'Obsidian Double Ristretto',
    category: 'Espresso',
    tagline: 'Unadulterated single-origin concentration',
    composition: '100% Espresso (Double Shot 36ml)',
    rating: 4.96,
    reviewsCount: 412,
    price: 4.75,
    image: '/src/assets/images/aura_centerpiece_cup_1791441729473.jpg',
    roast: 'Reserve Geisha',
    flavorNotes: ['Bergamot', 'Black Cherry', 'Cacao Nibs'],
    description: 'Pulled on our custom Synesso MVP machine at 93.5°C. Thick amber crema with a deep, lingering sweet finish.'
  },
  {
    id: 'cold-brew-reserve',
    name: 'Nitro Obsidian Cold Brew',
    category: 'Cold',
    tagline: 'Steeped for 20 hours, infused with pure nitrogen',
    composition: '100% Cold Brew with Micro-Nitrogen Cascade',
    rating: 4.92,
    reviewsCount: 310,
    price: 6.95,
    image: '/src/assets/images/aura_hero_splash_1791441708921.jpg',
    roast: 'Medium Honey',
    flavorNotes: ['Bourbon Vanilla', 'Dried Apricot', 'Dark Molasses'],
    description: 'A Guinness-like silky cascade of micro-bubbles with creamy mouthfeel, natural low-acidity sweetness, and zero added sugars.'
  },
  {
    id: 'golden-cortado',
    name: 'Golden Amber Cortado',
    category: 'Milk',
    tagline: 'Equal parts bold espresso and warm milk',
    composition: '50% Espresso, 50% Warm Steamed Milk',
    rating: 4.89,
    reviewsCount: 198,
    price: 5.50,
    image: '/src/assets/images/aura_latte_1791441768170.jpg',
    roast: 'Dark Velvet',
    flavorNotes: ['Caramelized Fig', 'Roasted Almond', 'Milk Chocolate'],
    description: 'Served in a faceted Gibraltar glass. Designed for those who savor the boldness of intense coffee softened just enough with warm milk.'
  },
  {
    id: 'cardamom-affogato',
    name: 'Cardamom Crema Affogato',
    category: 'Signature',
    tagline: 'Artisanal vanilla gelato drowned in hot ristretto',
    composition: 'Single Scoop Gelato + Double Hot Espresso',
    rating: 4.97,
    reviewsCount: 264,
    price: 8.00,
    image: '/src/assets/images/aura_cappuccino_1791441747281.jpg',
    roast: 'Reserve Geisha',
    flavorNotes: ['Madagascar Vanilla', 'Green Cardamom', 'Crisp Toffee'],
    description: 'Slow-churned Tahitian vanilla bean gelato spiced with green cardamom essence, drowned under a piping hot shot of single-origin espresso.'
  }
];

export interface CartItem {
  id: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  milk: string;
  temp: 'Hot' | 'Iced';
  sweetness: string;
  extraShot: boolean;
}

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'High Quality Beans',
    description: 'Direct-trade heirloom Arabica sourced from high-altitude micro-lots in Yirgacheffe and Huila, roasted within 7 days for peak enzymatic vibrancy.'
  },
  {
    number: '02',
    title: 'Personalized Approach',
    description: 'From water mineralization to bespoke 62°C milk temperature and custom grind micron calibration, your brew is tuned to your exact sensory taste.'
  },
  {
    number: '03',
    title: 'Atmosphere of Inspiration',
    description: 'A minimalist sanctuary sculpted with acoustic cedar paneling, warm ambient aura illumination, and low-frequency vinyl acoustics for thinkers and creators.'
  },
  {
    number: '04',
    title: 'Professional Barista Team',
    description: 'Every cup is pulled by certified SCA master craftspeople who treat every extraction as an unrepeatable culinary composition.'
  }
];

export const REVIEWS = [
  {
    quote: 'The extraction purity at Aura is in a league of its own. You can distinctly taste the jasmine floral notes before the dark chocolate finish takes over.',
    author: 'Elena Vance',
    role: 'Specialty Coffee Q-Grader & Sensory Judge',
    drink: 'Obsidian Double Ristretto',
    rating: 5
  },
  {
    quote: 'Aura’s Valrhona Noir Mocha strikes that impossible balance: never cloying, genuinely complex, and paired with the best atmosphere in the city.',
    author: 'Marcus Sterling',
    role: 'Architecture & Design Editor',
    drink: 'Valrhona Noir Mocha',
    rating: 5
  },
  {
    quote: 'From the warm low-frequency music to the temperature-perfect flat whites, this has become my creative ritual four mornings a week.',
    author: 'Sora Takahashi',
    role: 'Creative Director',
    drink: 'Artisan Silk Latte',
    rating: 5
  }
];
