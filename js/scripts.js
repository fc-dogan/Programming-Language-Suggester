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

    $("#output button").click(function(){
      location.reload()
    });

    if (fifthQ === "yes"){
      if (firstQ + forthQ > 2 && secondQ === "2" ||
      firstQ + forthQ > 2 && thirdQ === "2") {
        $("#javascript").show();
        $("#blanks").hide();
      } else if (firstQ + forthQ <= 2 && secondQ === "1" ||
      firstQ + forthQ <= 2 && thirdQ === "1"){
        $("#python").show();
        $("#blanks").hide();
      } else {
        $("#c").show();
        $("#blanks").hide();
      }
    } else {
      $("#c").slideDown();
      $("#blanks").hide();
    }

     

  });
});
