import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import menumunchLogo from '../assets/menumunch.png';

interface HeaderProps {
  onOpenReportModal: () => void;
}

const NAV_LINKS = [
  { label: 'Restaurants', href: 'https://menumunch.pk/#menus' },
  { label: 'Cities', href: 'https://menumunch.pk/#cities' },
  { label: 'Dishes', href: 'https://menumunch.pk/#dishes' },
  { label: 'Recipes', href: 'https://menumunch.pk/#recipes' },
  { label: 'Guides', href: 'https://menumunch.pk/#guides' },
];

export default function Header({ onOpenReportModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 bg-white border-b border-[#EAE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-16 sm:h-[72px]">
          {/* Zone 1: Official MenuMunch Logo */}
          <a
            href="https://menumunch.pk/"
            className="flex items-center shrink-0 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153D2B] rounded"
            aria-label="MenuMunch Home"
          >
            <img
              src={menumunchLogo}
              alt="MenuMunch"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain select-none"
            />
          </a>

          {/* Zone 2: Primary Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#242824]"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#D99A32] hover:text-[#153D2B] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153D2B] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Informational Action + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenReportModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#153D2B] bg-[#FAF7F0] border border-[#EAE3D7] rounded-lg hover:bg-[#153D2B] hover:text-white hover:border-[#153D2B] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153D2B]"
            >
              Report a price
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#EAE3D7] text-[#242824] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden pb-4 pt-2 border-t border-[#EAE3D7] flex flex-col gap-1"
            aria-label="Mobile Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#242824] hover:bg-[#FAF7F0] hover:text-[#153D2B] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReportModal();
              }}
              className="mt-1 px-3 py-2.5 text-left text-sm font-semibold text-[#153D2B] hover:bg-[#FAF7F0] rounded-lg transition-colors cursor-pointer"
            >
              Report a price
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
