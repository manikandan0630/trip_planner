

const individual = () => {
  //display none //main document
  document.getElementById("main").style.display = "none";

  //form creation
  let form = document.createElement("form");
  form.id = "form1";

  let lab1=document.createElement("label")
  lab1.innerHTML="Name"
  let input1 = document.createElement("input");
  input1.placeholder = "Enter your name";
  input1.id = "inp1";

  let lab2=document.createElement("label")
  lab2.innerHTML="Email ID"
  let input2 = document.createElement("input");
  input2.placeholder = "Enter your email";
  input2.id = "inp2";

  let lab3=document.createElement("label")
  lab3.innerHTML="Mobile"

  let input3 = document.createElement("input");
  input3.placeholder = "Enter your mobile";
  input3.id = "inp3";

  let lab4=document.createElement("label")
  lab4.innerHTML="Location"
  let inpFrom = document.createElement("input");
  inpFrom.placeholder = "Enter your location";
  inpFrom.id = "inpf";

  let lab5=document.createElement("label")
  lab5.innerHTML="Destination"
  let inpTo = document.createElement("input");
  inpTo.placeholder = "Enter the Destination";
  inpTo.id = "inpto";

  let lab6=document.createElement("label")
  lab6.innerHTML="Date"
  let input4 = document.createElement("input");
  input4.type = "date";
  input4.setAttribute("id", "inp4");

 
  let submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit1";
  submit.onclick = setData;

  //select tag creation
  let lab7=document.createElement("label")
  lab7.innerHTML="Bike"
  var sel = document.createElement("input");
  sel.placeholder="Bike Number"
  sel.id = "Select1";
 

  form.appendChild(lab1);
  form.appendChild(input1);
  form.appendChild(lab2);
  form.appendChild(input2);
  form.appendChild(lab3);
  form.appendChild(input3);
  form.appendChild(lab4)
  form.appendChild(inpFrom);
  form.appendChild(lab5)
  form.appendChild(inpTo);
  form.appendChild(lab6)
  form.appendChild(input4);
  form.appendChild(lab7)
  form.appendChild(sel);
  form.appendChild(submit);
  document.body.appendChild(form);
};

//submit data
const setData = (e) => {
  e.preventDefault();
  
  let val1 = document.getElementById("inp1").value;
  let val2 = document.getElementById("inp2").value;
  let val3 = document.getElementById("inp3").value;
  let valFrom = document.getElementById("inpf").value;
  let valTo = document.getElementById("inpto").value;
  let val4 = document.getElementById("inp4").value;
  let val5 = document.getElementById("Select1").value;

  if(!val1){


  }
  //storing values in objects
  let obj = {
    name: val1,
    email: val2,
    mobile: val3,
    from: valFrom,
    to: valTo,
    date: val4,
    bike: val5,
  };

  //converting objects into json format then store into localstorage
 localStorage.setItem("solo", JSON.stringify(obj))

 var d = new Date().toISOString().split('T')[0];

 if(d==val4){
  alert("processing")
 }
 else{
 alert("waiting")
 }

    //once the data submited successfully display block setting the  main container 
    document.getElementById("main").style.display = "block";
    alert("Form submitted successfully");
    //once done reload the page using location reload function
    window.location.reload();

};

//delete data


//get data
const getData = () => {
  document.getElementById("main").style.display = "none";
  // getting values from localstoarge
  // let data = localStorage.getItem("soloride");
  let data2 = localStorage.getItem("solo");
  try {
    if ( data2) {
      //parsing data
      // let da = JSON.parse(data);
      let da2 = JSON.parse(data2);

      //storing data in array
      let arr = [da2];

      //declaring the varaible
      let user;
      let email;
      let mobile;
      let from;
      let to;
      let date;
      let bike;

      //maping the array data
      arr.map((ele) => {
        // Assign values from the object to variables
        user = ele.name;
        email = ele.email;
        mobile = ele.mobile;
        from = ele.from;
        to = ele.to;
        date = ele.date;
        bike = ele.bike;

        //creating div tag
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("show");
        cardDiv.innerHTML = `
  <span id="card-title">${user.slice(0, 1)}</span>
  
    <p id="card-email" > ${email}</p>
    <p id="card-mobile"> ${mobile}</p>
    <p id="card-from"> ${from}</p>
    <p id="card-to"> ${to}</p>
    
    <p id="card-date">${date}</p>
    <p id="card-bike"> ${bike}</p>
    
    <div id="icon">
    <i class="fa-solid fa-pencil" onclick=editData()></i>
    <i class="fa-solid fa-trash" onclick=deleteData()></i>
    </div>
    `;

        // Append the card to a container element
        document.getElementById("card").appendChild(cardDiv);
      });
    } else {
      document.write("no data in the local storage");
    }
  } catch (e) {
    document.write(e);
  }
  
};

//deleteData
const deleteData = () => {
  localStorage.removeItem("solo");
  alert("Deleted successfully")
  location.reload();

};

//editData
const editData=()=>{
  console.log("")
}



//jquery


