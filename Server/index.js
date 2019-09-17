const express = require('express');
const app = express();
const path = require("path")

//grab file 
const DIST_DIR = path.join(__dirname, '../public'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

app.use(express.static('../public')) 



app.get('*',(req,res)=>{
    res.sendFile(HTML_FILE); // EDIT
    // res.send("hello")
  })
  
  // app.get('/testing',(req,res)=>{
  //   res.send("completed")
  // })
  
  
  app.listen(3000,()=>{
    console.log("listening on port 3000");
  });
  // TODO:150 work on all routes(no auth)
  