let body = document.querySelector("body");

document.querySelector('.infButton').addEventListener('click',function(){

    let plan = document.querySelector('.sliderItem').firstElementChild.firstElementChild,
        img = document.querySelectorAll('.action');

    
    if(plan.style.display == 'none'){
        
        
        if(window.screen.width <= 1050){

            for(let i = 0; i < img.length; i++){

                img[i].style.display = 'none';
            }
          
        }
        
        plan.style.display = 'block';
    }else{

        plan.style.display = 'none';
        
        if(window.screen.width <= 1050){
           
            for(let i = 0; i < img.length; i++){

                img[i].style.display = 'block';
            }
      } 
    }

 
});


