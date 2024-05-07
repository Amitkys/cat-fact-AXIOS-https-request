let url = "https://catfact.ninja/fact";
// simple async await
/*async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    console.log(data.fact);
    console.log(data.length);
  } catch (err) {
    console.log("");
  }
}

getFacts(); */

let btn = document.querySelector('button');
let result = document.querySelector('#result');

btn.addEventListener('click', async () => {
  result.innerText = "Please wait..."; 
  
  try {
    let fact = await getFacts();
   
    result.innerText = fact;
  } catch (error) {
    console.error(error.message);
  }
});

// using Axios (github)

async function getFacts(){
  let response = await axios.get(url);
  return response.data.fact;
  
}

// getFacts();
