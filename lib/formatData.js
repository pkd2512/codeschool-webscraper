/**
 * Format your data as desired.
 */
export default async(data) => {
  if (!data) return;

  // Data formatting goes here
  const formattedData = data.sort((a, b) => a.SN - b.SN);

  return formattedData;
}