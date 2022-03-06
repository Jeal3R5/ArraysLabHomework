const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90],
  ]

let total = 0;
  
numArrays.forEach((outer)=>{
    console.log(outer);
    outer.forEach((inner) =>{
        console.log(inner);
        total += inner;
    })
})

console.log(total);