// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headerContainer = document.querySelector('.header-container');

function Header() {

  // create the elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const h1 = document.createElement('h1');
  const temp = document.createElement('span');

  // grab the element classes
  header.classList.add('header');
  date.classList.add('date')
  temp.classList.add('temp');

  // grab element textContent
  date.textContent = 'SMARCH 28, 2019';
  h1.textContent = 'Lambda Times';
  temp.textContent = '98°';

  //  append  the elements
  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(temp);
  headerContainer.appendChild(header);


  return header;

}

let newHeader = Header();
headerContainer.appendChild(newHeader);
