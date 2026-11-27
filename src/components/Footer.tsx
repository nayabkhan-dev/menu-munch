import menumunchLogo from '../assets/menumunch.png';

interface FooterProps {
  onOpenReportModal: () => void;
}

export default function Footer({ onOpenReportModal }: FooterProps) {
  return (
    <footer className="bg-white border-t border-[#EAE3D7] text-[#242824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#EAE3D7]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="https://menumunch.pk/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153D2B] rounded"
            >
              <img
                src={menumunchLogo}
                alt="MenuMunch"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#242824]/75 leading-relaxed max-w-sm">
              Restaurant menus and prices across Pakistan. An independent guide,
              not affiliated with any restaurant listed.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-xs font-semibold text-[#153D2B] mb-3">
                Explore
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#242824]/80">
                <li>
                  <a
                    href="https://menumunch.pk/#menus"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    href="https://menumunch.pk/#cities"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Cities
                  </a>
                </li>
                <li>
                  <a
                    href="https://menumunch.pk/#dishes"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Dishes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-[#153D2B] mb-3">
                Learn
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#242824]/80">
                <li>
                  <a
                    href="https://menumunch.pk/#recipes"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Recipes
                  </a>
                </li>
                <li>
                  <a
                    href="https://menumunch.pk/#guides"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="https://menumunch.pk/#guides"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Deals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-[#153D2B] mb-3">
                MenuMunch
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#242824]/80">
                <li>
                  <a
                    href="https://menumunch.pk/about/"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://menumunch.pk/contact/"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenReportModal}
                    className="hover:text-[#153D2B] hover:underline underline-offset-4 cursor-pointer text-left"
                  >
                    Report a price
                  </button>
                </li>
                <li>
                  <a
                    href="https://menumunch.pk/privacy/"
                    className="hover:text-[#153D2B] hover:underline underline-offset-4"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#242824]/65">
          <p>
            © MenuMunch.pk. Restaurant names and logos belong to their owners.
            Prices can change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
