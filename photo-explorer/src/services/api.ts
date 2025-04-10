import axios from 'axios';
import logger from './logger';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  fetchUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch users', error);
      throw error;
    }
  },
  fetchUser: async (id: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch user ${id}`, error);
      throw error;
    }
  },
  fetchAlbums: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/albums`);
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch albums', error);
      throw error;
    }
  },
  fetchUserAlbums: async (userId: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/albums?userId=${userId}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch albums for user ${userId}`, error);
      throw error;
    }
  },
  fetchAlbum: async (id: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/albums/${id}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch album ${id}`, error);
      throw error;
    }
  },
  fetchPhotos: async (albumId: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/photos?albumId=${albumId}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch photos for album ${albumId}`, error);
      throw error;
    }
  },
  fetchPhoto: async (id: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/photos/${id}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch photo ${id}`, error);
      throw error;
    }
  },
  updatePhoto: async (id: string, data: { title: string }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/photos/${id}`, data);
      return response.data;
    } catch (error) {
      logger.error(`Failed to update photo ${id}`, error);
      throw error;
    }
  },
};
