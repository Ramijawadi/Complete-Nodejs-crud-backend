const express = require('express');

const router = express.Router()
const mongoose = require('mongoose');
const Page = require('./models/page');
const app = express();
app.use('/', router);

const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get('/Pages', async (req, res) => {

    try {
        await Page.find({})
            .then((result) => {

                res.send(result);

            });


    } catch (err) {

        console.log(err);
    }
});


app.get('/page/:id', async (req, res) => {

    try {

        let page = await Page.findOne({ _id: req.params.id })

        res.send(page)

    } catch (err) {

        console.log(err)
    }

})


app.delete('/delete/:id', async (req, res) => {

    try {
        await Page.findOneAndDelete({ _id: req.params.id });
        res.send(" supprimè avec succèe");


    } catch (err) {
        console.log(err)

    }
})



app.put('/update/:id', async (req, res) => {

    try {
        await Page.findOneAndUpdate({ _id: req.params.id }, {

            title: req.body.title
        })
        res.send('mis a jour avec succèe')


    } catch (err) {
        console.log(err)
    }
})

app.post('/ajouter_page', async (req, res) => {
    try {

        let new_page = new Page({

            title: req.body.title,
            color: req.body.color,
            form: req.body.form,



        });
        await new_page.save();
        res.send('save with success');
    }
    catch (err) {
        console.log(err);
    }

})

mongoose.connect('mongodb+srv://rami:rami@cluster0.ryfcext.mongodb.net/?retryWrites=true&w=majority', (err, done) => {

    if (err) {


        console.log(err)

    } if (done) {

        console.log("base de donne connectè avec succès")
    }


})

mongoose.set('strictQuery', false);

const port = process.env.PORT ;
app.listen(port, () => console.log('running server success'))



//mongodb+srv://rami:<password>@cluster0.pk99cd3.mongodb.net/?retryWrites=true&w=majority