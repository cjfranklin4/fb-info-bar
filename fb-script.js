// this is just to make sure my content script is running
console.log('hi there!')

// this is the function that'll run when  the email field is clicked
function createInfoPopUp (e) {
  // first it creates a div element
  const div = document.createElement('div')
  // then it adds some content inside the div
  div.innerHTML = `<span onclick="document.getElementById('id01').style.display='none'">Close</span>
    Hello! this is some info about what facebook does with emails.
    to learn more checkout <a href="https://en.wikipedia.org/wiki/Email" target="_blank">this page</a>

    <ul>
      <li>3</li>
      <li>2</li>
      <li>1</li>
    </ul>
  `
  // then i add the CSS i want to that div
  div.style.backgroundColor = 'red'
  div.style.color = '#1877f2'
  div.style.maxWidth = '200px'
  div.style.border = '2px solid #1877f2'
  div.style.borderRadius = '6px'
  div.style.padding = '20px'
  div.style.position = 'absolute'
  div.style.left = `${e.clientX}px` // taking the values passed to the function
  div.style.top = `${e.clientY}px` // so that the div is placed where my mouse is
  // then injecting this new div on the facebook page
  document.body.appendChild(div)
}

function createPhotoPopUp (e) {
  // first it creates a div element
  const divOne = document.createElement('div')
  // then it adds some content inside the div
  divOne.innerHTML = `
    Hello! this is some info about what facebook does with emails.
    to learn more checkout <a href="https://en.wikipedia.org/wiki/Email" target="_blank">this page</a>

    <ul>
      <li>3</li>
      <li>2</li>
      <li>1</li>
    </ul>
  `
  // then i add the CSS i want to that div
  divOne.style.backgroundColor = '#fff'
  divOne.style.color = '#1877f2'
  divOne.style.maxWidth = '200px'
  divOne.style.border = '2px solid #1877f2'
  divOne.style.borderRadius = '6px'
  divOne.style.padding = '20px'
  divOne.style.position = 'absolute'
  divOne.style.left = `${e.clientX}px` // taking the values passed to the function
  divOne.style.top = `${e.clientY}px` // so that the div is placed where my mouse is
  // then injecting this new div on the facebook page
  document.body.appendChild(divOne)
}

/*function createMessPopUp (e) {
  // first it creates a div element
  const divTwo = document.createElement('divOne')
  // then it adds some content inside the div
  divTwo.innerHTML = `<span onclick="document.getElementById('id01').style.display='none'">Close</span>
    Hello! this is some info about what facebook does with emails.
    to learn more checkout <a href="https://en.wikipedia.org/wiki/Email" target="_blank">this page</a>

    <ul>
      <li>3</li>
      <li>2</li>
      <li>1</li>
    </ul>
  `
  // then i add the CSS i want to that div
  divTwo.style.backgroundColor = '#fff'
  divTwo.style.color = '#1877f2'
  divTwo.style.maxWidth = '200px'
  divTwo.style.border = '2px solid #1877f2'
  divTwo.style.borderRadius = '6px'
  divTwo.style.padding = '20px'
  divTwo.style.position = 'absolute'
  divTwo.style.left = `${e.clientX}px` // taking the values passed to the function
  divTwo.style.top = `${e.clientY}px` // so that the div is placed where my mouse is
  // then injecting this new div on the facebook page
  document.body.appendChild(divTwo)
}*/

 /*function createOatPopUp (e) {
  // first it creates a div element
  const div = document.createElement('divTwo')
  // then it adds some content inside the div
  divTwo.innerHTML = `<span onclick="document.getElementById('id01').style.display='none'">Close</span>
    Hello! this is some info about what facebook does with emails.
    to learn more checkout <a href="https://en.wikipedia.org/wiki/Email" target="_blank">this page</a>

    <ul>
      <li>3</li>
      <li>2</li>
      <li>1</li>
    </ul>
  `
  // then i add the CSS i want to that div
  div.style.backgroundColor = '#fff'
  div.style.color = '#1877f2'
  div.style.maxWidth = '200px'
  div.style.border = '2px solid #1877f2'
  div.style.borderRadius = '6px'
  div.style.padding = '20px'
  div.style.position = 'absolute'
  div.style.left = `${e.clientX}px` // taking the values passed to the function
  div.style.top = `${e.clientY}px` // so that the div is placed where my mouse is
  // then injecting this new div on the facebook page
  document.body.appendChild(div)
}*/


// here i create a variable/reference for the facbook email login field
//const emailField = document.querySelector('#email')
// here i attach my function to the "click" listener for that field
//emailField.addEventListener('click', createInfoPopUp)



const postField = document.querySelector("div.cjfnh4rs form[method='POST']")

const photoField = document.querySelector("div.g5ia77u1:nth-child(3)")

//const oatField = document.querySelector(".rl25f0pe > span:nth-child(1) > div:nth-child(1)") //or div.j83agx80

//const messField - document.querySelector("div.datstx6m:nth-child(3)")

postField.addEventListener('click', createInfoPopUp)

photoField.addEventListener('click', createPhotoPopUp)
//script works when one of these is commented out, does not work when both are active

//messField.addEventListener('click', createMessPopUp)

//oatField.addEventListener('click', createOatPopUp)
