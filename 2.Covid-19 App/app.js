const clockEl=document.getElementById('clock');
const dateEl=document.getElementById('date');


const newCases=document.getElementById('new');
const activeCases=document.getElementById('active');
const totalCases=document.getElementById('total');
const recoverd=document.getElementById('recoverd');
const suspected=document.getElementById('suspected');
const deths=document.getElementById('deths');
const lastUpdated=document.getElementById('last-updated');

//Setting date and time
function setTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let y = today.getFullYear();
    let mo = today.getMonth();
    let date = today.getDate();
  
    let mins = formatTime(m);
    let second = formatTime(s);
    let year = formatTime(y);
    let month = formatTime(mo);
    let dayOrNight = "AM";

  
    //determine am or pm
    if (h >= 12) {
      dayOrNight = "PM";
    }
  
    if (h > 12) {
      h = h - 12;
    }
    let hours = formatTime(h);
  
    //set day by name
    let d = today.getDay();
    let day;
  
    switch (d) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
  
    clockEl.innerHTML = `${hours}:${mins}:${second}<span>${dayOrNight}</span>`;
    dateEl.innerHTML = `${year}/${month}/${date} ${day}`;
  
    let time = setTimeout(setTime, 500);
  }
  
  function formatTime(num) {
    if (num < 10) {
      num = `0` + num;       
    }
    return num;
  }
  
  setTime();




  //get data from https://hpb.health.gov.lk/ta/api-documentation

  function getData(){
      fetch(' https://hpb.health.gov.lk/api/get-current-statistical')
      .then((res)=>res.json())
      .then((data)=>{
         newCases.innerHTML=data.data.local_new_cases;
         activeCases.innerHTML=data.data.local_active_cases;
         totalCases.innerHTML=data.data.local_total_cases;
         recoverd.innerHTML=data.data.local_recovered;
         suspected.innerHTML=data.data.local_total_number_of_individuals_in_hospitals	;
         deths.innerHTML=data.data.local_deaths;
        lastUpdated.innerHTML=`Last Updated: ${data.data.update_date_time}`
      })

      
  }

  getData();