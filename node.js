
 console.log('hello world');

 function sortDrinkByPrice(drinks) {
    return drinks.sort((a,b)=> a.price-b.price)
  }
  
  // console.log(sortDrinkByPrice([{name: "lime", price: 50}, {name: "lemonade", price: 10}]));

  function isFirstSuperior(arr1, arr2) {
    for(i=0;i<arr1.length;i++){
      if(arr1[i]> arr2[i]){
        return true
      }
    }
    return false
  }
  
  // console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));

  function addUp(num) {
    var count=0;
    var addition=0
   for(i=0;i<num;i++){
     count++
     addition=addition+ count
   }
  
    return addition
  }
  
  console.log(addUp(4))