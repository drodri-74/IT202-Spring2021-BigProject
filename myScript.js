 

document.querySelector("#home").style.display = "block";
     
//       Making the navegation var

    let navanchors = document.querySelectorAll("div#nav a");
    navanchors.forEach((anchor) => {
        anchor.addEventListener("click", (event)=> {
        document.querySelectorAll(".screen").forEach((screen)=>{
            screen.style.display = "none";
})
        let screen = event.target.getAttribute("data-screen");
        let targetScreen = document.querySelector("#" + screen);
        targetScreen.style.display = "block";

})
});

//      Generating option values for <select> options.

    fetch("https://data.cityofchicago.org/resource/aksk-kvfp.json")
        .then ((responce)=> {
        return responce.json();
        })  
        .then ((data)=>{
        for (let i of data) {
      
        let opt1 = document.createElement("option");
        opt1.innerText = i.community_area;
        document.querySelector("#commN").append(opt1);
        
        let opt2 = document.createElement("option");
        opt2.innerText = i.property_type;
        document.querySelector("#propT").append(opt2);
        
        let opt3 = document.createElement("option");
        opt3.innerText = i.management_company;
        document.querySelector("#manaC").append(opt3);
        }                
});

//      Searching json file with options included

    let endpoint = "https://data.cityofchicago.org/resource/s6ha-ppgi.json";
    
    document.querySelector("#search").addEventListener("click", (e) => {
       
       let comA = document.querySelector("#commN").value;
       let proT = document.querySelector("#propT").value;
       let manC = document.querySelector("#manaC").value;

       let url = endpoint
        
       if(document.querySelector("#commN").selected==true){
        let url = endpoint + "?community_area=" + comA; 
    }  if(document.querySelector("#propT").selected==true){
        let url = endpoint + "?property_type=" + proT; 
    }  if(document.querySelector("#manaC").selected==true){
        let url = endpoint + "?management_company=" + manC; 
    }

//      After getting json(searched page) <actions?>.
       
        fetch(url)
        
        .then((responce) => {return responce.json(); })
        .then((data) => {
            for (let item of data){
                let l = document.createElement("li");
                l.innerText = "Comunity area name: " + item["community_area"] +
                   
                    " - Address: " + item["address"] +
                    
                document.querySelector("lo").append(l);

                
                
   
            }

        })
                                                      
    });



