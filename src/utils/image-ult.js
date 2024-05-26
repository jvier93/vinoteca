function getImageUrl(name) {
  return new URL(`../assets/wines/${name}`, import.meta.url).href;
}

export { getImageUrl };
