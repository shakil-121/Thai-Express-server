const express = require('express') 
const app=express();  
const port =process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send('Thai Express is Running....')
  });
  
  app.listen(port, () => {
    console.log(`Thai Express is running on port ${port}`)
  })