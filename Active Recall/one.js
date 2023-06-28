// Variables
const numEx = 1;
const stringEx = 'Wow';
const boolEx = true;

// if-statements
if (boolEx) {
  console.log('Wow');
}

if (numEx === 1) {
  console.log('Go crazy');
} else if (numEx === 2) {
  console.log('Go crazier');
}

// functions
const num = () => {
  if (numEx === 3) {
    console.log('Whatever');
  } else if (numEx === 4) {
    console.log('nice');
  }
}

const nice = (oh) => {
  if (oh === 3) {
    console.log(nice);
  }
}