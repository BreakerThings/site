//const cartWrapper = document.querySelector('.cart-wrapper');
//
//window.addEventListener('click', function(event){
//    if(event.target.hasAttribute('data-cart')){
//        
//        const card = event.target.closest('.card');
//        
//        const productInfo = {
//            id: card.dataset.id,
//            imgSrc: card.querySelector('.card_img').getAttribute('src'),
//            title: card.querySelector('[data-title]').innerText,
//            weight: card.querySelector('.weight_product').innerText,
//            price: card.querySelector('.price_production').innerText,
//            counter: card.querySelector('[data-counter]').innerText,
//            amountPieces: card.querySelector('.amount_product').innerText,
//        }
//
//        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
//        if (itemInCart) {
//            const counterElement = itemInCart.querySelector('[data-counter]');
//            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
//        } else {
//            const cartItemText = `<div class="cart-item silver" data-id="${productInfo.id}">
//            <div>
//                                                    <img class="cart-item_img" src="${productInfo.imgSrc}">
//            </div>
//            <div class="right_block_wrapper_flex">
//                                                    <h2 data-title class="cart-item_h2">${productInfo.title}</h2>
//                                                    <div class="cart-item_info_product">
//                                                        <div class="cart-item_weight-amount">
//                                                            <span class="cart-item_weight_product">${productInfo.weight}</span>
//                                                            <span class="cart-item_amount_product">${productInfo.amountPieces}</span>
//                                                        </div>
//                    
//                                                        <div class="cart-item_price_production">
//                                                            <p><span class="cart-item_more_font-size">${productInfo.price}</span></p>
//                                                        </div>
//                                                                        </div>
//                                                        <div class="minus-plus">
//                                                            <div class="button_minus  cart-item_more_font-size_large " data-action="minus">-</div>
//                                                            <div class="counter       cart-item_more_font-size_large " data-counter>${productInfo.counter}</div>
//                                                            <div class="button_plus   cart-item_more_font-size_large " data-action="plus">+</div>
//                                                        </div>
//                                                        <div class="already_in_basket">В корзине</div>
//            </div>                      
//            
//                                                </div>`;
//
//                        cartWrapper.insertAdjacentHTML('beforeend',cartItemText)
//        }
//        
//    }
//});

const cartWrapper = document.querySelector('.cart-wrapper')
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card')
        const infoProduct = {
            id:card.dataset.id,
            weight:card.querySelector('.weight_product').innerText,
            price:card.querySelector('.price_production_item').innerText,
            imgSrc:card.querySelector('.card_img').getAttribute('src'),
            title:card.querySelector('[data-title]').innerText,
            amountPieces:card.querySelector('.amount_product').innerText,
            counter:card.querySelector('[data-counter]').innerText,
        }
        const cartItem = cartWrapper.querySelector(`[data-id="${infoProduct.id}"]`)
        if(cartItem){
            const counterItem = cartItem.querySelector('[data-counter]');
            counterItem.innerText = parseInt(counterItem.innerText) + parseInt(infoProduct.counter);
        } else {
            const cartItemText = `<div class="cart-item silver" data-id="${infoProduct.id}">
                       <div>
                                                               <img class="cart-item_img" src="${infoProduct.imgSrc}">
                       </div>
                       <div class="right_block_wrapper_flex">
                                                               <h2 data-title class="cart-item_h2">${infoProduct.title}</h2>
                                                               <div class="cart-item_info_product">
                                                                   <div class="cart-item_weight-amount">
                                                                       <span class="cart-item_weight_product">${infoProduct.weight}</span>
                                                                       <span class="cart-item_amount_product">${infoProduct.amountPieces}</span>
                                                                   </div>
                               
                                                                   <div class="cart-item_price_production">
                                                                       <p><span class="cart-item_more_font-size price_production_item">${infoProduct.price}</span><span> грн.</span></p>
                                                                   </div>
                                                                                   </div>
                                                                   <div class="minus-plus">
                                                                       <div class="button_minus  cart-item_more_font-size_large " data-action="minus">-</div>
                                                                       <div class="counter       cart-item_more_font-size_large " data-counter>${infoProduct.counter}</div>
                                                                       <div class="button_plus   cart-item_more_font-size_large " data-action="plus">+</div>
                                                                   </div>
                                                                   <div class="already_in_basket">В корзине</div>
                       </div>                      
                       
                                                           </div>`;
                            cartWrapper.insertAdjacentHTML('beforeend',cartItemText)

        }
        card.querySelector('[data-counter]').innerText = '1';
        calcCartPriceAndDelivery();
        toggleCartStatus();
    }
})