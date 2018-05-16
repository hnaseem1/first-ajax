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

  // Step 8

  var button3 = document.getElementById('button3')

  button3.addEventListener('click', function() {
    $.ajax({

      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {America: 'Mexico_City'},
      dataType: 'text'

    }).done(function(data) {

      console.log(data);

    })
  })

  // Step 9

  var button4 = document.getElementById('button4')

  button4.addEventListener('click', function() {
    $.ajax({

      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'

    }).done(function(data) {

      var ul = document.createElement('ul')
      var element = document.querySelector('#step9')

      ul.append(data)
      

    })
  })


});
