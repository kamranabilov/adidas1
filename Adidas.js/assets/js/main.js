// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$(document).ready(function(){
    // $(".owl-carousel").owlCarousel();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

  });


let newMessage = false;
setInterval(() =>{
    if(newMessage){
        document.title="(1)Have You New Message"

        newMessage = !newMessage;
    }else{
        document.title = "Instgram"

        newMessage = !newMessage; 
    }
}, 1000);       