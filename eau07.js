// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !


// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function upAndDown(a){
  let arg1 = a;
  console.log(arg1);
  console.log(0%2);
  let result = "";
  let counter = 0;
  for (let i=0; i<arg1.length; i++){
    if(isNaN(arg1)){
      if(counter % 2===0){
        result += arg1[i].toUpperCase();
        counter += 1;
      } else if(counter %2 !==0){
        result += arg1[i].toLowerCase();
        counter += 1;
      }
      if (arg1[i]===" "){
        counter --;
      }
    } else {
      console.log("erreur")
    }
    console.log(counter)
  }
  // console.log(arg1.toUpperCase());
  console.log(result)
}

upAndDown(args[0]);