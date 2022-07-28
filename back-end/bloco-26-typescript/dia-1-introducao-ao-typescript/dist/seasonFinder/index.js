"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = require("readline-sync");
const seasonParams_1 = require("./seasonParams");
// Recuperação dos valores do enum 'months'
const monthsName = Object.values(seasonParams_1.months);
// Constante que guarda a posição no array que o usuário escolher dos valoers listados no readLineSync
const chooseMonth = readLine.keyInSelect(monthsName, 'Escolha um mês:');
// Objeto que possui como chave a enum 'seasons' e como valores certos meses da enum 'months
// simbolziando hemisfério norte
const seasonsNorth = {
    [seasonParams_1.seasons.spring]: [seasonParams_1.months.march, seasonParams_1.months.april, seasonParams_1.months.may, seasonParams_1.months.june],
    [seasonParams_1.seasons.summer]: [seasonParams_1.months.june, seasonParams_1.months.july, seasonParams_1.months.august, seasonParams_1.months.september],
    [seasonParams_1.seasons.autumn]: [seasonParams_1.months.september, seasonParams_1.months.october, seasonParams_1.months.november, seasonParams_1.months.december],
    [seasonParams_1.seasons.winter]: [seasonParams_1.months.december, seasonParams_1.months.january, seasonParams_1.months.febuary, seasonParams_1.months.march]
};
// Objeto que possui como chave a enum 'seasons' e como valores certos meses da enum 'months
// simbolizando hemisfério sul
const seasonsSouth = {
    [seasonParams_1.seasons.spring]: [seasonParams_1.months.september, seasonParams_1.months.october, seasonParams_1.months.november, seasonParams_1.months.december],
    [seasonParams_1.seasons.summer]: [seasonParams_1.months.december, seasonParams_1.months.january, seasonParams_1.months.febuary, seasonParams_1.months.march],
    [seasonParams_1.seasons.autumn]: [seasonParams_1.months.march, seasonParams_1.months.april, seasonParams_1.months.may, seasonParams_1.months.june],
    [seasonParams_1.seasons.winter]: [seasonParams_1.months.june, seasonParams_1.months.july, seasonParams_1.months.august, seasonParams_1.months.september]
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
const month = Object.values(seasonParams_1.months)[chooseMonth]; // ex: Julho
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
