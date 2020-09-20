// var navBtn = document.getElementById("navDiv");
// var navItem = navBtn.getElementsByClassName("nav-item");
// for(var a = 0; a < navItem.length; a++){
//     navItem[i].addEventListener("click", function(){
//         var currentNav = document.getElementsByClassName("activeNav");
//         currentNav[0].className= currentNav[0].className.replace(" activeNave", "");
//         this.className += " activeNav";
//     })
// }


// Active Button Bg Change
// Using jQuery
$(document).ready(function(){
    $('.nav-item').click(function(){
      $('.nav-item').removeClass('activeNav').addClass('inactive');
       $(this).removeClass('inactive').addClass('activeNav');
      });
  })

  

// Active Button Bg Change
// Using For Loop
var portfolioBtn = document.getElementById("btn-portfolioDiv");
var btnPortfolio = portfolioBtn.getElementsByClassName("btn-portfolio");
for (var i=0; i< btnPortfolio.length; i++){
    btnPortfolio[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}



$("#webBtn").click(function(){
    $(".isotope").filter(".tAppUi").hide(500);
    $(".isotope").filter(".blogUi").hide(2000);
    $(".mock-up").show(2000);
    $(".Icon").show(2000);
})

$("#appBtn").click(function(){
    $(".isotope").filter(".Icon").hide(500);
    $(".isotope").filter(".blogUi").hide(2000);
    $(".mock-up").show(2000);
    $(".tAppUi").show(1000);
})
$("#iconBtn").click(function(){
    $(".isotope").filter(".mock-up").hide(2000);
    $(".isotope").filter(".tAppUi").hide(2000);
    $(".isotope").filter(".Icon").hide(2000);
    $(".blogUi").show(2000);
})


$("#allBtn").click(function(){
    $(".isotope").show(2000);
})




