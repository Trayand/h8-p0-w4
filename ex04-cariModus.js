function cariModus(arr) {
    // you can only write your code here!
  var count = 0
  var number = 0
  for(var i=0;i<arr.length;i++){
    var hitung = 0
    for(var p=0;p<arr.length;p++){
      if(arr[i]===arr[p]){
        hitung+=1
      }
    }
    if(count<hitung){
      count = hitung
      number = arr[i]
    }
  }
  if(count===1 || arr.length === count){
    return -1
  }else{
    return number
  }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  // ??
  console.log(cariModus([5, 5, 7, 7, 7, 7, 7])); // 7
  console.log(cariModus([10, 5, 10, 6, 5])); // 10