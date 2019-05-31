import { db } from './firebase';

const truncate = (input) => input.length > 42 ? `${input.substring(0, 42)}...` : input;


const adjustTextarea = (obj) => {
  obj.style.height = '1px';
  obj.style.height = (25 + obj.scrollHeight)+'px';
}

const getSent = (email) => {
  let sent;
  db.fetch('letterCollection', {asArray: true})
    .then(data => {
      console.log(data);
      return data;
    })
}



export {truncate, adjustTextarea, getSent};