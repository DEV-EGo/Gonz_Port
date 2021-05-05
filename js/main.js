const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    // click event on toggle menu

    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl carousel for blog

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:3000,
        dots : false,
        nav:true,
        navText: [$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        responsive:responsive
    });

// click to scroll top

$(".move-up span").click(function(){
    $("html,body").animate({
        scrollTop:0
    }, 3000);
})

// animation on scroll
AOS.init();

// email post
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
});