import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import resolveconfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

/**
 * Merges multiple class names into one string, filtering out falsy values.
 * This function utilizes `clsx` to conditionally join class names and `twMerge`
 * to merge Tailwind classes intelligently, ensuring that conflicting classes are resolved.
 *
 * @param inputs - An array of class values or undefined.
 * Each class value is a string representing CSS class names.
 * Falsy values are filtered out.
 *
 * @returns A single string of merged class names.
 *
 * @example
 * ```ts
 * const classes = cn('btn', isPrimary && 'btn-primary', undefined, 'text-lg');
 * // Returns: 'btn btn-primary text-lg'
 * ```
 */
export const cn = (...inputs: (ClassValue | undefined)[]) =>
  twMerge(clsx(inputs.filter(Boolean)));

/**
 * Resolves the Tailwind CSS configuration.
 * This constant holds the result of `resolveConfig`, which processes the Tailwind configuration file.
 * It allows for programmatic access to Tailwind configuration values such as theme tokens.
 *
 * @returns The resolved Tailwind configuration object.
 *
 * @example
 * ```ts
 * const spacing = tw.theme.spacing['4']; // Retrieves spacing value from Tailwind config
 * ```
 */
export const tw = resolveconfig(tailwindConfig);
