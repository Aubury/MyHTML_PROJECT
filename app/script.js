let body = document.querySelector("body");

document.querySelector('.infButton').addEventListener('click',function(){

    let plan = document.querySelector('.top').firstElementChild.children[1];
    
    if(plan.style.display == 'none'){
       
        plan.style.display = 'block';
    
    }else{

        plan.style.display = 'none';
    }

 
});

function getElementAttrs(el) {
    return [].slice.call(el.attributes).map((attr) => {
      return {
        name: attr.name,
        value: attr.value
      }
    });
  }
  function removeElementAttrs(el) {
    return [].slice.call(el.attributes).map((attr) => {
       
       return delete(attr);
      
    });
  }

document.querySelector('.topButton').addEventListener('click',function(){

    let firstChild = document.querySelector('.top').firstElementChild,
        secondChild = document.querySelector('.imgHouses').firstElementChild.nextElementSibling.nextElementSibling,
        lastChild = document.querySelector('.imgHouses').lastElementChild.previousElementSibling;
        
        
       let cloneFirst = '';

      for(let i = 0; i< firstChild.lenght; i++)
      {
          cloneFirst[i].innerHTML = firstChild[i].innerHTML;
      }
      
      removeElementAttrs(cloneFirst);

        let attrFirstChild = getElementAttrs(lastChild);

        for(let i = 0; i < attrFirstChild.lenght; i++){

            cloneFirst.setAttribute(attrFirstChild[i].name,attrFirstChild[i].value);
        }
        
        lastChild.replaceWith(cloneFirst); 
       
        // document.querySelector('.top').firstElementChild.replaceWith(secondChild);
        
       
        


});
