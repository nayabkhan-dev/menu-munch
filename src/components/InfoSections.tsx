import { useState } from 'react';
import {
  MapPin,
  Phone,
  BookOpen,
  Info,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import {
  ABOUT_HUNGRY_HABIBI,
  CONTACT_AND_BRANCHES,
  HUNGRY_HABIBI_FAQS,
  MENU_TERMS_EXPLAINED,
} from '../data/hungryHabibiMenu';

export default function InfoSections() {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const allExpanded = openFaqIndices.length === HUNGRY_HABIBI_FAQS.length;

  const toggleAllFaqs = () => {
    if (allExpanded) {
      setOpenFaqIndices([]);
    } else {
      setOpenFaqIndices(HUNGRY_HABIBI_FAQS.map((_, idx) => idx));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Branches & Contact Information (Plain Informational Text Only) */}
      <section
        id="restaurant-locations"
        aria-labelledby="heading-locations"
        className="bg-white border border-[#EAE3D7] rounded-xl p-5 sm:p-7"
      >
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-[#153D2B]" aria-hidden="true" />
          <h2
            id="heading-locations"
            className="text-xl sm:text-2xl font-semibold text-[#153D2B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {CONTACT_AND_BRANCHES.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Details (Plain Informational Text — No Ordering Buttons) */}
          <div className="lg:col-span-5 bg-[#FAF7F0] border border-[#EAE3D7] rounded-lg p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#153D2B]">
              <Phone className="w-4 h-4 text-[#D99A32]" aria-hidden="true" />
              <span>{CONTACT_AND_BRANCHES.sublabel}</span>
            </div>

            <dl className="space-y-2 text-sm text-[#242824]">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-semibold text-[#153D2B] shrink-0">UAN:</dt>
                <dd className="tabular-nums">{CONTACT_AND_BRANCHES.uan}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-semibold text-[#153D2B] shrink-0">
                  WhatsApp:
                </dt>
                <dd className="tabular-nums">
                  {CONTACT_AND_BRANCHES.whatsappNumbers}
                </dd>
              </div>
            </dl>

            <p className="pt-2 border-t border-[#EAE3D7] text-xs text-[#242824]/75 leading-relaxed">
              {CONTACT_AND_BRANCHES.gstAndDeliveryNote}
            </p>
          </div>

          {/* Branches Listed on the Menu */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-[#153D2B] mb-3">
                Branches listed on the menu
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#EAE3D7] rounded-lg p-3.5">
                  <div className="text-xs font-semibold text-[#B57B1B] mb-2">
                    Karachi
                  </div>
                  <ul className="space-y-1 text-sm text-[#242824]">
                    {CONTACT_AND_BRANCHES.karachiBranches.map((branch) => (
                      <li key={branch}>{branch}</li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#EAE3D7] rounded-lg p-3.5">
                  <div className="text-xs font-semibold text-[#B57B1B] mb-2">
                    Other cities
                  </div>
                  <ul className="space-y-1 text-sm text-[#242824]">
                    {CONTACT_AND_BRANCHES.otherCities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#242824]/75 leading-relaxed">
              {CONTACT_AND_BRANCHES.branchPriceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Menu Terms Explained */}
      <section aria-labelledby="heading-glossary">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-[#153D2B]" aria-hidden="true" />
          <h2
            id="heading-glossary"
            className="text-xl sm:text-2xl font-semibold text-[#153D2B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Menu terms explained
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {MENU_TERMS_EXPLAINED.map((item) => (
            <div
              key={item.term}
              className="bg-white border border-[#EAE3D7] rounded-xl p-4"
            >
              <h3 className="text-sm font-semibold text-[#153D2B] mb-1">
                {item.term}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#242824]/80 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Hungry Habibi */}
      <section
        aria-labelledby="heading-about"
        className="bg-white border border-[#EAE3D7] rounded-xl p-5 sm:p-7"
      >
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-[#153D2B]" aria-hidden="true" />
          <h2
            id="heading-about"
            className="text-xl sm:text-2xl font-semibold text-[#153D2B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {ABOUT_HUNGRY_HABIBI.title}
          </h2>
        </div>
        <p className="text-sm sm:text-[15px] text-[#242824]/85 leading-relaxed max-w-4xl">
          {ABOUT_HUNGRY_HABIBI.body}
        </p>
      </section>

      {/* Hungry Habibi Questions Answered (FAQ) */}
      <section id="faq" aria-labelledby="heading-faq">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#153D2B]" aria-hidden="true" />
            <h2
              id="heading-faq"
              className="text-xl sm:text-2xl font-semibold text-[#153D2B]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hungry Habibi questions answered
            </h2>
          </div>

          <button
            type="button"
            onClick={toggleAllFaqs}
            className="text-xs font-semibold text-[#153D2B] hover:text-[#B57B1B] transition-colors cursor-pointer whitespace-nowrap"
          >
            {allExpanded ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {HUNGRY_HABIBI_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="bg-white border border-[#EAE3D7] rounded-xl overflow-hidden self-start"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 hover:bg-[#FAF7F0]/60 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-semibold text-[#153D2B]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#153D2B]/70 shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#EAE3D7]/70 text-xs sm:text-[13px] text-[#242824]/85 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
