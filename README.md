# D&D Brewery - All Files in Order

## File 1: src/types/index.ts
```typescript
// Core types for D&D Brewery app

export interface Document {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StatBlock {
  name: string;
  type: string;
  ac: number;
  hp: string;
  speed: string;
  abilities: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  savingThrows?: string;
  skills?: string;
  damageResistances?: string;
  senses?: string;
  languages?: string;
  challenge?: string;
}

export interface SpellBlock {
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
}

export interface BrewerySettings {
  theme: 'light' | 'dark';
  fontSize: number;
  previewMode: 'split' | 'preview' | 'editor';
  autoSave: boolean;
}
```
**Commit:** `git add src/types/index.ts && git commit -m "Add types: Core TypeScript interfaces" && git push`

---

## File 2: src/styles/colors.ts
```typescript
export const colors = {
  // D&D Themed Colors
  parchment: '#F4F1E8',
  inkBlack: '#2C1810',
  burgundy: '#8B0000',
  gold: '#D4AF37',
  forestGreen: '#228B22',
  
  // UI Colors
  primary: '#8B0000',
  secondary: '#D4AF37',
  background: '#F4F1E8',
  surface: '#FFFFFF',
  text: '#2C1810',
  textSecondary: '#5D4E37',
  border: '#D2B48C',
  
  // Status Colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Editor Colors
  editorBackground: '#FAFAFA',
  editorText: '#333333',
  lineNumbers: '#999999',
  selection: '#B3D4FC',
};
```
**Commit:** `git add src/styles/colors.ts && git commit -m "Add styles: Color palette" && git push`

---

## File 3: src/styles/dndStyles.ts
```typescript
import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const dndStyles = StyleSheet.create({
  // Page Layout
  page: {
    backgroundColor: colors.parchment,
    padding: 16,
    minHeight: '100%',
  },
  
  // Typography
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.burgundy,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.burgundy,
    marginTop: 20,
    marginBottom: 12,
    fontFamily: 'serif',
  },
  
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.inkBlack,
    marginTop: 16,
    marginBottom: 8,
    fontFamily: 'serif',
  },
  
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.inkBlack,
    marginBottom: 8,
    fontFamily: 'serif',
  },
  
  // Stat Block Styles
  statBlock: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.burgundy,
    borderRadius: 8,
    padding: 12,
    marginVertical: 16,
  },
  
  statBlockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.burgundy,
    textAlign: 'center',
    marginBottom: 4,
  },
  
  statBlockSubtitle: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  
  statLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  
  statLabel: {
    fontWeight: 'bold',
    color: colors.inkBlack,
  },
  
  statValue: {
    color: colors.inkBlack,
  },
  
  // Abilities
  abilitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginVertical: 8,
  },
  
  abilityScore: {
    alignItems: 'center',
  },
  
  abilityName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  
  abilityValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.inkBlack,
  },
  
  abilityModifier: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  
  // Spell Block
  spellBlock: {
    backgroundColor: colors.surface,
    borderLeftWidth: 4,
    borderLeftColor: colors.forestGreen,
    padding: 12,
    marginVertical: 8,
  },
  
  spellTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.forestGreen,
    marginBottom: 4,
  },
  
  spellMeta: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  
  // Tables
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: 8,
  },
  
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  
  tableHeader: {
    backgroundColor: colors.burgundy,
    padding: 8,
  },
  
  tableHeaderText: {
    color: colors.surface,
    fontWeight: 'bold',
    fontSize: 12,
  },
  
  tableCell: {
    padding: 8,
    flex: 1,
  },
  
  tableCellText: {
    fontSize: 12,
    color: colors.inkBlack,
  },
});
```
**Commit:** `git add src/styles/dndStyles.ts && git commit -m "Add styles: D&D themed styling" && git push`

---

## File 4: src/utils/storage.ts
```typescript
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
```
**Commit:** `git add src/utils/storage.ts && git commit -m "Add utils: Local storage service" && git push`

---

## File 5: src/utils/markdownParser.ts
```typescript
export class MarkdownParser {
  // Parse D&D specific markdown extensions
  static parse(content: string): string {
    let parsed = content;

    // Parse stat blocks
    parsed = this.parseStatBlocks(parsed);
    
    // Parse spell blocks
    parsed = this.parseSpellBlocks(parsed);
    
    // Parse tables
    parsed = this.parseTables(parsed);
    
    return parsed;
  }

  private static parseStatBlocks(content: string): string {
    const statBlockRegex = /```statblock\n([\s\S]*?)\n```/g;
    
    return content.replace(statBlockRegex, (match, blockContent) => {
      const lines = blockContent.trim().split('\n');
      const stats: any = {};
      
      lines.forEach((line: string) => {
        if (line.includes(':')) {
          const [key, value] = line.split(':').map(s => s.trim());
          stats[key.toLowerCase()] = value;
        }
      });

      return `<StatBlock data={${JSON.stringify(stats)}} />`;
    });
  }

  private static parseSpellBlocks(content: string): string {
    const spellBlockRegex = /```spell\n([\s\S]*?)\n```/g;
    
    return content.replace(spellBlockRegex, (match, blockContent) => {
      const lines = blockContent.trim().split('\n');
      const spell: any = {};
      
      lines.forEach((line: string) => {
        if (line.includes(':')) {
          const [key, value] = line.split(':').map(s => s.trim());
          spell[key.toLowerCase().replace(' ', '')] = value;
        }
      });

      return `<SpellBlock data={${JSON.stringify(spell)}} />`;
    });
  }

  private static parseTables(content: string): string {
    const tableRegex = /\|(.+)\|\n\|(-+\|)+\n((\|.+\|\n?)+)/g;
    
    return content.replace(tableRegex, (match) => {
      const rows = match.trim().split('\n');
      const headers = rows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
      const dataRows = rows.slice(2).map(row => 
        row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
      );

      return `<Table headers={${JSON.stringify(headers)}} rows={${JSON.stringify(dataRows)}} />`;
    });
  }

  // Calculate ability modifiers
  static getModifier(score: number): string {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  }

  // Format challenge rating
  static formatCR(cr: string): string {
    const crValues: { [key: string]: string } = {
      '0': '0 (10 XP)',
      '1/8': '1/8 (25 XP)',
      '1/4': '1/4 (50 XP)',
      '1/2': '1/2 (100 XP)',
      '1': '1 (200 XP)',
      '2': '2 (450 XP)',
      '3': '3 (700 XP)',
      '4': '4 (1,100 XP)',
      '5': '5 (1,800 XP)',
    };
    
    return crValues[cr] || `${cr} (??? XP)`;
  }
}
```
**Commit:** `git add src/utils/markdownParser.ts && git commit -m "Add utils: Markdown parser with D&D extensions" && git push`

---

## File 6: src/components/MarkdownEditor.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../styles/colors';

interface MarkdownEditorProps {
  content: string;
  onContentChange: (content: string) => void;
  fontSize?: number;
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  content,
  onContentChange,
  fontSize = 14,
}) => {
  const [localContent, setLocalContent] = useState(content);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleTextChange = (text: string) => {
    setLocalContent(text);
    onContentChange(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TextInput
          style={[styles.textInput, { fontSize }]}
          value={localContent}
          onChangeText={handleTextChange}
          multiline
          placeholder="Start writing your D&D content...

# Monster Name
*Medium humanoid, lawful good*

**Armor Class** 15 (Chain Shirt)
**Hit Points** 58 (9d8 + 18)
**Speed** 30 ft.

```statblock
Name: Veteran
Type: Medium humanoid (human), any alignment
AC: 17
HP: 58 (9d8 + 18)
Speed: 30 ft.
STR: 16
DEX: 13
CON: 14
INT: 10
WIS: 11
CHA: 10
Skills: Athletics +5, Perception +2
Challenge: 3
```

Or create spells:

```spell
Name: Magic Missile
Level: 1
School: Evocation
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous
Description: You create three glowing darts of magical force.
```"
          placeholderTextColor={colors.textSecondary}
          textAlignVertical="top"
          autoCapitalize="sentences"
          autoCorrect={false}
          spellCheck={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.editorBackground,
  },
  
  scrollView: {
    flex: 1,
  },
  
  textInput: {
    flex: 1,
    padding: 16,
    color: colors.editorText,
    fontFamily: 'monospace',
    lineHeight: 20,
    minHeight: 500,
  },
});
```
**Commit:** `git add src/components/MarkdownEditor.tsx && git commit -m "Add component: Markdown editor with D&D templates" && git push`

---

## File 7: src/components/PreviewPane.tsx
```typescript
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { dndStyles } from '../styles/dndStyles';
import { colors } from '../styles/colors';
import { StatBlock } from './StatBlock';

interface PreviewPaneProps {
  content: string;
  fontSize?: number;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ 
  content, 
  fontSize = 14 
}) => {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentElement: string[] = [];
    let inStatBlock = false;
    let statBlockContent: string[] = [];
    let elementKey = 0;

    const flushCurrentElement = () => {
      if (currentElement.length > 0) {
        const text = currentElement.join('\n');
        if (text.trim()) {
          elements.push(
            <Text key={elementKey++} style={[dndStyles.body, { fontSize }]}>
              {renderInlineMarkdown(text)}
            </Text>
          );
        }
        currentElement = [];
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith('```statblock')) {
        flushCurrentElement();
        inStatBlock = true;
        statBlockContent = [];
        return;
      }

      if (line.startsWith('```') && inStatBlock) {
        inStatBlock = false;
        const statData = parseStatBlock(statBlockContent.join('\n'));
        elements.push(
          <StatBlock key={elementKey++} data={statData} />
        );
        return;
      }

      if (inStatBlock) {
        statBlockContent.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        flushCurrentElement();
        elements.push(
          <Text key={elementKey++} style={[dndStyles.h1, { fontSize: fontSize * 2 }]}>
            {line.substring(2)}
          </Text>
        );
      } else if (line.startsWith('## ')) {
        flushCurrentElement();
        elements.push(
          <Text key={elementKey++} style={[dndStyles.h2, { fontSize: fontSize * 1.6 }]}>
            {line.substring(3)}
          </Text>
        );
      } else if (line.startsWith('### ')) {
        flushCurrentElement();
        elements.push(
          <Text key={elementKey++} style={[dndStyles.h3, { fontSize: fontSize * 1.3 }]}>
            {line.substring(4)}
          </Text>
        );
      } else {
        currentElement.push(line);
      }
    });

    flushCurrentElement();
    return elements;
  };

  const renderInlineMarkdown = (text: string) => {
    // Simple bold and italic rendering
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Bold (we can't do actual bold in simple Text)
      .replace(/\*(.*?)\*/g, '$1');    // Italic
  };

  const parseStatBlock = (content: string): any => {
    const stats: any = {};
    const lines = content.split('\n');
    
    lines.forEach((line) => {
      if (line.includes(':')) {
        const [key, value] = line.split(':').map(s => s.trim());
        const cleanKey = key.toLowerCase().replace(/\s+/g, '');
        stats[cleanKey] = value;
      }
    });

    return stats;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={dndStyles.page}>
          {renderContent()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.parchment,
  },
  
  scrollView: {
    flex: 1,
  },
  
  content: {
    flexGrow: 1,
  },
});
```
**Commit:** `git add src/components/PreviewPane.tsx && git commit -m "Add component: Preview pane with markdown rendering" && git push`

---

## File 8: src/components/StatBlock.tsx
```typescript
import React from 'react';
import { View, Text } from 'react-native';
import { dndStyles } from '../styles/dndStyles';
import { MarkdownParser } from '../utils/markdownParser';

interface StatBlockProps {
  data: {
    name?: string;
    type?: string;
    ac?: string;
    hp?: string;
    speed?: string;
    str?: string;
    dex?: string;
    con?: string;
    int?: string;
    wis?: string;
    cha?: string;
    skills?: string;
    senses?: string;
    languages?: string;
    challenge?: string;
    [key: string]: any;
  };
}

export const StatBlock: React.FC<StatBlockProps> = ({ data }) => {
  const abilities = {
    str: parseInt(data.str || '10'),
    dex: parseInt(data.dex || '10'),
    con: parseInt(data.con || '10'),
    int: parseInt(data.int || '10'),
    wis: parseInt(data.wis || '10'),
    cha: parseInt(data.cha || '10'),
  };

  return (
    <View style={dndStyles.statBlock}>
      {/* Title */}
      <Text style={dndStyles.statBlockTitle}>
        {data.name || 'Unnamed Creature'}
      </Text>
      
      {/* Subtitle */}
      <Text style={dndStyles.statBlockSubtitle}>
        {data.type || 'Medium humanoid, neutral'}
      </Text>

      {/* Basic Stats */}
      <View style={dndStyles.statLine}>
        <Text style={dndStyles.statLabel}>Armor Class</Text>
        <Text style={dndStyles.statValue}>{data.ac || '10'}</Text>
      </View>

      <View style={dndStyles.statLine}>
        <Text style={dndStyles.statLabel}>Hit Points</Text>
        <Text style={dndStyles.statValue}>{data.hp || '1 (1d4)'}</Text>
      </View>

      <View style={dndStyles.statLine}>
        <Text style={dndStyles.statLabel}>Speed</Text>
        <Text style={dndStyles.statValue}>{data.speed || '30 ft.'}</Text>
      </View>

      {/* Ability Scores */}
      <View style={dndStyles.abilitiesRow}>
        {Object.entries(abilities).map(([ability, score]) => (
          <View key={ability} style={dndStyles.abilityScore}>
            <Text style={dndStyles.abilityName}>
              {ability.toUpperCase()}
            </Text>
            <Text style={dndStyles.abilityValue}>
              {score}
            </Text>
            <Text style={dndStyles.abilityModifier}>
              ({MarkdownParser.getModifier(score)})
            </Text>
          </View>
        ))}
      </View>

      {/* Additional Stats */}
      {data.skills && (
        <View style={dndStyles.statLine}>
          <Text style={dndStyles.statLabel}>Skills</Text>
          <Text style={dndStyles.statValue}>{data.skills}</Text>
        </View>
      )}

      {data.senses && (
        <View style={dndStyles.statLine}>
          <Text style={dndStyles.statLabel}>Senses</Text>
          <Text style={dndStyles.statValue}>{data.senses}</Text>
        </View>
      )}

      {data.languages && (
        <View style={dndStyles.statLine}>
          <Text style={dndStyles.statLabel}>Languages</Text>
          <Text style={dndStyles.statValue}>{data.languages}</Text>
        </View>
      )}

      {data.challenge && (
        <View style={dndStyles.statLine}>
          <Text style={dndStyles.statLabel}>Challenge</Text>
          <Text style={dndStyles.statValue}>
            {MarkdownParser.formatCR(data.challenge)}
          </Text>
        </View>
      )}
    </View>
  );
};
```
**Commit:** `git add src/components/StatBlock.tsx && git commit -m "Add component: D&D stat block renderer" && git push`

---

## File 9: src/screens/HomeScreen.tsx
```typescript
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
