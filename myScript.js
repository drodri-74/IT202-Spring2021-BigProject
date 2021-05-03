// Creating Top-nav-bar
mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('main');
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.querySelector("header button.mdc-top-app-bar__navigation-icon")
.addEventListener("click", (event) => {
 drawer.open = true;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});


// Top-nav-bar Actions...

// let navanchors = document.querySelectorAll("mdc-list-item__text");
//   navanchors.forEach((anchor) => {
//     anchor.addEventListener("click", (event)=> {
     
//       document.querySelectorAll(".screen").forEach((screen)=>{
//         screen.style.display = "none";})
// })
//     });

// Button
mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));


//       Setting home page to be "visible".
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

    fetch("https://data.cityofchicago.org/resource/s6ha-ppgi.json")
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
        opt3.innerText = i.units;   
        document.querySelector("#unitS").append(opt3);
        
        }                
});

//      Searching json file with options included


    let endpoint = "https://data.cityofchicago.org/resource/s6ha-ppgi.json";
    document.querySelector("#search").addEventListener("click", (e) => {
       
       let comA = document.querySelector("#commN").value;
       let proT = document.querySelector("#propT").value;
       let uniT = document.querySelector("#unitS").value;
       
       
      
        
       if(document.querySelector("#commN").selected==true){        
           endpoint = endpoint + "?community_area=" + comA;
           
    }  else if(document.querySelector("#propT").selected==true){
           endpoint = endpoint + "?property_type=" + proT;
        
        
    }  else if(document.querySelector("#unitS").selected==true){
           endpoint = endpoint + "?units=" + uniT;      
        
    }

        
//      After getting json(searched page) <actions? (created an ordered list of searched data)>.
       
        fetch(endpoint)
        .then((responce) => {return responce.json(); })
        .then((data) => {
            for (let item of data){
                let l = document.createElement("li");
                l.innerText = "Comunity area name: " + item["community_area"] +
                   
                    " - Address: " + item["address"] +
                    
                document.querySelector("#data1").append(l);

                
                
   
            }

        })
                                                      
    });




