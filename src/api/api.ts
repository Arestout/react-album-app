export const api = {
  get: async (path: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${path}`
    );
    return await response.json();
  },
};
