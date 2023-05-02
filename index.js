const express = require('express') 
const app=express();  
const port =process.env.PORT || 5000;  
const chef=require('./Data/chefCatagory.json');
const recipe=require('./Data/recipe.json') 
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Thai Express is Running....')
  });
  
  app.get('/chef',(req,res)=>{
    res.send(chef)
  });

 app.get('/recipe',(req,res)=>{
  res.send(recipe)
 });
 
 app.get('/chef/:id',(req,res)=>{ 
  const id=req.params.id;  
  console.log(id);
  if(id==0)
  {
    res.send(recipe)
  }
  const chefRacipe=recipe.filter(rec=>rec.categoryId==id) 
  res.send(chefRacipe) 
  
 }); 
 
 app.get('/recipe/:id',(req,res)=>{
  const id=req.params.id; 
  const selectedRecipe=recipe.find(r=>r.id==id)
  res.send(selectedRecipe)
 });



  app.listen(port, () => {
    console.log(`Thai Express is running on port ${port}`)
  })