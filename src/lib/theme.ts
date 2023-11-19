export const mutateStyles = (
  document: Document,
  variable: string,
  value: string
) => {
  document.documentElement.style.setProperty(variable, value);
};

export const mutateTheme = (
  document: Document,
  theme: (typeof themes)[number],
  themes = ["dark", "day", "night", "light"]
) => {
  themes.forEach((t) => {
    document.documentElement.classList.remove(`${t}`);
  });
  document.documentElement.classList.add(`${theme}`);
};

export const toggleHighContrast = (document: Document) => {
  document.documentElement.classList.toggle("high-contrast");
};

export const mutateFontFamily = (document: Document, value: string) => {
  mutateStyles(document, "--content-font-family", value);
};

export const mutateWidth = (document: Document, value: string) => {
  mutateStyles(document, "--max-element-width", value);
};
