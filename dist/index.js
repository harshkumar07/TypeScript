"use strict";
// // interface Person {
// //     name : string,
// //     age : number
// // }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// type Person ={
//     name: string,
//     age : number
// }
// const user = {
//     name : "Harsh",
//     age : 23
// }
// function isLegal(User: Person){
//     if(User.age > 18){
//         return User.name;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isLegal(user))
// type Employee ={
//     name : string,
//     date : Date,
// };
// type Manager = {
//     name : string,
//     department : string,
// };
// type TeamLead = Manager & Employee;
// const teamLead :TeamLead ={
//     name : "Harsh",
//     date : new Date(),
//     department : "Software Developer",
// };
// function Greet(lead :TeamLead){
//     console.log(lead.name);
//     console.log(lead.date);
//     console.log(lead.department);
// }
// Greet(teamLead);
// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }
// function filteredUsers(users: User) {
//      if(users.age > 18) 
//         return users;
// //   return users.filter(x => x.age >= 18);
// }
// console.log(filteredUsers({
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }));
// enum Direction {
//     Up,
//     Down, // becomes 2 by default
//     Left, // becomes 3
//     Right // becomes 4
// }
// function doSomething(keyPressed: Direction) {
// 	// do something.
//     console.log(keyPressed)
// }
// doSomething(Direction.Left)
// interface User {
//     id : string
//     name : string
//     email : string,
//     createdAt : Date
// }
// ///  For choosing a partial values means only certain value
// type updateUser = Pick<User , 'name' | 'id'>
// // This helps  make all things as optional it means its not be used
// type updateUserOptional = Partial<updateUser>
// function UpdateUser(user : updateUserOptional){
//     console.log(`${user.name} , ${user.id}`)
// }
// const a = UpdateUser({name: "Harsh",id: "23l"})
// console.log(a)
//ReadOnly property
// type User1 ={
//     readonly name :string,
//     age : number
// }
// const obj:User1 ={
//     name : "Harsh",
//     age: 23
// }
// // Another Syntax but do everything
// const obj2 : Readonly<User1> ={
//     name : "Kajal",
//     age:22
// }
// obj2.name = "jahckjhs"
// obj2.age =34
// obj.name ="hwsd";
// obj.age =35
// type User ={
//     id : string,
//     name :string
// }
// type Users ={
//     [key : string]:User
// }
// type UUsers = Record<string, {id:string , name :string}>
// const users : UUsers={
//     "h@":{
//         id:"h@",
//         name :"Harsh"
//     },
//     "a@":{
//         id:"a@",
//         name:"Utkarsh"
//     }
// }
// type User ={
//     name:string
//     id : number
// }
// const users = new Map<string, User>();
// users.set("a@",{name:"Harsh",id:123})
// users.set("b@",{name:"Rishu",id:123})
// users.set("c@",{name:"Harry",id:123})
// const user = users.get('a@')
// users.delete('b@')
// console.log(users)
// import { z } from 'zod';
// import express from "express";
// const app = express();
// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });
// app.get('/',(req,res)=>{
//     res.end("Hello")
// })
// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody = req.body; // how to assign a type to updateBody?
//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });
// app.listen(3001);
const { Client } = require('pg');
const client = new Client({
    connectionString: 'postgresql://harsh:password@localhost:5432/postgres'
});
// async function createSchema() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE Pay_Users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(255) NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(55) NOT NULL
//       );
//     `);
//     console.log("Table created successfully:", result);
//     await client.end();
// }
// createSchema();
function Insert_Into_Schema(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
      INSERT INTO pay_users (username,email ,password)
      VALUES($1 ,$2 ,$3) RETURNING *`, [username, email, password]);
        console.log("Table created successfully:", result);
        yield client.end();
    });
}
Insert_Into_Schema("Rishu Gupta", "rishugupta@gmail.com", "123456789");
