document.addEventListener("DOMContentLoaded", function() {

var button = document.querySelector('button')
button.addEventListener('click', function() {

  console.log('Initializing...');
  $.ajax({

    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
  }).done(function(responseData) {
    console.log(responseData);
    var section = document.createElement('section');
    var node = document.createTextNode(responseData);
    section.appendChild(node);
    var element = document.querySelector('body')
    element.appendChild(section)
  })
});

 var response = $.ajax({

    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text'

  });

  response.done(function(responseData) {




  })

});
