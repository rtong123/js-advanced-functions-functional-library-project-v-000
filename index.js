const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(numbers,cb) {
      var i = 0
      if (numbers instanceof Array){
      for(i=0; i < numbers.length; i++){
        cb(numbers[i])
        }
      }
      else{
        for (const property in numbers){
          cb(numbers[property])
        }
      }
      return numbers
    },

    map: function(numbers,cb) {
      let newArray = []
      var i;
      if (numbers instanceof Array){
      for(i=0; i < numbers.length; i++){
        newArray.push(cb(numbers[i]))
      }
      }
      else{
        for(const property in numbers){
          newArray.push(cb(numbers[property]))
        }
      }
    return newArray
    },

    reduce: function(numbers,cb,startingPoint=undefined) {
      var i
      if (startingPoint){
        var total = startingPoint
        i = 0
      }
      else{
        var total = numbers[0]
        i = 1
      }
      for(i; i < numbers.length; i++){
        total = cb(numbers[i],total)
      }
      return total
    },

    find: function(){

    },


    filter: function(){

    },

    size: function(){

    },
    
    functions: function() {

    },



  }
})()

fi.libraryMethod()
