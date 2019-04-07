let body = document.querySelector("body");

document.querySelector('.infButton').addEventListener('click',function(){

    let plan = document.getElementById('1').childNodes[2];
    
    if(plan.style.display == 'none'){
       
        plan.style.display = 'block';
    
    }else{

        plan.style.display = 'none';
    }

 
});

