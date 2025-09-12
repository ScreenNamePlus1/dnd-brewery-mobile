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
