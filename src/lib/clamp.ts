/**
 * Use to clam a specific number between two values.
 *
 * Example: clamp(0, 255, 398) => 255
 *
 * @param min The min to clamp to.
 * @param max The max to clamp to.
 * @param num The number to clamp.
 * @returns The clamped value.
 */
export function clamp(min: number, max: number, num: number) {
  return Math.min(Math.max(num, min), max);
}
