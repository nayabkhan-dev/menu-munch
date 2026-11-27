import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_PATH } from '../data/homepageData';

interface HomeHeaderProps {
  currentPage: 'home' | 'hungry-habibi';
  onNavigateHome: (hash?: string) => void;
  onOpenReportModal: () => void;
}

const NAV_LINKS = [
  { label: 'Restaurants', hash: '#menus' },
  { label: 'Cities', hash: '#cities' },
  { label: 'Dishes', hash: '#dishes' },
  { label: 'Recipes', hash: '#recipes' },
  { label: 'Guides', hash: '#guides' },
];

export default function HomeHeader({
  currentPage,
  onNavigateHome,
  onOpenReportModal,
}: HomeHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateHome(hash);
  };

  return (
    <header
      className={`${
        currentPage === 'home'
          ? 'sticky top-0 bg-white/95 backdrop-blur-sm'
          : 'relative bg-white'
      } z-40 border-b border-[#EAE7E0]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-16 sm:h-[72px]">
          {/* Zone 1: Official Uploaded MenuMunch Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="flex items-center shrink-0 py-1.5 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173C2B]"
            aria-label="MenuMunch Home"
          >
            <img
              src={LOGO_PATH}
              alt="MenuMunch"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain select-none"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#252525]"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`/${link.hash}`}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#FF641E] hover:text-[#173C2B] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173C2B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Report a price + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {currentPage === 'hungry-habibi' && (
              <button
                type="button"
                onClick={() => onNavigateHome()}
                className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#173C2B] hover:text-[#FF641E] transition-colors cursor-pointer whitespace-nowrap"
              >
                All menus
              </button>
            )}

            <button
              type="button"
              onClick={onOpenReportModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#173C2B] rounded-lg hover:bg-[#1e4d38] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF641E]"
            >
              Report a price
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#EAE7E0] text-[#252525] hover:bg-[#FAF8F3] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden pb-4 pt-2 border-t border-[#EAE7E0] flex flex-col gap-1"
            aria-label="Mobile Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`/${link.hash}`}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className="px-3 py-3 text-sm font-medium text-[#252525] hover:bg-[#FAF8F3] hover:text-[#173C2B] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            {currentPage === 'hungry-habibi' && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateHome();
                }}
                className="px-3 py-3 text-left text-sm font-medium text-[#173C2B] hover:bg-[#FAF8F3] rounded-lg transition-colors cursor-pointer"
              >
                MenuMunch Home
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReportModal();
              }}
              className="mt-1 px-3 py-3 text-left text-sm font-semibold text-[#FF641E] hover:bg-[#FAF8F3] rounded-lg transition-colors cursor-pointer"
            >
              Report a price
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
