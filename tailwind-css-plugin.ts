//ts check https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
import { parse } from 'postcss';
import { objectify } from 'postcss-js';
import { readFileSync } from 'fs';
import { PluginCreator, PluginAPI } from 'tailwindcss/types/config';
/**
 * CSS as plugin
 * @param {string} filename CSS file
 * @returns {import('tailwindcss/types/config').PluginCreator}
 */
const createPlugin = (filename: string): PluginCreator => {
  return ({ addBase, addComponents, addUtilities }: PluginAPI) => {
    const css = readFileSync(filename, 'utf8');
    const root = parse(css);
    const jss = objectify(root);

    if ('@layer base' in jss) {
      addBase(jss['@layer base']);
    }
    if ('@layer components' in jss) {
      addComponents(jss['@layer components']);
    }
    if ('@layer utilities' in jss) {
      addUtilities(jss['@layer utilities']);
    }
  };
};

export default createPlugin;
