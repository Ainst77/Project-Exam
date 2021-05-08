

const url = "https://api.spacexdata.com/v4/crew/";
const crewContainer = document.querySelector(".crewContainer");

setTimeout(function(){
    async function callApi() {
        try{
            const response = await fetch(url);
            const json = await response.json();
           

            const loading = document.querySelector(".loader");

            console.log(json);
            crewContainer.innerHTML = "";
            loading.classList.remove("loader"); 
            
            
            json.forEach(function (crew)  {  
            crewContainer.innerHTML +=          `   <div class="crewWrap">
                                                        <div class="crewImgContainer">
                                                            <img class="crewImg" src="${crew.image} alt="${crew.name}">
                                                        </div>
                                                        <div class="crewDetails">
                                                        <h2 class="productHeader"> ${crew.name}</h2>
                                                        <h4 class="launchDates"> ${crew.agency}</h4>
                                                        <h4 class="launchDates"> Status: ${crew.status}</h4>
                                                        <a href="${crew.wikipedia}" target="_blank"> <button class="viewWikipedia">Read more at wikipedia</button></a>
                                                        </div>
                                                    </div> 
                                                `                                   
                                                    
             });
                                                                      

            } catch {
                crewContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
            }
        }
    callApi();
},3000);


