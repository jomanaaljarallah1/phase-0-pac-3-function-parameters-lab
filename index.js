function introduction(name){
  return `Hi, my name is ${name}.`;

}
console.log(introduction('jojo'));
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

}
console.log(introductionWithLanguage('jojo','java'));

function introductionWithLanguageOptional(name, language= "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional('jojo','JavaScript'));
console.log(introductionWithLanguageOptional('jojo'));