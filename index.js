import { writeCSV, writeJSON } from "./lib/writeData.js";

import { fetchHTML } from "./lib/fetchData.js";
import formatData from "./lib/formatData.js";
import { parseHTML } from './lib/parseHTML.js';

/**
 * This is the main function where the scraper begins
 * The scraper fetches data, formats it in some way and saves it locally in GitHub
 * The helper methods are in lib directory
 */
const run = async() => {

  /* ----------------------------------- */
  /* STEP 1: Fetch the data from the url */
  /* ----------------------------------- */

  const HTML = await fetchHTML("https://www.isro.gov.in/list-of-spacecrafts");
  const DATA = await parseHTML(HTML);

  /* ----------------------------------------------------------------- */
  /* STEP 2: Format the data. There can be as many methods as required */
  /* ----------------------------------------------------------------- */

  const FORMATTED_DATA = await formatData(DATA);

  /* ---------------------------------------------- */
  /* STEP 3: Save your data locally or on the cloud */
  /* ---------------------------------------------- */

  await writeJSON(FORMATTED_DATA, 'database/data.json');
  await writeCSV(FORMATTED_DATA, 'database/data.csv');
}

run();