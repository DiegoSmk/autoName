function roll (min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function syllableChoose (arr: string[][], name: string[][]){
  let arrOptions = arr
  let choose = arrOptions[roll(0, arrOptions.length-1)]
  let syllable = ""
  choose.map((e)=>{
  let letter = e.charAt(roll(0,e.length-1))
  syllable = syllable + letter
  })
  name.push([syllable])
  }
  
  function autoName (number?: number) {
    let v = "aeiouy"
    let c = "bcdfghjklmnpqrstwvxyz"
    let vv = "@!#&"            // @=ão, !=ães, #=son & = im
    let s = "lsxmnrz"
    let numberSyllables = number || roll(2,4)
    let name: string[][] = []
    let nameString = ""
    let arrOptions = {
    zero: [[v],[c,v],[v,s],[c,v,s]],
    uno: [[v],[c,v],[v,c],[v,s],[c,v,s]],
    dois: [[c,v],[v,s],[c,v,s]],
    end: [[c,v],[v,c],[v,s],[c,v,s],[c,vv],[vv]]
    }
    
    for (let i = 0; i < numberSyllables; i++ ) {
      if(name.length==numberSyllables-1) {
        syllableChoose(arrOptions.end, name)
        break
      } if (name.length > 2) {
        syllableChoose(arrOptions.dois, name)
      } if (name.length == 1) {
        syllableChoose(arrOptions.uno, name)
      } else {
        syllableChoose(arrOptions.zero, name)
      }
    }
    name.map((e)=>{
    let letter = e
    nameString = nameString + letter
    })
    let nameUpperCase = nameString.charAt(0).toUpperCase() + nameString.slice(1)
    let result = nameUpperCase.replace("@","ão").replace("!","ães").replace("#","son").replace("&","im")
    return result
  }
  
  const test = autoName()

  console.log(test)
