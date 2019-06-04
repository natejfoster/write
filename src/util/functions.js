import { db } from './firebase';

const truncate = (input) => input.length > 42 ? `${input.substring(0, 42)}...` : input;


const adjustTextarea = (obj) => {
  obj.style.height = '1px';
  obj.style.height = (25 + obj.scrollHeight)+'px';
}

const formatDate = (date) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let string = `${month} ${day}, ${year}`;
  return string;
}



export {truncate, adjustTextarea, formatDate};