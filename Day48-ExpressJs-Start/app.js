const fs = require('fs'); //FileSystem Verileri saklamak için. Formdan gelen verileri data klasöründeki json formatındaki boş arrayde saklamak için kullanacağız.
const path = require('path'); // Dosya yolunu belirtmek için kullanılan paket
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false})); // Burası Veri gönderme işlemi yaparken url i ayırma işlemi yaptığımız yer. Yoksa burası çalışmaz.


app.get('/currentTime', function(req, res) {
    res.send('<h1>' + new Date().toISOString() + '</h1>');
}) //localhost:3000/currentTime

app.get('/', function(req, res) {
    res.send('<h1>Hello World! </h1>');
})

app.get('/form', function(req,res){
    res.send('<form action="/form/store-user" method="POST"><label>Your Name</label><input type="text" name="username"> <button>Submit </button> </form> ')
})

app.post('/form/store-user', function(req, res) {
    const userName = req.body.username;
    // console.log(userName);

    const filePath = path.join(__dirname, 'data', 'users.json'); //__dirname bizim geçerli dizinimizin adı
    
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    
    existingUsers.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));

    res.send('<h1>Username Stored!</h1>')
})

app.listen(3000);

