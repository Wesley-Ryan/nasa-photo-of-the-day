export const API_KEY = "OCAktKcubvFXVfVaB1qtEbEjPJd7cAn8CoU0lKNs";

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${separator}${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`;
}
