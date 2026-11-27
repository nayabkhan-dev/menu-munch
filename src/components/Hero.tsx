import { useState } from 'react';
import { ArrowDown, Utensils } from 'lucide-react';
import { MENU_IMAGES, RESTAURANT_INFO } from '../data/hungryHabibiMenu';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative bg-[#153D2B] text-white overflow-hidden">
      {/* Background Photography with Deep Forest Green & Charcoal Scrim */}
      <div className="absolute inset-0">
        {!imgError ? (
          <img
            src={MENU_IMAGES.hero}
            alt="Arabian feast spread with chicken madbee, saffron mandi rice, Turkish kababs, hummus, and Arabic bread"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#153D2B] to-[#242824] flex items-center justify-center opacity-40">
            <Utensils className="w-16 h-16 text-[#D99A32]" />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(95deg, rgba(21, 61, 43, 0.94) 0%, rgba(21, 61, 43, 0.85) 52%, rgba(36, 40, 36, 0.62) 100%)',
          }}
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#FAF7F0]/80 mb-4"
        >
          <a
            href="https://menumunch.pk/"
            className="hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Home
          </a>
          <span aria-hidden="true">/</span>
          <a
            href="https://menumunch.pk/#menus"
            className="hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            Restaurants
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-[#D99A32] font-medium">{RESTAURANT_INFO.name}</span>
        </nav>

        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#D99A32] mb-2">
            {RESTAURANT_INFO.pageTitle}
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-4"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            {RESTAURANT_INFO.name}
          </h1>

          <p className="text-sm sm:text-base text-[#FAF7F0]/90 leading-relaxed mb-6 max-w-xl">
            {RESTAURANT_INFO.leadDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D99A32] text-[#242824] font-semibold text-sm hover:bg-[#e5a843] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-5 text-xs text-[#FAF7F0]/75">
            {RESTAURANT_INFO.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
