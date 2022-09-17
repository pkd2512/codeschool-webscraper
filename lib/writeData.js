import * as fs from 'fs';
import * as path from 'path';

import { csvFormat } from 'd3-dsv';

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}
const fs__default = /* #__PURE__ */ _interopDefaultLegacy(fs);
const path__default = /* #__PURE__ */ _interopDefaultLegacy(path);

/**
 * This function writes the data to a JSON file
 * @param {array} data data to write to the file
 * @param {string} path path to save the file 
 */
export const writeJSON = async(data, filepath) => {

  if (!data || !filepath) {
    throw new Error("❌ Missing data or filepath to write data")
  }

  try {
    if (!fs__default.default.existsSync(path__default.default.dirname(filepath))) {
      fs__default.default.mkdirSync(path__default.default.dirname(filepath), {
        recursive: true,
      });
    }
    fs__default.default.writeFileSync(filepath, JSON.stringify(data, null, 2));
  
    console.log("✅ Data saved sucessfully to "+filepath);
  } catch (error) {
    throw new Error("❌...failed to write JSON file..." + error);
  }

}

/**
 * This function writes the data to a CSV file
 * @param {array} data data to write to the file
 * @param {string} path path to save the file 
 */
export const writeCSV = async(data, filepath) => {
  if (!data || !filepath) {
    throw new Error("❌ Missing data or filepath to write data")
  }
  
  try {
    if (!fs__default.default.existsSync(path__default.default.dirname(filepath))) {
      fs__default.default.mkdirSync(path__default.default.dirname(filepath), {
        recursive: true,
      });
    }
    fs__default.default.writeFileSync(filepath, csvFormat(data));
  
    console.log("✅ Data saved sucessfully to "+filepath);
  } catch (error) {
    throw new Error("❌...failed to write CSV file..." + error);
  }

}