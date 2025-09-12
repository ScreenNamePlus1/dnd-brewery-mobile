import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import { Document } from '../types';
import { StorageService } from '../utils/storage';
import { colors } from '../styles/colors';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadDocuments();
    
    const unsubscribe = navigation.addListener('focus', () => {
      loadDocuments();
    });

    return unsubscribe;
  }, [navigation]);

  const loadDocuments = async () => {
    try {
      const docs = await StorageService.getAllDocuments();
      setDocuments(docs.sort((a, b) => 
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      ));
    } catch (error) {
      console.error('Error loading documents:', error);
    }
  };

  const createNewDocument = () => {
    const newDoc: Document = {
      id: Date.now().toString(),
      title: 'New Document',
      content: '# New D&D Document\n\nStart writing your homebrew content here...',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    navigation.navigate('Editor', { document: newDoc });
  };

  const deleteDocument = (document: Document) => {
    Alert.alert(
      'Delete Document',
      `Are you sure you want to delete "${document.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await StorageService.deleteDocument(document.id);
              loadDocuments();
            } catch (error) {
              console.error('Error deleting document:', error);
            }
          },
        },
      ]
    );
  };

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDocument = ({ item }: { item: Document }) => (
    <TouchableOpacity
      style={styles.documentItem}
      onPress={() => navigation.navigate('Editor', { document: item })}
      onLongPress={() => deleteDocument(item)}
    >
      <View style={styles.documentHeader}>
        <Text style={styles.documentTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.documentDate}>
          {item.updatedAt.toLocaleDateString()}
        </Text>
      </View>
      <Text style={styles.documentPreview} numberOfLines={2}>
        {item.content.replace(/[#*`]/g, '').substring(0, 100)}...
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>D&D Brewery</Text>
        <TouchableOpacity style={styles.newButton} onPress={createNewDocument}>
          <Text style={styles.newButtonText}>+ New</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search documents..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={colors.textSecondary}
      />

      <FlatList
        data={filteredDocuments}
        renderItem={renderDocument}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No documents yet. Create your first homebrew!
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    backgroundColor: colors.primary,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.surface,
  },

  newButton: {
    backgroundColor: colors.gold,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  newButtonText: {
