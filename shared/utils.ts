import { type ClassValue, clsx } from 'clsx';
import { Keyboard } from 'react-native';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes intelligently.
 *
 * @param {...ClassValue[]} inputs - An array of class values to be combined.
 * @returns {string} The combined class names.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

/**
 * Dismisses the active keyboard on the screen.
 *
 * @returns {void}
 */
export const hideKeyboard = (): void => Keyboard.dismiss();
