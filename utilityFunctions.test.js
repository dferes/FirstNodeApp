const {getMean, getMedian, getMode, validateNumberArray} = require("./utilityFunctions");
  
  describe("getMedian functionality", function(){
    it("retrieves the median of an array when the number of elements is even", function(){ 
      expect(getMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("retrieves the median of an array when the number of elements is odd", function () { 
      expect(getMedian([1, -1, 4])).toEqual(1)
    })
  })
  
  describe("getMean functionality", function () {
    it("retrieves the mean of an array when it contains positive numbers", function () { 
      expect(getMean([3, 9, 36, 5, 2])).toEqual(11)
    })
    it("retrieves the mean of an array when it contains both positive and negative numbers", function () { 
      expect(getMean([1,-1,4,3, 13, -2])).toEqual(3)
    })
  })
  
  describe("getMode functionality", function () {
    it("retrieves the mode when there are multiple copies of an element", function () { 
      expect(getMode([1,1,1,2,2,3])).toEqual(1)
    })
    it("retrieves the mode when every element is unique", function () { 
        expect(getMode([1, 2, 3, 4, 5, 6])).toEqual(6)
      })
  })

  describe(" validateNumberArray functionality", function () {
    it("returns an Error when an array containing non numeric elements is passed in", function () { 
      expect(validateNumberArray([1,1,1,2,2,'meh'])).toBeInstanceOf(Error)
    })
  })