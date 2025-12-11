// src/lib/utils/fileNameGenerator.ts

// Import the v4 function from the uuid package and rename it to uuidv4
import { v4 as uuidv4 } from "uuid";

export function generateFileName(originalName: string) {
  const extension = originalName.split('.').pop();
  return `portfolios/${uuidv4()}.${extension}`;  // changed from "uploads" to "portfolios"
}

