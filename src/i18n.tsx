import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation file
import translationEnglish from "./Translation/English/translation.json"
import translationThai from "./Translation/Thai/translation.json"

const resources = {
  en: {
    translation: translationEnglish,
  },
  th: {
    translation: translationThai,
  },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;