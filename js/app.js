$(document).ready(function() {

  // splash
  $('#second').toggle();
  setTimeout(function() {
    $('#first').delay().fadeOut(1000);
    $('#second').toggle();
  }, 3000);  
  
  

  //Seleccionamos elementos del DOM
  var containerRestaurants = $('#container-restaurants');
  var search = $('#search');
  
  //Función de cargar imágenes 
    for (i = 0; i < data.length; i++) {
    var photos = 
		'<div class="col-sm-5">' +
			'<img class="img-thumbnail photo-restaurants" src="' + data[i].image + '">'// data-target="#restModal" data-toggle="modal" data-name= "' + data[i].name + '" data-address= "' + data[i].address + '" data-phone= "' + data[i].telephone + '" data-web= "' + data[i].web +  '">' + 
      // '<img class="img-thumbnail photo-restaurants" src = "' + data[i].back + '" data-target="#restModal" data-toggle="modal">' +
    '</div>';
    containerRestaurants.append(photos);
    };

  // // filtro
  // $('#search').keyup(function() {
  //   var name = $(this).val();
  //   $('.collection').hide();
  //   $('.collection').each(function() {
  //     var search = $(this).text().toLowerCase();
  //     if (search.indexOf(name) !== -1) {
  //       $(this).show();
  //     }
  //   });
  // });

  // // modal
  // $('.content').click(function() {
  //   var name = $(this).data('name'),
  //   	address = $(this).data('address'),
  //     phone = $(this).data('phone'),
  //     attention = $(this).data('attention'),
  //     money = $(this).data('money'),
  //     type = $(this).data('type');
  //   $('.name').text(name);
  //   $('.address').text(address);
  //   $('.phone').text(phone);
  //   $('.attention').text(attention);
  //   $('.money').text(money);
  //   $('.type').text(type);
  // });
	
  // $('.close').click(function() {
  //   $('#search').val('');
  //   $('.collection').show();
  // });
	
  // // mouseover
  // $('.collection').mouseover(function() {
  //   $('p', this).hide();
  // });
  // $('.collection').mouseout(function() {
  //   $('p', this).show();
  // });
});