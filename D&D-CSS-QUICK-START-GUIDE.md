# D&D CSS Quick-Start Guide 🚀

## ⚡ 5-Minute Setup

### Step 1: Download CSS Files
You'll need these **separate CSS files**:
1. **`phb-enhanced-mobile.css`** - Main D&D styling (required)
2. **`dnd-content-types.css`** - Specialized content blocks (optional)

### Step 2: Install in Obsidian
1. **Open Obsidian** → **Settings** ⚙️
2. **Appearance** → **CSS snippets** 
3. **Open snippets folder** 📁
4. **Copy both CSS files** into the folder
5. **Refresh** and **toggle ON** both snippets

### Step 3: Create Your First D&D Document
```markdown
# Session 1: The Tavern

<p class="drop-cap">The adventurers meet in a smoky tavern...</p>

<div class="adventure-hook">
<div class="adventure-hook-title">The Missing Merchant</div>
A local trader hasn't returned from his weekly trip to the next village. 
His daughter offers 100 gold to find him.
</div>
```

**🎉 That's it! You're ready to create authentic D&D content!**

---

## 🎯 Essential Content Types

### **Adventure Hooks** 🗡️
```html
<div class="adventure-hook">
<div class="adventure-hook-title">Hook Title</div>
Your adventure hook content here...
</div>
```

### **Random Tables** 🎲
```html
<div class="random-table">
<div class="random-table-title">Random Encounters</div>

| d20 | Encounter |
|-----|-----------|
| 1-5 | Bandits |
| 6-10 | Wolves |
</div>
```

### **NPCs** 👤
```html
<div class="npc-quick">
<div class="npc-name">Thorin Ironbeard</div>
<div class="npc-details">
<span class="npc-detail-label">Race:</span> Dwarf
<span class="npc-detail-label">Class:</span> Fighter
<span class="npc-detail-label">Location:</span> The Prancing Pony
</div>
<p>A gruff but friendly innkeeper with stories to tell.</p>
</div>
```

### **Quests** ⚔️
```html
<div class="quest">
<div class="quest-title">Rescue the Princess</div>
<div class="quest-status active">Active</div>
<p>The princess has been captured by orcs!</p>
</div>
```
Status options: `active`, `completed`, `failed`

### **Combat Encounters** ⚡
```html
<div class="encounter">
<div class="encounter-title">Goblin Ambush</div>
<div class="encounter-difficulty medium">Medium</div>
<p>3 goblins leap from the bushes!</p>
</div>
```
Difficulty options: `easy`, `medium`, `hard`, `deadly`

---

## 📝 Quick Reference Templates

### **Complete Session Template**
```markdown
# Session 3: Into the Forest

<p class="drop-cap">Our heroes venture into the Whispering Woods...</p>

<div class="session-recap">
<div class="session-recap-title">Last Time</div>
The party discovered clues about the missing villagers...
</div>

<div class="location">
<div class="location-name">The Whispering Woods</div>
Ancient trees stretch endlessly. Strange sounds echo through the mist.
</div>

<div class="encounter">
<div class="encounter-title">Forest Guardians</div>
<div class="encounter-difficulty hard">Hard</div>
<p>2 owlbears protect their territory</p>
</div>

<div class="treasure">
<div class="treasure-title">Hidden Cache</div>
<p>Behind the waterfall: 200 gp, Potion of Healing, +1 Dagger</p>
</div>
```

### **Campaign Planning Template**
```markdown
# Campaign: Curse of the Blood Moon

<div class="campaign-note">
<div class="campaign-note-title">Main Plot</div>
Ancient curse awakens every 100 years. Heroes must find three artifacts.
</div>

<div class="random-table">
<div class="random-table-title">Random Village Events</div>

| d6 | Event |
|----|-------|
| 1-2 | Festival in town square |
| 3-4 | Merchant caravan arrives |
| 5-6 | Strange lights in the sky |
</div>

<div class="npc-quick">
<div class="npc-name">Mayor Blackwood</div>
<div class="npc-details">
<span class="npc-detail-label">Attitude:</span> Helpful but secretive
<span class="npc-detail-label">Secret:</span> Knows about the curse
</div>
</div>
```

---

## 🎨 Styling Tips

### **Colors & Themes**
Each content type has its own color scheme:
- **Adventure Hooks**: Brown/Gold (adventure theme)
- **Random Tables**: Purple (magical/mysterious)
- **NPCs**: Tan/Brown (character focus)
- **Locations**: Green (natural/environmental)
- **Quests**: Orange/Gold (important/heroic)
- **Combat**: Red (danger/action)
- **Treasure**: Gold (valuable/shiny)
- **Session Recaps**: Blue/Purple (memory/story)
- **Campaign Notes**: Light brown (planning/notes)

### **Mobile-First Design**
- All elements **automatically resize** for mobile
- **Touch-friendly** with larger tap targets
- **Performance optimized** for smooth scrolling

### **Print-Ready**
- All content **prints beautifully**
- **Page break** controls included
- **High-quality** PDF export

---

## 🔧 Common Issues & Fixes

### **CSS Not Working?**
1. ✅ Check that both CSS files are in the snippets folder
2. ✅ Make sure they're **toggled ON** in settings
3. ✅ Try **restarting Obsidian**
4. ✅ Check for **syntax errors** (missing closing tags)

### **Fonts Look Wrong?**
- **Google Fonts need internet** - check connection
- **Mobile may show different fonts** - this is normal
- **Clear browser cache** if fonts don't load

### **Elements Too Big/Small?**
- Edit the **font-size** values in CSS
- **Mobile auto-scales** - test on actual device
- Use **browser zoom** for quick adjustments

### **Print Issues?**
- **Enable background graphics** in print settings
- **Desktop Obsidian** gives better PDF results
- Try **Print to PDF** instead of Export

---

## ⚙️ Modular CSS System

### **How Multiple CSS Files Work**
```
phb-enhanced-mobile.css     (Base D&D styling)
    ↓
dnd-content-types.css       (Specialized blocks)
    ↓ 
your-custom.css             (Your modifications)
```

### **Benefits of Separate Files**
- ✅ **Mix and match** features
- ✅ **Easy updates** without losing customizations
- ✅ **Better organization** for different campaigns
- ✅ **Performance** - only load what you need

### **Loading Order Matters**
1. **Base CSS first** (phb-enhanced-mobile.css)
2. **Extensions second** (dnd-content-types.css)
3. **Custom overrides last** (your-custom.css)

---

## 🎲 Ready-Made Examples

### **One-Shot Adventure**
```markdown
# The Goblin's Gambit

<div class="adventure-hook">
<div class="adventure-hook-title">Trouble at the Crossroads</div>
Goblins have been attacking merchant carav
