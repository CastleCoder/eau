// Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.


// Exemples d’utilisation :
// $> python exo.py
// 012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// $>

// 987 n’est pas là parce que 789 est présent.

// 020 n’est pas là parce que 0 apparaît deux fois.

// 021 n’est pas là parce que 012 est présent.

// 000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.


function numberChain(){
  let array = [];
  let result = [];
  for(let i=0; i<1000; i++){
    // array.push(i);
    let chiffres = i.toString().padStart(3, "0").split("");
    let combinaison = chiffres[0] + chiffres[1] + chiffres[2];
  
    if (!array.includes(combinaison) && !array.includes(chiffres[0] + chiffres[2] + chiffres[1]) && !array.includes(chiffres[1] + chiffres[0] + chiffres[2]) && !array.includes(chiffres[1] + chiffres[2] + chiffres[0]) && !array.includes(chiffres[2] + chiffres[0] + chiffres[1]) && !array.includes(chiffres[2] + chiffres[1] + chiffres[0])) { /
      // console.log(combinaison);
      array.push(combinaison);
    }  
  }

  for(let i=0; i<array.length;i++){
    if(array[i][0] !== array[i][1] && array[i][1] !== array[i][2] && array[i][0] !== array[i][2]){
      result.push(array[i]);
    } 
  }
  console.log(result.join(','))

}

numberChain();