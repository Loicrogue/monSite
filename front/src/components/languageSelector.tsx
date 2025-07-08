import React, { useState } from "react";
import "./LanguageSelector.css"; // pour le style

const languages = [
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w80/fr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w80/gb.png" },
];

const LanguageSelector = ({ onSelect }) => {
  const [selectedLang, setSelectedLang] = useState("fr");
  const [open, setOpen] = useState(false);

  const handleSelect = (code) => {
    setSelectedLang(code);
    setOpen(false);
    if (onSelect) onSelect(code);
  };

  const current = languages.find((l) => l.code === selectedLang);

  return (
    <div className="language-selector">
      <img
        src={current.flag}
        alt={current.name}
        className="flag current-flag"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="dropdown">
          {languages
            .filter((lang) => lang.code !== selectedLang)
            .map((lang) => (
              <img
                key={lang.code}
                src={lang.flag}
                alt={lang.name}
                className="flag option-flag"
                onClick={() => handleSelect(lang.code)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
