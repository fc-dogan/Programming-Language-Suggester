$(document).ready(function(){
  
  $("form").submit(function(event){
    var interestInput = $("input#interest").val();
    var importantInput = $("input#important").val();
    var companyInput = $("input#company").val();
    var choiseInput = $("input#choise").val();
    var musicalInput = parseInt($("input:radio[name:musical]:checked").val());
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
  });

  $(".name").text(nameInput);
  $(".email").text(emailInput);

  




  

});