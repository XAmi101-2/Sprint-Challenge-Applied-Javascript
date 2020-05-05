// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let topicTabs = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    response.data.topics.forEach(items => {
      let newTabs = document.createElement('div');
      newTabs.classList.add('tab');
      newTabs.textContent = items;
      topicTabs.appendChild(newTabs);

    })
  })
  .catch((error) => {
    console.log(error);
  })

// function createTab(topicsList) {
//   const freshTab = document.createElement('div');
//   freshtab.classList.add('tab');
//   freshtab.textContent = topic;
//
//   tab.addEventListener('click', () => {
//       let card = document.querySelectorAll('.card');
//       card.forEach((cards) => {
//           cards.style.display = 'none'
//           if (cards.dataset.tab == tab.dataset.tab) {
//               cards.style.display = 'flex'
//           }
//       })
//       let allTabs = document.querySelectorAll('.tab');
//       allTabs.forEach((freshTab) => {
//           freshTab.classList.remove('active-tab');
//       })
//       tab.classList.add('active-tab');
//   })
//
//   return freshtab;
//
// }
