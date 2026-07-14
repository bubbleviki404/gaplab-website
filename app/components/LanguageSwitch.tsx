"use client";

import { useEffect, useState } from "react";

type Language = "zh" | "en";

function applyLanguage(language: Language) {
  document.documentElement.dataset.lang = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
}

export function LanguageSwitch() {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem("gaplab-language");
      const initial: Language = saved === "en" || saved === "zh"
        ? saved
        : navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
      setLanguage(initial);
      applyLanguage(initial);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function choose(next: Language) {
    setLanguage(next);
    applyLanguage(next);
    window.localStorage.setItem("gaplab-language", next);
  }

  return (
    <div className="languageSwitch" role="group" aria-label="Language / 语言">
      <button type="button" aria-pressed={language === "zh"} onClick={() => choose("zh")}>中</button>
      <button type="button" aria-pressed={language === "en"} onClick={() => choose("en")}>EN</button>
    </div>
  );
}
