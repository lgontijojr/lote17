const getWindowWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentScrollPosition = () => {
  const { scrollY } = window;

  return scrollY;
};

export { getWindowWidth, openInNewTab, getCurrentScrollPosition };
