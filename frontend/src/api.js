import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class YodlrApi {
  static async getAllUsers() {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      return res.data;
    } catch (error) {
      console.error('API Error:', error.response);
      let message = error.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getUserById(id) {
    try {
      const res = await axios.get(`${BASE_URL}/users/${id}`);
      return res.data;
    } catch (error) {
      console.error('API Error:', error.response);
      let message = error.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async addUser(data) {
    try {
      const res = await axios.post(`${BASE_URL}/users`, data);
      return res.data;
    } catch (error) {
      console.error('API Error:', error.response);
      let message = error.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async activateUser(id) {
    try {
      const user = await this.getUserById(id);
      const res = await axios.put(`${BASE_URL}/users/${id}`, {
        ...user,
        state: 'active',
      });
      return res.data;
    } catch (error) {
      console.error('API Error:', error.response);
      let message = error.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}

export default YodlrApi;
