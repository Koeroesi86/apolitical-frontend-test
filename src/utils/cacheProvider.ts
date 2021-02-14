export default {
  get: async (key) => {
    const stored = sessionStorage.getItem(`url-${encodeURIComponent(key)}`);
    return stored ? JSON.parse(stored) : undefined;
  },
  set: async (key, value) => {
    sessionStorage.setItem(`url-${encodeURIComponent(key)}`, JSON.stringify(value));
  }
}