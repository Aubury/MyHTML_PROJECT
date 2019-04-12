let body = document.querySelector("body");

document.querySelector('.infButton').addEventListener('click',function(){

    let plan = document.querySelector('.sliderItem').firstElementChild.children[1];
    
    if(plan.style.display == 'none'){
       
        plan.style.display = 'block';
    
    }else{

        plan.style.display = 'none';
    }

 
});


