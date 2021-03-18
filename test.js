const names = [{
  name: "Finland",
  capital : "Helsinki",
  "region": "Europe",
  "pop": "123456",
  "lang": "Finnish"
},{
  name: "Nepal",
  capital : "Kath",
  "region": "Asia",
  "pop": "123456",
  "lang": "Nepali"

},{
  name: "Canada",
  capital : "Ontario",
  "region": "America",
  "pop": "123456",
  "lang": "English"

}

]

// const name1 = names.map(item =>item.name)
// console.log(name1)

// const filter1 = names.filter(item => item.pop == "123456" && item.lang=="Nepali")
// console.log(filter1)
const nameCase = names.filter(item => item.name.toLowerCase())
console.log(nameCase)


// const find1 = names.find(item => item.name=="Canada")
// console.log(find1)