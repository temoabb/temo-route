import React from 'react'

const Complex = () => {
  return (
    <div>

// Starts here
// export default class OrdersAnalyzer {
//   constructor() {
//     this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
//     this.getDate = this.getDate.bind(this)
//     this.totalQuantity = this.totalQuantity.bind(this)
//   }

//   getDate(date) {
//     let weekDay = ""
//     switch (date) {
//       case 0:
//         weekDay = "SUNDAY"
//         break;
//       case 1:
//         weekDay = "MONDAY"
//         break;
//       case 2:
//         weekDay = "TUESDAY"
//         break;
//       case 3:
//         weekDay = "WEDNESDAY"
//         break;
//       case 4:
//         weekDay = "THURSDAY"
//         break;
//       case 5:
//         weekDay = "FRIDAY"
//         break;
//       case 6:
//         weekDay = "SATURDAY"
//         break;
//       default:
//         weekDay = "DEFAULT"
//     }

//     return weekDay

//   }

//   totalQuantity(productId, orders) {
//     // TODO: Implement
//     const obj = {}
//     const orderLines = orders.map(item => ({ orders: item.orderLines, date: item.creationDate }))

//     orderLines.forEach(item => {
//       item.orders.forEach(or => {
//         const newDate = new Date(item.date)
//         if (or.productId === productId) {
//           const day = this.getDate(newDate.getDay())
//           obj[day] ? obj[day] = obj[day] + or.quantity : obj[day] = or.quantity
//         }
//       })
//     })
//     return obj;
//   }
// }

// {
//   "orders": [
//     {
//       "orderId": 554,
//       "creationDate": "2017-03-25T10:35:20Z",
//       "orderLines": [
//         { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.00 }
//       ]
//     },
//     {
//       "orderId": 555,
//       "creationDate": "2017-03-25T11:24:20Z",
//       "orderLines": [
//         { "productId": 9872, "name": "Pencil", "quantity": 1, "unitPrice": 3.00 },
//         { "productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00 }
//       ]
//     },
//     {
//       "orderId": 453,
//       "creationDate": "2017-03-27T14:53:12Z",
//       "orderLines": [
//         { "productId": 5723, "name": "Pen", "quantity": 4, "unitPrice": 4.22 },
//         { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.12 },
//         { "productId": 3433, "name": "Erasers Set", "quantity": 1, "unitPrice": 6.15 }
//       ]
//     },
//     {
//       "orderId": 431,
//       "creationDate": "2017-03-20T12:15:02Z",
//       "orderLines": [
//         { "productId": 5723, "name": "Pen", "quantity": 7, "unitPrice": 4.22 },
//         { "productId": 3433, "name": "Erasers Set", "quantity": 2, "unitPrice": 6.15 }
//       ]
//     },
//     {
//       "orderId": 690,
//       "creationDate": "2017-03-26T11:14:00Z",
//       "orderLines": [
//         { "productId": 9872, "name": "Pencil", "quantity": 4, "unitPrice": 3.12 },
//         { "productId": 4098, "name": "Marker", "quantity": 5, "unitPrice": 4.50 }
//       ]
//     }
//   ]
// }


// ends here




    </div>
  )

}



export default Complex