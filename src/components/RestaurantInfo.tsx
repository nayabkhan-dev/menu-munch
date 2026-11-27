import {
  UtensilsCrossed,
  Truck,
  MapPin,
  Calendar,
  Receipt,
  Phone,
  Users,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/hungryHabibiMenu';

const FACT_ICONS = [
  UtensilsCrossed,
  Truck,
  MapPin,
  Calendar,
  Receipt,
  Phone,
];

export default function RestaurantInfo() {
  return (
    <section
      aria-label="Restaurant information and price summary"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 space-y-6"
    >
      {/* Compact Restaurant Details Grid */}
      <div className="bg-white border border-[#EAE3D7] rounded-xl p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {RESTAURANT_INFO.facts.map((fact, idx) => {
            const Icon = FACT_ICONS[idx] ?? UtensilsCrossed;
            return (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F0] border border-[#EAE3D7] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#153D2B]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-[#153D2B] mb-0.5">
                    {fact.label}
                  </div>
                  <div className="text-xs sm:text-sm text-[#242824]/85 leading-snug">
                    {fact.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prices at a Glance & Group Size Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Prices at a Glance */}
        <div className="lg:col-span-5 bg-white border border-[#EAE3D7] rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h2
              className="text-lg sm:text-xl font-semibold text-[#153D2B] mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hungry Habibi prices at a glance
            </h2>
            <dl className="divide-y divide-[#EAE3D7]">
              {RESTAURANT_INFO.pricesAtAGlance.map((item) => (
                <div
                  key={item.label}
                  className="py-2.5 flex items-baseline justify-between gap-4 text-sm"
                >
                  <dt className="text-[#242824]/80">{item.label}</dt>
                  <dd className="font-semibold text-[#153D2B] tabular-nums whitespace-nowrap shrink-0">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-3 pt-3 border-t border-[#EAE3D7] text-xs text-[#242824]/70 leading-relaxed">
            {RESTAURANT_INFO.pricesAtAGlanceNote}
          </p>
        </div>

        {/* What to order for your group size */}
        <div className="lg:col-span-7 bg-white border border-[#EAE3D7] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-[#D99A32]" aria-hidden="true" />
            <h2
              className="text-lg sm:text-xl font-semibold text-[#153D2B]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What to order for your group size
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {RESTAURANT_INFO.groupSizeGuide.map((guide) => (
              <div
                key={guide.group}
                className="bg-[#FAF7F0] border border-[#EAE3D7] rounded-lg p-3.5"
              >
                <div className="text-xs font-semibold text-[#153D2B] mb-1">
                  {guide.group}
                </div>
                <p className="text-xs text-[#242824]/85 leading-relaxed">
                  {guide.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
