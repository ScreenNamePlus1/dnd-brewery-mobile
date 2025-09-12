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
