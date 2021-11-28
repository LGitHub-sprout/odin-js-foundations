// Weather Section
// select the 'select' element, assign var name 
// select para, assign var name
// invoke setWeather function using select and dot notation onchange method 
// set onchange event listener to 'change' on 'setWeather' function
// declare 'setWeather' function, assign 'choice' to the select element's value
// display text for different weather selections based on user's choice 

const selectWeather = document.querySelector('#weatherOption');
const weatherOutput = document.querySelector('.weather-output');

selectWeather.onchange = setWeather;

function setWeather() {
  // get select element's value
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement
  let choice = selectWeather.value;

  if (choice === '') {
    weatherOutput.textContent = 'Step outside and report back today\'s weather.';
  } else if (choice === 'sunny') {
    weatherOutput.textContent = 'It\'s nice and sunny outside today. Wear shorts! Go to the park and get some exercise.';
  } else if (choice === 'snowy') {
    weatherOutput.textContent = 'It\'s snowing! Go build a snowman or take your doggy out for a walk :)';
  } else if (choice === 'rainy') {
    weatherOutput.textContent = 'It\'s raining. Put on your wellies and go splash some puddles!';
  } else if (choice === 'overcast') {
    weatherOutput.textContent = 'It isn\'t raining, but the sky is grey and gloomy; there could be a downpour any minute, so wear your wellies and raincoat just in case.';
  } else {
    weatherOutput.textContent = 'Kindly step outside and repot back today\'s weather.';
  }
}

/*
  Gratefully borrowed function from
  https://thisinterestsme.com/change-select-option-javascript/
*/
function resetOption(selectId, optionValToSelect) {
  // Get the select element by it's unique ID.
  const selectElement = document.getElementById('weatherOption');
  // Get the options (hint: from the select element).
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options
  const selectOptions = selectElement.options;

  // my description: loop thru the (hint: INDEXED) options array
  // create opt var; set j counter to 0; set opt counter to ; increment
  // Loop through these options using a for loop.
  for (let opt, j = 0; opt = selectOptions[j]; j++) {
    // hint: square bracket notation returns specific indexed value
    console.log(selectOptions[3]);
    // If the option of value is equal to the option we want to select.
    if (opt.value == optionValToSelect) {
      // Select the option and break out of the for loop.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex 
      selectElement.selectedIndex = j;
      break;
    }
  }
}
resetOption('weatherOption', 'default');


// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
// selectElement.onchange = setWeather;

// assign user's chosen weather to 'choice' variable and get its value using dot notation
// let choice = selectElement.value;

// Dark Mode exercise
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#active_learning_more_color_choices
// save the variable 'select' as the select HTML element
// save the variable 'html' as the class '.output'
// add event listener on select variable assigned as a function (no name)
// assign 'choice' variable as the selected HTML element's value
// create 'update' function passing 'bgColor' and 'textColor' as params
  // html.style.backgroundColor = bgColor
  // html.style.color = textColor
