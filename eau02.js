// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


// Exemples d’utilisation :
// $> python exo.py
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
// $>

function numberChain(){
  let array = [];
  let array2 = [];
  for(let i=0; i<99; i++){
    array.push(i);
    // console.log(array)
  }
  for(let y=1; y<100; y++){
    array2.push(y);
  }
  const newArray = array.map(element => element.toString().padStart(2, '0'));
  const newArray2 = array2.map(element => element.toString().padStart(2, '0'));



  for(let i=0;i<newArray.length;i++){
    for(let y=0; y<newArray2.length; y++){
      console.log(newArray[i], newArray2[y])
    }
  }

  // console.log(newArray);


}

numberChain();