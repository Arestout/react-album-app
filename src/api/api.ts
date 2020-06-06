import axios from 'axios';

export const api = {
  get: async (path: string) => {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/${path}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
