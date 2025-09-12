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
          placeholder={`Start writing your D&D content...

# Monster Name
*Medium humanoid, lawful good*

**Armor Class** 15 (Chain Shirt)
**Hit Points** 58 (9d8 + 18)
**Speed** 30 ft.

\`\`\`statblock
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
\`\`\`

Or create spells:

\`\`\`spell
Name: Magic Missile
Level: 1
School: Evocation
Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous
Description: You create three glowing darts of magical force.
\`\`\``}
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