const express = require('express');
const path = require('path')
const app = express()
const port = process.env.PORT || 9000;
const ejs = require('ejs')

app.use('/', require('./routes'))

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')


app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));

app.listen(port)
console.log('Server is on port : ' + port)
