




const url = "https://api.spacexdata.com/v4/launches/";
const launchContainer = document.querySelector(".allLaunchContainer");

setTimeout(function(){
    async function callApi() {
        try{
            const response = await fetch(url);
            const json = await response.json();
           

            const loading = document.querySelector(".loader");

            console.log(json);
            launchContainer.innerHTML = "";
            loading.classList.remove("loader"); 

            
            json.forEach(function (launch)  {   
               
                launchContainer.innerHTML += `<a class="launchInfo" href="launchDetails.html?id=${launch.id}">     
                                                        <div class="launchImgContainer">
                                                            <img class="launchImg" src="${launch.links.patch.large}"/>
                                                        </div>
                                                        
                                                        <div class="launchContent">
                                                            <h2 class="launchInfoHeader"> ${launch.name}</h2>
                                                            <h4 class="launchDates"> ${launch.date_local}</h4>
                                                            <button>View more</button>
                                                        </div>
                                                </a>` ;  
                                                        
                                                });
                                                                      

            } catch {
                launchContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
            }
        }
    callApi();
},3000);






