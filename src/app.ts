
// type  Tperson = {
//     id: number;
//     name: string;
//     age: number;
//     status?: boolean
// }
// const person: Tperson = {
//     id:1,
//     name: "hoàng",
//     age: 20
// }
// const persons: Tperson[] = [
//     {id: 1, name: "hoanga", age:20, status:true},
//     {id:2, name:"abc", age:19, status:false},
// ]

// console.log(person.name);

// type AppProps = {
//     message: string
// }
// ------------------------------

// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }

// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }

// export type Person = User | Admin;

// export const persons: Person[] /* <- Person[] */ = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];

// export function logPerson(user: Person) {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// persons.forEach(logPerson);
// -------------------------------------------------------------------------

function showNumber(a: number) {}