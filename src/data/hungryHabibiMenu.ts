export interface PlatterItem {
  id: string;
  name: string;
  pricePkr: number;
  priceWithGst: number;
  servesText: string;
  perPersonText: string;
  minPerPerson: number;
  maxPerPerson: number;
  description: string;
  image: string;
  seasonalNote?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  pricePkr: number;
  priceWithGst: number;
  serves?: string;
  description?: string;
  chefSpecial?: boolean;
  seasonal?: boolean;
  noMeatListed?: boolean;
  categoryLabel?: string;
  image: string;
}

export interface MenuSubcategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  footerNote?: string;
  image: string;
  items?: MenuItem[];
  subcategories?: MenuSubcategory[];
}

export interface GlossaryTerm {
  term: string;
  explanation: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const MENU_IMAGES = {
  hero: '/src/assets/images/hero_arabian_feast_1795686229951.jpg',
  platters: '/src/assets/images/food_platters_1795686230642.jpg',
  chicken: '/src/assets/images/food_chicken_1795686230905.jpg',
  mutton: '/src/assets/images/food_mutton_1795686231067.jpg',
  grill: '/src/assets/images/food_grill_1795686231811.jpg',
  istanbul: '/src/assets/images/food_istanbul_1795686232875.jpg',
  fish: '/src/assets/images/food_fish_1795686234810.jpg',
  appetizers: '/src/assets/images/food_appetizers_1795686233041.jpg',
  breads: '/src/assets/images/food_breads_1795686233627.jpg',
  dessert: '/src/assets/images/food_dessert_1795686235772.jpg',
  drinks: '/src/assets/images/food_drinks_1795686235607.jpg',
} as const;

export const RESTAURANT_INFO = {
  name: 'Hungry Habibi',
  pageTitle: 'Hungry Habibi menu and prices in Pakistan',
  leadDescription:
    'The full menu of this Arabian restaurant and delivery kitchen: platters, madbee, mandi, grill, Turkish pide, desserts and drinks. Every price is as printed on the restaurant menu, with the 15% GST worked out for each item.',
  disclaimer:
    'Prices taken from the restaurant menu. MenuMunch is not affiliated with Hungry Habibi.',
  facts: [
    {
      label: 'Food',
      value: 'Arabian grill, madbee and mandi, Turkish pide, kunafa',
    },
    {
      label: 'Delivery',
      value: 'Major areas of Karachi',
    },
    {
      label: 'Branches',
      value:
        'DHA, SMCHS, Bahadurabad, Gulshan and Malir Jinnah Avenue in Karachi. Also Lahore, Islamabad and Multan.',
    },
    {
      label: 'Started',
      value: '2023, as a cloud kitchen with a small dine-in space',
    },
    {
      label: 'Tax',
      value: '15% GST is added to all prices',
    },
    {
      label: 'Contact Numbers',
      value: 'UAN 021 111 111 486 — WhatsApp 0310 1999906 or 0310 1999940',
    },
  ],
  pricesAtAGlance: [
    { label: 'Platters', value: 'Rs. 3,350 to Rs. 12,990' },
    { label: 'Half a chicken on rice', value: 'Rs. 2,150 to Rs. 2,200' },
    { label: 'Most grill plates', value: 'Rs. 1,500 to Rs. 1,700' },
    { label: 'Single serving of mutton', value: 'Rs. 3,500' },
  ],
  pricesAtAGlanceNote:
    'All prices are before 15% GST. A full portion costs exactly double the half, so ordering a full chicken saves nothing over two halves.',
  groupSizeGuide: [
    {
      group: 'Just you',
      recommendation:
        'Half a chicken on rice (Madbee, Mandi, Al Baladi or Faham) is Rs. 2,150 to Rs. 2,200. A grill plate is Rs. 1,500 to Rs. 1,700. Add Pita Bread for Rs. 70.',
    },
    {
      group: 'Two people',
      recommendation:
        'Arabian Feast Platter is Rs. 3,350 and includes Mandi rice. Meshwi Platter is Rs. 5,500 and is all grill with bread, but no rice is listed.',
    },
    {
      group: 'Three to four',
      recommendation:
        'Arabian Feast Platter for 4 is Rs. 6,300 with Madbee half, kababs and rice. Mix Habibi Platter is Rs. 8,200 and adds Fattoush, Hummus, Labneh and bread.',
    },
    {
      group: 'Five to six',
      recommendation:
        'Mandi Platter is Rs. 10,500 with chicken, mutton and fish. Istanbuli Platter for 4 to 5 is Rs. 12,990 and includes starters, mutton chops and fries.',
    },
  ],
};

export const PLATTERS: PlatterItem[] = [
  {
    id: 'platter-arabian-feast-2',
    name: 'Arabian Feast Platter',
    pricePkr: 3350,
    priceWithGst: 3853,
    servesText: 'Serves 2 persons',
    perPersonText: 'Rs. 1,675 per person',
    minPerPerson: 1675,
    maxPerPerson: 1675,
    description:
      'Chicken Turkish Kabab, Beef Adana Kabab, Irani Boti, Chicken Chop, Chicken Madbee (quarter), 3 types of sauces, Arabic Bread, Mandi Rice.',
    image: MENU_IMAGES.platters,
  },
  {
    id: 'platter-meshwi-2',
    name: 'Meshwi Platter',
    pricePkr: 5500,
    priceWithGst: 6325,
    servesText: 'Serves 2 persons',
    perPersonText: 'Rs. 2,750 per person',
    minPerPerson: 2750,
    maxPerPerson: 2750,
    description:
      'Chicken Turkish Kabab, Beef Adana Kabab, Beef Bihari Boti, Malai Boti, Chicken Chops (2 pcs), Arabic Bread, Puri Paratha, 3 types of sauces, Grill Veggie. No rice is listed in this platter.',
    image: MENU_IMAGES.grill,
  },
  {
    id: 'platter-istanbuli-2-3',
    name: 'Istanbuli Platter',
    pricePkr: 7200,
    priceWithGst: 8280,
    servesText: 'Serves 2 to 3 persons',
    perPersonText: 'Rs. 2,400 to Rs. 3,600 per person',
    minPerPerson: 2400,
    maxPerPerson: 3600,
    description:
      'Starters: Fattoush, Hummus and Labneh. Main course: Chicken Turkish Kabab, Beef Adana Kabab, Shishtock Boti, Irani Boti, Mutton Chops (4 to 5 pcs), Fries, Extra Rice. Breads and paratha: Puri Paratha (2 pcs), Pita Bread (2 pcs).',
    image: MENU_IMAGES.istanbul,
  },
  {
    id: 'platter-mix-habibi-3-4',
    name: 'Mix Habibi Platter',
    pricePkr: 8200,
    priceWithGst: 9430,
    servesText: 'Serves 3 to 4 persons',
    perPersonText: 'Rs. 2,050 to Rs. 2,733 per person',
    minPerPerson: 2050,
    maxPerPerson: 2733,
    description:
      'Laham Kabab (1 pc), Beef Adana Kabab, Chicken Turkish Kabab, Beef Bihari Boti, Irani Boti, Malai Boti, Chicken Chops (4 pcs), Fattoush Salad, Hummus, Turkish Labneh, 2 Arabic Bread, 2 Puri Paratha, 2 Pita Bread, 3 types of sauces, Grill Veggie, Mandi Rice.',
    image: MENU_IMAGES.platters,
  },
  {
    id: 'platter-arabian-feast-4',
    name: 'Arabian Feast Platter',
    pricePkr: 6300,
    priceWithGst: 7245,
    servesText: 'Serves 4 persons',
    perPersonText: 'Rs. 1,575 per person',
    minPerPerson: 1575,
    maxPerPerson: 1575,
    description:
      'Beef Adana Kabab, Chicken Turkish Kabab, Irani Boti, Chicken Chops (2 pcs), Chicken Madbee (half), 3 types of sauces, 2 Arabic Bread, Grill Veggie, Mandi Rice.',
    image: MENU_IMAGES.platters,
  },
  {
    id: 'platter-istanbuli-4-5',
    name: 'Istanbuli Platter',
    pricePkr: 12990,
    priceWithGst: 14939,
    servesText: 'Serves 4 to 5 persons',
    perPersonText: 'Rs. 2,598 to Rs. 3,248 per person',
    minPerPerson: 2598,
    maxPerPerson: 3248,
    description:
      'Starters: Fattoush, Hummus and Labneh. Main course: Laham Kabab (1 pc), Chicken Turkish Kabab, Beef Adana Kabab, Shishtock Boti, Mutton Boti, Mutton Chops (6 pcs), Steak Boti, Chicken Chops (3 pcs) and Chicken Pide. Breads and paratha: Puri Paratha (2 pcs) and Pita Bread (2 pcs). Served with fries.',
    image: MENU_IMAGES.istanbul,
  },
  {
    id: 'platter-mandi-5-6',
    name: 'Mandi Platter',
    pricePkr: 10500,
    priceWithGst: 12075,
    servesText: 'Serves 5 to 6 persons',
    perPersonText: 'Rs. 1,750 to Rs. 2,100 per person',
    minPerPerson: 1750,
    maxPerPerson: 2100,
    description:
      'Chicken Madbee, Mutton Madfoon, Fish Madbee, Beef Adana Kabab, Chicken Turkish Kabab, Grill Madbee Boti, Mandi Rice.',
    seasonalNote:
      'Fish Madbee is marked seasonal elsewhere on the menu. Ask if it is available.',
    image: MENU_IMAGES.platters,
  },
];

export const PLATTER_COMPARISON_BARS = [
  {
    label: 'Arabian Feast Platter · Serves 4',
    valueText: 'Rs. 1,575',
    min: 1575,
    max: 1575,
  },
  {
    label: 'Arabian Feast Platter · Serves 2',
    valueText: 'Rs. 1,675',
    min: 1675,
    max: 1675,
  },
  {
    label: 'Mandi Platter · Serves 5 to 6',
    valueText: 'Rs. 1,750 to Rs. 2,100',
    min: 1750,
    max: 2100,
  },
  {
    label: 'Mix Habibi Platter · Serves 3 to 4',
    valueText: 'Rs. 2,050 to Rs. 2,733',
    min: 2050,
    max: 2733,
  },
  {
    label: 'Istanbuli Platter · Serves 2 to 3',
    valueText: 'Rs. 2,400 to Rs. 3,600',
    min: 2400,
    max: 3600,
  },
  {
    label: 'Istanbuli Platter · Serves 4 to 5',
    valueText: 'Rs. 2,598 to Rs. 3,248',
    min: 2598,
    max: 3248,
  },
  {
    label: 'Meshwi Platter · Serves 2',
    valueText: 'Rs. 2,750',
    min: 2750,
    max: 2750,
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'chicken',
    title: 'Chicken',
    subtitle: 'Served with rice',
    image: MENU_IMAGES.chicken,
    items: [
      {
        id: 'chicken-madbee-half',
        name: 'Chicken Madbee (Half)',
        pricePkr: 2150,
        priceWithGst: 2473,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'chicken-madbee-full',
        name: 'Chicken Madbee (Full)',
        pricePkr: 4300,
        priceWithGst: 4945,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'chicken-mandi-half',
        name: 'Chicken Mandi (Half)',
        pricePkr: 2150,
        priceWithGst: 2473,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'chicken-mandi-full',
        name: 'Chicken Mandi (Full)',
        pricePkr: 4300,
        priceWithGst: 4945,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'dajjaj-al-baladi-half',
        name: 'Dajjaj Al Baladi (Half)',
        pricePkr: 2200,
        priceWithGst: 2530,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'dajjaj-al-baladi-full',
        name: 'Dajjaj Al Baladi (Full)',
        pricePkr: 4400,
        priceWithGst: 5060,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'chicken-faham-half',
        name: 'Chicken Faham (Half), with rice',
        pricePkr: 2150,
        priceWithGst: 2473,
        image: MENU_IMAGES.chicken,
      },
      {
        id: 'chicken-faham-full',
        name: 'Chicken Faham (Full), with rice',
        pricePkr: 4300,
        priceWithGst: 4945,
        image: MENU_IMAGES.chicken,
      },
    ],
  },
  {
    id: 'mutton',
    title: 'Mutton',
    subtitle: 'Served with rice',
    image: MENU_IMAGES.mutton,
    items: [
      {
        id: 'full-spicy-mutton-salim',
        name: 'Full Spicy Mutton (Salim)',
        pricePkr: 44000,
        priceWithGst: 50600,
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'full-spicy-mutton-pcs',
        name: 'Full Spicy Mutton (Pcs)',
        pricePkr: 44000,
        priceWithGst: 50600,
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-jalama-kg',
        name: 'Mutton Jalama (per kg)',
        pricePkr: 4800,
        priceWithGst: 5520,
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-harara-single',
        name: 'Mutton Harara (Single serving)',
        pricePkr: 3500,
        priceWithGst: 4025,
        serves: 'Serves 1',
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-harara-double',
        name: 'Mutton Harara (Double serving)',
        pricePkr: 7000,
        priceWithGst: 8050,
        serves: 'Serves 3 to 4',
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-madfoon-single',
        name: 'Mutton Madfoon (Single serving)',
        pricePkr: 3500,
        priceWithGst: 4025,
        serves: 'Serves 1',
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-madfoon-double',
        name: 'Mutton Madfoon (Double serving)',
        pricePkr: 7000,
        priceWithGst: 8050,
        serves: 'Serves 3 to 4',
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-mandi-single',
        name: 'Mutton Mandi (Single serving)',
        pricePkr: 3500,
        priceWithGst: 4025,
        serves: 'Serves 1',
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-mandi-double',
        name: 'Mutton Mandi (Double serving)',
        pricePkr: 7000,
        priceWithGst: 8050,
        serves: 'Serves 3 to 4',
        image: MENU_IMAGES.mutton,
      },
      {
        id: 'mutton-dasti',
        name: 'Mutton Dasti',
        pricePkr: 6600,
        priceWithGst: 7590,
        image: MENU_IMAGES.mutton,
      },
    ],
  },
  {
    id: 'grill',
    title: 'Grill',
    image: MENU_IMAGES.grill,
    items: [
      {
        id: 'beef-bihari-boti',
        name: 'Beef Bihari Boti',
        pricePkr: 1700,
        priceWithGst: 1955,
        chefSpecial: true,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'malai-boti',
        name: 'Malai Boti',
        pricePkr: 1700,
        priceWithGst: 1955,
        chefSpecial: true,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'irani-boti',
        name: 'Irani Boti',
        pricePkr: 1600,
        priceWithGst: 1840,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'chicken-spicy-chops',
        name: 'Chicken Spicy Chops',
        pricePkr: 1500,
        priceWithGst: 1725,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'chicken-turkish-kabab',
        name: 'Chicken Turkish Kabab',
        pricePkr: 1500,
        priceWithGst: 1725,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'beef-adana-kabab',
        name: 'Beef Adana Kabab',
        pricePkr: 1500,
        priceWithGst: 1725,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'chicken-shish-taouk-boti',
        name: 'Chicken Shish Taouk Boti',
        pricePkr: 1700,
        priceWithGst: 1955,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'full-sizzling-faham',
        name: 'Full Sizzling Faham',
        pricePkr: 2400,
        priceWithGst: 2760,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'full-grill-mushka',
        name: 'Full Grill Mushka',
        pricePkr: 4300,
        priceWithGst: 4945,
        seasonal: true,
        image: MENU_IMAGES.fish,
      },
      {
        id: 'mutton-chops',
        name: 'Mutton Chops',
        pricePkr: 3800,
        priceWithGst: 4370,
        image: MENU_IMAGES.grill,
      },
      {
        id: 'laham-kabab',
        name: 'Laham Kabab',
        pricePkr: 2200,
        priceWithGst: 2530,
        image: MENU_IMAGES.grill,
      },
    ],
  },
  {
    id: 'istanbul',
    title: 'Street of Istanbul',
    image: MENU_IMAGES.istanbul,
    footerNote:
      'The Chef Special page of the menu also lists Turkish Pide at Rs. 1,700, the same price as the three pides above.',
    items: [
      {
        id: 'chicken-pide',
        name: 'Chicken Pide',
        pricePkr: 1700,
        priceWithGst: 1955,
        image: MENU_IMAGES.istanbul,
      },
      {
        id: 'pepperoni-pide',
        name: 'Pepperoni Pide',
        pricePkr: 1700,
        priceWithGst: 1955,
        image: MENU_IMAGES.istanbul,
      },
      {
        id: 'mix-pide',
        name: 'Mix Pide',
        pricePkr: 1700,
        priceWithGst: 1955,
        image: MENU_IMAGES.istanbul,
      },
      {
        id: 'turkish-cheese-kabab',
        name: 'Turkish Cheese Kabab',
        pricePkr: 2200,
        priceWithGst: 2530,
        chefSpecial: true,
        image: MENU_IMAGES.istanbul,
      },
      {
        id: 'chicken-shawarma',
        name: 'Chicken Shawarma',
        pricePkr: 1250,
        priceWithGst: 1438,
        image: MENU_IMAGES.istanbul,
      },
    ],
  },
  {
    id: 'fish',
    title: 'Fish',
    subtitle: 'Served with rice. Seasonally available',
    image: MENU_IMAGES.fish,
    items: [
      {
        id: 'samak-sultani',
        name: 'Samak Sultani with rice (Mushka)',
        pricePkr: 5000,
        priceWithGst: 5750,
        chefSpecial: true,
        seasonal: true,
        image: MENU_IMAGES.fish,
      },
      {
        id: 'fish-madbee-single',
        name: 'Fish Madbee, single serving (Surmai)',
        pricePkr: 3200,
        priceWithGst: 3680,
        serves: 'Serves 1',
        seasonal: true,
        image: MENU_IMAGES.fish,
      },
      {
        id: 'fish-madbee-double',
        name: 'Fish Madbee, double serving (Surmai)',
        pricePkr: 6400,
        priceWithGst: 7360,
        serves: 'Serves 3 to 4',
        seasonal: true,
        image: MENU_IMAGES.fish,
      },
    ],
  },
  {
    id: 'appetizers',
    title: 'Appetizers',
    subtitle: 'Hot and cold starters',
    image: MENU_IMAGES.appetizers,
    subcategories: [
      {
        id: 'hot-appetizers',
        title: 'Hot appetizers',
        items: [
          {
            id: 'mutton-yakhnee',
            name: 'Mutton Yakhnee',
            pricePkr: 300,
            priceWithGst: 345,
            description: 'Mutton broth',
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'asian-crispy-chicken',
            name: 'Asian Crispy Chicken with fries',
            pricePkr: 1300,
            priceWithGst: 1495,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'chicken-tosser-strips',
            name: 'Chicken Tosser Strips with fries',
            pricePkr: 1300,
            priceWithGst: 1495,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'cheetos-nuggets',
            name: 'Cheetos Nuggets with Cheetos fries',
            pricePkr: 1300,
            priceWithGst: 1495,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'chicken-honey-wings',
            name: 'Chicken Honey Wings with fries',
            pricePkr: 1100,
            priceWithGst: 1265,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'grill-wings',
            name: 'Grill Wings with fries and BBQ sauce',
            pricePkr: 1100,
            priceWithGst: 1265,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'pilly-pilly-fries',
            name: 'Pilly Pilly Fries',
            pricePkr: 600,
            priceWithGst: 690,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'plain-fries-mayo-garlic',
            name: 'Plain Fries with mayo garlic sauce',
            pricePkr: 500,
            priceWithGst: 575,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
        ],
      },
      {
        id: 'cold-appetizers',
        title: 'Cold appetizers',
        items: [
          {
            id: 'habibi-special-salad',
            name: 'Habibi Special Salad',
            pricePkr: 1200,
            priceWithGst: 1380,
            description: 'Chicken salad',
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'fattoush-salad',
            name: 'Fattoush Salad',
            pricePkr: 1300,
            priceWithGst: 1495,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'hummus',
            name: 'Hummus',
            pricePkr: 900,
            priceWithGst: 1035,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'hummus-with-laham',
            name: 'Hummus with Laham',
            pricePkr: 1500,
            priceWithGst: 1725,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'labneh',
            name: 'Labneh',
            pricePkr: 700,
            priceWithGst: 805,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'labneh-with-vegetable',
            name: 'Labneh with vegetable',
            pricePkr: 900,
            priceWithGst: 1035,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
          {
            id: 'fresh-salad',
            name: 'Fresh Salad',
            pricePkr: 400,
            priceWithGst: 460,
            noMeatListed: true,
            image: MENU_IMAGES.appetizers,
          },
        ],
      },
    ],
  },
  {
    id: 'breads',
    title: 'Breads, paratha and extras',
    image: MENU_IMAGES.breads,
    items: [
      {
        id: 'puri-paratha',
        name: 'Puri Paratha',
        pricePkr: 120,
        priceWithGst: 138,
        noMeatListed: true,
        image: MENU_IMAGES.breads,
      },
      {
        id: 'pita-bread',
        name: 'Pita Bread',
        pricePkr: 70,
        priceWithGst: 81,
        noMeatListed: true,
        image: MENU_IMAGES.breads,
      },
      {
        id: 'arabic-bread',
        name: 'Arabic Bread',
        pricePkr: 90,
        priceWithGst: 104,
        noMeatListed: true,
        image: MENU_IMAGES.breads,
      },
      {
        id: 'extra-rice',
        name: 'Extra Rice',
        pricePkr: 400,
        priceWithGst: 460,
        noMeatListed: true,
        image: MENU_IMAGES.breads,
      },
      {
        id: 'dynamite-sauce',
        name: 'Dynamite Sauce',
        pricePkr: 100,
        priceWithGst: 115,
        image: MENU_IMAGES.breads,
      },
      {
        id: 'habibi-masala',
        name: 'Habibi Masala',
        pricePkr: 300,
        priceWithGst: 345,
        image: MENU_IMAGES.breads,
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    image: MENU_IMAGES.dessert,
    items: [
      {
        id: 'cream-kunafa',
        name: 'Cream Kunafa',
        pricePkr: 1350,
        priceWithGst: 1553,
        noMeatListed: true,
        image: MENU_IMAGES.dessert,
      },
      {
        id: 'chocolate-kunafa',
        name: 'Chocolate Kunafa',
        pricePkr: 1350,
        priceWithGst: 1553,
        noMeatListed: true,
        image: MENU_IMAGES.dessert,
      },
      {
        id: 'pistachio-kunafa',
        name: 'Pistachio Kunafa',
        pricePkr: 2000,
        priceWithGst: 2300,
        noMeatListed: true,
        image: MENU_IMAGES.dessert,
      },
      {
        id: 'cream-caramel',
        name: 'Cream Caramel',
        pricePkr: 700,
        priceWithGst: 805,
        noMeatListed: true,
        image: MENU_IMAGES.dessert,
      },
      {
        id: 'basboosa',
        name: 'Basboosa',
        pricePkr: 700,
        priceWithGst: 805,
        noMeatListed: true,
        image: MENU_IMAGES.dessert,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    image: MENU_IMAGES.drinks,
    subcategories: [
      {
        id: 'hungry-special-drinks',
        title: 'Hungry special drinks',
        items: [
          {
            id: 'couple-time',
            name: 'Couple Time',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'sandria-mojito',
            name: 'Sandria Mojito',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'mint-lemonade',
            name: 'Mint Lemonade',
            pricePkr: 650,
            priceWithGst: 748,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'arabic-signature-drink',
            name: 'Arabic Signature Drink',
            pricePkr: 1200,
            priceWithGst: 1380,
            image: MENU_IMAGES.drinks,
          },
        ],
      },
      {
        id: 'mocktails',
        title: 'Mocktails',
        items: [
          {
            id: 'sparkling-berry-family-drinks',
            name: 'Sparkling Berry Family Drinks',
            pricePkr: 1700,
            priceWithGst: 1955,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'strawberry-electric',
            name: 'Strawberry Electric',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'mix-berry-chiller',
            name: 'Mix Berry Chiller',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'coconut-blast',
            name: 'Coconut Blast',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
        ],
      },
      {
        id: 'smoothies',
        title: 'Smoothies',
        items: [
          {
            id: 'kiwi-mint',
            name: 'Kiwi Mint',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'mango-kiwi',
            name: 'Mango Kiwi',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'strawberry-vanilla',
            name: 'Strawberry Vanilla',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
        ],
      },
      {
        id: 'mojitos',
        title: 'Mojitos',
        items: [
          {
            id: 'lychee-mojito',
            name: 'Lychee Mojito',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'green-apple',
            name: 'Green Apple',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'passion-fruit',
            name: 'Passion Fruit',
            pricePkr: 850,
            priceWithGst: 978,
            image: MENU_IMAGES.drinks,
          },
        ],
      },
      {
        id: 'water-and-soft-drinks',
        title: 'Water and soft drinks',
        items: [
          {
            id: 'murree-sparkletts-non-carb-330',
            name: 'Murree Sparkletts, non-carbonated, 330 ml',
            pricePkr: 140,
            priceWithGst: 161,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'murree-sparkletts-non-carb-750',
            name: 'Murree Sparkletts, non-carbonated, 750 ml',
            pricePkr: 250,
            priceWithGst: 288,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'murree-sparkletts-carb-330',
            name: 'Murree Sparkletts, carbonated, 330 ml',
            pricePkr: 180,
            priceWithGst: 207,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'cola-next',
            name: 'Cola Next',
            pricePkr: 190,
            priceWithGst: 219,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'fizzup',
            name: 'Fizzup',
            pricePkr: 190,
            priceWithGst: 219,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'fizzup-zero',
            name: 'Fizzup Zero',
            pricePkr: 190,
            priceWithGst: 219,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'cola-next-zero',
            name: 'Cola Next Zero',
            pricePkr: 190,
            priceWithGst: 219,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'pakola-lychee',
            name: 'Pakola Lychee',
            pricePkr: 190,
            priceWithGst: 219,
            image: MENU_IMAGES.drinks,
          },
          {
            id: 'pakola',
            name: 'Pakola',
            pricePkr: 190,
            priceWithGst: 219,
            image: MENU_IMAGES.drinks,
          },
        ],
      },
    ],
  },
];

export const VEGETARIAN_SECTION = {
  title: 'Vegetarian options on the Hungry Habibi menu',
  note: 'The menu is built around grilled meat and rice, and it does not mark vegetarian dishes. These items have no meat in their listed name. Ask about sauces and ingredients when you order.',
  mealForTwoTitle: 'A meat-free meal for two',
  mealForTwoText:
    'Hummus Rs. 900, Fattoush Salad Rs. 1,300, Labneh Rs. 700 and two Pita Breads at Rs. 70 each come to Rs. 3,040 before GST, about Rs. 3,496 with GST.',
  items: [
    {
      id: 'veg-pilly-pilly-fries',
      name: 'Pilly Pilly Fries',
      pricePkr: 600,
      priceWithGst: 690,
      sourceCategory: 'Hot appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-plain-fries',
      name: 'Plain Fries with mayo garlic sauce',
      pricePkr: 500,
      priceWithGst: 575,
      sourceCategory: 'Hot appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-fattoush-salad',
      name: 'Fattoush Salad',
      pricePkr: 1300,
      priceWithGst: 1495,
      sourceCategory: 'Cold appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-hummus',
      name: 'Hummus',
      pricePkr: 900,
      priceWithGst: 1035,
      sourceCategory: 'Cold appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-labneh',
      name: 'Labneh',
      pricePkr: 700,
      priceWithGst: 805,
      sourceCategory: 'Cold appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-labneh-vegetable',
      name: 'Labneh with vegetable',
      pricePkr: 900,
      priceWithGst: 1035,
      sourceCategory: 'Cold appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-fresh-salad',
      name: 'Fresh Salad',
      pricePkr: 400,
      priceWithGst: 460,
      sourceCategory: 'Cold appetizers',
      image: MENU_IMAGES.appetizers,
    },
    {
      id: 'veg-puri-paratha',
      name: 'Puri Paratha',
      pricePkr: 120,
      priceWithGst: 138,
      sourceCategory: 'Breads, paratha and extras',
      image: MENU_IMAGES.breads,
    },
    {
      id: 'veg-pita-bread',
      name: 'Pita Bread',
      pricePkr: 70,
      priceWithGst: 81,
      sourceCategory: 'Breads, paratha and extras',
      image: MENU_IMAGES.breads,
    },
    {
      id: 'veg-arabic-bread',
      name: 'Arabic Bread',
      pricePkr: 90,
      priceWithGst: 104,
      sourceCategory: 'Breads, paratha and extras',
      image: MENU_IMAGES.breads,
    },
    {
      id: 'veg-extra-rice',
      name: 'Extra Rice',
      pricePkr: 400,
      priceWithGst: 460,
      sourceCategory: 'Breads, paratha and extras',
      image: MENU_IMAGES.breads,
    },
    {
      id: 'veg-cream-kunafa',
      name: 'Cream Kunafa',
      pricePkr: 1350,
      priceWithGst: 1553,
      sourceCategory: 'Dessert',
      image: MENU_IMAGES.dessert,
    },
    {
      id: 'veg-chocolate-kunafa',
      name: 'Chocolate Kunafa',
      pricePkr: 1350,
      priceWithGst: 1553,
      sourceCategory: 'Dessert',
      image: MENU_IMAGES.dessert,
    },
    {
      id: 'veg-pistachio-kunafa',
      name: 'Pistachio Kunafa',
      pricePkr: 2000,
      priceWithGst: 2300,
      sourceCategory: 'Dessert',
      image: MENU_IMAGES.dessert,
    },
    {
      id: 'veg-cream-caramel',
      name: 'Cream Caramel',
      pricePkr: 700,
      priceWithGst: 805,
      sourceCategory: 'Dessert',
      image: MENU_IMAGES.dessert,
    },
    {
      id: 'veg-basboosa',
      name: 'Basboosa',
      pricePkr: 700,
      priceWithGst: 805,
      sourceCategory: 'Dessert',
      image: MENU_IMAGES.dessert,
    },
  ],
};

export const CONTACT_AND_BRANCHES = {
  heading: 'Hungry Habibi branches and contact details',
  sublabel: 'Official numbers printed on the menu',
  uan: '021 111 111 486',
  whatsappNumbers: '0310 1999906 and 0310 1999940',
  gstAndDeliveryNote:
    'The menu says 15% GST is added on all prices. Hungry Habibi delivers in major areas of Karachi.',
  karachiBranches: [
    'DHA',
    'SMCHS',
    'Bahadurabad',
    'Gulshan',
    'Malir Jinnah Avenue',
  ],
  otherCities: ['Lahore', 'Islamabad', 'Multan'],
  branchPriceNote:
    'The menu prints one price list and does not say whether prices differ by branch. Confirm with your branch when you order.',
};

export const MENU_TERMS_EXPLAINED: GlossaryTerm[] = [
  {
    term: 'Madbee',
    explanation:
      'Marinated meat roasted and served on rice. Here it comes as chicken or fish.',
  },
  {
    term: 'Mandi',
    explanation:
      'Meat served on fragrant rice, a dish that comes from Yemen and is popular across Saudi Arabia.',
  },
  {
    term: 'Madfoon',
    explanation:
      'Meat cooked slowly with rice. The word means buried in Arabic.',
  },
  {
    term: 'Faham',
    explanation:
      'Chicken grilled over charcoal. Faham means charcoal in Arabic.',
  },
  {
    term: 'Dajjaj Al Baladi',
    explanation:
      'Dajjaj is chicken in Arabic and baladi means local or country style.',
  },
  {
    term: 'Laham',
    explanation:
      'Meat in Arabic. Laham Kabab on this menu is a mutton kabab.',
  },
  {
    term: 'Mutton Yakhnee',
    explanation: 'A mutton broth, served as a hot starter.',
  },
  {
    term: 'Adana Kabab',
    explanation:
      'A minced meat kabab from the Turkish city of Adana. Hungry Habibi makes it with beef.',
  },
  {
    term: 'Pide',
    explanation:
      'A boat-shaped Turkish flatbread baked with a topping such as chicken or pepperoni.',
  },
  {
    term: 'Samak',
    explanation: 'Fish in Arabic. Samak Sultani is fish served with rice.',
  },
  {
    term: 'Labneh',
    explanation: 'Strained yogurt served as a dip or starter.',
  },
  {
    term: 'Kunafa and Basboosa',
    explanation:
      'Kunafa is a shredded pastry dessert, here with cream, chocolate or pistachio. Basboosa is a semolina cake.',
  },
];

export const ABOUT_HUNGRY_HABIBI = {
  title: 'About Hungry Habibi',
  body: 'Hungry Habibi started in 2023. According to the story printed on its menu, the idea came from a trip to Makkah, where the founder ate Arabian mixed grill, hummus, mutabal and fattoush, and found nothing like it back in Pakistan. It runs as a cloud kitchen with a small dine-in space. The restaurant says this keeps overheads low so more money goes into ingredients and chefs, which is how it aims to keep Arabian food affordable.',
};

export const HUNGRY_HABIBI_FAQS: FaqItem[] = [
  {
    question: 'How much does Hungry Habibi cost?',
    answer:
      'Platters run from Rs. 3,350 (Arabian Feast Platter for 2) to Rs. 12,990 (Istanbuli Platter for 4 to 5). Most grill plates are Rs. 1,500 to Rs. 1,700, half a chicken on rice is Rs. 2,150 to Rs. 2,200, and a single serving of mutton is Rs. 3,500. All before 15% GST.',
  },
  {
    question: 'Is GST included in the prices?',
    answer:
      'No. The menu says 15% GST is applied on all prices. Chicken Madbee (Half) at Rs. 2,150 comes to about Rs. 2,473 with GST.',
  },
  {
    question: 'Where does Hungry Habibi deliver?',
    answer:
      'The menu says it delivers in major areas of Karachi. It lists branches in DHA, SMCHS, Bahadurabad, Gulshan and Malir Jinnah Avenue, plus Lahore, Islamabad and Multan. Call or WhatsApp to confirm delivery to your street.',
  },
  {
    question: 'How do I order from Hungry Habibi?',
    answer:
      'Call the UAN 021 111 111 486 or message WhatsApp 0310 1999906 or 0310 1999940. These are the official numbers printed on the menu.',
  },
  {
    question: 'Which platter is cheapest per person?',
    answer:
      'The Arabian Feast Platter for 4 persons, at Rs. 6,300, works out to Rs. 1,575 per person before GST. The Arabian Feast Platter for 2 is Rs. 1,675 per person, and the Mandi Platter for 5 to 6 is Rs. 1,750 to Rs. 2,100 per person.',
  },
  {
    question: 'Is a full portion double the price of a half?',
    answer:
      'Yes. Chicken Madbee, Mandi and Faham are Rs. 2,150 for a half and Rs. 4,300 for a full. Dajjaj Al Baladi is Rs. 2,200 and Rs. 4,400. Mutton single and double servings follow the same rule at Rs. 3,500 and Rs. 7,000.',
  },
  {
    question: 'Does Hungry Habibi have vegetarian food?',
    answer:
      'Not a full range. The menu has meat-free items such as Hummus, Fattoush Salad, Labneh, Fresh Salad, fries, breads and desserts. Vegetarian dishes are not marked on the menu, so ask about sauces and ingredients.',
  },
  {
    question: 'Which items are seasonal?',
    answer:
      'Samak Sultani, Fish Madbee (single and double) and Full Grill Mushka are marked Seasonally Available. The Mandi Platter also includes Fish Madbee, so ask if fish is in stock before ordering it.',
  },
  {
    question: 'Are prices the same in every city?',
    answer:
      'The menu prints a single price list and does not say prices differ by branch. Confirm with your branch when you order.',
  },
  {
    question: 'Does the menu list calories?',
    answer:
      'No. The Hungry Habibi menu shows prices only, with no calorie counts.',
  },
];

export function formatPkr(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-US')}`;
}
