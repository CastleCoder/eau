// Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


// Exemples d’utilisation :
// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!


// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function upperCase(arg){
  let counter = 0;
  let sentence = arg;
  let sentence1 = sentence;
  let result = "";
  // console.log(sentence1)
  for(let i=0;i<sentence1.length;i++){
    if(sentence1[0].match(/[a-z]/g)){
      if(counter === 0){
        result += sentence1[i].toUpperCase();
        counter ++;
      } else {
        result += sentence1[i].toLowerCase();
      }
      if(sentence1[i] === " "){
        counter = 0;
      }
      // console.log(counter)
    } else {
      console.log("Erreur !")
    }
  }
  console.log(result);

}

upperCase(args[0]);