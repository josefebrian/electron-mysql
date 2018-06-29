const electron = require('electron')
var express = require('express');
var storage = require('electron-json-storage')
var exp = express();
// Module to control application life.
// Module to create native browser window.
// Module to create menu

const{app, BrowserWindow, ipcMain, Menu,menuItem} = electron;

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  // var request = require('request');
  //   request('http://192.168.0.3:3000/execquery', function (error, response, body) {
  //       // console.log('error:', error); // Print the error if one occurred
  //       // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //       // console.log('body:', body); // Print the HTML for the Google homepage.
  //       var Obj=(body);
  //
  //       storage.set('seri_barang',Obj,function(error){
  //       if(error) throw error;
  //       });
  //       // console.log(app.getPath('userData'));
  // });
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 700, height: 650})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true

  }))

  mainWindow.on('closed', function(){
    app.quit();
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);

// // context menu
// require('electron-context-menu')({
//   prepend: (params, browserWindow) => [{
//     labels: {
//   cut: 'Configured Cut',
//   copy: 'Configured Copy',
//   paste: 'Configured Paste',
//   save: 'Configured Save Image',
//   copyLink: 'Configured Copy Link'
//     },
//     // Only show it when right-clicking images
//     visible: params.mediaType === 'image'
//   }]
// });

// make right click like a website
// const ctxMenu = new Menu();
//   ctxMenu.append(new MenuItem({
//     label: 'test'
//   }))

//   mainWindow.webContents.on('context-menu',function(e,params){
//     ctxMenu.popup(mainWindow, params.x, params.y)
//   })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// exp.use(express.static('public'))
//
// var mysql      = require('mysql');
// var db = mysql.createConnection({
//   host     : '192.168.0.11',
//   user     : 'root',
//   password : 'ijasabb35',
//   database : '3cahaya'
// });
// var pilih = "nama_user";
//   exp.get('/user', (req, res) => {
//   let sql = 'SELECT * FROM user';
//   let query = db.query(sql,function(err, results)
//   {
//     //untuk pilih key dalam object results
//     var pilih = "nama_user";
//       if (err) throw err;
//       //pilih row 1 dari results dimsukin ke variable obj
//       var Obj=(results[0]);
//       var myJson = JSON.stringify(Obj);
//
//       storage.set('nama_user',myJson,function(error){
//       if(error) throw error;
//       });
//
//   });
// });
//
// exp.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });




// Create menu template
const mainMenuTemplate = [
{
  label:'file',
  submenu: [
    {
      label: 'Quit',
      accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      click(item,focusedWindow){
        focusedWindow.close();
        }
      }

  ]
}
];

// Add developer tools if still on beta
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
          click(item,focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}
