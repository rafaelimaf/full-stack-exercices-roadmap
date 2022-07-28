import readLine = require('readline-sync')
import { months, seasons } from './enums';

// Recuperação dos valores do enum 'months'
const monthsName = Object.values(months);

// Constante que guarda a posição no array que o usuário escolher dos valoers listados no readLineSync
const chooseMonth = readLine.keyInSelect(monthsName, 'Escolha um mês:');

// Objeto que possui como chave a enum 'seasons' e como valores certos meses da enum 'months
// simbolziando hemisfério norte
const seasonsNorth = {
  [seasons.spring]: [months.march, months.april, months.may, months.june], // Primavera: ['Março' ... 'Junho']
  [seasons.summer]: [months.june, months.july, months.august, months.september],
  [seasons.autumn]: [months.september, months.october, months.november, months.december],
  [seasons.winter]: [months.december, months.january, months.febuary, months.march]
};

// Objeto que possui como chave a enum 'seasons' e como valores certos meses da enum 'months
// simbolizando hemisfério sul
const seasonsSouth = {
  [seasons.spring]: [months.september, months.october, months.november, months.december],
  [seasons.summer]: [months.december, months.january, months.febuary, months.march],
  [seasons.autumn]: [months.march, months.april, months.may, months.june],
  [seasons.winter]: [months.june, months.july, months.august, months.september]
};

// Objeto que guarda os objetos seasons North eseasonsSouth
const hemispheres = {
  Norte: seasonsNorth, // Norte: { 'Primavera': ['Março', ...'Junho'], Verão: ['Junho', ...'Setembro'], }
  Sul: seasonsSouth
};

// Constante que guarda o valor no array de qual hemisfério o usuário se encontra
// Utilizando as chaves do objeto 'hemispheres'('Norte' e 'Sul')
const chooseHemisphere = readLine.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério');

// Constante que guarda o mês da enum 'months' que seja igual ao indice do mês escolhido no readLineSync
const month = Object.values(months)[chooseMonth]; // ex: Julho

// Constante que guarda o hemisfério que seja igual ao indice do hemisfério escolhido no readLineSync
const hemisphere = Object.keys(hemispheres)[chooseHemisphere]; // ex: Sul

// Guarda em um array, os valores do hemisfério que possua o mesmo indice do hemisfério escolhido
const chosenHemisphereSeasons = Object.values(hemispheres)[chooseHemisphere]; // {'Primavera', ['Março', ...'Junho']}

Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];
  // São os meses de cada estação. Caso esteja
  // incluído em mais de uma estação, o console
  // abaixo irá adicionar

  if (months.includes(month)) {
    console.log(`É ${seasons} no mês de ${month}, se você estiver no hemisfério ${hemisphere}`);
  }
});
