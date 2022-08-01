//window.addEventListener('click', function(event){
//
//    let counter;
//
//    if(event.target.dataset.action ==='plus' || event.target.dataset.action ==='minus'){
//        const counterWrapper = event.target.closest('.minus-plus');
//        
//        counter = counterWrapper.querySelector('[data-counter]');
//    }
//
//    if (event.target.dataset.action ==='plus'){
//        counter.innerText = ++counter.innerText
//    }
//    if (event.target.dataset.action ==='minus'){
//        
//        if(parseInt(counter.innerText) > 1){
//            counter.innerText = --counter.innerText
//        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) { //event.target.closest('.cart-wrapper') - если у элемента, на который мы кликнули, есть родитель ('.cart-wrapper') и..., то выполняем такое действие
//            event.target.closest('.cart-item').remove()
//        }
//    
//    }
//})

window.addEventListener('click', function(event){
    let counter;
    if(event.target.dataset.action ==='plus' || event.target.dataset.action ==='minus'){
        const minusPlus = event.target.closest('.minus-plus');
        counter = minusPlus.querySelector('[data-counter]');
    }
    if (event.target.dataset.action ==='plus'){
        counter.innerText  = ++counter.innerText 
    }
    if (event.target.dataset.action ==='minus'){
        if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText ) === 1){
            event.target.closest('.cart-item').remove()
        }
    } 
});