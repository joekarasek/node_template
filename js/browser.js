var pingPong = require('./../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#pingpong').submit(function(event){
    event.preventDefault();

    var goal = $('#goal').val();
    var result = pingPong(goal);
    result.forEach(function(element){
      $('#solution').append("<li>" + element + " this is an edit</li>");
    });


  });
});
