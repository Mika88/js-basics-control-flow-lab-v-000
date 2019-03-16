
function scuberGreetingForFeet(someNumber) {
  let result
  if (someNumber <= 400) {
    result = 'This one is on me!';
  } else if (someNumber > 2000 && someNumber < 2500 ) {
    result = 'I will gladly take your thirty bucks.';
  } else if (someNumber > 2500) {
    result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(city) {
  let result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}


const isAdult = age >= 18 ? true : false;

isAdult;
