const countriesElem = document.querySelector(".countries")
const search = document.querySelector(".search");
const dropElem = document.querySelector(".drop")
const region = document.querySelectorAll(".region")
const search_a = document.querySelector(".search_a") 
const countryName = document.getElementsByClassName("countryName")
const switcher = document.querySelector(".switcher")
const moon = document.querySelector(".moon")




async function getCountry(){
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);    
    });
    
    
}
getCountry()
function showCountry(data){
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML=`<div class="country-img">
        <img src="${data.flag}">
    </div>
    <div class="country-info">
        <h5 class="countryName">${data.name}</h5>
        <p><strong>Population : </strong>${data.population}</p>
        <p class="regionName"><strong>Region : </strong>${data.region}</p>
        <p><strong>Capital : </strong>${data.capital}</p>
    </div>`
    countriesElem.appendChild(country)
    country.addEventListener("click",() =>{
         showCountrydetails(data);
    })
}


search.addEventListener("click",()=>{
    dropElem.classList.toggle("showdrop")

})

const regionName = document.getElementsByClassName("regionName")
region.forEach(element =>  {
    element.addEventListener("click",() => {
        console.log(element);
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText)){
            elem.parentElement.parentElement.style.display="grid"
            }
            else{
                elem.parentElement.parentElement.style.display="none"
            }


        })
    })

})

search_a.addEventListener("input",() => {
    console.log(search_a);
    Array.from(countryName).forEach(ele => {
        if(ele.innerText.toLowerCase().includes(search_a.value.toLowerCase())){
            ele.parentElement.parentElement.style.display="grid"
        }
        else{
            ele.parentElement.parentElement.style.display="none"
        }
    })
})

switcher.addEventListener("click",() => {
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})

const countryModals = document.querySelector(".countryModals")
function showCountrydetails(data){
    countryModals.classList.toggle("show")
    countryModals.innerHTML=`<button class="back">Back</button>
    <div class="modals">
        <div class="leftModal">
            <img src="${data.flag}">
        </div>
        <div class="rightModal">
            <h1>${data.name}</h1>
            <div class="info">
             <div class="leftText text">
                <p><strong>Native Name : </strong>${data.nativeName}</p>
                <p><strong>Population : </strong>${data.population}</p>
                <p><strong>Region : </strong>${data.region}</p>
                <p><strong>Sub-Region : </strong>${data.subregion}</p>
                
             </div>
            <div class="rightText text ">
            <p><strong>Capital : </strong>${data.capital}</p>
                <p><strong>Top Level Domain : </strong>${data.topLevelDomain.map(ele=>ele)}</p>
                <p><strong>Currencies : </strong>${data.currencies.map(ele=>ele.name)}</p>
                <p><strong>Languages : </strong>${data.languages.map(ele=>ele.name)}</p>
            </div>
        </div>
        </div>
    </div>`
    const back = countryModals.querySelector(".back")
    

    back.addEventListener("click",() => {
        countryModals.classList.toggle("show")
    })
}
document.querySelector(".switcher").addEventListener("click",() => {
    dropElem.classList.toggle("darks")


})