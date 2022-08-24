const getNavigatorLanguage =
    navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          "en";

const dateOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
};

export { getNavigatorLanguage, dateOptions };
