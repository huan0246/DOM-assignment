document.addEventListener('DOMContentLoaded', showUsers);

function showUsers() {
  let cards = document.querySelector('.cards');
  //remove the sample HTML
  cards.innerHTML = '';
  let df = document.createDocumentFragment();
  data.results.forEach((person) => {
    let fullname = person.name.first + ' ' + person.name.last;
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let pic = document.createElement('picture');
    let sour1 = document.createElement('source');
    let sour2 = document.createElement('source');
    let img  = document.createElement('img');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    div1.className = 'card';
    div2.className = 'avatar';
    sour1.setAttribute('srcset',person.picture.large,);
    sour1.setAttribute('media','(min-width:934px)');
    sour2.setAttribute('srcset',person.picture.thumbnail);
    sour2.setAttribute('media','(max-width:600px)');
    img.src = person.picture.medium;
    img.alt = `Picture of ${person.name.first}`;
    h3.className = 'name';
    p1.className = 'email';
    p2.className = 'cell';
    h3.innerHTML = fullname;
    p1.innerHTML = person.email;
    p2.innerHTML = person.phone;
    df.append(div1);
    div1.append(div2);
    div1.append(h3);
    div1.append(p1);
    div1.append(p2);
    div2.append(pic)
    pic.append(sour1);
    pic.append(sour2);
    pic.append(img);
    // div2.append(img);
  });
  cards.append(df);
}

// No need to create other functions
// All the code goes inside showUsers()
