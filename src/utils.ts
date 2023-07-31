import {T} from './model'

export function clampToLength(state: T[][], length: number) {
  return state
      .concat(emptyDisplays(Math.max(0, length - state.length)))
      .slice(0, length);
}
export function emptyDisplays(amount: number): T[][] {
  return Array.from({ length: amount }, () => []);
}
