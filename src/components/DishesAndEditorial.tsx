import { useState } from 'react';
import {
  ArrowRight,
  Utensils,
  ChefHat,
  ReceiptText,
  Truck,
  Tag,
} from 'lucide-react';
import {
  DishCardData,
  GUIDES_DATA,
  GuideCardData,
  POPULAR_DISHES,
  RECIPES_DATA,
  RecipeCardData,
} from '../data/homepageData';

interface DishesAndEditorialProps {
  onSelectDish: (dish: DishCardData) => void;
  onSelectRecipe: (recipe: RecipeCardData) => void;
  onSelectGuide: (guide: GuideCardData) => void;
}

function EditorialIllustration({
  type,
}: {
  type: 'zinger' | 'prices' | 'delivery' | 'deals';
}) {
  if (type === 'zinger') {
    return (
      <div className="w-full h-full bg-[#FAF8F3] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-[#173C2B] text-[#FF641E] flex items-center justify-center mb-2 shadow-sm">
          <ChefHat className="w-7 h-7" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold text-[#173C2B]">
          Home kitchen recipe
        </span>
      </div>
    );
  }

  if (type === 'prices') {
    return (
      <div className="w-full h-full bg-[#173C2B] flex flex-col items-center justify-center p-4 text-white">
        <div className="w-12 h-12 rounded-xl bg-white/12 text-[#FF641E] flex items-center justify-center mb-2">
          <ReceiptText className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold text-[#FAF8F3]">
          PKR Price Guide
        </span>
      </div>
    );
  }

  if (type === 'delivery') {
    return (
      <div className="w-full h-full bg-[#FAF8F3] flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 rounded-xl bg-[#173C2B] text-white flex items-center justify-center mb-2">
          <Truck className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold text-[#173C2B]">
          Delivery Fee Notes
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#252525] flex flex-col items-center justify-center p-4 text-white">
      <div className="w-12 h-12 rounded-xl bg-[#FF641E] text-white flex items-center justify-center mb-2">
        <Tag className="w-6 h-6" aria-hidden="true" />
      </div>
      <span className="text-xs font-semibold text-[#FAF8F3]">
        Weekly Menu Deals
      </span>
    </div>
  );
}

export default function DishesAndEditorial({
  onSelectDish,
  onSelectRecipe,
  onSelectGuide,
}: DishesAndEditorialProps) {
  const [failedImages, setFailedImages] = useState<string[]>([]);

  return (
    <div className="space-y-12 py-4">
      {/* Find a Dish Section (10 Distinct Dishes) */}
      <section
        id="dishes"
        aria-labelledby="heading-find-dish"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 scroll-mt-20"
      >
        <div className="mb-6">
          <h2
            id="heading-find-dish"
            className="text-2xl sm:text-3xl font-bold text-[#173C2B] tracking-tight"
          >
            Find a dish
          </h2>
          <p className="text-sm text-[#747474] mt-1">
            Compare the same dish across restaurants and see which one costs
            less.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {POPULAR_DISHES.map((dish) => {
            const hasError = failedImages.includes(dish.id);
            return (
              <article
                key={dish.id}
                className="group bg-white border border-[#EAE7E0] rounded-2xl overflow-hidden flex flex-col hover:border-[#173C2B]/40 hover:-translate-y-0.5 transition-all duration-150 shadow-[0_1px_3px_rgba(23,60,43,0.04)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F3] shrink-0">
                  {!hasError ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => [...prev, dish.id])
                      }
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#173C2B]/40">
                      <Utensils className="w-6 h-6" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#252525] leading-snug">
                    {dish.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => onSelectDish(dish)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#173C2B] group-hover:text-[#FF641E] transition-colors cursor-pointer"
                  >
                    <span>Explore dish</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Recipes & Guides Paired Editorial Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recipes (4 items) */}
          <div id="recipes" className="lg:col-span-6 scroll-mt-20">
            <h2 className="text-2xl font-bold text-[#173C2B] tracking-tight mb-5">
              Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECIPES_DATA.map((recipe) => {
                const hasError = failedImages.includes(recipe.id);
                return (
                  <article
                    key={recipe.id}
                    className="group bg-white border border-[#EAE7E0] rounded-2xl overflow-hidden flex flex-col hover:border-[#173C2B]/40 transition-colors shadow-[0_1px_3px_rgba(23,60,43,0.04)]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F3] shrink-0">
                      {recipe.image && !hasError ? (
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => [...prev, recipe.id])
                          }
                          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      ) : (
                        <EditorialIllustration
                          type={recipe.illustrationType ?? 'zinger'}
                        />
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between gap-2.5">
                      <div>
                        <span className="text-xs font-semibold text-[#FF641E]">
                          {recipe.label}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#252525] mt-0.5 leading-snug">
                          {recipe.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectRecipe(recipe)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C2B] group-hover:text-[#FF641E] transition-colors cursor-pointer"
                      >
                        <span>Read Recipe</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Guides (4 items) */}
          <div id="guides" className="lg:col-span-6 scroll-mt-20">
            <h2 className="text-2xl font-bold text-[#173C2B] tracking-tight mb-5">
              Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GUIDES_DATA.map((guide) => {
                const hasError = failedImages.includes(guide.id);
                return (
                  <article
                    key={guide.id}
                    className="group bg-white border border-[#EAE7E0] rounded-2xl overflow-hidden flex flex-col hover:border-[#173C2B]/40 transition-colors shadow-[0_1px_3px_rgba(23,60,43,0.04)]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F3] shrink-0">
                      {guide.image && !hasError ? (
                        <img
                          src={guide.image}
                          alt={guide.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => [...prev, guide.id])
                          }
                          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      ) : (
                        <EditorialIllustration
                          type={guide.illustrationType ?? 'prices'}
                        />
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between gap-2.5">
                      <div>
                        <span className="text-xs font-semibold text-[#FF641E]">
                          {guide.label}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#252525] mt-0.5 leading-snug">
                          {guide.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectGuide(guide)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C2B] group-hover:text-[#FF641E] transition-colors cursor-pointer"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
