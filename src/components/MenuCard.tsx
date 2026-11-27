import { useState } from 'react';
import { Utensils } from 'lucide-react';
import { formatPkr, MenuItem } from '../data/hungryHabibiMenu';

interface MenuCardProps {
  item: MenuItem;
  categoryName?: string;
}

export default function MenuCard({ item, categoryName }: MenuCardProps) {
  const [imgError, setImgError] = useState(false);

  const metaTokens: string[] = [];
  if (categoryName) metaTokens.push(categoryName);
  if (item.chefSpecial) metaTokens.push('Chef special');
  if (item.seasonal) metaTokens.push('Seasonal');
  if (item.noMeatListed) metaTokens.push('▣ No meat listed');

  return (
    <article className="bg-white border border-[#EAE3D7] rounded-xl overflow-hidden flex flex-col hover:border-[#153D2B]/35 transition-colors duration-150 shadow-[0_1px_2px_rgba(21,61,43,0.03)]">
      {/* Consistent 4:3 Dish Category Image */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF7F0] shrink-0">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#FAF7F0] text-[#153D2B]/40 p-3 text-center">
            <Utensils className="w-6 h-6 mb-1" aria-hidden="true" />
            <span className="text-[11px] font-medium text-[#242824]/60 line-clamp-2">
              {item.name}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between gap-2.5">
        <div>
          {/* Clean Unboxed Typographic Metadata Line */}
          {metaTokens.length > 0 && (
            <div className="text-[11px] font-medium leading-tight mb-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[#242824]/65">
              {metaTokens.map((token, index) => {
                const isHighlight =
                  token === 'Chef special' || token === 'Seasonal';
                const isNoMeat = token.startsWith('▣');
                return (
                  <span key={token} className="inline-flex items-center gap-1.5">
                    {index > 0 && (
                      <span aria-hidden="true" className="text-[#242824]/30">
                        ·
                      </span>
                    )}
                    <span
                      className={
                        isHighlight
                          ? 'text-[#B57B1B] font-semibold'
                          : isNoMeat
                            ? 'text-[#153D2B] font-medium'
                            : 'text-[#242824]/60'
                      }
                    >
                      {token}
                    </span>
                  </span>
                );
              })}
            </div>
          )}

          {/* Exact Menu Item Name */}
          <h3 className="text-[13px] sm:text-[15px] font-semibold text-[#242824] leading-snug">
            {item.name}
          </h3>

          {/* Optional Description / Serving Size */}
          {(item.description || item.serves) && (
            <p className="mt-1 text-[11px] sm:text-xs text-[#242824]/70 leading-snug">
              {[item.serves, item.description].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>

        {/* Price & 15% GST-Inclusive Line */}
        <div className="pt-2 border-t border-[#EAE3D7] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2">
          <span className="text-sm sm:text-base font-bold text-[#153D2B] tabular-nums whitespace-nowrap">
            {formatPkr(item.pricePkr)}
          </span>
          <span className="text-[11px] text-[#242824]/65 tabular-nums whitespace-nowrap">
            {formatPkr(item.priceWithGst)} with GST
          </span>
        </div>
      </div>
    </article>
  );
}
