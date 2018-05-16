document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('button')
  button.addEventListener('click', function() {

  // console.log('Initializing...');

  $.ajax({

    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'

  }).done(function(responseData) {

    // console.log(responseData);

    var section = document.createElement('section');
    var node = document.createTextNode(responseData);
    var element = document.querySelector('body');

    section.appendChild(node);
    element.appendChild(section);

    console.log('Success!!');

    }).fail(function() {

     console.log('oops something went wrong');

    }).always(function() {

     console.log('Request ended!');

    })

  })

  // Step 7

  var button2 = document.querySelector('#button2')
  button2.addEventListener('click', function() {
  $.ajax({

    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text'

  }).done(function(data) {

    console.log(data);

    })

  })

});
