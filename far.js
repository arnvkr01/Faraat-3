
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var hart = document.getElementById("hart");
      var letter = document.getElementById("letter");
  
      
      hart.style.display = "none";
  
     
      letter.style.display = "block";
      letter.classList.add("visible"); 
    }, 4000); 
  
    
    $(document).ready(function(){
      $(".container").mouseenter(function(){
        $(".card").stop().animate({ top: "-90px" }, "slow");
      }).mouseleave(function(){
        $(".card").stop().animate({ top: 0 }, "slow");
      });
    });
  });
  