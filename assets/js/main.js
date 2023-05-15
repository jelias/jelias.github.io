const runCheckColorMode = (fn) => {
  if (!window.matchMedia) {
    return;
  }

  const query = window.matchMedia("(prefers-color-scheme: dark)");

  fn(query.matches);

  query.addEventListener("change", (event) => fn(event.matches));
};

runCheckColorMode((isDarkMode) => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
});
