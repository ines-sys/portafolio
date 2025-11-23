'use client';

import { useEffect, useState } from "react";
import i18n from "../../i18n/i18next";

export default function LanguageSwitcher() {
  const [active, setActive] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setActive(lng);
  };

  useEffect(() => {
    changeLanguage("es");
  }, []);

  return (
    <div
      className="text-[12px] w-fit flex flex-col items-start gap-4 overflow-hidden rounded-md px-4 py-2 shadow-sm shadow-purple-200/50 bg-purple-50/20 ring-2 ring-purple-200"
    >       
      <div className="flex items-center gap-4">
        <label className="relative flex h-[30px] w-[30px] items-center justify-center cursor-pointer">
          <input
            type="radio"
            name="lang"
            value="en"
            className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
            checked={active === "en"}
            onChange={() => changeLanguage("en")}
          />

          <div className="absolute h-full w-full rounded-full bg-purple-100 p-2 shadow-sm shadow-[#00000030] ring-purple-400 duration-300 peer-checked:scale-105 peer-checked:ring-2"></div>

          <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-purple-200 duration-500 peer-checked:scale-[250%]"></div>

          <span className="absolute font-bold text-purple-600 font-sm">EN</span>
        </label>

        <label className="relative flex h-[30px] w-[30px] items-center justify-center cursor-pointer">
          <input
            type="radio"
            name="lang"
            value="es"
            className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
            checked={active === "es"}
            onChange={() => changeLanguage("es")}
          />

          <div className="absolute h-full w-full rounded-full bg-purple-100 p-2 shadow-sm shadow-[#00000030] ring-purple-400 duration-300 peer-checked:scale-105 peer-checked:ring-2"></div>

          <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-purple-200 duration-500 peer-checked:scale-[250%]"></div>

          <span className="absolute font-bold text-purple-600 font-sm">ES</span>
        </label>
      </div>
    </div>
  );
}
