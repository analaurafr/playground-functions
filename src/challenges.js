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
  } if (distCat2 < distCat1) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numbers) {
  return numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

// Desafio 9 - Crie a função encode e a função decode

function encode(text) {
  const vowelsToNumbers = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  const encodedText = text.replace(/[aeiou]/g, (vowel) => vowelsToNumbers[vowel]);

  return encodedText;
}

function decode(encodedText) {
  const numbersToVowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  const decodedText = encodedText.replace(/[1-5]/g, (number) => numbersToVowels[number]);

  return decodedText;
}

// Desafio 10 - Crie a função techList

function techList(techs, name) {
  if (!techs || techs.length === 0) {
    return [];
  }

  techs.sort();

  return techs.map((tech) => ({ tech, name }));
}

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
