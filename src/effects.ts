import { clampToLength, emptyDisplays } from './utils';
import { stringToDisplay, Options } from './view';
import { T } from './model'
export function marquee(input: string, displayAmount: number = input.length, options: Options): T[][][] {
  const frames: T[][][] = [];
  for (let i = displayAmount - 1; i >= Math.min(0, displayAmount - input.length); i -= 1) {
    const leftPad = Math.max(0, i);
    const inputStart = Math.max(0, -i);
    const visibleLength = displayAmount - leftPad;
    const visiblePart = input.slice(inputStart, inputStart + visibleLength);
    const rightPad = Math.max(0, displayAmount - leftPad - visiblePart.length);
    frames.push([...emptyDisplays(leftPad), ...stringToDisplay(visiblePart, options), ...emptyDisplays(rightPad)]);
  }
  return frames;
}

type ten = 10;

export function blink(input: string, counts: ten = 10, options: Options): T[][][] {
  const frames: T[][][] = [];
  const empty = emptyDisplays(input.length);
  const text = stringToDisplay(input, options);
  for (let i = 0; i < counts; i++) {
    frames.push(i % 2 ? text : empty);
  }
  return frames;
}
export function typing(input: string, options: Options) {
  const frames = [];
  const text = stringToDisplay(input, options);
  for (let i = 0; i < input.length; i++) {
    frames.push(clampToLength(text.slice(0, i + 1), input.length));
  }
  return frames;
}
