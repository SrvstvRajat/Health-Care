const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose') 
const http = require('http');
const https = require('https');
const PORT = process.env.PORT || 8000;
const db_link='mongodb+srv://rajatsri24:12345678@9@cluster0.0rlijyn.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);

const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
    
const  mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
    
app = express();

//Configuring server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

// app.post('/allow',(req,result)=>{
// 	const emailId = req.body.emailId;
// 	MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
// function(err, db) {
//             if (err) throw err;
//             let dbo = db.db("medical");
//             query = {"emailId":emailId};
//             var newvalues = { $set: { allow: true } };
//             dbo.collection("patients database").updateOne(query,newvalues, function(err, res) {
//                     if (err) throw err;
//                     console.log("updated");
//                     result.send("updated");
//                     db.close();
//                 });
//         });
// })

// app.post('/disallow',(req,result)=>{
// 	const emailId = req.body.emailId;
// 	MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
// function(err, db) {
//             if (err) throw err;
//             let dbo = db.db("medical");
//             query = {"emailId":emailId};
//             var newvalues = { $set: { allow: false } };
//             dbo.collection("patients database").updateOne(query,newvalues, function(err, res) {
//                     if (err) throw err;
//                     console.log("updated");
//                     result.send("updated");
//                     db.close();
//                 });
//         });
// })

// app.post('/canaccess', async(req,result,next)=>{
//         const patient_id = req.body.emailId.trim();
//         const query = {'emailId':patient_id.toLowerCase()};
//         console.log(query);
//         await MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
//  function(err, db) {
//                 if (err) throw err;
//                 let dbo = db.db("medical");
//                         dbo.collection("patients database").find(query).toArray( function(err, res) {
//                                         if (err) throw err;
//                                         if (!res){
//                                                 throw err;
//                                         }
//                                         console.log("data");
//                                         id = res[0].allow;
//                                         result.send(id);
//                         });
//                 db.close();
//         });

// });

// app.get('/',(req,res)=>{
//         res.send(Math.random().toString(36).substr(2, 9));
// })

// app.post('/patient_auth', async (req, result, next) => {
//         const creds = req.body;
//         const uemail = creds.username.trim();
//         const pw = creds.password;
//         const query = {emailId : uemail.toLowerCase()};
//         let password = " ";
//         let outData={};
//         await MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
//  function(err, db) {
//                 if (err) throw err;
//                 let dbo = db.db("medical");
//                         dbo.collection("patients database").find(query).toArray( function(err, res) {
//                                         if (err) throw err;
//                                         if(res.length){
//                                                 console.log(res);
//                                                 password = res[0].password;
//                                                 console.log(res[0]._id)
//                                                 console.log(password);
//                                                 if (!password)
//                                                         result.send("Invalid credentials!!");
//                                                 if (password==pw){
//                                                         outData['auth'] = true;
//                                                         outData['id'] = res[0]._id;
//                                                         outData['username'] = res[0].username;
//                                                         console.log(outData);
//                                                         result.send(outData);
//                                                 }
//                                                 else
//                                                         result.send(false);
//                                         } else {
//                                                 result.send(false);
//                                          }
//                         });
//                 db.close();
//         });
// });

// app.post('/patient_id', async(req,result,next)=>{
//         console.log("called");
//         const patient_id = req.body.emailId.trim();
//         const query = {'emailId':patient_id.toLowerCase()};
//         console.log(query);
//         await MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
//  function(err, db) {
//                 if (err) throw err;
//                 let dbo = db.db("medical");
//                         dbo.collection("patients database").find(query).toArray( function(err, res) {
//                                         if (err) throw err;
//                                         if (!res){
//                                                 throw err;
//                                         }
//                                         console.log("data");
//                                         id = res[0]._id;
//                                         result.send(id);
//                         });
//                 db.close();
//         });

// });

// app.post('/doctor_auth', async (req, result, next) => {
//         const creds = req.body;
//         const uemail = creds.username.trim();
//         const pw = creds.password;
//         const query = {emailId : uemail.toLowerCase()};
//         let password = " ";
//         let outData = {};
//         await MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
//  function(err, db) {
//                 if (err) throw err;
//                 let dbo = db.db("medical");
//                         dbo.collection("doctors database").find(query).toArray( function(err, res) {
//                                         if (err) throw err;
//                                         console.log("data");
//                                         password = res[0].password;
//                                         console.log(password);
//                                         if (!password)
//                                                 result.send("Invalid credentials!!");
//                                         if (password==pw){
//                                                 outData['auth'] = true;
//                                                 outData['id'] = res[0]._id;
//                                                 outData['username'] = res[0].username;
//                                                 console.log(outData);
//                                                 result.send(outData);
//                                         }
//                                         else
//                                                 result.send(false)
//                         });
//                 db.close();
//         });
// });

// app.post('/insert_doctor',(req,result)=>{
//         const username = req.body.username;
//         const password = req.body.password;
//         const emailId = req.body.emailId;
//         doctor_data = {"username":username, "emailId":emailId.toLowerCase(), "password":password};
//         MongoClient.connect("mongodb+srv://RajatSri24:<12345678@9>@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
// function(err, db) {
//             if (err) throw err;
//             let dbo = db.db("medical");
//             query = {"emailId":emailId}
//                 //check for unique ID if yes then only insert
//                 dbo.collection("doctors database").find(query).toArray( function(err, res) {
//                         if (err) throw err;
//                         //console.log(res);
//                         if (res.length){
//                                 result.send("username already exists!!");
//                                 db.close();
//                         } else {
//                             dbo.collection("doctors database").insertOne(doctor_data, function(err, res) {
//                                     if (err) throw err;
//                                     result.send("1 document inserted")
//                                     db.close();
//                                 });
//                         }
//                 });
//         });
// })


app.post('/insert_patient',(req,result)=>{
	const username = req.body.username;
        const password = req.body.password;
        const emailId = req.body.emailId;
        patient_data = {"username":username, "emailId":emailId.toLowerCase(), "password":password};
        mongoclient.connect("mongodb+srv://RajatSri24:12345678@9@cluster0.rca8wzj.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true},
function(err, db) {
            if (err) throw err;
            let dbo = db.db("medical");
            query = {"emailId":emailId}
                //check for unique ID if yes then only insert
                dbo.collection("patients database").find(query).toArray( function(err, res) {
                        if (err) throw err;
                        //console.log(res);
                        if (res.length){
                                result.send("username already exists!!");
                                db.close();
                        } else {
                            dbo.collection("patients database").insertOne(patient_data, function(err, res) {
                                    if (err) throw err;
                                    result.send("1 document inserted")
                                    db.close();
                                });
                        }
                });
        });
})

app.set('port', PORT);
server = http.createServer(app);
server.listen(app.get('port'), () => console.log("API is listening on port " + app.get('port')));
