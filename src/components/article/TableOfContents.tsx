import React, { useState, useEffect } from 'react';
import { TOCItem } from '../../types/article';
import { ListFilter } from 'lucide-react';

interface Props {
  items: TOCItem[];
}

export const TableOfContents: React.FC<Props> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] p-5 my-8">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#E8E1D5] text-[#5A3825]">
        <ListFilter className="w-4 h-4 text-[#8C533C]" />
        <span className="font-serif text-sm font-bold tracking-tight">Table of Contents</span>
      </div>

      <nav className="space-y-1.5 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left py-1.5 px-2 rounded-md transition-all cursor-pointer flex items-baseline justify-between ${
                isActive
                  ? 'bg-white text-[#8C533C] font-semibold border-l-2 border-[#8C533C] shadow-2xs'
                  : 'text-[#6A6560] hover:text-[#2C2926] hover:bg-white/60'
              }`}
            >
              <span className="line-clamp-1">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
