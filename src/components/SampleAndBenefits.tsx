import { useState } from 'react';
import {
  BookOpen,
  Flame,
  Scale,
  ArrowRight,
  Utensils,
} from 'lucide-react';
import { SAMPLE_MENU_ITEMS, WEBSITE_BENEFITS } from '../data/homepageData';

interface SampleAndBenefitsProps {
  onOpenHungryHabibi: () => void;
}

const BENEFIT_ICONS = [BookOpen, Flame, Scale];

export default function SampleAndBenefits({
  onOpenHungryHabibi,
}: SampleAndBenefitsProps) {
  const [failedThumbIds, setFailedThumbIds] = useState<string[]>([]);

  return (
    <section
      aria-label="Sample menu page and platform benefits"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Sample Menu Page Preview */}
        <div className="lg:col-span-7 bg-white border border-[#EAE7E0] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(23,60,43,0.04)]">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#173C2B]">
                Sample menu page
              </h2>
              <button
                type="button"
                onClick={onOpenHungryHabibi}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF641E] hover:text-[#173C2B] transition-colors cursor-pointer"
              >
                <span>Open live menu: Hungry Habibi</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Inner Menu Table Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-[#FAF8F3] border border-[#EAE7E0] rounded-xl text-xs font-medium text-[#747474] mb-2">
              <span className="font-semibold text-[#173C2B]">Menu</span>
              <div className="flex items-center gap-3">
                <span className="text-[#173C2B]">▣ Vegetarian</span>
                <span className="text-[#FF641E]">◆ Non-veg</span>
              </div>
              <span>kcal and price</span>
            </div>

            {/* 5 Original Sample Rows */}
            <ul className="divide-y divide-[#EAE7E0]">
              {SAMPLE_MENU_ITEMS.map((item) => {
                const isVeg = item.diet === 'Vegetarian';
                const hasError = failedThumbIds.includes(item.id);
                return (
                  <li
                    key={item.id}
                    className="py-2.5 px-1 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-lg overflow-hidden bg-[#FAF8F3] border border-[#EAE7E0] shrink-0">
                        {!hasError ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() =>
                              setFailedThumbIds((prev) => [...prev, item.id])
                            }
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#173C2B]/40">
                            <Utensils className="w-4 h-4" aria-hidden="true" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#252525] truncate">
                          {item.name}
                        </div>
                        <div
                          className={`text-xs font-medium ${
                            isVeg ? 'text-[#173C2B]' : 'text-[#FF641E]'
                          }`}
                        >
                          {isVeg ? '▣ Vegetarian' : '◆ Non-veg'}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 tabular-nums">
                      <div className="text-xs text-[#747474]">
                        {item.kcalText}
                      </div>
                      <div className="text-sm font-bold text-[#173C2B]">
                        {item.priceText}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-3 pt-3 border-t border-[#EAE7E0] text-xs text-[#747474]">
            Preview format showing menu layout. Verified PKR prices and 15% GST
            calculations appear on live restaurant pages such as{' '}
            <button
              type="button"
              onClick={onOpenHungryHabibi}
              className="font-semibold text-[#173C2B] underline underline-offset-2 hover:text-[#FF641E] cursor-pointer"
            >
              Hungry Habibi
            </button>
            .
          </p>
        </div>

        {/* Three Compact Website Benefit Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {WEBSITE_BENEFITS.map((benefit, idx) => {
            const Icon = BENEFIT_ICONS[idx] ?? BookOpen;
            return (
              <div
                key={benefit.id}
                className="flex-1 bg-white border border-[#EAE7E0] rounded-2xl p-5 flex items-start gap-4 shadow-[0_1px_3px_rgba(23,60,43,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#EAE7E0] flex items-center justify-center shrink-0">
                  <Icon
                    className="w-5 h-5 text-[#FF641E]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#173C2B] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#747474] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
