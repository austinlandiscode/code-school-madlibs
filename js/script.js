$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const name1Input = $("input#name1").val();
    const name2Input = $("input#name2").val();
    const adjectiveInput = $("input#adjective").val();
    const animalsInput = $("input#animals").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".adjective").text(adjectiveInput);
    $(".animals").text(animalsInput);

    $("#story").show();

    event.preventDefault();
  });
});
