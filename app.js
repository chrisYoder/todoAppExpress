const express 			= require('express'),
	  app 				= express(),
	  mongoose 			= require('mongoose'),
	  bodyParser		= require('body-parser'),
	  methodOverride	= require('method-override'),
	  expressSanitizer	= require('express-sanitizer');

// ***************
// Mongoose Set Up
// ***************
const url = (process.env.DATABASEURL || 'mongodb://localhost:27017/ravenclaw-todo');

mongoose.connect(url, {
	useNewUrlParser: true, 
	useCreateIndex: true
}).then(() => {
	console.log('Connected to Database');
}).catch( err => {
	console.log('ERROR:', err.message);
});

// **********
// App config
// **********

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));



app.get('/', (req, res) => {
	res.render('./main/index');
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log('Todo Server is Running');
});