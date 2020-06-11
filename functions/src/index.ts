import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin'
// import * as express from 'express'
// import * as bodyParser from 'body-parser'
// admin.initializeApp(functions.config().firebase);
// const app=express()
// const main=express()
// main.use('/Myapi',app)
// main.use(bodyParser.json())
// main.use(bodyParser.urlencoded({extended:false}))
// const db=admin.firestore()
// export const webApi=functions.https.onRequest(main)
// interface Product 
// {
//     productName:string,
//     productPrice:string
// }
// app.post('/saveProduct',async(req,res)=>{
// const product:Product={
//     productName:"Bag",
//     productPrice:"1000"
// }
// await db.collection("productOnSale").add(product)
// })

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
