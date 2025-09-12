# Complete Homebrewery to Obsidian D&D CSS Conversion Guide

This guide shows you how to convert **every** Homebrewery markdown command into proper HTML for your Obsidian D&D CSS.

---

## Basic Typography

### Headings (Same as Homebrewery)
```markdown
# Chapter Title (Large, centered, with bottom border)
## Section Header (Medium, with gold underline)  
### Subsection (Smaller, with thin underline)
#### Feature Name (Italic, brown text)
##### Small Header (Italic, smaller)
###### Tiny Header (Italic, smallest)
```

### Paragraphs
```markdown
Regular paragraph text. First line will be indented automatically (D&D book style).

New paragraphs are indented. Paragraphs after headings are NOT indented.
```

### Text Styling
```markdown
**Bold text** - Shows in brown D&D color
*Italic text* - Standard italic
***Bold and italic*** - Both effects
~~Strikethrough~~
```

---

## Homebrewery Special Elements → Obsidian HTML

### 1. Monster/NPC Stat Blocks

**Homebrewery:**
```markdown
___
> ## Ancient Red Dragon
> *Huge dragon, chaotic evil*
> ___
> - **Armor Class** 22 (Natural Armor)
> - **Hit Points** 546 (28d20 + 252)
> - **Speed** 40 ft., climb 40 ft., fly 80 ft.
>___
>|STR|DEX|CON|INT|WIS|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|30 (+10)|10 (+0)|29 (+9)|18 (+4)|15 (+2)|23 (+6)|
>___
> - **Saving Throws** Dex +7, Con +16, Wis +9, Cha +13
> - **Skills** Perception +16, Stealth +7
> - **Damage Immunities** Fire
> - **Senses** Blindsight 60 ft., Darkvision 120 ft., Passive Perception 26
> - **Languages** Common, Draconic
> - **Challenge** 17 (18,000 XP)
> ___
> ***Legendary Resistance (3/Day).*** If the dragon fails a saving throw, it can choose to succeed instead.
> 
> ### Actions
> ***Multiattack.*** The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
>
> ***Bite.*** *Melee Weapon Attack:* +17 to hit, reach 15 ft., one target. *Hit:* 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.
```

**Obsidian HTML:**
```html
<div class="stat-block">
<h4>Ancient Red Dragon</h4>
<p><em>Huge dragon, chaotic evil</em></p>
<hr>
<p><strong>Armor Class</strong> 22 (Natural Armor)<br>
<strong>Hit Points</strong> 546 (28d20 + 252)<br>
<strong>Speed</strong> 40 ft., climb 40 ft., fly 80 ft.</p>
<hr>

<table>
<tr><th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th></tr>
<tr><td>30 (+10)</td><td>10 (+0)</td><td>29 (+9)</td><td>18 (+4)</td><td>15 (+2)</td><td>23 (+6)</td></tr>
</table>

<hr>
<p><strong>Saving Throws</strong> Dex +7, Con +16, Wis +9, Cha +13<br>
<strong>Skills</strong> Perception +16, Stealth +7<br>
<strong>Damage Immunities</strong> Fire<br>
<strong>Senses</strong> Blindsight 60 ft., Darkvision 120 ft., Passive Perception 26<br>
<strong>Languages</strong> Common, Draconic<br>
<strong>Challenge</strong> 17 (18,000 XP)</p>
<hr>
<p><strong><em>Legendary Resistance (3/Day).</em></strong> If the dragon fails a saving throw, it can choose to succeed instead.</p>

<h5>Actions</h5>
<p><strong><em>Multiattack.</em></strong> The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>
<p><strong><em>Bite.</em></strong> <em>Melee Weapon Attack:</em> +17 to hit, reach 15 ft., one target. <em>Hit:</em> 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.</p>
</div>
```

### 2. Spell Descriptions

**Homebrewery:**
```markdown
#### Fireball
*3rd-level evocation*
___
- **Casting Time:** 1 action
- **Range:** 150 feet  
- **Components:** V, S, M (a tiny ball of bat guano and sulfur)
- **Duration:** Instantaneous

A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.
```

**Obsidian HTML:**
```html
<div class="spell">
<div class="spell-title">Fireball</div>
<p><em>3rd-level evocation</em></p>
<p><strong>Casting Time:</strong> 1 action<br>
<strong>Range:</strong> 150 feet<br>
<strong>Components:</strong> V, S, M (a tiny ball of bat guano and sulfur)<br>
<strong>Duration:</strong> Instantaneous</p>
<p>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.</p>
</div>
```

### 3. Class Features/Abilities

**Homebrewery:**
```markdown
#### Action Surge
*Fighter feature*

Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.
```

**Obsidian HTML:**
```html
<div class="feature">
<div class="feature-title">Action Surge</div>
<p><em>Fighter feature</em></p>
<p>Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.</p>
</div>
```

### 4. Magic Items

**Homebrewery:**
```markdown
#### +1 Longsword
*Weapon (longsword), uncommon*

You have a +1 bonus to attack and damage rolls made with this magic weapon.
```

**Obsidian HTML:**
```html
<div class="magic-item">
<div class="magic-item-title">+1 Longsword</div>
<p><em>Weapon (longsword), uncommon</em></p>
<p>You have a +1 bonus to attack and damage rolls made with this magic weapon.</p>
</div>
```

### 5. Read-Aloud/Descriptive Text

**Homebrewery:**
```markdown
> The ancient tower looms before you, its weathered stones covered in twisted vines. A sense of foreboding fills the air as you approach the massive oak doors.
```

**Obsidian HTML:**
```html
<div class="note">
<p>The ancient tower looms before you, its weathered stones covered in twisted vines. A sense of foreboding fills the air as you approach the massive oak doors.</p>
</div>
```

### 6. Dialogue/NPC Speech

**Homebrewery:**
```markdown
> *"Welcome, travelers! I am Bartholomew, keeper of this humble inn. What brings you to our fair village?"*
```

**Obsidian HTML:**
```html
<div class="note">
<p><em>"Welcome, travelers! I am Bartholomew, keeper of this humble inn. What brings you to our fair village?"</em></p>
</div>
```

### 7. Important Information Boxes

**Homebrewery:**
```markdown
> ##### Variant Rule: Flanking
> When a creature and at least one of its allies are adjacent to an enemy and on opposite sides or corners of the enemy's space, they flank that enemy, and each of them has advantage on melee attack rolls against that enemy.
```

**Obsidian HTML:**
```html
<div class="sidebar">
<h5>Variant Rule: Flanking</h5>
<p>When a creature and at least one of its allies are adjacent to an enemy and on opposite sides or corners of the enemy's space, they flank that enemy, and each of them has advantage on melee attack rolls against that enemy.</p>
</div>
```

### 8. Tables (Work the Same)

**Both Homebrewery and Obsidian:**
```markdown
| Level | Proficiency Bonus | Features |
|:-----:|:-----------------:|:---------|
| 1st   | +2                | Fighting Style, Second Wind |
| 2nd   | +2                | Action Surge (one use) |
| 3rd   | +2                | Martial Archetype |
```

### 9. Lists (Work the Same)

**Both:**
```markdown
- Unordered list item
- Another item
  - Nested item
  - Another nested item

1. Ordered list item
2. Second item
3. Third item
```

---

## Special Homebrewery Commands → Obsidian Equivalents

### Drop Caps

**Homebrewery:**
```markdown
{{ 
T
}}he ancient prophecy speaks of a chosen one...
```

**Obsidian:**
```html
<p class="drop-cap">The ancient prophecy speaks of a chosen one...</p>
```

### Column Breaks

**Homebrewery:**
```markdown
\columnbreak
```

**Obsidian:**
```html
<div class="page-break"></div>
```

### Page Breaks

**Homebrewery:**
```markdown
\pagebreak
```

**Obsidian:**
```html
<div class="page-break"></div>
```

### Wide Tables

**Homebrewery:**
```markdown
##### Wide Magic Items Table
{{ 
| d100  | Magic Item | Rarity |
|:-----:|:-----------|:-------|
| 01-50 | Potion of Healing | Common |
| 51-85 | +1 Weapon | Uncommon |
| 86-00 | +2 Armor | Rare |
}}
```

**Obsidian:**
```html
<div class="wide">
<h5>Wide Magic Items Table</h5>

| d100  | Magic Item | Rarity |
|:-----:|:-----------|:-------|
| 01-50 | Potion of Healing | Common |
| 51-85 | +1 Weapon | Uncommon |
| 86-00 | +2 Armor | Rare |
</div>
```

---

## Complete Conversion Workflow

### Step 1: Copy from Homebrewery
1. Copy your Homebrewery markdown
2. Paste into a text editor

### Step 2: Find and Replace
Use these find/replace patterns:

**Monster Stat Blocks:**
- Find: `___\n> ## `
- Replace: `<div class="stat-block">\n<h4>`

**Spell Blocks:**
- Find: `#### ([^\n]+)\n\*([^*]+)\*\n___`
- Replace: `<div class="spell">\n<div class="spell-title">$1</div>\n<p><em>$2</em></p>`

**Simple Blockquotes:**
- Find: `^> ([^#].*)`
- Replace: `<div class="note">\n<p>$1</p>\n</div>`

### Step 3: Manual Cleanup
- Add closing `</div>` tags
- Convert bullet lists to `<strong>` formatting
- Add `<hr>` dividers in stat blocks
- Convert tables to HTML if needed

### Step 4: Add Special Classes
- Wrap class features in `<div class="feature">`
- Wrap magic items in `<div class="magic-item">`
- Add `class="drop-cap"` to first paragraphs

---

## Quick Reference

| Homebrewery Element | Obsidian Class |
|:-------------------|:---------------|
| Monster stat block | `.stat-block` |
| Spell description | `.spell` |
| Class feature | `.feature` |
| Magic item | `.magic-item` |
| Read-aloud text | `.note` |
| Important info box | `.sidebar` |
| Drop cap | `.drop-cap` |
| Wide content | `.wide` |
| Page break | `.page-break` |
| No page break | `.no-break` |

---

## Common Mistakes to Avoid

1. **Don't use regular blockquotes** (`>`) for stat blocks
2. **Always close your HTML tags** (`</div>`)
3. **Use proper heading levels** (h4 for creature names, h5 for actions)
4. **Include the CSS classes** or styling won't work
5. **Test frequently** - convert small sections at a time

This should cover 95% of all Homebrewery content conversion to your Obsidian D&D CSS!
