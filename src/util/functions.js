const truncate = (input) => input.length > 42 ? `${input.substring(0, 42)}...` : input;


const adjustTextarea = (obj) => {
  obj.style.height = '1px';
  obj.style.height = (25 + obj.scrollHeight)+'px';
}

export {truncate, adjustTextarea};