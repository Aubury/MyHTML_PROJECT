let body = document.querySelector("body");

let step = document.querySelector('.sliderItem').offsetHeight ,
    slider = document.querySelector('.slider'),
    sliderItem = document.querySelector('.sliderItem'),
    listSlider = document.querySelectorAll('.sliderItem'),
    buttonTop = document.querySelector('.topButton'),
    buttonDown = document.querySelector('.downButton'),
    click = 0,
    maxClick = listSlider.length,
    position = 0,
    styleSlider = '',
    sliderMarginTop = '';

const slidPlan = {
    imgHouses : document.querySelector('.imgHouses'),
    gallery   : document.querySelector('.gallery'),
    heightImgHouses  : 0,
    heightGallery    : 0
}

let topButton = function (){

      position = Math.max(position - step, - step*(listSlider.length - 3));
    slider.style.marginTop = position +'px';
    click < listSlider.length ? click++ : click = listSlider.length ;
    focus(click);
}

let downButton = function (){
    position =  Math.min(position  + step, 0);
    slider.style.marginTop = position + 'px';
    click > 0 ? click-- : click = 0;
    focus(click);
}

buttonTop.addEventListener('click', topButton);
buttonDown.addEventListener('click', downButton);

slider.addEventListener('click',function(event){
  
    if(event.target.classList.contains('infButton')){

        let plan = event.target.parentNode.firstElementChild.firstElementChild,
                img = event.target.parentNode.firstElementChild.firstElementChild.nextElementSibling;
                

            if(plan.classList.contains('hide')){

            if(window.screen.width <= 1050){
            
                slidPlan.heightImgHouses = slidPlan.imgHouses.offsetHeight;
                slidPlan.heightGallery = slidPlan.gallery.offsetHeight;
                styleSlider = getComputedStyle(slider),
                sliderMarginTop = styleSlider.marginTop;
                
                    for(let i = 0; i < listSlider.length; i++){
                         
                        if(listSlider[i] == event.target.parentNode){

                            img.style.display = 'none';
                            
                        }else{
  
                            listSlider[i].classList.add('hide');
                        }
                    }
                    
                    plan.classList.remove('hide');
                    slider.style.marginTop = '0px'
                    slidPlan.gallery.style.height = 'auto';
                    slidPlan.imgHouses.style.height = 'auto';
                     buttonTop.removeEventListener('click', topButton);
                     buttonDown.removeEventListener('click', downButton);

                  
                    return;
                }
                
                plan.classList.remove('hide');
               
            }else{

                plan.classList.add('hide');
                
                if(window.screen.width <= 1050){
                
                    slidPlan.imgHouses.style.height = slidPlan.heightImgHouses+'px';
                    slidPlan.gallery.style.height = slidPlan.heightGallery+'px';
                    slider.style.marginTop = sliderMarginTop;
                    
                    for(let i = 0; i < listSlider.length; i++){

                        if(listSlider[i] == event.target.parentNode){

                            img.style.display = 'block';
                            
                        }else{
  
                            listSlider[i].classList.remove('hide');
                        }


                    }
                    buttonTop.addEventListener('click', topButton);
                    buttonDown.addEventListener('click', downButton);
            } 
        }

    }else{
        
        return;
    }

    

 
});

function focus(click){

   for( let i = 0; i < listSlider.length; i++){
            
            if( i == click ){

                listSlider[i].firstElementChild.firstElementChild.nextElementSibling.classList.remove('filter');
                listSlider[i].firstElementChild.nextElementSibling.classList.remove('hide');
            }else{

                listSlider[i].firstElementChild.nextElementSibling.classList.add('hide');
                listSlider[i].firstElementChild.firstElementChild.nextElementSibling.classList.add('filter');
            }
        }      
  
}
