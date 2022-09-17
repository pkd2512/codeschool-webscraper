import fetch from "node-fetch";

/**
 * Polyfill for fetch in NodeJS
 * https://github.com/d3/d3-fetch/issues/19#issuecomment-391318445
 */
global.fetch = fetch;


/**
 * This function fetches a webpage from the url and returns the HTML
 * @param {string} url URL of the webpage to fetch 
 */
export const fetchHTML= async(url) => {
  if (!url) {
    throw new Error("🚨 Provide a webpage URL!!!");
  }

  let data;
  
  console.log("Fetching webpage " + url);

  try {
    await fetch(url)
      .then((response) => response.text())
      .then((d) => {
    
        // Logic for data validation can be added here and errors messages can be logged

        // Store the html
        data = d;
        console.log("...webpage fetched sucessfully");
    });
  } catch (error) {
    throw new Error("❌...failed to fetch webpage..." + error);
  }

  return data;
}
