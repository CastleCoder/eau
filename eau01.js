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
    array.push(i);
    // console.log(array)
  }
  const newArray = array.map(element => element.toString().padStart(3, '0'));
  // const newArray2 = newArray.join(', ');
  // console.log(newArray);

  for(let i=0; i<newArray.length;i++){
    // console.log(newArray[i][2]);
    if(newArray[i][0] !== newArray[i][1] && newArray[i][1] !== newArray[i][2] && newArray[i][0] !== newArray[i][2]){
      result.push(newArray[i]);
    } 
  }
  console.log(result.join(','))

}

numberChain();