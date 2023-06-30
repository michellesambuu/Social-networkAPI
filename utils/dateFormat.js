const dayjs = require('dayjs');

const timestamp =(date)=>{
 const dates =dayjs().format("dddd, MMMM D, YYYY h:mm A")
 return dates;
}

module.exports =timestamp;