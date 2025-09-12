import AsyncStorage from '@react-native-async-storage/async-storage';
import { Document, BrewerySettings } from '../types';

const DOCUMENTS_KEY = '@dnd_brewery_documents';
const SETTINGS_KEY = '@dnd_brewery_settings';

export const StorageService = {
  // Document Management
  async saveDocument(document: Document): Promise<void> {
    try {
      const documents = await this.getAllDocuments();
      const updatedDocuments = documents.filter(d => d.id !== document.id);
      updatedDocuments.push(document);
      await AsyncStorage.setItem(DOCUMENTS_KEY, JSON.stringify(updatedDocuments));
    } catch (error) {
      console.error('Error saving document:', error);
      throw error;
    }
  },

  async getAllDocuments(): Promise<Document[]> {
    try {
      const documentsJson = await AsyncStorage.getItem(DOCUMENTS_KEY);
      if (!documentsJson) return [];
      
      const documents = JSON.parse(documentsJson);
      return documents.map((doc: any) => ({
        ...doc,
        createdAt: new Date(doc.createdAt),
        updatedAt: new Date(doc.updatedAt),
      }));
    } catch (error) {
      console.error('Error loading documents:', error);
      return [];
    }
  },

  async getDocument(id: string): Promise<Document | null> {
    try {
      const documents = await this.getAllDocuments();
      return documents.find(doc => doc.id === id) || null;
    } catch (error) {
      console.error('Error loading document:', error);
      return null;
    }
  },

  async deleteDocument(id: string): Promise<void> {
    try {
      const documents = await this.getAllDocuments();
      const filteredDocuments = documents.filter(doc => doc.id !== id);
      await AsyncStorage.setItem(DOCUMENTS_KEY, JSON.stringify(filteredDocuments));
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  },

  // Settings Management
  async saveSettings(settings: BrewerySettings): Promise<void> {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
      throw error;
    }
  },

  async getSettings(): Promise<BrewerySettings> {
    try {
      const settingsJson = await AsyncStorage.getItem(SETTINGS_KEY);
      if (!settingsJson) {
        return {
          theme: 'light',
          fontSize: 14,
          previewMode: 'split',
          autoSave: true,
        };
      }
      return JSON.parse(settingsJson);
    } catch (error) {
      console.error('Error loading settings:', error);
      return {
        theme: 'light',
        fontSize: 14,
        previewMode: 'split',
        autoSave: true,
      };
    }
  },

  // Utility
  async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([DOCUMENTS_KEY, SETTINGS_KEY]);
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  },
};
