import axios from 'axios';

const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB"

export async function getPosts() {
    try {
      const { data } = await axios.get(`${ BASE }/posts`);
      return data;
    } catch (error) {
      throw error;
    }
  }