function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let obj = []
  
    for(var i=0;i<arrPenumpang.length;i++){
      var itung = 0
      for(var j=0;j<rute.length;j++){
        if(arrPenumpang[i][2]===rute[j]){
          // console.log()
          itung += j
        }
        if(arrPenumpang[i][1]===rute[j]){
          itung -= j
        }
      }
      var oobj = {}
      oobj.penumpang = arrPenumpang[i][0]
      oobj.naikDari = arrPenumpang[i][1]
      oobj.tujuan = arrPenumpang[i][2]
      oobj.bayar = itung*2000
  
      obj.push(oobj)
    }
    return obj
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]