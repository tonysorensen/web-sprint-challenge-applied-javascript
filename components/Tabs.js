// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

let topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
//  console.log(response.data.topics)
 topics = response.data.topics
//  console.log(topics)
  
topics.forEach(topic => {
    newTab(topic)
    
})
})
.catch((err => {
console.log('error!',err)
}))

const entryPoint = document.querySelector('.topics')

const newTab = (data) => {

    const tab = document.createElement('div')

    tab.classList.add('tab')
    tab.textContent = data
    // console.log(tab)
    entryPoint.appendChild(tab)
}




