import { fetchCSV, fetchJSON } from "./lib/fetchData.js";
import { writeCSV, writeJSON } from "./lib/writeData.js";

import formatData from "./lib/formatData.js";

/**
 * This is the main function where the scraper begins
 * The scraper fetches data, formats it in some way and saves it locally in GitHub
 * The helper methods are in lib directory
 */
const run = async() => {

  /* ----------------------------------- */
  /* STEP 1: Fetch the data from the url */
  /* ----------------------------------- */

  const DATA = await fetchJSON("https://raw.githubusercontent.com/stefangabos/world_countries/master/data/countries/_combined/countries.json");
  const DATA_CSV = await fetchCSV("https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Air%20Pollutant%20Emissions%20-%20OECD/Air%20Pollutant%20Emissions%20-%20OECD.csv");

  /* ----------------------------------------------------------------- */
  /* STEP 2: Format the data. There can be as many methods as required */
  /* ----------------------------------------------------------------- */

  const FORMATTED_DATA = await formatData(DATA);

  /* ---------------------------------------------- */
  /* STEP 3: Save your data locally or on the cloud */
  /* ---------------------------------------------- */

  await writeJSON(FORMATTED_DATA, 'database/data.json');
  await writeCSV(DATA_CSV, 'database/data.csv');
}

run();