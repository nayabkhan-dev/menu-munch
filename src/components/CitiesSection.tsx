import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { CITIES_DATA, CityCardData } from '../data/homepageData';

interface CitiesSectionProps {
  onSelectCity: (city: CityCardData) => void;
}

export default function CitiesSection({ onSelectCity }: CitiesSectionProps) {
  const [failedImages, setFailedImages] = useState<string[]>([]);

  return (
    <section
      id="cities"
      aria-labelledby="heading-cities"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 scroll-mt-20"
    >
      <div className="mb-6">
        <h2
          id="heading-cities"
          className="text-2xl sm:text-3xl font-bold text-[#173C2B] tracking-tight"
        >
          Menus by city
        </h2>
      </div>

      {/* 8 Pakistani Cities with Distinct Cultural & Landmark Photography */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {CITIES_DATA.map((city) => {
          const hasImgError = failedImages.includes(city.id);
          return (
            <button
              key={city.id}
              type="button"
              onClick={() => onSelectCity(city)}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#173C2B] text-left border border-[#EAE7E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF641E] cursor-pointer shadow-[0_2px_6px_rgba(23,60,43,0.06)]"
            >
              {!hasImgError ? (
                <img
                  src={city.image}
                  alt={city.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedImages((prev) => [...prev, city.id])
                  }
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#173C2B]/80 text-white/40">
                  <MapPin className="w-8 h-8" aria-hidden="true" />
                </div>
              )}

              {/* Contrast Scrim for Crisp White Text */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {city.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#FAF8F3]/90 group-hover:text-[#FF641E] transition-colors">
                    <span>Explore menus</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
