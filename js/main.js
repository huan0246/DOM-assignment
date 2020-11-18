document.addEventListener('DOMContentLoaded', showUsers);

function showUsers() {
  let cards = document.querySelector('.cards');
  //remove the sample HTML
  data.results.forEach((person) => {
    let fullname = person.name.first + ' ' + person.name.last;
    //create a card with all the data for `person` inside it
    //append the `card` to `cards`
  });
}

// No need to create other functions
// All the code goes inside showUsers()
