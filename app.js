
const express = require ('express');
const app =  express();


const port = process.env.PORT || 4000;

const app = initializeApp({
    apiKey: "AIzaSyDsScP4RmpYG5U15se1_MZf1fhYqB7AmIs",
    authDomain: "creative-visual.firebaseapp.com",
    projectId: "creative-visual",
    storageBucket: "creative-visual.appspot.com",
    messagingSenderId: "997720311937",
    appId: "1:997720311937:web:adab10cad8cbc9c5f1a580",
    measurementId: "G-K1ENCC8BCT"
  });
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
