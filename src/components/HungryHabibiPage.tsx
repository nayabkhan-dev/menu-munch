import { useMemo, useState } from 'react';
import { Leaf } from 'lucide-react';
import Hero from './Hero';
import RestaurantInfo from './RestaurantInfo';
import CategoryNav from './CategoryNav';
import PlatterSection from './PlatterSection';
import MenuCard from './MenuCard';
import InfoSections from './InfoSections';
import {
  MENU_CATEGORIES,
  PLATTERS,
  VEGETARIAN_SECTION,
} from '../data/hungryHabibiMenu';

export default function HungryHabibiPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPlatters = useMemo(() => {
    if (!normalizedQuery) return PLATTERS;
    return PLATTERS.filter(
      (p) =>
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery) ||
        p.servesText.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const filteredCategories = useMemo(() => {
    return MENU_CATEGORIES.map((category) => {
      if (!normalizedQuery) return category;

      if (category.items) {
        const matchedItems = category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            (item.description &&
              item.description.toLowerCase().includes(normalizedQuery))
        );
        return { ...category, items: matchedItems };
      }

      if (category.subcategories) {
        const matchedSubs = category.subcategories
          .map((sub) => ({
            ...sub,
            items: sub.items.filter(
              (item) =>
                item.name.toLowerCase().includes(normalizedQuery) ||
                sub.title.toLowerCase().includes(normalizedQuery) ||
                (item.description &&
                  item.description.toLowerCase().includes(normalizedQuery))
            ),
          }))
          .filter((sub) => sub.items.length > 0);
        return { ...category, subcategories: matchedSubs };
      }

      return category;
    });
  }, [normalizedQuery]);

  const filteredVegetarianItems = useMemo(() => {
    if (!normalizedQuery) return VEGETARIAN_SECTION.items;
    return VEGETARIAN_SECTION.items.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.sourceCategory.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const handleSelectCategory = (id: string) => {
    setActiveCategory(id);
    if (id === 'all') {
      const el = document.getElementById('menu-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const target = document.getElementById(`cat-${id}`);
    if (target) {
      const yOffset = -68;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const visibleCategoryCheck = (id: string) =>
    activeCategory === 'all' || activeCategory === id;

  const totalVisibleMatches = useMemo(() => {
    let count = visibleCategoryCheck('platters') ? filteredPlatters.length : 0;
    for (const cat of filteredCategories) {
      if (!visibleCategoryCheck(cat.id)) continue;
      if (cat.items) count += cat.items.length;
      if (cat.subcategories) {
        for (const sub of cat.subcategories) count += sub.items.length;
      }
    }
    if (visibleCategoryCheck('vegetarian')) {
      count += filteredVegetarianItems.length;
    }
    return count;
  }, [
    activeCategory,
    filteredPlatters,
    filteredCategories,
    filteredVegetarianItems,
  ]);

  return (
    <div>
      <Hero />

      <RestaurantInfo />

      {/* Menu Directory */}
      <div id="menu-section" className="scroll-mt-4">
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 space-y-12">
          {/* Menu Directory Header & GST Legend */}
          <div className="bg-white border border-[#EAE7E0] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#173C2B]">
                Full Hungry Habibi menu with prices
              </h2>
              <p className="text-xs sm:text-sm text-[#252525]/75 mt-1 leading-relaxed">
                Rs. is the printed price. The smaller line under it adds 15% GST,
                rounded to the nearest rupee. A ▣ means no meat is listed in the
                item. Chef special and Seasonal tags are as printed on the menu.
              </p>
            </div>
            {activeCategory !== 'all' && (
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className="self-start sm:self-center px-3 py-1.5 text-xs font-semibold text-[#173C2B] bg-[#FAF8F3] border border-[#EAE7E0] rounded-lg hover:bg-[#173C2B] hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Show all categories
              </button>
            )}
          </div>

          {/* Empty Search State */}
          {totalVisibleMatches === 0 && (
            <div className="bg-white border border-[#EAE7E0] rounded-xl p-8 text-center space-y-3">
              <p className="text-sm font-medium text-[#252525]">
                No menu items matched &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#173C2B] rounded-lg hover:bg-[#173C2B]/90 transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* 1. Platters */}
          {visibleCategoryCheck('platters') && filteredPlatters.length > 0 && (
            <PlatterSection
              platters={filteredPlatters}
              showComparisonChart={!normalizedQuery}
            />
          )}

          {/* 2–10. Main Menu Categories */}
          {filteredCategories.map((category) => {
            if (!visibleCategoryCheck(category.id)) return null;

            const itemCount = category.items
              ? category.items.length
              : (category.subcategories?.reduce(
                  (acc, sub) => acc + sub.items.length,
                  0
                ) ?? 0);

            if (itemCount === 0) return null;

            return (
              <section
                key={category.id}
                id={`cat-${category.id}`}
                aria-labelledby={`heading-${category.id}`}
                className="space-y-5 scroll-mt-20"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 border-b border-[#EAE7E0] pb-3">
                  <div>
                    <h2
                      id={`heading-${category.id}`}
                      className="text-2xl sm:text-3xl font-bold text-[#173C2B]"
                    >
                      {category.title}
                    </h2>
                    {category.subtitle && (
                      <p className="text-xs sm:text-sm text-[#FF641E] font-medium mt-0.5">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-medium text-[#747474] tabular-nums">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {category.items && (
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {category.items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                )}

                {category.subcategories && (
                  <div className="space-y-8">
                    {category.subcategories.map((sub) => (
                      <div key={sub.id} className="space-y-3.5">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-[#173C2B]">
                            {sub.title}
                          </h3>
                          <span className="text-xs text-[#747474] tabular-nums">
                            {sub.items.length}{' '}
                            {sub.items.length === 1 ? 'item' : 'items'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                          {sub.items.map((item) => (
                            <MenuCard key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {category.footerNote && (
                  <p className="text-xs sm:text-sm text-[#252525]/75 bg-white border border-[#EAE7E0] rounded-lg px-4 py-3">
                    {category.footerNote}
                  </p>
                )}
              </section>
            );
          })}

          {/* 11. Vegetarian Options Section */}
          {visibleCategoryCheck('vegetarian') &&
            filteredVegetarianItems.length > 0 && (
              <section
                id="cat-vegetarian"
                aria-labelledby="heading-vegetarian"
                className="space-y-5 scroll-mt-20"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EAE7E0] pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Leaf
                        className="w-5 h-5 text-[#173C2B]"
                        aria-hidden="true"
                      />
                      <h2
                        id="heading-vegetarian"
                        className="text-2xl sm:text-3xl font-bold text-[#173C2B]"
                      >
                        {VEGETARIAN_SECTION.title}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-[#747474] mt-1.5 max-w-3xl leading-relaxed">
                      {VEGETARIAN_SECTION.note}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#747474] tabular-nums shrink-0">
                    {filteredVegetarianItems.length}{' '}
                    {filteredVegetarianItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {filteredVegetarianItems.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={{
                        id: item.id,
                        name: item.name,
                        pricePkr: item.pricePkr,
                        priceWithGst: item.priceWithGst,
                        noMeatListed: true,
                        image: item.image,
                      }}
                      categoryName={item.sourceCategory}
                    />
                  ))}
                </div>

                <div className="bg-white border border-[#EAE7E0] rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-[#173C2B] mb-1">
                    {VEGETARIAN_SECTION.mealForTwoTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
                    {VEGETARIAN_SECTION.mealForTwoText}
                  </p>
                </div>
              </section>
            )}
        </div>
      </div>

      <InfoSections />
    </div>
  );
}
