
var extractViolence = function(rawscore) {
  return parseInt(String(rawscore.charAt(0)))-5;
};
var extractWildness = function(rawscore) {
  return parseInt(String(rawscore.charAt(1)))-5;
};

$(document).ready(function() {
  $("form#archer").submit(function(event) {
    event.preventDefault();

    var violentness = 0;
    violentness += extractViolence($("#blimp").val());
    violentness += extractViolence($("#Midnight").val());
    violentness += extractViolence($("#mortal").val());
    violentness += extractViolence($("#kidnap").val());
    violentness += extractViolence($("#yakuza").val());

    var wildness = 0;
    wildness += extractWildness($("#blimp").val());
    wildness += extractWildness($("#Midnight").val());
    wildness += extractWildness($("#mortal").val());
    wildness += extractWildness($("#kidnap").val());
    wildness += extractWildness($("#yakuza").val());

  $("body").removeClass();

    if(violentness >= 12){
      if(wildness >= 12){
        $('#character').text('Sterling Archer');
          $("body").addClass("violentandwild");
      } else if (wildness > -12 ){
        $('#character').text('Pam Poovey');
          $("body").addClass("");
      } else {
        $('#character').text('Lana Kane');
          $("body").addClass("violentnotwild");
      }
    } else if (violentness > -12){
      if(wildness >= 12){
        $('#character').text('Cheryl Tunt');
          $("body").addClass("");
      } else if (wildness > -12){
        $('#character').text('Ron Cadillac');
          $("body").addClass("");
      } else {
        $('#character').text('Ray Gillette');
          $("body").addClass("");
      }
    } else {
      if(wildness >= 12){
        $('#character').text('Dr. Krieger');
          $("body").addClass("nonviolentwild");
      } else if (wildness > -12){
        $('#character').text('Mallory Archer');
          $("body").addClass("");
      } else {
        $('#character').text('Cyril Figgis');
          $("body").addClass("nonviolentnotwild");
      }
    }

    $('#output').show();

  });
});
