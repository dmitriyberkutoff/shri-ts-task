import {Char, segmentCodes, T} from './model';

export function isKnownChar(char: string): char is Char {
  return char in segmentCodes;
}

export interface Options {
  convertToUpperCase: true
  unknownChar: 'exception' | T[]
}
export function charToDisplay(char: string, options?: Options): T[] {
  console.log(options);
  if (options?.convertToUpperCase) {
    char = char.toUpperCase();
    console.log(char);
  }
  console.log({ char });
  if (!isKnownChar(char)) {
    if (options?.unknownChar === 'exception') {
      throw new Error(`Cannot convert character ${char} to 14-segment display`);
    }
    return options?.unknownChar ?? [];
  }
  return segmentCodes[char];
}
export function stringToDisplay(input: string, options: Options): T[][] {
  return [...input].map(c => charToDisplay(c, options));
}
