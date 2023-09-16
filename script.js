const data = [
  // { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];


// 1. Print Developers
function printDeveloper() {
  for(let i =0;i<data.length;i++){
     if(data[i].profession == "developer"){
          console.log(data[i]);
     }
  }
}

// 2. Add Data
function addData() {
  data.push({});
  var nameData = prompt("Enter Name");
  var  ageData = prompt("Enter age");
  var prodata = prompt("Enter profession");
 
   data[data.length-1].name=nameData;
   data[data.length-1].age=ageData;
   data[data.length-1].profession=prodata;
  
  console.log(data[data.length-1]);

  
}

// 3. Remove Admins
function removeAdmin() {
  for(let i =0;i<data.length;i++){
    if(data[i].profession == "admin"){
       
       let x = data.splice(i, 1);
         console.log(x[0]);
    }
 }
}



// 4. Concatenate Array
function concatenateArray() {
  let f =[1,2,3,4];
  let s =[5,6,7,8];
 
  console.log(f.concat(s));
}

// 5. Average Age
function averageAge() {
  let sum =0;
  for(let i =0;i<data.length;i++){
    sum = sum + data[i].age;
    
 }
  console.log(sum/data.length);

}

// 6. Age Check
function checkAgeAbove25() {
  let flag = false;
  let f =(e, i) =>{
      if(data[i].age >25){
        console.log(true);
      }else{
        console.log(false); 
      }
      
  }
  data.map(f)
  
  
}

// 7. Unique Professions
function uniqueProfessions() {
  for(let i =0;i<data.length-1;i++){
    if(data[i].profession != data[i+1].profession){
       console.log(data[i].profession);
    }
 }
  console.log(data[data.length-1].profession);
}

// 8. Sort by Age
function sortByAge() {
 
    data.sort((a,b) => a.age-b.age);
    console.log(data);

}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i =0;i<data.length;i++){
    if(data[i].name == "john"){
       
       data[i].profession = "manager";
       console.log(data[i]);
    }
 }
}

// 10. Profession Count
function getTotalProfessions() {
  let count =0;
  for(let i =0;i<data.length;i++){
    if(data[i].profession == "developer"){
        count = count+1;
    }
    if(data[i].profession == "admin"){
      count = count+1;
   }
 }
 console.log(count)
}
