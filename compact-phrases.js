#!/usr/bin/env node

/**
 * Find all phrases that have been split across multiple lines and merge them into a single line
 * if the resulting line is <= 100 characters.
 */

import { readFileSync, writeFileSync } from 'fs';

const filename = process.argv[2];
if (!filename) {
  console.error('Usage: node compact-phrases.js <filename>');
  process.exit(1);
}

const content = readFileSync(filename, 'utf8');
const lines = content.split('\n');

const result = [];
let i = 0;
let mergeCount = 0;

while (i < lines.length) {
  const line = lines[i];

  // Match a line that is only an opening brace (with leading whitespace)
  if (/^\s+\{$/.test(line) && i + 1 < lines.length && /^\s+foreign:/.test(lines[i + 1])) {
    const indent = line.match(/^(\s*)/)[1];

    // Collect all lines of this object up to and including the closing brace
    const objectLines = [line];
    let j = i + 1;
    while (j < lines.length) {
      objectLines.push(lines[j]);
      const trimmed = lines[j].trim();
      if (trimmed === '},' || trimmed === '}') break;
      j++;
    }

    // Extract property lines (between opening { and closing })
    const propLines = objectLines.slice(1, -1);
    const closingTrimmed = objectLines[objectLines.length - 1].trim();
    const trailingComma = closingTrimmed === '},' ? ',' : '';

    // Strip trailing comma from each property and join
    const props = propLines.map((pl) => pl.trim().replace(/,$/, ''));
    const merged = `${indent}{ ${props.join(', ')} }${trailingComma}`;

    if (merged.length <= 100) {
      result.push(merged);
      mergeCount++;
      i = j + 1;
      continue;
    }
  }

  result.push(line);
  i++;
}

writeFileSync(filename, result.join('\n'), 'utf8');
console.log(`Merged ${mergeCount} phrase(s) in ${filename}`);
