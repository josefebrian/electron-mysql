var express = require('express');
var exp = express();

exp.use(express.static('public'))

var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : '192.168.0.11',
  user     : 'toko',
  password : 'test',
  database : 'toko_12166218'
});

  exp.get('/rows', (req, res) => {
  let sql = 'SELECT * FROM user';
  let query = db.query(sql,(err, results) =>
  {
      if (err) throw err;
      res.send(results);
      var Obj=(results[0]);
      console.log(Obj);
      var myJson = JSON.stringify(Obj.nama_user);
      console.log(myJson);
      // storage.set('nama_user',myJson,function(error){
      //   if(error) throw error;
      //
      // storage.get('nama_user',function(error,data){
      //   if(error) throw error;
      //   console.log(data.nama_user);
      // });
      // });
      // localStorage,setItem("testJSON",myJson);
  });
});

exp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
// text = localStorage.getItem("testJSON");
// myText = JSON.parse(text);
// console.log(myText);
// document.getElementById("table").innerHTML = myText.nama_user;
