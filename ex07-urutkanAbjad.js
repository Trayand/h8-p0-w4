function urutkanAbjad(kata) {
    // you can only write your code here!
    var abjad ='abcdefghijklmnopqrstuvwxyz'
    // var temp = []
    var tamp = ''
    for(var i=0;i<abjad.length;i++){
      for(var j=0;j<kata.length;j++){
        if(kata[j]===abjad[i]){
          tamp += kata[j]
        }
      }
    }
    // temp.sort(function(a, b){return(a-b)})
    // console.log(temp)
    // for(var a=0;a<temp.length;a++){
      // tamp += abjad[temp[a]]
    // }
    
    return tamp
  }
  
  // function urutkanAbjad(kata) {
  //   // you can only
  //   var tes = []
  //   var str = ''
  //   for(i=0;i<kata.length;i++){
  //   var temp = kata[i].charCodeAt();
  //   tes.push(temp)
  //   }
  //   tes.sort(function(a, b){return(a-b)})
  //   for(var j=0;j<tes.length;j++){
  //     var tess = String.fromCharCode(tes[j])
  //     str+=tess
  //   }
  //   return str
  // }
  
  // function urutkanAbjad(kata){
  //   return kata.split('').sort().join('')
  // }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'