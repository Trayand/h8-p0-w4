function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    // var numb = angka/2
    var tes = []
    for(var i=1;i<=angka;i++){
      if(angka%i===0){
        tes.push(([i,angka/i]+'').length)
      }
    }
    tes.sort(function(value1, value2){return value1>value2})
    return tes[0]-1
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  console.log(digitPerkalianMinimum(0)); // 2