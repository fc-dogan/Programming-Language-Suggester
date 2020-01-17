$(document).ready(function(){
  
  $("#blanks form").submit(function(event){
    var interestInput = parseInt($("input#interest").val());
    var importantInput = $("input#important").val();
    var companyInput = $("input#company").val();
    var choiseInput =parseInt($("input#choise").val());
    var musicalInput = parseInt($("input:radio[name=musical]:checked").val());
    var nameInput = $("input.name").val();
    var emailInput = $("input.email").val();
 

  

  });

});

function suggestion(nameInput, emailInput, importantInput, companyInput, interestInput, choiseInput, musicalInput, event) {
  $(".name").text(nameInput);
  $(".email").text(emailInput);
  if (importantInput === "3" && companyInput === "1" && 5 < interestInput + choiseInput + musicalInput <= 8 || importantInput === "1" && companyInput === "3" && 5 < interestInput + choiseInput + musicalInput <= 8) {
    $("#c").slideDown();
    $("#form-input").hide();
  }
  else if (importantInput === "2" && companyInput === "2" && 3 < interestInput + choiseInput + musicalInput <= 5 || importantInput === "1" && companyInput === "3" && 3 < interestInput + choiseInput + musicalInput <= 5) {
    $("#javascript").show();
    $("#form-input").hide();
  }
  else if (importantInput === "1" && companyInput === "1" && interestInput + choiseInput + musicalInput <= 3 || importantInput === "3" && companyInput === "1" && interestInput + choiseInput + musicalInput <= 3) {
    $("#pyton").show();
    $("#form-input").hide();
  }
  event.preventDefault();
}
