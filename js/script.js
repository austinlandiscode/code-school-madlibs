$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const name1Input = $("input#name1").val().toUpperCase();
    const name2Input = $("input#name2").val().toUpperCase();
    const adjectiveInput = $("input#adjective").val().toUpperCase();
    const animalsInput = $("input#animals").val().toUpperCase();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".adjective").text(adjectiveInput);
    $(".animals").text(animalsInput);

    $("#story").show();

    event.preventDefault();
  });
});
