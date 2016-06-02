
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

    if(violentness >= 12){
      if(wildness >= 12){
        $('#character').text('Sterling Archer');
      } else if (wildness > -12 ){
        $('#character').text('Pam Poovey');
      } else {
        $('#character').text('Lana Kane');
      }
    } else if (violentness > -12){
      if(wildness >= 12){
        $('#character').text('Cheryl Tunt');
      } else if (wildness > -12){
        $('#character').text('Ron Cadillac');
      } else {
        $('#character').text('Ray Gillette');
      }
    } else {
      if(wildness >= 12){
        $('#character').text('Dr. Krieger');
      } else if (wildness > -12){
        $('#character').text('Mallory Archer');
      } else {
        $('#character').text('Cyril Figgis');
      }
    }

    $('#output').show();

  });
});
