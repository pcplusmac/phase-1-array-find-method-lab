// Define an array
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

 
//   Define a method  'superbowlWin'
function  superbowlWin(arr) {
    
      const op = arr.find(element => element.result === "W");
      // if (!op) {
      //   // return op;
      // }
       return op && op.year;
}       
// find the element based on the conditon 
superbowlWin(record);



