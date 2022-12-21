require("dotenv").config();
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const Logs = require('./models/logs')



//middleware

app.set ('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());
//middleware for post and put request
app.use(express.urlencoded({extended:false}));


//CONNECT DATA ==== DEPRECATION WARININGS
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

// ====Routes====
// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show
//index route

const ships = ['ship1','ship2','ship3']

app.get('/logs',(req, res)=>{
Logs.find({},(error, allLogs) =>{
    res.render('Index', {
        logs: allLogs,
    })
})
})

//New Route

app.get('/logs/new',(req,res)=>{
    res.render('New');
});

//Create Route
app.post('/logs',(req, res) =>{
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Logs.create(req.body,(error, createdLog) =>{
        res.redirect('/logs');
    });
})

//Show Route

app.get("/logs/:id", (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) =>{
        res.render('Show', {
            log: foundLog
        })
    })
})




app.listen(8000,()=> {
    console.log("listening from port 8000")
})
