// code your solution here
function saturdayFun (def = 'roller-skate') {
    return `This Saturday, I want to ${def}!`
};

function mondayWork (work = 'go to the office') {
    return `This Monday, I will ${work}.`
};

function wrapAdjective (wil = '*') {
   return function innerFunction (def = 'special') {
        return `You are ${wil}${def}${wil}!`
    }
};