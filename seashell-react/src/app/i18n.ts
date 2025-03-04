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
        header: {
          Welcome: "Welcome, {{name}}",
          Room: "Room {{roomNumber}}",
        },
        welcome: {
          Dear: "DEAR",
          Brief:
            "We are delighted that you have chosen our hotel. On behalf of the entire team of the SEASHELLS, I extend a very warm welcome to you and trust that your stay with us will be pleasant and comfortable.",
          Continue: "Continue",
        },
        Television: "Television",
        Connectivity: "Connectivity",

        Dining: "Dining",
        Breakfasts: "Breakfasts",
        Starters: "Starters",
        Salads: "Salads",
        Soups: "Soups",
        Mains: "Mains",
        Desserts: "Desserts",
        Drinks: "Drinks",
        "Hot Drinks": "Hot Drinks",
        Alcohol: "Alcohol",
        Cocktails: "Cocktails",
        Beer: "Beer",
        Wine: "Wine",
        Whiskey: "Whiskey",

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
        Language: "Language",
        Back: "Back",
        Navigation: "Navigation",

        pers: "pers",
        "Select time": "Select time",
        Continue: "Continue",
        "Add to cart": "Add to cart",
      },
    },
    vi: {
      translation: {
        header: {
          Welcome: "Welcome, {{name}}",
          Room: "Room {{roomNumber}}",
        },
        welcome: {
          Dear: "DEAR",
          Brief:
            "We are delighted that you have chosen our hotel. On behalf of the entire team of the SEASHELLS, I extend a very warm welcome to you and trust that your stay with us will be pleasant and comfortable.",
          Continue: "Continue",
        },
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
        Language: "Language",
        Back: "Back",
        Navigation: "Navigation",
      },
    },
  },
});

export default i18n;
