
// MDN Git Learning Area 
  // https://github.com/mdn/learning-area

/* 
// https://developer.mozilla.org/en-US/docs/Web/API/Document
// alert(document.body.id);
// create a new body element
const newDocBody = document.createElement('body');
// append a new id attribute to the new body element
newDocBody.id = 'new-site-body-id';
// assign new body element to the document body API
document.body = newDocBody;
// call new document body id in alert 
  // works but creates an error
// console.log(document.body.id);
*/

// not sure why doesn't work
  // maybe bc there's no element being selected to append it to? 
  document.body.onload = addElement;
  function addElement() {
    // create a new element
    const newPara = document.createElement('p');
    // give it some content
    const newParaContent = document.createTextNode('Hello World... I\'m dynamically generated content!');
    // add the text node to the newParaContent
    newPara.appendChild(newParaContent);
    // add all above into DOM
    const currentPara = document.getElementById('para');
    document.body.insertBefore(newPara, currentPara);
  }
addElement();

// find the length of a string
let browserType = 'Mozilla';
console.log(browserType.length);
// get last char in any string
console.log(browserType[browserType.length - 1]);
// find substring in string. returns index position. -1 if substring not found 
console.log('substring index position: ', browserType.indexOf('vanilla'));

// square bracket notation returns any char inside a string
console.log('browserType square bracket notation:', browserType[3]);

// https://techstacker.com/display-javascript-objects-in-html/ 
// XSS problem: https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-using-javascript/1358815#1358815

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addElement() {
  // create a new div element
  let newP = document.createElement("p");
  // give it some content
  
  // find length of string, charAt, toUpperCase() toLowerCase()
  const browserType = `mozilla`;
  browserType[0].toUpperCase(); // doesn't work outside a method?

  // console.log('this is browserType:', browserType.toUpperCase());
  let output = "Fuck you.\nNo, Fuck you!";
  let browserString = document.createTextNode(
    `let browserType = "${browserType}".
    It's string length = ${browserType.length}.
    Capitalize the first letter using square bracket notation and toUppercase method: ${browserType[0].toUpperCase()}.
    Capitalize whole word: ${browserType[0].toUpperCase() + browserType.substring(1)}. 
    Return last letter of browserType: "${browserType[browserType.length - 1]}". 
    Find substring in "${browserType}": returns index of start position for beginning of substring "illa": ${browserType.indexOf('illa')}. 
    Using slice(): "${browserType.slice(1).toUpperCase()}".
    `
  );
  // add the text node to the newly created div
  newP.appendChild(browserString);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('div1');
  document.body.insertBefore(newP, currentDiv);
  // newUl.appendChild(browserString2);
}
addElement();

// https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript
// name function
function createList(spacecrafts) {
  // create ul element
  let listView = document.createElement('ul');
  listView.setAttribute('class', 'poop');
  // initialize i, comparative stmt on function, increment i  
  for (let i = 0; i < spacecrafts.length; ++i) {
    let items = myArr[i];

    // create list item to go inside ul
    let listViewItem = document.createElement('li');
    // tricky magic: create function's text node and append to list item element
    listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
    // append list item to unordered list
    listView.appendChild(listViewItem);
  }
  // obviously, return final result
  return listView;
}
myArr = ['thing', 'thingy', 'another thingy'];
// more magic: create a list from array & append as child to designated selector in DOM 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement 
  document.getElementById("contentSectionID").appendChild(createList(myArr));

/*
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#fixing_capitalization 
function cityNames(city) {
  let cities = ['maHATTaN', 'BRooKLYn', 'bRoNX', 'qUEEnS'];
  let listView = document.createElement('ul');
  let listViewItem = document.createElement('li');
  for (let u = 0; u < cities.length; u++) {
    listViewItem.appendChild(document.createTextNode(cities[u]));
    listView.appendChild(listViewItem);
    let input = cities[u];
    let inputLower = input.toLowerCase();
    // let inputFirst = inputLower[0];
    let cappedCities = inputLower.replace(inputLower[0], inputLower[0].toUpperCase());
    document.getElementById("contentSectionID").appendChild(createList(cappedCities));
    console.log(cappedCities, typeof (cappedCities));
  }
  return listView;
}
cityNames();
*/

/*
// https://javascript.info/logical-operators#check-the-login 
let userName = prompt('Who\'s there?');
if (userName === 'Admin') {
  let pw = prompt('Password?');
  if (pw === 'TheMaster') {
    alert('Welcome!');
  } else if (pw === '' || pw === null || alert('Wrong password')) {
    alert('Canceled');
  }
} else if (userName === null || userName === '' || alert('I don\'t know you.')) {
  alert('Canceled');
}
*/

/* 
  Ranges, from https://javascript.info/logical-operators 
  let age = 13;
  if (age >= 14 && age <= 90) {
    alert('Goldilocks');
  }
  // write 2 conditions checking age is NOT btwn 14 and 90 inclusively
  // one using !NOT
  let age2 = 13;
  if ( ! (age2 >= 14 && age2 <= 90) ) {
    // alert('age2 is NOT btwn 14-90');
  }
  // one not using !NOT
  let age3 = 15;
  if (age3 <= 14 || age3 >= 90) {
    // alert('age3 is NOT btwn 14-90');
  }
  // -1 is true. apparently all neg numbers are true
  // 0 is false, and null is false
  let blah = null;
  console.log(Boolean(blah));
  // if (-1 || 0) alert('First');
*/

let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${examScore} out of ${examHighestScore} which is (${Math.round((examScore/examHighestScore)*100)}%). ${examScore >= 49 ? 'Well done!' : "Sorry, you\'ve failed the exam"}.`;

// select the element in the DOM
divSelection = document.querySelector('#examReport');
// create a new element
reportPara = document.createElement('p');
// assign an attribute, if applicable
reportPara.setAttribute("class", "examReport");
// append the new element to the selected element
divSelection.appendChild(reportPara);
// append the text to the string element
reportPara.append(examReport);

function pythagTheorem() {
  let theorem = 'Pythagorean theorem'
  let a = 5;
  let b = 8;
  const theoremText = `Using the ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lenths of ${a} and ${b}, the length of the hypotenuse is ${c = Math.sqrt((a * a) + (b * b)).toFixed(3)}.`;

  const theoremSelector = document.querySelector('#pythagTheorem');
  const theoremPara = document.createElement('p');
  theoremPara.setAttribute('class', 'theoremPara');

  // append the created 'p' element as a child of selected element
  theoremSelector.appendChild(theoremPara);
  
  // append the string to the element
  theoremPara.append(theoremText);
}
pythagTheorem();

// greeting algorithm
  // assign function 
  // add array, object
  // select element in DOM
  // create ul (or other element)
  // append the ul to the selected element
function greeting() {
  const greetings = [
    'Happy Birthday',
    'Merry Christmas my dear <3',
    'A happy Christmas to all the family!',
    'You\'re all I want for Christmas ;-p',
    'Get well soon'
  ];
  const greetingsSelection = document.querySelector('#holiday-greetings');
  const greetingsList = document.createElement('ul');
  greetingsSelection.appendChild(greetingsList);

  greetings.forEach(greeting => {
    if (greeting.indexOf('Christmas') === -1) {
      let greetingListItem = document.createElement('li');
      greetingListItem.textContent = greeting;
      greetingsList.appendChild(greetingListItem);
    }
  })
}
greeting();
// foreach loop thru array
  // create li
  // process loop var "contents" (method hint), save as var in li
    // dot notation on 'final' variable to be returned
  // append the li (var) to the originally created ul (or other element)
    // at the end

function cityNames() {
  const cities = ['manHATTaN', 'BRookLYn', 'bRoNX', 'qUEEnS'];
  const contentSection = document.querySelector("#contentSectionID");
  const listView = document.createElement("ul");
  contentSection.appendChild(listView);

  cities.forEach(city => {
    const listItem = document.createElement("li");
    listItem.textContent = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    listView.appendChild(listItem);
  })
}
cityNames();

// assign function 
// add array, object
// select element in DOM
// create ul (or other element)
// append the ul to the selected element
function trainLines() {
  const stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
  ];
  const stationStops = document.querySelector('#train-lines');
  const stationsList = document.createElement('ul');
  // append the ul to the element selector
  stationStops.appendChild(stationsList);
  
  // foreach station {
  // create li
  // process loop var "contents" (a method hint), save as var in li
    // dot notation on 'final' variable to be returned
  // append the li (var) to the originally created ul (or other element)
    // at the end
  stations.forEach(station => {
    const divider = station.indexOf(';') + 1;
    const stationItem = document.createElement('li');
    stationItem.setAttribute('class', 'stationCode');
    stationItem.textContent = `${station.slice(0,3)}: ${station.slice(divider)}`;
    // stationItem.textContent = station.slice(0,3) + ': ' + station.slice(divider);
    stationsList.appendChild(stationItem);
  })
} 
trainLines();



