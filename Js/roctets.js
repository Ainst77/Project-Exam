

const url = "https://api.spacexdata.com/v4/rockets/";
const rocketContainer = document.querySelector(".rocketContainer");

setTimeout(function(){
    async function callApi() {
        try{
            const response = await fetch(url);
            const json = await response.json();
           

            const loading = document.querySelector(".loader");

            console.log(json);
            rocketContainer.innerHTML = "";
            loading.classList.remove("loader"); 
            
            
            json.forEach(function (rocket)  {  
            rocketContainer.innerHTML += `<a class="rocketInfoWrap" href="rocketDetails.html?id=${rocket.id}">
                                                        <div class="rocketImgWrap">
                                                            <img class="rocketImgFront" src="${rocket.flickr_images[0]}">
                                                        </div>
            
                                                        <div class="rocketContent">
                                                        
                                                        <h2 class="productHeader"> ${rocket.name}</h2>
                                                        <h4 class="launchDates"> ${rocket.country}</h4>
                                                        <button class="rocketButton">View more</button>
                                                        </div>
                                                    </a>`                                    
                                                        
             });
                                                                      

            } catch {
                rocketContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
            }
        }
    callApi();
},3000);


