/* For Card effect*/
var card = document.getElementById("card");

function addData() {
  card.style.transform = "rotateY(0deg)";
}
function showData() {
  card.style.transform = "rotateY(180deg)";
}




// Data Arrays
let ids = [];
let f_name = [];
let names = [];
let ages = [];
let address = [];


//For Add Data in database
const inputData = () => {
  let val1 = Number(document.getElementById("id").value);
  let val2 = document.getElementById("name").value;
  let val3 = Number(document.getElementById("age").value);
  let val4 = document.getElementById("address").value;
  let val5 = document.getElementById("fname").value;

  ids.push(val1);
  names.push(val2);
  ages.push(val3);
  address.push(val4);
  f_name.push(val5);
  clr();
};


//For clear input field after add or update data
const clr = () => {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("fname").value = "";
  
};


//For add data to table
const dataList = () => {
  let str = `<tr> <th>Id</th> <th>Name</th> <th>Father's Name</th> <th>Age</th> <th>Address</th> </tr>`;
  for (let i = 0; i < ids.length; i++) {
    str += `<tr> <td>${ids[i]}</td> <td>${names[i]}</td> <td>${f_name[i]}</td> <td>${ages[i]}</td> <td>${address[i]}</td> </tr>`;
  }
  document.getElementById("tableData").innerHTML = str;
}


//For update in existing data
const updateData = () => {
  const val = Number(document.getElementById("id").value);
  const getIndex = ids.indexOf(val);
  let val2 = document.getElementById("name").value;
  let val3 = Number(document.getElementById("age").value);
  let val4 = document.getElementById("address").value;
  let val5 = document.getElementById("fname").value;

  names.splice(getIndex, 1, val2);
  ages.splice(getIndex, 1, val3);
  address.splice(getIndex, 1, val4);
  f_name.splice(getIndex, 1, val5);
  clr();
}



//For delete in existing data
const deleteData = () => {
  const val = Number(document.getElementById("id").value);
  const getIndex = ids.indexOf(val);
  if (getIndex !== -1){
    ids.splice(getIndex, 1)
    names.splice(getIndex, 1);
    ages.splice(getIndex, 1);
    address.splice(getIndex, 1);
    f_name.splice(getIndex, 1);
    clr();
  }
  else{
    alert("Wrong Input or Data not Found.\nPlease Enter correct Data")
  }
}

