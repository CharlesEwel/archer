$(document).ready(function() {
  $("form#politics").submit(function(event) {
    event.preventDefault();

    var politics = 0;
      politics += parseInt($("#Punishment").val());
      politics += parseInt($("#Electoral").val());
      politics += parseInt($("#Finance").val());
      politics += parseInt($("#Security").val());
      politics += parseInt($("#Environmental").val());

    if(politics >= 5){
      $('#stand').text('Quite Liberal');
    } else if (politics >= 1){
      $('#stand').text('Liberal');
    } else if (politics >= -1){
      $('#stand').text('Politically Flexible');
    } else if (politics >= -5){
      $('#stand').text('Conservative');
    } else {
      $('#stand').text('Quite Conservative');
    }

    $('#output').show();

  });
});
