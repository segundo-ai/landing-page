import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@data/general/languages";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[10px] px-[12px] medium-large:px-[16px] py-[2px] medium-large:py-[12px] rounded-[20px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out text-white backdrop-blur-[30px] border border-[rgba(255,255,255,0.2)]"
        aria-label="Select language"
      >
        <span className="text-[14px] medium-large:text-[16px] font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
        <svg
          className={`w-[16px] h-[16px] medium-large:w-[20px] medium-large:h-[20px] transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-[8px] w-[140px] medium-large:w-[160px] bg-[rgba(0,0,0,0.9)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.2)] rounded-[20px] shadow-lg overflow-hidden z-25">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center justify-between px-[16px] py-[12px] text-left hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out ${
                i18n.language === language.code
                  ? "bg-[rgba(255,255,255,0.15)] text-[#CDD4F9]"
                  : "text-white"
              }`}
            >
              <span className="text-[14px] medium-large:text-[16px] font-medium">
                {language.name}
              </span>
              {i18n.language === language.code && (
                <svg
                  className="w-[16px] h-[16px] text-[#CDD4F9]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
