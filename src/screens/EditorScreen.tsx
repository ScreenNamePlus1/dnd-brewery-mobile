import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import { Document, BrewerySettings } from '../types';
import { StorageService } from '../utils/storage';
import { MarkdownEditor } from '../components/MarkdownEditor';
import { PreviewPane } from '../components/PreviewPane';
import { colors } from '../styles/colors';

interface EditorScreenProps {
  navigation: any;
  route: {
    params: {
      document: Document;
    };
  };
}

export const EditorScreen: React.FC<EditorScreenProps> = ({
  navigation,
  route,
}) => {
  const [document, setDocument] = useState<Document>(route.params.document);
  const [settings, setSettings] = useState<BrewerySettings | null>(null);
  const [viewMode, setViewMode] = useState<'editor' | 'preview' | 'split'>('split');
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(document.title);

  useEffect(() => {
    loadSettings();
    
    // Auto-save every 30 seconds
    const autoSaveInterval = setInterval(() => {
      if (settings?.autoSave) {
        saveDocument();
      }
    }, 30000);

    return () => clearInterval(autoSaveInterval);
  }, [settings?.autoSave]);

  const loadSettings = async () => {
    try {
      const userSettings = await StorageService.getSettings();
      setSettings(userSettings);
      setViewMode(userSettings.previewMode);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const saveDocument = async () => {
    try {
      const updatedDoc: Document = {
        ...document,
        updatedAt: new Date(),
      };
      await StorageService.saveDocument(updatedDoc);
      setDocument(updatedDoc);
    } catch (error) {
      console.error('Error saving document:', error);
      Alert.alert('Error', 'Failed to save document');
    }
  };

  const handleContentChange = (content: string) => {
    setDocument(prev => ({ ...prev, content }));
  };

  const handleTitleSave = async () => {
    if (tempTitle.trim()) {
      const updatedDoc = { ...document, title: tempTitle.trim() };
      setDocument(updatedDoc);
      await StorageService.saveDocument(updatedDoc);
    }
    setIsEditing(false);
  };

  const toggleViewMode = () => {
    const modes: Array<'editor' | 'preview' | 'split'> = ['split', 'editor', 'preview'];
    const currentIndex = modes.indexOf(viewMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setViewMode(nextMode);
  };

  const renderContent = () => {
    const screenWidth = Dimensions.get('window').width;
    
    switch (viewMode) {
      case 'editor':
        return (
          <MarkdownEditor
            content={document.content}
            onContentChange={handleContentChange}
            fontSize={settings?.fontSize || 14}
          />
        );
      
      case 'preview':
        return (
          <PreviewPane
            content={document.content}
            fontSize={settings?.fontSize || 14}
          />
        );
      
      case 'split':
      default:
        return (
          <View style={styles.splitView}>
            <View style={[styles.splitPane, { width: screenWidth / 2 }]}>
              <MarkdownEditor
                content={document.content}
                onContentChange={handleContentChange}
                fontSize={settings?.fontSize || 14}
              />
            </View>
            <View style={[styles.splitPane, { width: screenWidth / 2 }]}>
              <PreviewPane
                content={document.content}
                fontSize={settings?.fontSize || 14}
              />
            </View>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            saveDocument();
            navigation.goBack();
          }}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          {isEditing ? (
            <TextInput
              style={styles.titleInput}
              value={tempTitle}
              onChangeText={setTempTitle}
              onSubmitEditing={handleTitleSave}
              onBlur={handleTitleSave}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Text style={styles.title} numberOfLines={1}>
                {document.title}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.viewModeButton} onPress={toggleViewMode}>
          <Text style={styles.viewModeText}>
            {viewMode === 'split' ? '⚌' : viewMode === 'editor' ? '✎' : '👁'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {renderContent()}
      </View>

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>
          Last saved: {document.updatedAt.toLocaleTimeString()}
        </Text>
        <Text style={styles.statusText}>
          {document.content.length} chars
        </Text>
      </View>
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
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  backButton: {
    padding: 8,
  },

  backButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: 'bold',
  },

  titleContainer: {
    flex: 1,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.surface,
    textAlign: 'center',
  },

  titleInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.surface,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 8,
    borderRadius: 4,
  },

  viewModeButton: {
    padding: 8,
    backgroundColor: colors.gold,
    borderRadius: 8,
  },

  viewModeText: {
    fontSize: 18,
    color: colors.inkBlack,
  },

  content: {
    flex: 1,
  },

  splitView: {
    flex: 1,
    flexDirection: 'row',
  },

  splitPane: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },

  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  statusText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});