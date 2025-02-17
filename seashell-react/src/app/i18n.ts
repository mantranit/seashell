import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        menu: {
          Television: "Television",
          Connectivity: "Connectivity",
          Dining: "Dining",
          "Restaurants & Bars": "Restaurants & Bars",
          "Spa & Fitness": "Spa & Fitness",
          Shopping: "Shopping",
          "My Orders": "My Orders",
          Movies: "Movies",
          Radio: "Radio",
          "Hotel Information": "Hotel Information",
          "Room Service": "Room Service",
          "Wake-up Call": "Wake-up Call",
          Messages: "Messages",
          Feedback: "Feedback",
          "Check Bill": "Check Bill",
          "Flight Info": "Flight Info",
          Settings: "Settings",
        },
      },
    },
    vi: {
      translation: {
        menu: {
          Television: "Tivi",
          Connectivity: "Kết nối thiết bị",
          Dining: "Dining",
          "Restaurants & Bars": "Restaurants & Bars",
          "Spa & Fitness": "Spa & Fitness",
          Shopping: "Shopping",
          "My Orders": "My Orders",
          Movies: "Movies",
          Radio: "Radio",
          "Hotel Information": "Hotel Information",
          "Room Service": "Room Service",
          "Wake-up Call": "Wake-up Call",
          Messages: "Messages",
          Feedback: "Feedback",
          "Check Bill": "Check Bill",
          "Flight Info": "Flight Info",
          Settings: "Settings",
        },
      },
    },
  },
});

export default i18n;
