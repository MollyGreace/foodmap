$(document).ready(function() {

  // splash
  $('#second').toggle();
  setTimeout(function() {
    $('#first').delay().fadeOut(1000);
    $('#second').toggle();
  }, 3000);  
  
  

  //Seleccionamos elementos del DOM
  var containerRestaurants = $('#container-restaurants');
  var containerModal = $('.card-body');
  //Función de cargar imágenes 
    for (i = 0; i < data.length; i++) {
    var photos = 
		'<div class="col-xs-6 restaurants">' +
			'<img class="img-thumbnail img-responsive photo-restaurants" src="' + data[i].image + '" data-target="#restModal" data-toggle="modal" data-name= "' + data[i].name + '" data-address= "' + data[i].address + '" data-phone= "' + data[i].telephone + '" data-web= "' + data[i].web +  '">' + 
    '</div>';
    containerRestaurants.append(photos);

    // if(data[i].image)
    // var modals = '<img data-target="#restModal" data-toggle="modal" src="' + data[i].logo + '">';
    // containerModal.append(modals);    
  };

  /* Filtrar imágenes */
  $('#search').keyup(function() {
    var inputSearch = $(this).val().toLowerCase();
    $('.restaurants').hide();
    $('.restaurants').each(function() { 
      var filtrer = $(this).data('name');
      if (filtrer.indexOf(inputSearch) !== -1 && inputSearch.length !== 0) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // // modal
  // $('.photo-restaurants').on('click', function() {
  //   var name = $(this).data('name'),
  //   	address = $(this).data('address'),
  //     phone = $(this).data('phone'),
  //     web = $(this).data('web');
  //   $('.name').text(name);
  //   $('.address').text(address);
  //   $('.phone').text(phone);
  //   $('.web').text(web);
  // });
	
	
  // mouseover
  $('.restaurants').mouseover(function() {
    for (i = 0; i < data.length; i++) {
      $(data[i].name, this).hide();
    }
  });
  $('.restaurants').mouseout(function() {
    for (i = 0; i < data.length; i++) {
      $(data[i].name, this).show();
    }
  });

  //Close
  $()
});