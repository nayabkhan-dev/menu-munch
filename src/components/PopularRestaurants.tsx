import { useState } from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import {
  POPULAR_RESTAURANTS,
  RestaurantCardData,
} from '../data/homepageData';

interface PopularRestaurantsProps {
  onSelectRestaurant: (restaurant: RestaurantCardData) => void;
  onOpenHungryHabibi: () => void;
}

export default function PopularRestaurants({
  onSelectRestaurant,
  onOpenHungryHabibi,
}: PopularRestaurantsProps) {
  const [failedImages, setFailedImages] = useState<string[]>([]);

  return (
    <section
      id="menus"
      aria-labelledby="heading-popular-restaurants"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 scroll-mt-20"
    >
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <div>
          <h2
            id="heading-popular-restaurants"
            className="text-2xl sm:text-3xl font-bold text-[#173C2B] tracking-tight"
          >
            Popular restaurant menus
          </h2>
        </div>

        <button
          type="button"
          onClick={onOpenHungryHabibi}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#173C2B] hover:text-[#FF641E] transition-colors cursor-pointer"
        >
          <span>All restaurants</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* 12 Exact Popular Restaurant Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {POPULAR_RESTAURANTS.map((rest) => {
          const hasImgError = failedImages.includes(rest.id);
          return (
            <article
              key={rest.id}
              className="group bg-white border border-[#EAE7E0] rounded-2xl overflow-hidden flex flex-col hover:border-[#173C2B]/40 hover:-translate-y-0.5 transition-all duration-150 shadow-[0_1px_3px_rgba(23,60,43,0.04)]"
            >
              {/* Restaurant Cuisine Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F3] shrink-0">
                {!hasImgError ? (
                  <img
                    src={rest.image}
                    alt={`${rest.name} — ${rest.cuisine}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => [...prev, rest.id])
                    }
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#173C2B]/40">
                    <Utensils className="w-6 h-6" aria-hidden="true" />
                  </div>
                )}

                {/* Initial Monogram Badge */}
                <div
                  className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/95 border border-[#EAE7E0] flex items-center justify-center text-sm font-bold text-[#173C2B] shadow-sm"
                  aria-hidden="true"
                >
                  {rest.initial}
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#252525] leading-snug">
                    {rest.name}
                  </h3>
                  <p className="text-xs text-[#747474] mt-0.5">{rest.cuisine}</p>
                </div>

                <div className="pt-2.5 border-t border-[#EAE7E0]">
                  <button
                    type="button"
                    onClick={() => onSelectRestaurant(rest)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C2B] group-hover:text-[#FF641E] transition-colors cursor-pointer"
                  >
                    <span>View Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Direct Link to Live Verified Hungry Habibi Menu Page */}
      <div className="mt-6 bg-white border border-[#EAE7E0] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#173C2B] text-white font-bold text-sm flex items-center justify-center shrink-0">
            HH
          </div>
          <div>
            <div className="text-sm font-bold text-[#173C2B]">
              Hungry Habibi — Full verified menu live
            </div>
            <p className="text-xs text-[#747474] mt-0.5">
              Arabian grill, madbee, mandi, Turkish pide, desserts and drinks
              with PKR prices and 15% GST.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onOpenHungryHabibi}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#173C2B] hover:bg-[#1e4d38] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>View Hungry Habibi Menu</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
