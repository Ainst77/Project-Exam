
const launshContainer = document.querySelector(".containerInfo");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.spacexdata.com/v4/launches/" + id;



setTimeout(function(){
    async function linkProducts() {
        try{
            const response = await fetch(url);
            const launchInfo = await response.json();
            const loading = document.querySelector(".loader");

            console.log(id);
       
            loading.classList.remove("loader");   
            
            
            launshContainer.innerHTML +=  `
                                            <div class="imageWrap">
                                               <div class="infoImgWrap"><img class="infoImg" src="${launchInfo.links.patch.large}", alt="${launchInfo.links.patch.large.alt}"/></div>
                                               <div class="backButtonWrap"><a href="launches.html"><button id="launcheBackButton"> Back </button></a></div>
                                            </div>
                                            
                                            <div class="infoDetails">
                                                <h2 class="subHeader">${launchInfo.name}</h2> 
                                                <div class="details"> ${launchInfo.details}</div>
                                                <div><iframe class="videoYoutube" src="https://www.youtube.com/embed/${launchInfo.links.youtube_id}" ></div>
                                            </div>
                                            
                                             
                                            ` ;
                                        

    
       
        } catch {
            productinfoContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
        }
    
    }
         
    
    linkProducts(); 
},2000); 

  
 


 