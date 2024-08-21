$(document).ready(function(){
    var cartCountValue = 0;
    var cartCount = $( '.cart .count');
    $(cartCount).text(cartCountValue);
     
    $('.cart-btn').on('click', function(){  

        var cartBtn = this;
        var cartCountPosition =$(cartCount).offset();
        var btnposition = $(this).offset();

        var leftPos =
        cartCountPosition.left <btnposition.left
        ? btnposition.left - (btnposition.left - cartCountPosition.left)
        : cartCountPosition.left;
       
        var topPos =
        cartCountPosition.top < btnposition.top
        ? cartCountPosition.top
        : cartCountPosition.top;
        $(cartBtn)
        .appaend("<span class='count;>1</span>");

        $(cartBtn).find(".count").each((i, count,){
            $(count).offset({
                left: leftPos,
                top: topPos
            })
                .animate(
                    {
                        opacity: 0
                    },
                    800,
                    function () {
                        $(this).remove();
                        cartCountValue++;
                        $(cartCount).text(cartCountValue);
                    }
                );

        });
  


    });
    
});