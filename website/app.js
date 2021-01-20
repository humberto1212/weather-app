// New date
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]
const d = new Date();
const day = d.getDay();
let dayName = dayNames[day];
let date = ''

// Api Url & key
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = 'af52f6e1be6f050061364fb6e1a03e35';

document.getElementById('generate').addEventListener('click', action);

function action() {
    const zip = document.getElementById('zip').value;
    const newFeelings = document.getElementById('feelings').value;
    date = dayName +' '+ d.getMonth()+1 + ' '+ d.getFullYear();
    getZip(baseURL,zip,apiKey)
    .then(function(data){
        postData('/add', {date: date, temp: data.main.temp, content: newFeelings})      
    })    
    .then(() =>{
         updateUI() 
    })
}

// Get data
const getZip = async (baseURL, newZip, key)=>{

    const res = await fetch(baseURL+newZip+'&units=metric'+'&DE&APPID='+key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }catch(error) {
        console.log("error", error )
    }
}

// Post Data
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(data),
 });
    try {
        const newData = await response.json(); //por que se queda en response??
        console.log(newData);
        return newData;
    }catch(error) {
      console.log("error", error);
    }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json(); 
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    }catch(error){
        console.log("error", error)
    }
