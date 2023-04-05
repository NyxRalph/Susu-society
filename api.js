
const getFruit = async(name) => {
    const fruits = {
         pineapple : '🍍',
         apple : '🍏',
         peach : '🍑',
         strawberry : '🍓'
    } 
    return fruits[name]

}
  getFruit('peach').then(console.log)

 .then(res => res.json())
  