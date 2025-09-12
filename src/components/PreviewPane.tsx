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
