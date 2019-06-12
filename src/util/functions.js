const truncate = (input) => input.length > 42 ? `${input.substring(0, 42)}...` : input;

const formatDate = (date) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let string = `${month} ${day}, ${year}`;
  return string;
}

const formatLetter = (text) => {
  let formatted = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return formatted
}

export {truncate, formatDate, formatLetter};