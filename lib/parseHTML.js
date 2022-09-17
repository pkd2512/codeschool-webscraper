import * as cheerio from 'cheerio';

/**
 * This function will extract the data table from the webpage and create a JSON dataset
 * Using Cheerio library https://cheerio.js.org/
 * @param {string} html - HTML markup of the webpage
 */
export const parseHTML = async(html) => {
  const $ = cheerio.load(html);

  // Preview of the HTML
  console.log(($.html()));

  // Preview of the table
  const table = $('.view-content table');
  console.log(table.html());

  // Parse the table headers and rows
  const thead = [];

  $('.view-content table thead tr').children().each((index, th) => {
    thead.push($(th).text().trim());
  }) 

  // Parse the rows and create data object
  const DATA = [];
  
  $('.view-content table tbody tr').each((index, tr) => {
  
    const values = {};

    // Parse each column
    $(tr).children().each ((i, td) => {
      values[thead[i]] = $(td).text().trim();
    })

    DATA.push(values);

  })

  return DATA;
};

