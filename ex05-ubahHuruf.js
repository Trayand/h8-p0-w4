function ubahHuruf(kata) {
  // you can only write your code here!
  var abjad ='abcdefghijklmnopqrstuvwxyz'
  var tamp = ''
  for(var i=0;i<kata.length;i++){
    for(var j=0;j<abjad.length;j++){
      if(kata[i]===abjad[j]){
        if(kata[i]==='z'){
          tamp+='a'
        }else{
        tamp+=abjad[j+1]
        }
      }
    }
  }
  // console.log(abjad.length)
  return tamp

  
  // var cetak = ''
  // for(var i=0;i<kata.length;i++){
  //   var temp = String.fromCharCode(kata[i].charCodeAt() + 1);
  //   cetak+=temp;
  // }
  // return cetak

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangatz')); // tfnbohbu