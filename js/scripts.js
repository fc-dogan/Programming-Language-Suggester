$(document).ready(function(){
  $("form#formOne").submit(function(){
    event.preventDefault();
    var firstQ = parseInt($("#interest").val());
    var secondQ = $("#important").val();
    var thirdQ = $("#company").val();
    var forthQ = parseInt($("#choice").val());
    var fifthQ = $("input:radio[name=musical]:checked").val();

    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
 
      
    $(".p-name").text(nameInput);
    $(".p-email").text(emailInput);

    if (fifthQ === "no"){
      $("#c").show();
    } else {
      $("#javascript").show();
    }

  });
});
