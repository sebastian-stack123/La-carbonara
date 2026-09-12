import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'pt', label: 'PT' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-carbonara-gold hover:text-white transition-colors p-2"
        aria-label="Change Language"
      >
        <Globe size={20} />
        <span className="text-sm font-sans tracking-widest">{i18n.language?.substring(0, 2).toUpperCase() || 'ES'}</span>
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 py-2 w-24 bg-carbonara-black/95 border border-carbonara-wine/50 rounded-lg shadow-xl backdrop-blur-md z-50 flex flex-col"
        >
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={`text-left px-4 py-2 text-sm font-sans tracking-widest hover:bg-carbonara-wine/30 transition-colors ${
                i18n.language.startsWith(lng.code) ? 'text-white' : 'text-carbonara-gold/70'
              }`}
            >
              {lng.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
