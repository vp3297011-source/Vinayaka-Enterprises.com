(() => {
  const button = document.getElementById("language");
  let language = "en";
  try { language = localStorage.getItem("ve-language") || "en"; } catch (_) {}
  function setLanguage(next) {
    language = next;
    window.siteLanguage = language;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-en][data-kn]").forEach(element => {
      element.textContent = element.dataset[language];
    });
    if (button) button.textContent = language === "en" ? "ಕನ್ನಡ" : "English";
    try { localStorage.setItem("ve-language", language); } catch (_) {}
    window.dispatchEvent(new CustomEvent("site-language-change"));
  }
  if (button) button.addEventListener("click", () => setLanguage(language === "en" ? "kn" : "en"));
  setLanguage(language);
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
