import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import HomeHeader from './components/HomeHeader';
import HomeHero, { SearchMatchItem } from './components/HomeHero';
import SampleAndBenefits from './components/SampleAndBenefits';
import PopularRestaurants from './components/PopularRestaurants';
import CitiesSection from './components/CitiesSection';
import DishesAndEditorial from './components/DishesAndEditorial';
import HomeFaqAndFooter from './components/HomeFaqAndFooter';
import HungryHabibiPage from './components/HungryHabibiPage';
import {
  CITIES_DATA,
  CityCardData,
  DishCardData,
  GUIDES_DATA,
  GuideCardData,
  POPULAR_DISHES,
  POPULAR_RESTAURANTS,
  RECIPES_DATA,
  RecipeCardData,
  RestaurantCardData,
} from './data/homepageData';
import {
  formatPkr,
  MENU_CATEGORIES,
  PLATTERS,
} from './data/hungryHabibiMenu';

interface DirectoryModalState {
  title: string;
  subtitle: string;
  body: string;
  showHungryHabibiLink?: boolean;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'hungry-habibi'>(
    () =>
      window.location.pathname.includes('hungry-habibi')
        ? 'hungry-habibi'
        : 'home'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportText, setReportText] = useState('');

  const [directoryModal, setDirectoryModal] =
    useState<DirectoryModalState | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(
        window.location.pathname.includes('hungry-habibi')
          ? 'hungry-habibi'
          : 'home'
      );
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateHome = (hash?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', hash ? `/${hash}` : '/');
    }
    setCurrentPage('home');
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHungryHabibi = () => {
    window.history.pushState({}, '', '/hungry-habibi-menu/');
    setCurrentPage('hungry-habibi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Live functional search across actual website data (no fabricated prices)
  const searchResults: SearchMatchItem[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q && !selectedCity) return [];

    const matches: SearchMatchItem[] = [];
    const hungryHabibiCities = [
      'karachi',
      'lahore',
      'islamabad',
      'multan',
    ];
    const cityMatchesHH =
      !selectedCity ||
      hungryHabibiCities.includes(selectedCity.toLowerCase());

    // 1. Verified Hungry Habibi restaurant & dishes
    if (
      cityMatchesHH &&
      (!q ||
        'hungry habibi'.includes(q) ||
        'arabian'.includes(q) ||
        'madbee'.includes(q) ||
        'mandi'.includes(q))
    ) {
      matches.push({
        id: 'hh-restaurant',
        title: 'Hungry Habibi',
        subtitle:
          'Arabian grill, madbee and mandi, Turkish pide, kunafa · Karachi, Lahore, Islamabad, Multan',
        kind: 'Verified Menu',
        actionType: 'hungry-habibi',
      });
    }

    if (q && cityMatchesHH) {
      for (const platter of PLATTERS) {
        if (
          platter.name.toLowerCase().includes(q) ||
          platter.description.toLowerCase().includes(q)
        ) {
          matches.push({
            id: `hh-${platter.id}`,
            title: `${platter.name} — Hungry Habibi`,
            subtitle: platter.servesText,
            kind: 'Verified Menu',
            priceText: formatPkr(platter.pricePkr),
            gstText: `${formatPkr(platter.priceWithGst)} with GST`,
            actionType: 'hungry-habibi',
          });
        }
      }

      for (const cat of MENU_CATEGORIES) {
        const items =
          cat.items ??
          cat.subcategories?.flatMap((sub) => sub.items) ??
          [];
        for (const item of items) {
          if (
            item.name.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          ) {
            matches.push({
              id: `hh-${item.id}`,
              title: `${item.name} — Hungry Habibi`,
              subtitle: cat.title,
              kind: 'Verified Menu',
              priceText: formatPkr(item.pricePkr),
              gstText: `${formatPkr(item.priceWithGst)} with GST`,
              actionType: 'hungry-habibi',
            });
          }
        }
      }
    }

    // 2. 12 Popular Restaurants
    for (const rest of POPULAR_RESTAURANTS) {
      if (
        !q ||
        rest.name.toLowerCase().includes(q) ||
        rest.cuisine.toLowerCase().includes(q)
      ) {
        matches.push({
          id: `rest-${rest.id}`,
          title: rest.name,
          subtitle: selectedCity
            ? `${rest.cuisine} · ${selectedCity}`
            : rest.cuisine,
          kind: 'Restaurant',
          actionType: 'modal',
          targetId: rest.id,
        });
      }
    }

    // 3. 10 Popular Dishes
    for (const dish of POPULAR_DISHES) {
      if (!q || dish.name.toLowerCase().includes(q)) {
        matches.push({
          id: `dish-${dish.id}`,
          title: dish.name,
          subtitle: 'Compare across restaurants',
          kind: 'Dish',
          actionType: 'scroll',
          targetId: 'dishes',
        });
      }
    }

    // 4. 8 Cities
    for (const city of CITIES_DATA) {
      if (
        (q && city.name.toLowerCase().includes(q)) ||
        (!q && selectedCity.toLowerCase() === city.name.toLowerCase())
      ) {
        matches.push({
          id: `city-${city.id}`,
          title: `${city.name} menus`,
          subtitle: 'City restaurant directory',
          kind: 'City',
          actionType: 'modal',
          targetId: city.id,
        });
      }
    }

    // 5. Recipes & Guides
    if (q) {
      for (const recipe of RECIPES_DATA) {
        if (recipe.title.toLowerCase().includes(q)) {
          matches.push({
            id: recipe.id,
            title: recipe.title,
            subtitle: 'Home recipe guide',
            kind: 'Recipe',
            actionType: 'scroll',
            targetId: 'recipes',
          });
        }
      }
      for (const guide of GUIDES_DATA) {
        if (guide.title.toLowerCase().includes(q)) {
          matches.push({
            id: guide.id,
            title: guide.title,
            subtitle: 'Food & price guide',
            kind: 'Guide',
            actionType: 'scroll',
            targetId: 'guides',
          });
        }
      }
    }

    return matches;
  }, [searchQuery, selectedCity]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const handleShortcutClick = (term: string) => {
    setSearchQuery(term);
    setHasSearched(true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setHasSearched(false);
  };

  const handleResultAction = (item: SearchMatchItem) => {
    if (item.actionType === 'hungry-habibi') {
      navigateToHungryHabibi();
      return;
    }
    if (item.actionType === 'scroll' && item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (item.kind === 'Restaurant' && item.targetId) {
      const found = POPULAR_RESTAURANTS.find((r) => r.id === item.targetId);
      if (found) handleSelectRestaurant(found);
      return;
    }
    if (item.kind === 'City' && item.targetId) {
      const found = CITIES_DATA.find((c) => c.id === item.targetId);
      if (found) handleSelectCity(found);
    }
  };

  const handleSelectRestaurant = (rest: RestaurantCardData) => {
    setDirectoryModal({
      title: rest.name,
      subtitle: rest.cuisine,
      body: `MenuMunch lists ${rest.name} under ${rest.cuisine}. Full item-by-item PKR pricing for ${rest.name} is not yet published in this directory. You can explore our complete verified menu for Hungry Habibi or report a printed menu price to help expand this listing.`,
      showHungryHabibiLink: true,
    });
  };

  const handleSelectCity = (city: CityCardData) => {
    setSelectedCity(city.name);
    const hasHungryHabibi = ['Karachi', 'Lahore', 'Islamabad', 'Multan'].includes(
      city.name
    );
    setDirectoryModal({
      title: `Menus in ${city.name}`,
      subtitle: 'City directory',
      body: hasHungryHabibi
        ? `Your city filter is now set to ${city.name}. Hungry Habibi has a full verified menu with PKR prices and 15% GST calculations available for ${city.name}.`
        : `Your city filter is now set to ${city.name}. Additional city-specific menu sheets for ${city.name} are being added to MenuMunch.`,
      showHungryHabibiLink: hasHungryHabibi,
    });
  };

  const handleSelectDish = (dish: DishCardData) => {
    setSearchQuery(dish.name);
    setHasSearched(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRecipe = (recipe: RecipeCardData) => {
    setDirectoryModal({
      title: recipe.title,
      subtitle: `${recipe.label} · MenuMunch Recipes`,
      body: `Recipe entry for ${recipe.title}. Full recipe step-by-step details are hosted on MenuMunch.pk.`,
    });
  };

  const handleSelectGuide = (guide: GuideCardData) => {
    setDirectoryModal({
      title: guide.title,
      subtitle: `${guide.label} · MenuMunch Guides`,
      body: `Guide entry for "${guide.title}". MenuMunch publishes independent food price, calorie, and menu comparison guides across Pakistan.`,
    });
  };

  const handleOpenInfoPage = (page: 'About' | 'Contact' | 'Privacy') => {
    const contentMap: Record<'About' | 'Contact' | 'Privacy', DirectoryModalState> = {
      About: {
        title: 'About MenuMunch',
        subtitle: 'Independent Pakistani restaurant menu directory',
        body: 'MenuMunch lists restaurant menus and printed prices across Pakistan as an independent reference guide. MenuMunch is not affiliated with any restaurant listed.',
      },
      Contact: {
        title: 'Contact MenuMunch',
        subtitle: 'Menu updates and directory inquiries',
        body: 'Have a printed restaurant menu update or price correction? Use the Report a price form on any menu page to submit updated PKR pricing.',
      },
      Privacy: {
        title: 'Privacy Policy',
        subtitle: 'MenuMunch.pk',
        body: 'MenuMunch is a read-only informational menu directory. Browsing restaurant menus, cities, and dishes requires no account or personal checkout data.',
      },
    };
    setDirectoryModal(contentMap[page]);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setReportSubmitted(true);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#252525]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#173C2B] focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <HomeHeader
        currentPage={currentPage}
        onNavigateHome={navigateHome}
        onOpenReportModal={() => {
          setReportSubmitted(false);
          setReportText('');
          setReportModalOpen(true);
        }}
      />

      <main id="content" className="flex-1">
        {currentPage === 'hungry-habibi' ? (
          <HungryHabibiPage />
        ) : (
          <>
            <HomeHero
              searchQuery={searchQuery}
              selectedCity={selectedCity}
              onSearchQueryChange={(val) => {
                setSearchQuery(val);
                if (val.trim()) setHasSearched(true);
              }}
              onCityChange={(val) => {
                setSelectedCity(val);
                if (val || searchQuery.trim()) setHasSearched(true);
              }}
              onShortcutClick={handleShortcutClick}
              onSearchSubmit={handleSearchSubmit}
              searchResults={searchResults}
              hasSearched={hasSearched}
              onClearSearch={handleClearSearch}
              onResultAction={handleResultAction}
            />

            <SampleAndBenefits onOpenHungryHabibi={navigateToHungryHabibi} />

            <PopularRestaurants
              onSelectRestaurant={handleSelectRestaurant}
              onOpenHungryHabibi={navigateToHungryHabibi}
            />

            <CitiesSection onSelectCity={handleSelectCity} />

            <DishesAndEditorial
              onSelectDish={handleSelectDish}
              onSelectRecipe={handleSelectRecipe}
              onSelectGuide={handleSelectGuide}
            />
          </>
        )}

        <HomeFaqAndFooter
          onNavigateHome={navigateHome}
          onOpenReportModal={() => {
            setReportSubmitted(false);
            setReportText('');
            setReportModalOpen(true);
          }}
          onOpenInfoPage={handleOpenInfoPage}
        />
      </main>

      {/* Informational Directory Detail Modal */}
      {directoryModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="directory-modal-title"
        >
          <div className="bg-white border border-[#EAE7E0] rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-xs font-semibold text-[#FF641E] mb-0.5">
                  {directoryModal.subtitle}
                </p>
                <h2
                  id="directory-modal-title"
                  className="text-lg font-bold text-[#173C2B]"
                >
                  {directoryModal.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setDirectoryModal(null)}
                aria-label="Close dialog"
                className="p-1 text-[#747474] hover:text-[#252525] rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-[#252525]/85 leading-relaxed mb-5">
              {directoryModal.body}
            </p>

            <div className="flex flex-wrap items-center justify-end gap-2">
              {directoryModal.showHungryHabibiLink && (
                <button
                  type="button"
                  onClick={() => {
                    setDirectoryModal(null);
                    navigateToHungryHabibi();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#173C2B] hover:bg-[#1e4d38] rounded-xl transition-colors cursor-pointer"
                >
                  <span>Open Hungry Habibi Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setDirectoryModal(null)}
                className="px-4 py-2 text-xs font-semibold text-[#252525] bg-[#FAF8F3] border border-[#EAE7E0] hover:bg-[#EAE7E0]/60 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report a Price Modal */}
      {reportModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="report-modal-title"
        >
          <div className="bg-white border border-[#EAE7E0] rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2
                  id="report-modal-title"
                  className="text-lg font-bold text-[#173C2B]"
                >
                  Report a price
                </h2>
                <p className="text-xs text-[#747474] mt-0.5">
                  Use this form to flag a changed price. We check it against the
                  restaurant menu and update the page.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setReportModalOpen(false)}
                aria-label="Close modal"
                className="p-1 text-[#747474] hover:text-[#252525] rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {reportSubmitted ? (
              <div className="bg-[#FAF8F3] border border-[#EAE7E0] rounded-xl p-4 space-y-3">
                <p className="text-sm font-semibold text-[#173C2B]">
                  Price note received.
                </p>
                <p className="text-xs text-[#747474]">
                  Thank you for helping keep MenuMunch menu prices accurate
                  across Pakistan.
                </p>
                <button
                  type="button"
                  onClick={() => setReportModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#173C2B] rounded-xl hover:bg-[#1e4d38] cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="report-price-input"
                    className="block text-xs font-semibold text-[#173C2B] mb-1"
                  >
                    Restaurant, city, item and updated price (PKR)
                  </label>
                  <textarea
                    id="report-price-input"
                    rows={3}
                    required
                    value={reportText}
                    onChange={(e) => setReportText(e.target.value)}
                    placeholder="e.g. Hungry Habibi Karachi — Chicken Madbee (Half)..."
                    className="w-full px-3 py-2 text-sm bg-[#FAF8F3] border border-[#EAE7E0] rounded-xl text-[#252525] focus:outline-none focus:border-[#173C2B]"
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-[#747474] hover:text-[#252525] rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#FF641E] hover:bg-[#eb5614] rounded-xl transition-colors cursor-pointer"
                  >
                    Submit price note
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
