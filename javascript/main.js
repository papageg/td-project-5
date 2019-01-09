// $.ajax({
//   url: 'https://randomuser.me/api/?results=12&?inc=picture,name,email,location,phone,registered,dob',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });


$.getJSON('https://randomuser.me/api/?results=12', function(data){
  let cardHTML;
  let searchHTML;
  let empClickHTML;



//START SEARCH     THIS HOLDS ALL THE HTML FOR THE SEARCH BAR
  searchHTML = '<form action="#" method="get">';
  searchHTML += '<input type="search" id="search-input" class="search-input" placeholder="Search..."'
  searchHTML += '<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit"></form>'
  $('.search-container').append(searchHTML);
//END SEARCH



//START CARD     THIS HOLDS ALL THE HTML FOR THE EMPLOYEE CARDS
  $.each(data.results, function(index,result) {
    cardHTML = `<div class="card" value="${index}">`;
    cardHTML += `<div class="card-img-container">`;
    cardHTML += '<img src="' + result.picture.medium + '" class="card-img"></div>';
    cardHTML += `<div class="card-info-container">`;
    cardHTML += '<h3 id="name" class="card-name cap"> ' + result.name.first + ' '+ result.name.last + '</h3>';
    cardHTML += '<p class ="card-text">' + result.email + '</p>';
    cardHTML += '<p class ="card-text cap">' + result.location.city+ ", " + result.location.state + '</p></div>';
    cardHTML += '</div>'



$('.gallery').append(cardHTML);

var $card = $('#gallery .card');

for (var i = 0 ; i <= $card.length; i++) {
$card[i].addEventListener('click', clickCard , false) ;
   function clickCard() {
     empClickHTML = `<div class="modal-container">`;
     empClickHTML += `<div class="modal">`;
     empClickHTML += `<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>`;
     empClickHTML += `<div class="modal-info-container">`;
     empClickHTML += '<img class="modal-img" src="' + result.picture.medium  + '"alt="profile picture">';
     empClickHTML += '<h3 id="' + name + '" class="modal-name cap">' + result.name.first + ' '+ result.name.last + '</h3>';
     empClickHTML += '<p class="modal-text">' + result.email + '</p>';
     empClickHTML += '<p class="modal-text cap">' + result.location.city+ '</p>';
     empClickHTML += `<hr>`;
     empClickHTML +=  '<p class="modal-text">' + result.phone +'</p>';
     empClickHTML += '<p class="modal-text">' + result.location.street + '' + result.location.city + ' ' + result.location.state + ' ' + result.location.postcode +  '</p>';
     empClickHTML += '<p class="modal-text">' + result.dob + '</p>';
     empClickHTML += `</div>`;
     empClickHTML += `</div>`;

     $('body').append(empClickHTML);
   }

   }

//
// empClickHTML = `<div class="modal-container">`;
// empClickHTML += `<div class="modal">`;
// empClickHTML += `<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>`;
// empClickHTML += `<div class="modal-info-container">`;
// empClickHTML += '<img class="modal-img" src="' + result.picture.medium  + '"alt="profile picture">';
// empClickHTML += '<h3 id="' + name + '" class="modal-name cap">' + result.name.first + ' '+ result.name.last + '</h3>';
// empClickHTML += '<p class="modal-text">' + result.email + '</p>';
// empClickHTML += '<p class="modal-text cap">' + result.location.city+ '</p>';
// empClickHTML += `<hr>`;
// empClickHTML +=  '<p class="modal-text">' + result.phone +'</p>';
// empClickHTML += '<p class="modal-text">' + result.location.street + '' + result.location.city + ' ' + result.location.state + ' ' + result.location.postcode +  '</p>';
// empClickHTML += '<p class="modal-text">' + result.dob + '</p>';
// empClickHTML += `</div>`;
// empClickHTML += `</div>`;
// $('body').append(empClickHTML);

});
  //  $('.card').addEventListener('click', function() {

//   var carcard = $('#gallery .card');
//   console.log(carcard[1])
// });









});

 // $('.card').addEventListener('click', function() {
 //   empClickHTML = `<div class="modal-container">`;
 //   empClickHTML += `<div class="modal">`;
 //   empClickHTML += `<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>`;
 //   empClickHTML += `<div class="modal-info-container">`;
 //   empClickHTML += '<img class="modal-img" src="' + result.picture.medium  + '"alt="profile picture">';
 //   empClickHTML += '<h3 id="' + name + '" class="modal-name cap">' + result.name.first + ' '+ result.name.last + '</h3>';
 //   empClickHTML += '<p class="modal-text">' + result.email + '</p>';
 //   empClickHTML += '<p class="modal-text cap">' + result.location.city+ '</p>';
 //   empClickHTML += `<hr>`;
 //   empClickHTML +=  '<p class="modal-text">' + result.phone +'</p>';
 //   empClickHTML += '<p class="modal-text">' + result.location.street + '' + result.location.city + ' ' + result.location.state + ' ' + result.location.postcode +  '</p>';
 //   empClickHTML += '<p class="modal-text">' + result.dob + '</p>';
 //   empClickHTML += `</div>`;
 //   empClickHTML += `</div>`;
 //   $('body').append(empClickHTML);
 // });


//END CARD

//START EMPLOYEE CLICKED THIS IS WHERE THE POPUP IS WHEN YOU CLICK AN EMPLOYEE


//END EMPLOYEE CLICKED THIS IS WHERE THE POPUP IS WHEN YOU CLICK AN EMPLOYEE
