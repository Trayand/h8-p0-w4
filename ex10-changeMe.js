function changeMe(arr) {
    // you can only write your code here!
  
    for(i=0;i<arr.length;i++){
      var obj = {}
      console.log(i+1 + ". " + arr[i][0] + " " + arr[i][1])
        
        obj['firstName'] = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        obj.age = 'Invalid Birth Year'
  
  
        if(arr[i][3]<2019){
          obj.age = 2019 - arr[i][3]
        }
  
  
      console.log(obj)
      console.log('\n')
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  // changeMe([]); // ""