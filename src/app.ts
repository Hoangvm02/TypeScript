
type  Tperson = {
    id: number;
    name: string;
    age: number;
    status?: boolean
}
const person: Tperson = {
    id:1,
    name: "hoàng",
    age: 20
}
const persons: Tperson[] = [
    {id: 1, name: "hoanga", age:20, status:true},
    {id:2, name:"abc", age:19, status:false},
]

console.log(person.name);

type AppProps = {
    message: string
}
