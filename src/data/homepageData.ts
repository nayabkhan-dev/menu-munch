export interface RestaurantCardData {
  id: string;
  initial: string;
  name: string;
  cuisine: string;
  image: string;
  accentBg: string;
  href: string;
}

export interface CityCardData {
  id: string;
  name: string;
  image: string;
  alt: string;
  href: string;
}

export interface DishCardData {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface RecipeCardData {
  id: string;
  title: string;
  label: string;
  image?: string;
  illustrationType?: 'zinger';
  href: string;
}

export interface GuideCardData {
  id: string;
  title: string;
  label: string;
  image?: string;
  illustrationType?: 'prices' | 'delivery' | 'deals';
  href: string;
}

export interface SampleMenuItem {
  id: string;
  name: string;
  diet: 'Vegetarian' | 'Non-veg';
  kcalText: string;
  priceText: string;
  image: string;
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const LOGO_PATH = '/assets/aistudio/menumunch_5e7e8b4b.jpg';

export const HERO_IMAGE = '/src/assets/images/mm_hero_spread_1795686977411.jpg';

export const POPULAR_SHORTCUTS = [
  'Burgers',
  'Pizza',
  'Biryani',
  'Karahi',
  'BBQ',
  'Chai',
];

export const CITIES_LIST = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
] as const;

export const SAMPLE_MENU_ITEMS: SampleMenuItem[] = [
  {
    id: 'sample-zinger',
    name: 'Zinger burger',
    diet: 'Non-veg',
    kcalText: '[kcal]',
    priceText: 'Rs. [PRICE]',
    image: '/src/assets/images/mm_sample_zinger_1795686978014.jpg',
  },
  {
    id: 'sample-twister',
    name: 'Veggie twister',
    diet: 'Vegetarian',
    kcalText: '[kcal]',
    priceText: 'Rs. [PRICE]',
    image: '/src/assets/images/mm_sample_twister_1795686978120.jpg',
  },
  {
    id: 'sample-wings',
    name: 'Hot wings, 6 pcs',
    diet: 'Non-veg',
    kcalText: '[kcal]',
    priceText: 'Rs. [PRICE]',
    image: '/src/assets/images/mm_sample_wings_1795686978183.jpg',
  },
  {
    id: 'sample-fries',
    name: 'Fries, large',
    diet: 'Vegetarian',
    kcalText: '[kcal]',
    priceText: 'Rs. [PRICE]',
    image: '/src/assets/images/mm_sample_fries_1795686978668.jpg',
  },
  {
    id: 'sample-family-deal',
    name: 'Family deal',
    diet: 'Non-veg',
    kcalText: '[kcal]',
    priceText: 'Rs. [PRICE]',
    image: '/src/assets/images/mm_sample_family_deal_1795686979556.jpg',
  },
];

export const WEBSITE_BENEFITS = [
  {
    id: 'full-menus',
    title: 'Full menus with prices',
    description: 'Every item and its price, listed by restaurant and city.',
  },
  {
    id: 'calories-veg',
    title: 'Calories and veg marks',
    description: 'Kcal and a vegetarian marker beside each item where listed.',
  },
  {
    id: 'compare-dishes',
    title: 'Compare dishes',
    description: 'See the same dish across restaurants side by side.',
  },
];

export const POPULAR_RESTAURANTS: RestaurantCardData[] = [
  {
    id: 'kfc',
    initial: 'K',
    name: 'KFC',
    cuisine: 'Fast food, chicken',
    image: '/assets/restaurants/kfc.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'mcdonalds',
    initial: 'M',
    name: "McDonald's",
    cuisine: 'Fast food, burgers',
    image: '/assets/restaurants/mcdonalds.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'hardees',
    initial: 'H',
    name: "Hardee's",
    cuisine: 'Fast food, burgers',
    image: '/assets/restaurants/hardees.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'pizzahut',
    initial: 'P',
    name: 'Pizza Hut',
    cuisine: 'Pizza',
    image: '/assets/restaurants/pizzahut.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'dominos',
    initial: 'D',
    name: "Domino's",
    cuisine: 'Pizza',
    image: '/assets/restaurants/dominos.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'cheezious',
    initial: 'C',
    name: 'Cheezious',
    cuisine: 'Pizza and fast food',
    image: '/assets/restaurants/cheezious.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'broadway',
    initial: 'B',
    name: 'Broadway Pizza',
    cuisine: 'Pizza',
    image: '/assets/restaurants/broadway.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'savour',
    initial: 'S',
    name: 'Savour Foods',
    cuisine: 'Pulao and desi',
    image: '/assets/restaurants/savour.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'kababjees',
    initial: 'K',
    name: 'Kababjees',
    cuisine: 'BBQ and desi',
    image: '/assets/restaurants/kababjees.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'optp',
    initial: 'O',
    name: 'OPTP',
    cuisine: 'Fries and fast food',
    image: '/assets/restaurants/optp.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'subway',
    initial: 'S',
    name: 'Subway',
    cuisine: 'Sandwiches',
    image: '/assets/restaurants/subway.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
  {
    id: 'bundukhan',
    initial: 'B',
    name: 'Bundu Khan',
    cuisine: 'BBQ and desi',
    image: '/assets/restaurants/bundukhan.jpg',
    accentBg: '#173C2B',
    href: '#menus',
  },
];

export const CITIES_DATA: CityCardData[] = [
  {
    id: 'lahore',
    name: 'Lahore',
    image: '/src/assets/images/mm_city_lahore_1795687178359.jpg',
    alt: 'Badshahi Mosque in Lahore, Pakistan with Mughal sandstone architecture at golden hour',
    href: '#cities',
  },
  {
    id: 'karachi',
    name: 'Karachi',
    image: '/src/assets/images/mm_city_karachi_1795687178104.jpg',
    alt: 'Mazar-e-Quaid white marble mausoleum and manicured gardens in Karachi, Pakistan',
    href: '#cities',
  },
  {
    id: 'islamabad',
    name: 'Islamabad',
    image: '/src/assets/images/mm_city_islamabad_1795687178651.jpg',
    alt: 'Faisal Mosque with the green Margalla Hills in the background in Islamabad, Pakistan',
    href: '#cities',
  },
  {
    id: 'rawalpindi',
    name: 'Rawalpindi',
    image: '/src/assets/images/mm_city_rawalpindi_1795687179123.jpg',
    alt: 'Historic street architecture and carved wooden balconies in Raja Bazaar, Rawalpindi',
    href: '#cities',
  },
  {
    id: 'faisalabad',
    name: 'Faisalabad',
    image: '/src/assets/images/mm_city_faisalabad_1795687179493.jpg',
    alt: 'Historic Ghanta Ghar Clock Tower surrounded by eight radiating bazaars in Faisalabad',
    href: '#cities',
  },
  {
    id: 'multan',
    name: 'Multan',
    image: '/src/assets/images/mm_city_multan_1795687086557.jpg',
    alt: 'Shrine of Shah Rukn-e-Alam with cobalt blue and turquoise Kashi tilework in Multan',
    href: '#cities',
  },
  {
    id: 'peshawar',
    name: 'Peshawar',
    image: '/src/assets/images/mm_city_peshawar_1795687179893.jpg',
    alt: 'Historic Qissa Khwani Bazaar and carved timber heritage architecture in Peshawar',
    href: '#cities',
  },
  {
    id: 'quetta',
    name: 'Quetta',
    image: '/src/assets/images/mm_city_quetta_1795687179752.jpg',
    alt: 'Turquoise waters of Hanna Lake surrounded by rugged Balochistan mountains near Quetta',
    href: '#cities',
  },
];

export const POPULAR_DISHES: DishCardData[] = [
  {
    id: 'zinger-burger',
    name: 'Zinger burger',
    image: '/src/assets/images/mm_dish_zinger_1795687085919.jpg',
    href: '#dishes',
  },
  {
    id: 'chicken-karahi',
    name: 'Chicken karahi',
    image: '/src/assets/images/mm_dish_karahi_1795687267420.jpg',
    href: '#dishes',
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken biryani',
    image: '/src/assets/images/mm_dish_biryani_1795687267599.jpg',
    href: '#dishes',
  },
  {
    id: 'broast',
    name: 'Broast',
    image: '/src/assets/images/mm_dish_broast_1795687086170.jpg',
    href: '#dishes',
  },
  {
    id: 'paratha-roll',
    name: 'Paratha roll',
    image: '/src/assets/images/mm_dish_paratha_roll_1795687267937.jpg',
    href: '#dishes',
  },
  {
    id: 'seekh-kabab',
    name: 'Seekh kabab',
    image: '/src/assets/images/mm_dish_seekh_kabab_1795687268961.jpg',
    href: '#dishes',
  },
  {
    id: 'halwa-puri',
    name: 'Halwa puri',
    image: '/src/assets/images/mm_dish_halwa_puri_1795687268860.jpg',
    href: '#dishes',
  },
  {
    id: 'cheese-pizza',
    name: 'Cheese pizza',
    image: '/src/assets/images/mm_dish_cheese_pizza_1795687268850.jpg',
    href: '#dishes',
  },
  {
    id: 'chai',
    name: 'Chai',
    image: '/src/assets/images/mm_dish_chai_1795687086189.jpg',
    href: '#dishes',
  },
  {
    id: 'shakes',
    name: 'Shakes',
    image: '/src/assets/images/mm_dish_shakes_1795687268922.jpg',
    href: '#dishes',
  },
];

export const RECIPES_DATA: RecipeCardData[] = [
  {
    id: 'recipe-chicken-karahi',
    title: 'Chicken karahi',
    label: 'Cook',
    image: '/src/assets/images/mm_recipe_karahi_1795687087386.jpg',
    href: '#recipes',
  },
  {
    id: 'recipe-chicken-biryani',
    title: 'Chicken biryani',
    label: 'Cook',
    image: '/src/assets/images/mm_recipe_biryani_1795687269639.jpg',
    href: '#recipes',
  },
  {
    id: 'recipe-zinger-burger',
    title: 'Zinger burger at home',
    label: 'Cook',
    illustrationType: 'zinger',
    href: '#recipes',
  },
  {
    id: 'recipe-chapli-kabab',
    title: 'Chapli kabab',
    label: 'Cook',
    image: '/src/assets/images/food_grill_1795686231811.jpg',
    href: '#recipes',
  },
];

export const GUIDES_DATA: GuideCardData[] = [
  {
    id: 'guide-fast-food-prices',
    title: 'Fast food prices in Pakistan',
    label: 'Read',
    illustrationType: 'prices',
    href: '#guides',
  },
  {
    id: 'guide-calories',
    title: 'Calories in popular fast food',
    label: 'Read',
    image: '/src/assets/images/mm_guide_calories_1795687086180.jpg',
    href: '#guides',
  },
  {
    id: 'guide-delivery-charges',
    title: 'Delivery charges compared',
    label: 'Read',
    illustrationType: 'delivery',
    href: '#guides',
  },
  {
    id: 'guide-deals',
    title: 'Deals this week',
    label: 'Read',
    illustrationType: 'deals',
    href: '#guides',
  },
];

export const HOME_FAQS: HomeFaqItem[] = [
  {
    question: 'Are the prices on MenuMunch official?',
    answer:
      'No. MenuMunch is an independent site and is not run by any restaurant. Prices come from restaurant menus and can change by branch and city, so confirm with the restaurant before you order.',
  },
  {
    question: 'How do I find a restaurant menu?',
    answer:
      'Type the restaurant or dish into the search box, pick your city, and open the result. You can also browse by city or by dish from the home page.',
  },
  {
    question: 'Do prices change between cities?',
    answer:
      'Often they do. Chains can price differently by city and branch, and taxes or delivery fees may not be included in the menu price.',
  },
  {
    question: 'Can I see calories for each item?',
    answer:
      'Where a restaurant publishes calorie information, it appears next to the item on the menu page.',
  },
  {
    question: 'How do I report a wrong price?',
    answer:
      'Use the Report a price link on any menu page. We check it against the restaurant menu and update the page.',
  },
];
