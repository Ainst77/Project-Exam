//Upcomming Launches

const upcomingUrl = "https://api.spacexdata.com/v4/launches/upcoming";
const upcomingContainer = document.querySelector(".launchContainer");

setTimeout(function(){
    async function callLaunch() {
        try{
            const response = await fetch(upcomingUrl);
            const json = await response.json();
           

            const loading = document.querySelector(".loader");

            console.log(json);
            upcomingContainer.innerHTML = "";
            loading.classList.remove("loader"); 
            
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
    callLaunch();
},3000);


///Picture of the day API

const url = "https://api.nasa.gov/planetary/apod?api_key=f9KjepfAbTsQsXqk9mAVFU8yxcWYKgZknn5po9NA";
const imgContainer = document.querySelector(".picOftheDay");


async function callImg() {
    try{
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
            
        imgContainer.innerHTML += `
                                        <h2 class="IOfTDayHeader"> Picture of the day -Space inspiration</h2>
                                        <h4 class="IOfTDayHeader"> ${json.title}</h4>
                                        <div ><img class="picOftheDay" src="${json.hdurl}" ></div>
                                        <p class="explanation"> ${json.explanation}</p>
                                            
                                            
                                    `                                        
        
        } catch {
        imgContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
        }
    }
callImg();



