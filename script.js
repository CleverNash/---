const translations = {
  ky: {
    main_title: "Кыргызстандын маданияты жана салттары",
    culture_section: "Маданият",
    culture_intro: "Кыргыз маданияты — бул Манас эпосу, боз үй, улуттук кийимдер жана салттуу тамактар.",
    tradition_section: "Салттар",
    tradition_intro: "Кыргыз элинин салттары төрөлүүдөн тартып карыганга чейин коштоп жүрөт.",
    read_more: "Толугураак",
    contacts: "Байланыш: info@example.com | +996 555 123 456"
  },
  ru: {
    // Русский уже в HTML — не нужен перевод
  },
  en: {
    main_title: "Culture and Traditions of Kyrgyzstan",
    culture_section: "Culture",
    culture_intro: "Kyrgyz culture includes the Manas epic, yurts, traditional clothing and cuisine.",
    tradition_section: "Traditions",
    tradition_intro: "Traditions accompany a Kyrgyz person from birth to old age.",
    read_more: "Read more",
    contacts: "Contacts: info@example.com | +996 555 123 456"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");

    if (lang === "ru") {
      // Вернуть текст по умолчанию
      if (el.dataset.default) {
        el.textContent = el.dataset.default;
      }
    } else if (translations[lang] && translations[lang][key]) {
      if (!el.dataset.default) {
        el.dataset.default = el.textContent;
      }
      el.textContent = translations[lang][key];
    }
  });
}
