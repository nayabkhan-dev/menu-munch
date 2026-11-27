import { useState } from 'react';
import { Utensils, Users } from 'lucide-react';
import {
  formatPkr,
  PLATTERS,
  PLATTER_COMPARISON_BARS,
  PlatterItem,
} from '../data/hungryHabibiMenu';

interface PlatterSectionProps {
  platters: PlatterItem[];
  showComparisonChart: boolean;
}

function PlatterCard({ platter }: { platter: PlatterItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="bg-white border border-[#EAE3D7] rounded-xl overflow-hidden flex flex-col hover:border-[#153D2B]/35 transition-colors duration-150 shadow-[0_1px_2px_rgba(21,61,43,0.03)]">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF7F0] shrink-0">
        {!imgError ? (
          <img
            src={platter.image}
            alt={`${platter.name} — ${platter.servesText}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#FAF7F0] text-[#153D2B]/40 p-4">
            <Utensils className="w-7 h-7 mb-1.5" aria-hidden="true" />
            <span className="text-xs font-medium text-[#242824]/60">
              {platter.name}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Clean Unboxed Serving Kicker */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#B57B1B] mb-1">
            <Users className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{platter.servesText}</span>
            <span aria-hidden="true" className="text-[#242824]/30">
              ·
            </span>
            <span className="text-[#242824]/70 tabular-nums">
              {platter.perPersonText}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-[#153D2B] leading-snug">
            {platter.name}
          </h3>

          <p className="mt-2 text-xs sm:text-[13px] text-[#242824]/80 leading-relaxed">
            {platter.description}
          </p>

          {platter.seasonalNote && (
            <p className="mt-2 text-xs font-medium text-[#B57B1B] leading-snug">
              {platter.seasonalNote}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-[#EAE3D7] flex items-baseline justify-between gap-2">
          <span className="text-base sm:text-lg font-bold text-[#153D2B] tabular-nums">
            {formatPkr(platter.pricePkr)}
          </span>
          <span className="text-xs text-[#242824]/65 tabular-nums">
            {formatPkr(platter.priceWithGst)} with GST
          </span>
        </div>
      </div>
    </article>
  );
}

export default function PlatterSection({
  platters,
  showComparisonChart,
}: PlatterSectionProps) {
  const maxAxis = 4000;

  return (
    <section id="cat-platters" aria-labelledby="heading-platters" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EAE3D7] pb-3">
        <div>
          <h2
            id="heading-platters"
            className="text-2xl sm:text-3xl font-semibold text-[#153D2B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Hungry Habibi platters
          </h2>
          <p className="text-xs sm:text-sm text-[#242824]/70 mt-1">
            Seven platters, listed by group size.
          </p>
        </div>
        <span className="text-xs font-medium text-[#242824]/60 tabular-nums">
          {platters.length} {platters.length === 1 ? 'platter' : 'platters'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {platters.map((platter) => (
          <PlatterCard key={platter.id} platter={platter} />
        ))}
      </div>

      {/* Original Per-Person Platter Comparison Chart */}
      {showComparisonChart && (
        <div className="bg-white border border-[#EAE3D7] rounded-xl p-5 sm:p-6">
          <div className="mb-4">
            <h3
              className="text-lg font-semibold text-[#153D2B]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Platter price per person, before GST
            </h3>
            <p className="text-xs sm:text-sm text-[#242824]/75 mt-1 leading-relaxed">
              Seven platters, listed by group size. The price per person is the
              platter price divided by the number of people the menu says it
              serves. Shorter bar means a lower price per person. A range shows
              the lowest and highest price when the platter serves a range of
              people. Gridlines are Rs. 1,000 apart. Portion weights are not
              printed on the menu.
            </p>
          </div>

          <div className="space-y-3">
            {PLATTER_COMPARISON_BARS.map((bar) => {
              const minPct = (bar.min / maxAxis) * 100;
              const maxPct = (bar.max / maxAxis) * 100;
              const isRange = bar.max > bar.min;

              return (
                <div
                  key={bar.label}
                  className="grid grid-cols-1 sm:grid-cols-12 items-center gap-1.5 sm:gap-4"
                >
                  <div className="sm:col-span-5 text-xs font-medium text-[#242824]">
                    {bar.label}
                  </div>
                  <div className="sm:col-span-5 relative h-5 bg-[#FAF7F0] rounded border border-[#EAE3D7]/80 overflow-hidden">
                    {/* Rs. 1,000 Gridlines */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-[25%] w-px bg-[#EAE3D7]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-[50%] w-px bg-[#EAE3D7]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-[75%] w-px bg-[#EAE3D7]"
                    />

                    {/* Base bar up to min */}
                    <div
                      className="absolute inset-y-0 left-0 bg-[#153D2B]"
                      style={{ width: `${minPct}%` }}
                    />
                    {/* Range extension up to max */}
                    {isRange && (
                      <div
                        className="absolute inset-y-0 bg-[#D99A32]"
                        style={{
                          left: `${minPct}%`,
                          width: `${maxPct - minPct}%`,
                        }}
                      />
                    )}
                  </div>
                  <div className="sm:col-span-2 text-xs font-semibold text-[#153D2B] tabular-nums sm:text-right">
                    {bar.valueText}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 hidden sm:grid grid-cols-12 text-[11px] text-[#242824]/50 tabular-nums">
            <div className="col-span-5" />
            <div className="col-span-5 flex justify-between">
              <span>Rs. 0</span>
              <span>Rs. 1,000</span>
              <span>Rs. 2,000</span>
              <span>Rs. 3,000</span>
              <span>Rs. 4,000</span>
            </div>
            <div className="col-span-2" />
          </div>
        </div>
      )}
    </section>
  );
}
