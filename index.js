$(function() {
  $("span").hide();

  reloadList();

  $("form").submit(function(event) {
    event.preventDefault();

    var characterInfo = {
      name: $("form [name='name']").val(),
      weapon: $("form [name='weapon']").val(),
      occupation: $("form [name='occupation']").val(),
      debt: $("form [name='debt']").val()
    };

    $.post("https://ih-crud-api.herokuapp.com/characters", characterInfo, function() {
      reloadList();
    });
  });
});

function reloadList() {
  $("ul li").remove();
  $("span").show();

  $.getJSON("https://ih-crud-api.herokuapp.com/characters", function(data) {
    $("span").hide();
    
    data.reverse().forEach((character) => {
      $("ul").append("<li>" + character.name + "</li>");
    });
  });
}