const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/messagingApp'));
console.log(__dirname);

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname +'/dist/messagingApp/index.html'));
});


// Start the app by listening on the default
// Heroku port
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
app.listen(port, () => {
    console.log('Node server started successfully at port : ' + port);
});