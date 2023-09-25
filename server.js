const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const hostIP = '10.200.138.26';
const port = 3000; // You can change the port number if needed

// create application/json parser
let jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static(__dirname + '/pages'));

app.get('/', (req, res) => {
    res.sendFile('pages/umbc.html', {root: __dirname })
});

app.post('/post-profile', urlencodedParser, (req, res) =>{
    //res.redirect("https://www.signingsavvy.com/media2/mp4-ld/23/23476.mp4");
    res.sendFile('pages/goodJob.html', {root: __dirname })
    console.log(req.body);
})

app.listen(port, hostIP, () => {
  console.log(`Server is running on http://${hostIP}:${port}`);
});