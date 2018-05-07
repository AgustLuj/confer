var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mysql = require('mysql');
var bodyParser = require('body-parser'); 
var url = require('url');
var session=require('express-session');
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "confer"
});

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(session({secret: 'abcd1234'}));
app.set('port', (process.env.PORT || 8080));
var salas = [{
	'name':'123',
	'pass':'asd',
	'info':'Bienvenidos a mi confererencia',
	'encues':[{'preg':'Te gusto la charla','en':['si','no']}]
},{
	'name':'asd',
	'pass':'123',
	'info':'Bienvenidos a mi confererencia',
	'encues':[{'preg':'Te gusto la charla','en':['si','no']},{'preg':'Te gusto la charla','en':['si','no']},{'preg':'Te gusto la charla','en':['si','no']}]
}];
/******************************************************************************************/
app.get("/",function(req,res) {
	req.session.pass = false;
	res.render('index',{'type':true});
});
app.get("/room/*",function(req,res) {
	var link = req.originalUrl;
	var link2 = link.substr(6);

	if(req.session.pass && req.session.name == link2){
		for (var i = 0; i < salas.length; i++) {
			if(salas[i].name == link2){
				res.render('login',{'id':link2,'room':salas[i]});
				break;
			}
		}
   	}else{
      res.redirect('/');
   	}
});
app.get("/*",function(req,res) {
    var link = req.originalUrl;
	var link2 = link.substr(1);
	for (var i = 0; i < salas.length; i++) {
		if(salas[i].name == link2){
			res.render('login',{'id':link2,'room':salas[i]});
			break;
		}
	}});
app.post("/create",function(req,res) {
	salas.push({'name':req.body.name,'pass':req.body.pass,'info':'Gracias por confiar en nosotros ya puedes editar la pagina'});
	req.session.pass = true;
	req.session.name = req.body.name;
	res.redirect('/room/'+req.body.name);
});
app.post("/login",function(req,res) {
	for (var i = 0; i < salas.length; i++) {
		if(!req.body.exp){
			if(salas[i].name == req.body.id){
				res.redirect('/'+req.body.id);
				break;
			}else if(i == salas.length-1 ){
				res.render('index',{'err':true});
			}
		}else{
			if(salas[i].name == req.body.id && req.body.pass == salas[i].pass){
				req.session.pass = true;
				req.session.name = req.body.id;
				res.redirect('/room/'+req.body.id);
				break;
			}else if(i == salas.length-1 ){
				res.render('index',{'err':true,'type':true});
			}
		}
	}
});
/******************************************************************************************/
var f = new Date();
cad = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
/******************************************************************************************/
io.on('connection',function(socket) {
	
});
/******************************************************************************************/
server.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'), cad);
});