$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});

// Adds a pet to the page with user input on button click
$('#add-pet').on('click', function() {
  // Grab info from the form
  var $name = $('#pet-name');
  var $meat = $('#pet-species');
  var $rice = $('#rice-choice');
  var $salsa = $('#salsa-choice');
  
  //Assemble the HTML of our new element with the above variables
  var $newPet = $(
      '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() +
      '</p><p><strong>Meat:</strong> ' + $meat.val() +
      '</p><p><strong>Rice:</strong> ' + $rice.val() +
      '</p><p><strong>Salsa:</strong> ' + $salsa.val() +
      '</p><span class="close">&times;</span></div></section>'
    );
  
  // Attach the new element to the page
  $('#posted-pets').append($newPet);
  
  $.post('http://localhost:1234');
  
  // Make the 'x' in the corner remove the section it's contained within
  /*
  The parent() method returns the direct parent element of the selected element.
  
  The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element
  */
  $('.close').on('click', function() {
    $(this).parent().remove();
  });
  
  // Reset form fields
  $name.val("");
  $species.val("Dog");
  $notes.val("");
});

// Puppy images fade in
$('img').css('display', 'none').fadeIn(1600);


$('.card').on('click', function() {
  $(this).toggleClass('selected');
});






