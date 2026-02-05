# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a command-line flashcard application for learning foreign languages (Croatian, Greek, and Spanish). The app uses an interactive terminal interface to quiz users on vocabulary and phrases.

## Running the Application

```bash
node flashcards.js
```

The application will start an interactive menu where you can:
- Select a language unit, chapter, or lesson
- Practice all phrases, hard phrases only, or phrases you're working on
- Choose whether to see English or foreign language prompts

## Code Architecture

### Core Structure

- **flashcards.js**: Main application controller with menu navigation and quiz logic
- **croatian.js / greek.js / spanish.js**: Language data files containing phrase collections
- **language constant**: Set at the top of flashcards.js to specify which language file to use (default: 'spanish')

### Data Model

Each language file exports an `allPhrases` object structured as:

```javascript
{
  custom: { chapter1: { name, lesson1: [...phrases] } },
  unit1: {
    name: "Unit Name",
    chapter1: {
      name: "Chapter Name",
      showEnglish: true/false,  // Optional: controls default display
      lesson1: [...phrases]
    }
  }
}
```

Phrase objects contain:
- `foreign`: The foreign language text (supports `|` for line breaks)
- `english`: The English translation
- `hard`: Boolean flag (persisted directly in the language file)
- `workingOn`: Boolean flag for phrases in active practice
- `showEnglish`: Optional override for display direction

### Key Implementation Details

**Phrase Selection Algorithm**:
- Every 3rd phrase is a previously-wrong phrase (from `wrongPhrases`)
- Otherwise randomly selects from current lesson/unit
- Can show unseen phrases on demand

**Navigation**:
- Supports prev/next lesson navigation with automatic boundary detection
- Calculates `prevUnit/prevChapter/prevLesson` and `nextUnit/nextChapter/nextLesson`

**Hard Phrases**:
- Marked with `hard: true` property directly in the language file (e.g., spanish.js)
- User can mark phrases as hard during practice (H key)
- When marked, `markPhraseAsHard()` modifies the source file to add `hard: true` to the phrase object
- Changes are persisted immediately to the file system

**Duplicate Detection**:
- `checkDupes()` runs at startup to ensure no duplicate foreign phrases exist across all units

## Development Commands

```bash
# Format code
npx prettier --write .

# Install dependencies
pnpm install
```

## Adding New Content

When adding new phrases or lessons:

1. Add to the appropriate language file's `allPhrases` structure
2. Follow the existing pattern for unit/chapter/lesson hierarchy
3. Use `hard: true` for phrases you want to flag as difficult from the start
4. Use `showEnglish: false` at chapter level to default to showing foreign language first
5. Run the app to verify no duplicate errors from `checkDupes()`
