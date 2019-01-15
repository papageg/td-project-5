// $.ajax({
//   url: 'https://randomuser.me/api/?results=12&?inc=picture,name,email,location,phone,registered,dob',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });
let arrayCards = [];

$.getJSON('https://randomuser.me/api/?results=12', function (data){
  let cardHTML;
  let searchHTML;



//START SEARCH     THIS HOLDS ALL THE HTML FOR THE SEARCH BAR
  searchHTML = '<form action="#" method="get">';
  searchHTML += '<input type="search" id="search-input" class="search-input" placeholder="Search..."'
  searchHTML += '<input type="submit" id="serach-submit" class="search-submit"></form>'
  $('.search-container').append(searchHTML);

  $('input #search').keyup( function () {
  var filter = $(this).val();
  // get the value of the input field so we can filter the results
  if (($(data.results).toUpperCase().val()) ===$('#search-input').toUpperCase().val())
  // $(data.results).find(".card:contains(" + filter + ")").hide();
  console.log('Worked 1')
});


// $('input').on("keyup", function() {
//   console.log('hi')
//   var value = $(this).val().toLowerCase();
//   var cardVal = $('.card')[i].val().toLowerCase;
//   console.log($('.card')[1]);
//   console.log(value);
//   if (value === $('.card-name cap').val().toLowerCase()){
//     console.log('somthing matched');
// }
// });

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
arrayCards.push(cardHTML);


})
//let clickedCard;
//console.log(data.results[1]);
for (i = 0; i < 12; i++){
  const popCard = document.querySelectorAll('.card')[i];
  arrayCards.push(popCard);
  popCard.addEventListener('click', function(e) {
    let cardVal = popCard.getAttribute('value');
$('body').append(`
  <div class="modal-container">
  <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
    <img class="modal-img" src="${data.results[cardVal].picture.medium}" alt="profile picture">
    <h3 id="name" class="modal-name cap">${data.results[cardVal].name.first} ${data.results[cardVal].name.last}</h3>
    <p class="modal-text">${data.results[cardVal].email}</p>
    <p class="modal-text cap">${data.results[cardVal].location.city}</p>
    <hr>
    <p class="modal-text">${data.results[cardVal].phone}</p>
    <p class="modal-text">${data.results[cardVal].location.street} ${data.results[cardVal].location.city} ${data.results[cardVal].location.state} ${data.results[cardVal].location.postcode} </p>
    <p class="modal-text">${data.results[cardVal].dob.date}</p>
    </div>
    </div>
    </div>
  `);
 $('#modal-close-btn').click(function() {
  $('.modal-container').remove();
});



})
$('input').on("keyup", function() {
  //console.log('hi')
  var value = $(this).val().toLowerCase();
  //var cardVal = $(popCard).toLowerCase();
  console.log(value);
  console.log($(arrayCards).val())
//  console.log(cardVal);
  if (value === 1){
    console.log('somthing matched');
}
});


  }
});

let empClickHTML;

function empButton() {

};




//END CARD


//START EMPLOYEE CLICKED THIS IS WHERE THE POPUP IS WHEN YOU CLICK AN EMPLOYEE


//END EMPLOYEE CLICKED THIS IS WHERE THE POPUP IS WHEN YOU CLICK AN EMPLOYEE
