import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  route?: string;
}

interface Props {
  items: BreadcrumbItem[];
  onNavigate: (route: string) => void;
}

export const Breadcrumbs: React.FC<Props> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="my-4">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#8A7A6D]">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#2C2926] transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-[#C4B9AA]">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                {item.route && !isLast ? (
                  <button
                    onClick={() => onNavigate(item.route!)}
                    className="hover:text-[#2C2926] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-[#5A3825] font-medium line-clamp-1 max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
