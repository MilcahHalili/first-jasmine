var earth = {
  isRound: true,
  numberFromSun: 3,
  density: 5.51
};

describe("Earth", function() {

  it("is round", function() {
    expect(earth.isRound).toEqual(true);
  });

  it("is the third planet from the sun", function(){
    expect(earth.numberFromSun).toEqual(3);
  });

  it("is the densest of all the planets", function(){
    expect(earth.density).toBeGreaterThan(5.50);
  });

})

let arr;
beforeEach(function() {
  arr = [1, 3, 5];
});

describe("Arrays", function(){
  describe("#push", function(){
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).toEqual([1, 3, 5, 7]);
    });
    it("returns the new length of the array", function(){
      expect(arr.push(7)).toBe(4);
    });
    it("adds anything into the array", function(){
      expect(arr.push({})).toBe(4);
    });
  })
});

describe("onlyStrings", function(){
  it("returns an array", function(){
    expect(onlyStrings([1, 2, 3])).toEqual(jasmine.any(Array));
  });
  it("does not change arrays of strings", function(){
    expect(onlyStrings("a", "b", "c")).toEqual(["a", "b", "c"]);
  });
  it("remotes non-string primitives from an array"), function(){
    expect(onlyStrings([1, "hi", null, "cool", undefined, "woah", false, "ok"])).toEqual(["hi", "cool", "woah", "ok"]);
  };
  it("removes reference types from an array", function(){
    expect(onlyStrings([{}, "a", [], "b", function(){}, "c"])).toEqual("a", "b", "c");
  });
})