let date1="";
let date2="";
let amount1="";
let amount2="";
let row1=document.querySelector(".row1")
let row2=document.querySelector(".row2")
let date11=document.querySelector(".date11")
let date21=document.querySelector(".date21")
let input1=document.querySelector("#basic-url")
let input2=document.querySelector("#basic-url2")
let customernamee=document.querySelectorAll(".customernamee")
let customeramount=document.querySelectorAll(".customeramount")
let customers = [];
let transactions = [];
let mychartinstance=null;
//http://localhost:3000/transactions?id=$
//http://localhost:3000/transactions?customer_id=
//http://localhost:3000/transactions?date=
//http://localhost:3000/transactions?amount=

async function getCustomers() {
  let url = `http://localhost:3000/customers`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  customers=data;
}
getCustomers();
async function gettransactions() {
  let url = `http://localhost:3000/transactions`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  transactions=data;
}
gettransactions();

   

/////////////filter///////////////////
input1.addEventListener("input",filterlist)
function filterlist(){
  let filter=input1.value.toLowerCase();
  customernamee.forEach((item) => {
    let text=item.textContent;
    if(text.toLowerCase().includes(filter))
      item.style.display='';
      else{
        item.style.display='none';
      }
  })
} 
input2.addEventListener("input",filterlist2)
function filterlist2(){
  let filter=input2.value
  customeramount.forEach((item) => {
    let text=item.textContent;
    if(text.includes(filter))
      item.style.display='';
 
      else{
        item.style.display='none';
      }
  })
} 
// //////////////////
let mychart=document.getElementById('mychart')

input1.addEventListener('input',function(){
  clear2();
  let name =this.value;
  display(name);
 
 
})
let mychart2=document.getElementById('mychart')

input2.addEventListener('input',function(){
  clear1()
  $(".table2").addClass("d-block")
  if(this.value==(500)||this.value==(1000)){
    var name =`${customers[0].name}`.slice(0,5).toLowerCase();
    console.log(name)
    display(name);
  }
  if(this.value==(1300)||this.value==(875)){
    var name =`${customers[1].name}`.slice(0,3).toLowerCase();
    console.log(name)
    display(name);
  }
  if(this.value==(800)||this.value==(1250)){
    var name =`${customers[2].name}`.slice(0,7).toLowerCase();
    console.log(name)
    display(name);
  }
  if(this.value==(900)||this.value==(750)){
    var name =`${customers[3].name}`.slice(0,5).toLowerCase();
    console.log(name)
    display(name);
  }
  if(this.value==(1450)||this.value==(2500)){
    var name =`${customers[4].name}`.slice(0,4).toLowerCase();
    console.log(name)
    display(name);
  }
 

 
 
 
})
function clear1(){
  input1.value='';
}
function clear2(){
  input2.value='';
}

 ////////////////////
customernamee.forEach((item) => {
item.addEventListener("click",function(){
input1.value=item.textContent;
display(input1.value)

  })
     
  })
function display(name){
  if((name)=="omar"){
    date1 = transactions[4].date;
    date2 = transactions[7].date;
     amount1 = transactions[4].amount;
    amount2 = transactions[7].amount;
    row1.innerHTML=transactions[4].amount;
    row2.innerHTML=transactions[7].amount;
 date11.innerHTML=transactions[4].date;
 date21.innerHTML=transactions[7].date;
    google.charts.setOnLoadCallback(Chartcustomer(date1,date2,amount1,amount2,name));
}

if((name)=="ahmed"){
    date1 = transactions[0].date;
    date2 = transactions[9].date;
     amount1 = transactions[0].amount;
    amount2 = transactions[9].amount;
    row1.innerHTML=amount1;
    row2.innerHTML=amount2;
    date11.innerHTML=date1;
    date21.innerHTML=date2;
    google.charts.setOnLoadCallback(Chartcustomer(date1,date2,amount1,amount2,name));
}

if((name)=="fatma"){
    date1 = transactions[3].date;
    date2 = transactions[5].date;
     amount1 = transactions[3].amount;
    amount2 = transactions[5].amount;
    row1.innerHTML=amount1;
    row2.innerHTML=amount2;
    date11.innerHTML=date1;
    date21.innerHTML=date2;
    google.charts.setOnLoadCallback(Chartcustomer(date1,date2,amount1,amount2,name));
}

if((name)=="mohamed"){
    date1 = transactions[2].date;
    date2 = transactions[6].date;
     amount1 = transactions[2].amount;
    amount2 = transactions[6].amount;
    row1.innerHTML=amount1;
    row2.innerHTML=amount2;
    date11.innerHTML=date1;
    date21.innerHTML=date2;
    google.charts.setOnLoadCallback(Chartcustomer(date1,date2,amount1,amount2,name));
}

if((name)=="aya"){
    date1 = transactions[1].date;
    date2 = transactions[8].date;
     amount1 = transactions[1].amount;
    amount2 = transactions[8].amount;
    row1.innerHTML=amount1;
    row2.innerHTML=amount2;
    date11.innerHTML=date1;
    date21.innerHTML=date2;
    google.charts.setOnLoadCallback(Chartcustomer(date1,date2,amount1,amount2,name));
}
}

//////////////////////////////////
google.charts.load('current', {'packages':['bar']});

function Chartcustomer(date1,date2,amount1,amount2,name) {
    const ctx = mychart;
    //destroy it if i use it before
    if(mychartinstance!==null){
      mychartinstance.destroy();
    }
let namee=name.toUpperCase()
//to create new chart
mychartinstance=new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [date1 , date2 ],
        datasets: [{
          label: namee,
          data: [amount1,amount2],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },maintainAspectRatio:false
      }
    }); 
}


