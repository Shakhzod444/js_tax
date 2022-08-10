
// let products = [
//    {
//       name: 'milk',
//       price: 10000
//    },
//    {
//       name: 'chocolate',
//       price: 8000
//    },
//    {
//       name: 'cola',
//       price: 11000
//    },
//    {
//       name: 'meat',
//       price: 80000
//    },
//    {
//       name: 'apple',
//       price: 23000
//    },
//    {
//       name: 'banana',
//       price: 16000
//    },
//    {
//       name: 'water',
//       price: 3000
//    },
//    {
//       name: 'sosiska',
//       price: 35000
//    },
//    {
//       name: 'sousage',
//       price: 24000
//    }
// ]

// let max
// let min
// let total = 0
// let arr_sale = []
// let discount = 35

// let price_box = []

// for (let item of products) {
//    price_box.push(item.price)

//    max = Math.max(...price_box)
//    min = Math.min(...price_box)



// }

// products.forEach((elem) => {
//    total += elem.price
// })

// console.log(max);
// console.log(min);
// console.log(total);


// for (let item of products) {

//    item.discaunt = item.price - (item.price / discount * 100)
//    arr_sale.push({
//       name: item.name , 
//       price: item.price
//    }

//    )
// }

// console.log(products);
// console.log(arr_sale);
// Найти самый дорогой продукт
// Найти самый дешевый продукт
// Найти сумму всех продуктов




let bank = [

   {
      name: "uztelecom",
      budget: 200000,
      tax: 12,
      expensesPerYear: [
         {
            title: "rent",
            total: 13000,
         },
         {
            title: "salaries",
            total: 85000,
         },
         {
            title: "furniture",
            total: 15000,
         },
      ],
   },
   {
      name: "artel",
      budget: 500000,
      tax: 12,
      expensesPerYear: [{
         title: "rent",
         total: 15000,
      },
      {
         title: "salaries",
         total: 150000,
      },
      {
         title: "furniture",
         total: 25000,
      },
      ],
   },
   {
      name: "gm",
      budget: 1000000,
      tax: 12,
      expensesPerYear: [{
         title: "rent",
         total: 30000,
      },
      {
         title: "salaries",
         total: 350000,
      },
      {
         title: "furniture",
         total: 90000,
      }
      ]
   }
]

all_exp = []

// for (let item of bank) {
// item.expensesPerMonth = 0
// item.tax_amount = 0 
// item.expensesPerMonth = Math.round(item.expensesPerYear.reduce((a,b) =>{
//    return a + b.total / 12

// }, 0))
// item.tax_amount = item.budget / 100 * item.tax  
// 
// console.log(item.total) 
// }
// 


// console.table(bank);
// console.log(all_exp);
// console.log(max);
// console.log(min);


let company = 0

for (let item of bank) {
   item.expensesPerMonth = 0
   item.tax_amount = 0
   item.balance_of_the_budget = 0


   for (let elem of item.expensesPerYear) {
      item.expensesPerMonth += elem.total

   }
   item.tax_amount = item.budget / 100 * item.tax

   item.balance_of_the_budget = item.budget - item.expensesPerMonth - item.tax_amount

   item.expensesPerMonth = Math.round(item.expensesPerMonth / 12)

   all_exp.push(item.tax_amount)


}

console.table(bank);

let max = Math.max(...all_exp)
let min = Math.min(...all_exp)

max = bank.find(item => item.tax_amount === max)
min = bank.find(item => item.tax_amount === min)
console.log('Больше всех платить');
console.table(max);
console.log('Меньше всех платить');
console.table(min);
