
let el = document.getElementById("minicolorbook");
let el2=document.getElementById("rastabook");
let colorClicked;
let squares;
//fetch svg 

fetch('colorpale.svg')
    .then(r => r.text())
    .then(text => {
        el.innerHTML = text;
    
        //declare all shapes and colors 

        let circle = document.querySelector("#circle");
        let triangle =document.querySelector("#triangle");
        let square =document.querySelector("#square");
  
            
        
        let green =document.querySelector("#green");
        let yellow =document.querySelector("#yellow");
        let red = document.querySelector("#red");

        let lime =document.querySelector("#Lime");
        let gold =document.querySelector("#Gold");
        let maroon = document.querySelector("#Maroon");

        let olive =document.querySelector("#Olive");
        let chocolate =document.querySelector("#Chocolate");
        let fuchsia = document.querySelector("#Fuchsia");

        
       
       

        //add event listeners for svg shapes to fill them 

        circle.addEventListener("click", clickedPut);
        triangle.addEventListener("click", clickedPut);
       square.addEventListener("click", clickedPut);
      
       
      
//add event listeners to color pallette
       red.addEventListener("click", colorPicked);
       green.addEventListener("click", colorPicked);
      yellow.addEventListener("click", colorPicked);
      lime.addEventListener("click", colorPicked);
      gold.addEventListener("click", colorPicked);
      maroon.addEventListener("click", colorPicked);
      olive.addEventListener("click", colorPicked);
      chocolate.addEventListener("click", colorPicked);
      fuchsia.addEventListener("click", colorPicked);
      
        // color pallete function
      function colorPicked(){
        console.log(this.id + " was clicked");
          colorClicked= this.id;
          console.log(colorClicked);
        }

     // shape fill function
        function clickedPut(){
       
  
            console.log(this.id + " was clicked");
            this.firstChild.style.fill=colorClicked;

            console.log(colorClicked);
        }
        
    
    })
    .catch(console.error.bind(console));
    
    
    
///fetch svg 2

fetch('rasta.svg')
    .then(r => r.text())
    .then(text => {
        el2.innerHTML = text;
      /*   let squares =document.querySelectorAll(".cls-3, .cls-2, .cls-1");
        console.log(squares); */
     let base = document.querySelector('#rastabook');
 let selector = '.cls-1, .cls-2, .cls-3, .cls-11';


base.addEventListener('click', function(event) {
  let closest = event.target.closest(selector);
	if (closest && base.contains(closest)) {
    console.log(closest);
      closest.style.fill=colorClicked;
     
      
  }
});
        
    
        /* //declare all shapes and colors 

        let circle = document.querySelector("#circle");
        let triangle =document.querySelector("#triangle");
        let square =document.querySelector("#square");
            
        let red = document.querySelector("#red");
        let green =document.querySelector("#green");
        let yellow =document.querySelector("#yellow");

        //add event listeners for svg shapes to fill them 

        circle.addEventListener("click", clickedPut);
        triangle.addEventListener("click", clickedPut);
       square.addEventListener("click", clickedPut);

//add event listeners to color pallette
       red.addEventListener("click", colorPicked);
       green.addEventListener("click", colorPicked);
      yellow.addEventListener("click", colorPicked);

        // color pallete function
      function colorPicked(){
        console.log(this.id + " was clicked");
            colorClicked= this.id;
            
        }

     // shape fill function
        function clickedPut(){
       
  
            console.log(this.id + " was clicked");
            this.firstChild.style.fill=colorClicked;

            console.log(colorClicked);
        } */
    
    }).catch(console.error.bind(console));