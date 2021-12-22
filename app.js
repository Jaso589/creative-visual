
const express = require ('express');
const app =  express();


const port = process.env.PORT || 4000;
//
app.set('view engine', 'ejs');
app.set("views",__dirname +"/views")

app.use(express.static(__dirname + "/public"));

app.get('/',(req, res) =>{
    res.render("index", {titulo: "mi titulo dinamico"})
})

app.get('/home', (req, res) =>{
    res.render("home", {tituloHome: "estas en el home"})
})

app.get('/nosotros', (req, res) =>{
    res.render("nosotros", {tituloNosotros: "Creative Visual | nosotros"})
})

app.get('/proyectos', (req, res)=>{
    res.render("proyectos")
})

app.get('/unirse',(req, res)=>{
    res.render("unirse")
})
app.use((req, res, next)=>{
    res.status(404).render(__dirname + "404")
})

app.listen(port,()=>{
    console.log('sirviendote',port)
})
