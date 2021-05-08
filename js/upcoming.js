//Upcomming Launches

const upcomingUrl = "https://api.spacexdata.com/v4/launches/upcoming";
const upcomingContainer = document.querySelector(".container");

setTimeout(function(){
    async function callApi() {
        try{
            const response = await fetch(upcomingUrl);
            const json = await response.json();
           

            const loading = document.querySelector(".loader");

            console.log(json);
            upcomingContainer.innerHTML = "";
            loading.classList.remove("loader"); 
            //<div class="imgContainer">"<img src="${launch.links.patch.large}"/></div>
            
            json.forEach(function (upcomingLaunch)  {   
               
                upcomingContainer.innerHTML += `<div class="upcomingInfo">
                                                        <h2 class="upcomingHeader"> ${upcomingLaunch.name}</h2>
                                                        <h4 class="dayPic"> ${upcomingLaunch.date_local}</h4>
                                                </div>`                                    
                                                        
             });
                                                                      

            } catch {
                upcomingContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
            }
        }
    callApi();
},3000);


/////Picture of the day

const url = "https://api.nasa.gov/planetary/apod?api_key=f9KjepfAbTsQsXqk9mAVFU8yxcWYKgZknn5po9NA";
const imgContainer = document.querySelector(".picOftheDay");

setTimeout(function(){
    async function callImg() {
        try{
            const response = await fetch(url);
            const json = await response.json();
            const loading = document.querySelector(".loader");

            console.log(json);
            loading.classList.remove("loader"); 
            
               
            imgContainer.innerHTML += `<div class="picOftheDay">
                                                <h2 class="IOfTDayHeader"> Image of the day -from space</h2>
                                                <h4 class="IOfTDayHeader"> ${json.title}</h4>
                                                <img class="imgOftheDay" src="${json.url}"/>
                                                <p class="launchDates"> ${json.explanation}</p>
                                           </div>`                                    
                                                        
    
            
            } catch {
                imgContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
            }
        }
        callImg();
},2000);