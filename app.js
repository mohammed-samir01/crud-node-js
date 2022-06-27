const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
//post form
app.use(express.urlencoded({ extended: true })); 
// To import routes file
const allArticlesRouter = require("./routes/all-articles");
// Helmet package
const helmet = require("helmet");
app.use(helmet()); 


// Auto Refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));


// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });



// Connect To DataBase
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:123@cluster0.e4naqs8.mongodb.net/?retryWrites=true&w=majority")
    .then(result => {
        app.listen(process.env.PORT || port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch(err => {
        console.log(err);
    });

//--------------------------------

// All Articles Path

app.use("/all-articles",allArticlesRouter);

app.get('/', (req, res) => {

    res.redirect('/all-articles')
})

app.get('/add-new-article', (req, res) => {

    res.render('add-new-article' ,{mytitle:"ADD NEW ARTICLE"})
})


// 404 Not Found

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})