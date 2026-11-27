import {
  LayoutGrid,
  UtensilsCrossed,
  Drumstick,
  Beef,
  Flame,
  Compass,
  Fish,
  Soup,
  Wheat,
  CakeSlice,
  CupSoda,
  Leaf,
  Search,
  X,
} from 'lucide-react';

export interface CategoryNavItem {
  id: string;
  label: string;
}

export const CATEGORY_NAV_ITEMS: CategoryNavItem[] = [
  { id: 'all', label: 'All Menu' },
  { id: 'platters', label: 'Platters' },
  { id: 'chicken', label: 'Chicken' },
  { id: 'mutton', label: 'Mutton' },
  { id: 'grill', label: 'Grill' },
  { id: 'istanbul', label: 'Street of Istanbul' },
  { id: 'fish', label: 'Fish' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'breads', label: 'Breads & Extras' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'vegetarian', label: 'Vegetarian' },
];

const CATEGORY_ICONS: Record<string, typeof LayoutGrid> = {
  all: LayoutGrid,
  platters: UtensilsCrossed,
  chicken: Drumstick,
  mutton: Beef,
  grill: Flame,
  istanbul: Compass,
  fish: Fish,
  appetizers: Soup,
  breads: Wheat,
  dessert: CakeSlice,
  drinks: CupSoda,
  vegetarian: Leaf,
};

interface CategoryNavProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function CategoryNav({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: CategoryNavProps) {
  return (
    <div className="sticky top-0 z-30 bg-[#FAF7F0]/95 backdrop-blur-sm border-y border-[#EAE3D7] py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5 md:gap-4">
        {/* Category Tabs */}
        <div
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1"
          role="tablist"
          aria-label="Menu categories"
        >
          {CATEGORY_NAV_ITEMS.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] ?? LayoutGrid;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153D2B] ${
                  isActive
                    ? 'bg-[#153D2B] text-white border-[#153D2B]'
                    : 'bg-white text-[#242824] border-[#EAE3D7] hover:border-[#153D2B]/40 hover:text-[#153D2B]'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? 'text-[#D99A32]' : 'text-[#153D2B]/70'
                  }`}
                  aria-hidden="true"
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Compact Menu Search Input */}
        <div className="relative w-36 sm:w-48 md:w-56 shrink-0">
          <Search
            className="w-3.5 h-3.5 text-[#242824]/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Find a dish..."
            aria-label="Search menu items"
            className="w-full pl-8 pr-8 py-1.5 text-xs bg-white border border-[#EAE3D7] rounded-lg text-[#242824] placeholder:text-[#242824]/45 focus:outline-none focus:border-[#153D2B]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#242824]/50 hover:text-[#242824] p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
