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
