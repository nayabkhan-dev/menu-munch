import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HOME_FAQS, LOGO_PATH } from '../data/homepageData';

interface HomeFaqAndFooterProps {
  onNavigateHome: (hash?: string) => void;
  onOpenReportModal: () => void;
  onOpenInfoPage: (page: 'About' | 'Contact' | 'Privacy') => void;
}

export default function HomeFaqAndFooter({
  onNavigateHome,
  onOpenReportModal,
  onOpenInfoPage,
}: HomeFaqAndFooterProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <>
      {/* FAQ Section */}
      <section
        id="faq"
        aria-labelledby="heading-home-faq"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <h2
          id="heading-home-faq"
          className="text-2xl sm:text-3xl font-bold text-[#173C2B] tracking-tight mb-6"
        >
          Questions people ask
        </h2>

        <div className="space-y-3">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="bg-white border border-[#EAE7E0] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(23,60,43,0.03)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F3]/70 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#173C2B]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FF641E] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 border-t border-[#EAE7E0]/70 text-sm text-[#252525]/85 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Dark Forest Green Footer with Orange Accents */}
      <footer className="bg-[#173C2B] text-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/15">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="inline-block bg-white px-3.5 py-2 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF641E]"
                aria-label="MenuMunch Home"
              >
                <img
                  src={LOGO_PATH}
                  alt="MenuMunch"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </a>
              <p className="text-xs sm:text-sm text-[#FAF8F3]/85 leading-relaxed max-w-sm">
                Restaurant menus and prices across Pakistan. An independent
                guide, not affiliated with any restaurant listed.
              </p>
            </div>

            {/* Footer Link Columns */}
            <div className="md:col-span-7 grid grid-cols-3 gap-6 text-xs sm:text-sm">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF641E] mb-3">
                  Explore
                </h3>
                <ul className="space-y-2 text-[#FAF8F3]/85">
                  <li>
                    <a
                      href="/#menus"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateHome('#menus');
                      }}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      Restaurants
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#cities"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateHome('#cities');
                      }}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      Cities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#dishes"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateHome('#dishes');
                      }}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      Dishes
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF641E] mb-3">
                  Learn
                </h3>
                <ul className="space-y-2 text-[#FAF8F3]/85">
                  <li>
                    <a
                      href="/#recipes"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateHome('#recipes');
                      }}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      Recipes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#guides"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateHome('#guides');
                      }}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#guides"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateHome('#guides');
                      }}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      Deals
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF641E] mb-3">
                  MenuMunch
                </h3>
                <ul className="space-y-2 text-[#FAF8F3]/85">
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoPage('About')}
                      className="hover:text-white hover:underline underline-offset-4 cursor-pointer text-left"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoPage('Contact')}
                      className="hover:text-white hover:underline underline-offset-4 cursor-pointer text-left"
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={onOpenReportModal}
                      className="hover:text-white hover:underline underline-offset-4 cursor-pointer text-left"
                    >
                      Report a price
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoPage('Privacy')}
                      className="hover:text-white hover:underline underline-offset-4 cursor-pointer text-left"
                    >
                      Privacy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 text-xs text-[#FAF8F3]/70">
            © MenuMunch.pk. Restaurant names and logos belong to their owners.
            Prices can change without notice.
          </div>
        </div>
      </footer>
    </>
  );
}
