// Desafio 1 - Crie a função compareTrue

function compareTrue(casa, apartamento) {
  return casa && apartamento;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let hightestNumber = array[0];
  let counter = 0;

  for (const number of array) {
    if (number > hightestNumber) {
      hightestNumber = number;
      counter = 1;
    } else if (number === hightestNumber) {
      counter += 1;
    }
  }

  return counter;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return base * height;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    const triangulo = calcTriangleArea(base, height);
    return (`O valor da área do triângulo é de: ${triangulo}`);
  }
  if (form === 'retângulo') {
    const retangulo = calcRectangleArea(base, height);
    return (`O valor da área do retângulo é de: ${retangulo}`);
  }
  return ('Não foi possível fazer o cálculo, insira uma forma geométrica válida');
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(mouse - cat1);
  const distCat2 = Math.abs(mouse - cat2);

  if (distCat1 < distCat2) {
    return ('cat1');
  } else if (distCat2 < distCat1) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
};

// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let encodedString = '';

  for (let i = 0; i < string.length; i++) {
    const character = string[i].toLowerCase();

    if (vowels.includes(character)) {
      if (character === 'a') {
        encodedString += '1';
      } else if (character === 'e') {
        encodedString += '2';
      } else if (character === 'i') {
        encodedString += '3';
      } else if (character === 'o') {
        encodedString += '4';
      } else if (character === 'u') {
        encodedString += '5';
      }
    } else {
      encodedString += string[i];
    }
  }

  return encodedString;
}

function decode(string) {
  const numbers = ['1', '2', '3', '4', '5'];

  let decodedString = '';

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (numbers.includes(character)) {
      if (character === '1') {
        decodedString += 'a';
      } else if (character === '2') {
        decodedString += 'e';
      } else if (character === '3') {
        decodedString += 'i';
      } else if (character === '4') {
        decodedString += 'o';
      } else if (character === '5') {
        decodedString += 'u';
      }
    } else {
      decodedString += string[i];
    }
  }

  return decodedString;
}

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
