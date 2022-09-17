import { csv } from "d3-fetch";
import fetch from "node-fetch";

/**
 * Polyfill for fetch in NodeJS
 * https://github.com/d3/d3-fetch/issues/19#issuecomment-391318445
 */
global.fetch = fetch;


/**
 * This function fetches a JSON file from the url and returns the dataset
 * @param {string} url URL of the json file to fetch 
 */
export const fetchJSON = async(url) => {
  if (!url) {
    throw new Error("🚨 Provide a URL to a JSON file!!!");
  }

  let data;
  
  console.log("Fetching data from " + url);

  try {
    await fetch(url)
      .then((response) => response.json())
      .then((d) => {
    
        // Logic for data validation can be added here and errors messages can be logged
        // e.g. cheking if the data is a non-empty json array
        if (!Array.isArray(d) && d.length === 0)
          throw new Error('❌ Invalid data!')

        // Store the data
        data = d;
        console.log("...data fetched sucessfully");
    });
  } catch (error) {
    throw new Error("❌...failed to fetch data..." + error);
  }

  return data;
}


/**
 * This function fetches a CSV file from the url and returns the dataset
 * @param {string} url URL of the csv file to fetch 
 */
export const fetchCSV = async(url) => {
  if (!url) {
    throw new Error("🚨 Provide a URL to a CSV file!!!");
  }

  let data;
  
  console.log("Fetching data from " + url);

  try {
    await csv(url).then((d) => {
      
      // Logic for data validation can be added here and errors messages can be logged
      // e.g. cheking if the data is a non-empty json array
      if (!Array.isArray(d) && d.length === 0)
        throw new Error('❌ Invalid data!')

      // Store the data
      data = d;
      console.log("...data fetched sucessfully");
    });
  } catch (error) {
    throw new Error("❌...failed to fetch data..." + error);
  }

  return data;
}
