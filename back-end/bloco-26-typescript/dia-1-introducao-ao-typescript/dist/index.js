"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = require("readline-sync");
const enums_1 = require("./enums");
// Recuperação dos valores do enum 'months'
const monthsName = Object.values(enums_1.months);
// Constante que guarda a posição no array que o usuário escolher dos valoers listados no readLineSync
const chooseMonth = readLine.keyInSelect(monthsName, 'Escolha um mês:');
// Objeto que possui como chave a enum 'seasons' e como valores certos meses da enum 'months
// simbolziando hemisfério norte
const seasonsNorth = {
    [enums_1.seasons.spring]: [enums_1.months.march, enums_1.months.april, enums_1.months.may, enums_1.months.june],
    [enums_1.seasons.summer]: [enums_1.months.june, enums_1.months.july, enums_1.months.august, enums_1.months.september],
    [enums_1.seasons.autumn]: [enums_1.months.september, enums_1.months.october, enums_1.months.november, enums_1.months.december],
    [enums_1.seasons.winter]: [enums_1.months.december, enums_1.months.january, enums_1.months.febuary, enums_1.months.march]
};
// Objeto que possui como chave a enum 'seasons' e como valores certos meses da enum 'months
// simbolizando hemisfério sul
const seasonsSouth = {
    [enums_1.seasons.spring]: [enums_1.months.september, enums_1.months.october, enums_1.months.november, enums_1.months.december],
    [enums_1.seasons.summer]: [enums_1.months.december, enums_1.months.january, enums_1.months.febuary, enums_1.months.march],
    [enums_1.seasons.autumn]: [enums_1.months.march, enums_1.months.april, enums_1.months.may, enums_1.months.june],
    [enums_1.seasons.winter]: [enums_1.months.june, enums_1.months.july, enums_1.months.august, enums_1.months.september]
};
// Objeto que guarda os objetos seasons North eseasonsSouth
const hemispheres = {
    Norte: seasonsNorth,
    Sul: seasonsSouth
};
// Constante que guarda o valor no array de qual hemisfério o usuário se encontra
// Utilizando as chaves do objeto 'hemispheres'('Norte' e 'Sul')
const chooseHemisphere = readLine.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério');
// Constante que guarda o mês da enum 'months' que seja igual ao indice do mês escolhido no readLineSync
const month = Object.values(enums_1.months)[chooseMonth]; // ex: Julho
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
