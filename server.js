const port = 4000;
const axios = require('axios')
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('form');// if jade
  // You should use one of line depending on type of frontend you are with
 // res.sendFile(__dirname + '/form.html'); //if html file is root directory
 res.sendFile("index.html"); //if html file is within public directory
});


//const data = JSON.stringify({
//  todo: 'Buy the milk'
//})


app.post('/',function(req,res){
  var ID = Math.random().toString(36).substr(2, 9);
   var Fiebre = req.body.Fiebre;
   var Tos = req.body.Tos;
   var Fatiga = req.body.Fatiga;
   var Disnea = req.body.Disnea;
   var Anorexia = req.body.Anorexia;
   var Mialgas = req.body.Mialgas;
   var Perdida = req.body.Perdida;
   var Rinitis = req.body.Rinitis;
   var Estornudos = req.body.Estornudos;
   var Diarrea = req.body.Diarrea;
   var Cefalea = req.body.Cefalea;
   var Prurito  = req.body.Prurito;



   var htmlData = "{" +
   			       '"Fiebre": "' + Fiebre +'",\n'
   				  + '"Tos": "' + Tos +'",\n'
   				  + '"Fatiga": "' + Fatiga +'",\n'
   				  + '"Disnea": "' + Disnea +'",\n'
   				  + '"Anorexia": "' + Anorexia +'",\n'
   				  + '"Mialgas": "' + Mialgas +'",\n'
   				  + '"Perdida": "' + Perdida +'",\n'
   				  + '"Rinitis": "' + Rinitis +'",\n'
   				  + '"Estornudos": "' + Estornudos +'",\n'
   				  + '"Diarrea": "' + Diarrea +'",\n'
             + '"Cefalea": "' + Cefalea +'",\n'
   				  + '"Prurito": "' + Prurito  +'",\n'
   				  +"}";


   res.send(htmlData);

   console.log(htmlData);

axios.post('http://localhost:3000/gophers', {
  ID,
    Fiebre,
    Tos,
   Fatiga,
   Disnea,
   Anorexia,
   Mialgas,
   Perdida,
   Rinitis,
   Estornudos,
   Diarrea,
   Cefalea,
   Prurito
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})


//   res.redirect('http://localhost:3000');
});

app.listen(port,() => {
  console.log("Started on PORT 4000");
})