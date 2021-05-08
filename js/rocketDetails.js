
const rocketContainer = document.querySelector(".rocketDetailsInfo");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.spacexdata.com/v4/rockets/" + id;



setTimeout(function(){
    async function linkProducts() {
        try{
            const response = await fetch(url);
            const rocketInfo = await response.json();
            const loading = document.querySelector(".loader");

            console.log(id);
       
            loading.classList.remove("loader");   
            
   
            rocketContainer.innerHTML +=`   
                                            <div class="rocketDetailContent">
                                                <h1 class="subHeader">${rocketInfo.name}</h2>
                                                <h2 class="rocketComapny">${rocketInfo.company}</h2> 
                                            
                                                <div class="rocketDetails"> ${rocketInfo.description}</div>
                                                <div class="viewWikipediaDiv"><a href="${rocketInfo.wikipedia}" target="_blank"> <button class="viewWikipedia">Read more at wikipedia</button></a></div>
                                                <a href="rocket.html"><button id="backButton"> Back </button></a>
                                            </div>
                                            
                                            <div class="rocketImgWrap">
                                                <img class="rocketInfoImg" src="${rocketInfo.flickr_images[0]}" , alt="${rocketInfo.flickr_images[0].alt}"/>
                                                <img class="rocketInfoImg" src="${rocketInfo.flickr_images[1]}" , alt="${rocketInfo.flickr_images[1].alt}"/>
                                            </div>
                                            
                                        ` 
                                        
                                    
                    
            
    
       
        } catch {
            rocketContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
        }
    
    }
         
    
    linkProducts(); 
},2000); 

  
 


 