const getWindowWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export { getWindowWidth, openInNewTab };
