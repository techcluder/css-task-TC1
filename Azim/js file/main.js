$(document).ready(function() {
    // $('.featuredProducts').slick({
      $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        // slidesToShow: 4,
        // slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      
    $('.parent').click(function() {
        $('.sub-nav').toggleClass('visible');
    });
});

$(".allCat").click(function(){
    $(".ddown").toggleClass("active");
})

$(".ddLink").click(function(){
    $(".ddLink").toggleClass("active");
})

$(".dropdown-toggle").click(function(){
    $(".dropdown-menu").toggleClass("active");
})
var mixer = mixitup('.mixit');

// --digital clock.. 
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
}

setInterval(updateClock, 1000);
updateClock(); 

  // new VenoBox({
  //   selector: '.veno',
  //   autoplay: true,
  // });

  // pop up video player
  $(document).ready(function() {
    $('.popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });
  });
  let subscribe = document.querySelector("#subscribe");
  subscribe.addEventListener("click" , function(){
      if (subscribe.style.backgroundColor === "green") {
            subscribe.style.backgroundColor = "red";
            alert("Unsubscribed")
  } else {
  subscribe.style.backgroundColor = "green";
  alert("Subscribed")
}
})
  let scrollPosition = document.documentElement.scrollTop;
  let headerHeight = document.querySelector("#header-bottom").offsetHeight;
  window.addEventListener('scroll', function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > headerHeight+400) {
      document.querySelector("#header-bottom").classList.add("sticky");
      } else {
        document.querySelector("#header-bottom").classList.remove("sticky");
    }
  })
  

  let backToTop = document.querySelector("#backToTop");
  window.addEventListener("scroll", function(){
    let scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > 500) {
      backToTop.style.display = "block";
      backToTop.style.right = "20px";
    }
    else {
      backToTop.style.display = "none";
    }
  });
  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
