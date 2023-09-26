let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{ //async function
    let fact = await getFacts();  //calling getFacts and will wait for valid data.
    console.log(fact); //print fact
    let p = document.querySelector("#output");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try {
        let res = await axios.get(url);  //API Call     
        return res.data.fact; //returns fact
    } catch(e){
        console.log("error-",e);
        return "No fact found";
    }
}