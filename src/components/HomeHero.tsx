import { useState } from 'react';
import { Search, MapPin, ArrowRight, X, Utensils } from 'lucide-react';
import {
  CITIES_LIST,
  HERO_IMAGE,
  POPULAR_SHORTCUTS,
} from '../data/homepageData';

export interface SearchMatchItem {
  id: string;
  title: string;
  subtitle: string;
  kind: 'Verified Menu' | 'Restaurant' | 'Dish' | 'City' | 'Recipe' | 'Guide';
  priceText?: string;
  gstText?: string;
  actionType: 'hungry-habibi' | 'scroll' | 'modal';
  targetId?: string;
}

interface HomeHeroProps {
  searchQuery: string;
  selectedCity: string;
  onSearchQueryChange: (val: string) => void;
  onCityChange: (val: string) => void;
  onShortcutClick: (term: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  searchResults: SearchMatchItem[];
  hasSearched: boolean;
  onClearSearch: () => void;
  onResultAction: (item: SearchMatchItem) => void;
}

export default function HomeHero({
  searchQuery,
  selectedCity,
  onSearchQueryChange,
  onCityChange,
  onShortcutClick,
  onSearchSubmit,
  searchResults,
  hasSearched,
  onClearSearch,
  onResultAction,
}: HomeHeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative bg-[#173C2B] text-white overflow-hidden">
      {/* Background Pakistani Food Spread with Forest Green Overlay Scrim */}
      <div className="absolute inset-0">
        {!imgError ? (
          <img
            src={HERO_IMAGE}
            alt="Pakistani restaurant feast with chicken biryani, chicken karahi, seekh kababs, zinger burger, and cheese pizza"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-[#173C2B] flex items-center justify-center opacity-30">
            <Utensils className="w-16 h-16 text-[#FF641E]" />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(23, 60, 43, 0.94) 0%, rgba(23, 60, 43, 0.86) 55%, rgba(23, 60, 43, 0.68) 100%)',
          }}
        />
      </div>

      {/* Foreground Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.12] mb-3.5"
            style={{ textWrap: 'balance' }}
          >
            Restaurant menus and prices in Pakistan
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#FAF8F3]/90 leading-relaxed mb-7 max-w-2xl">
            Search a restaurant or a dish, choose your city, and see the full
            menu with prices before you order.
          </p>

          {/* Clean Search Panel */}
          <form
            onSubmit={onSearchSubmit}
            className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-lg border border-[#EAE7E0] text-[#252525]"
            role="search"
            aria-label="Search restaurant menus and dishes"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
              {/* Input 1: Restaurant or dish */}
              <div className="sm:col-span-6 relative">
                <label htmlFor="hero-search-input" className="sr-only">
                  Restaurant or dish
                </label>
                <Search
                  className="w-4 h-4 text-[#747474] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="hero-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchQueryChange(e.target.value)}
                  placeholder="KFC, chicken karahi, zinger burger"
                  className="w-full h-11 pl-10 pr-9 text-sm bg-[#FAF8F3] sm:bg-white rounded-xl border border-transparent focus:border-[#173C2B] focus:outline-none text-[#252525] placeholder:text-[#747474]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={onClearSearch}
                    aria-label="Clear search query"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#747474] hover:text-[#252525] p-1 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Input 2: City Dropdown */}
              <div className="sm:col-span-3 relative sm:border-l sm:border-[#EAE7E0] sm:pl-2">
                <label htmlFor="hero-city-select" className="sr-only">
                  City
                </label>
                <MapPin
                  className="w-4 h-4 text-[#FF641E] absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <select
                  id="hero-city-select"
                  value={selectedCity}
                  onChange={(e) => onCityChange(e.target.value)}
                  className="w-full h-11 pl-10 pr-3 text-sm font-medium bg-[#FAF8F3] sm:bg-white rounded-xl border border-transparent focus:border-[#173C2B] focus:outline-none text-[#252525] cursor-pointer"
                >
                  <option value="">All cities</option>
                  {CITIES_LIST.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input 3: Search menus Button */}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full h-11 px-5 rounded-xl bg-[#FF641E] hover:bg-[#eb5614] text-white font-semibold text-sm transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173C2B]"
                >
                  <span>Search menus</span>
                </button>
              </div>
            </div>
          </form>

          {/* Popular Search Shortcuts */}
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
            <span className="text-[#FAF8F3]/75 font-medium mr-1">Popular:</span>
            {POPULAR_SHORTCUTS.map((term) => {
              const isSelected =
                searchQuery.trim().toLowerCase() === term.toLowerCase();
              return (
                <button
                  key={term}
                  type="button"
                  onClick={() => onShortcutClick(term)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#FF641E] text-white'
                      : 'bg-white/12 text-[#FAF8F3] hover:bg-white/22'
                  }`}
                >
                  {term}
                </button>
              );
            })}
          </div>

          {/* Live Functional Search Results Panel */}
          {hasSearched && (
            <div className="mt-5 bg-white text-[#252525] rounded-2xl border border-[#EAE7E0] p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#EAE7E0]">
                <div className="text-xs sm:text-sm font-semibold text-[#173C2B]">
                  {searchResults.length > 0
                    ? `${searchResults.length} matching ${
                        searchResults.length === 1 ? 'result' : 'results'
                      }${selectedCity ? ` in ${selectedCity}` : ''}`
                    : `No exact matches for "${searchQuery}"${
                        selectedCity ? ` in ${selectedCity}` : ''
                      }`}
                </div>
                <button
                  type="button"
                  onClick={onClearSearch}
                  className="text-xs font-medium text-[#747474] hover:text-[#252525] cursor-pointer"
                >
                  Close
                </button>
              </div>

              {searchResults.length > 0 ? (
                <ul className="divide-y divide-[#EAE7E0] max-h-72 overflow-y-auto mt-1">
                  {searchResults.slice(0, 10).map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onResultAction(item)}
                        className="w-full py-2.5 px-2 hover:bg-[#FAF8F3] rounded-lg transition-colors flex items-center justify-between gap-3 text-left cursor-pointer"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-[#252525] truncate">
                            {item.title}
                          </div>
                          <div className="text-xs text-[#747474] flex items-center gap-1.5 mt-0.5">
                            <span className="font-medium text-[#FF641E]">
                              {item.kind}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="truncate">{item.subtitle}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {item.priceText && (
                            <div className="text-right">
                              <div className="text-xs sm:text-sm font-bold text-[#173C2B] tabular-nums">
                                {item.priceText}
                              </div>
                              {item.gstText && (
                                <div className="text-[11px] text-[#747474] tabular-nums">
                                  {item.gstText}
                                </div>
                              )}
                            </div>
                          )}
                          <ArrowRight
                            className="w-4 h-4 text-[#173C2B]"
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="pt-3 text-xs text-[#747474]">
                  Try searching for a restaurant like KFC, Savour Foods, or
                  Hungry Habibi, or a dish like biryani, karahi, or zinger.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
