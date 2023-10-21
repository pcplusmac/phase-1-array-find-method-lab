// Define an array
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

 
//   Define a method  'superbowlWin'
function  superbowlWin(arr) {
    let item = arr.find(element => element.result === "W");
    
    return item["year"];
}       
    


// find the element based on the conditon 
superbowlWin(record);


