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
