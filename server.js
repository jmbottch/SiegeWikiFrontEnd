//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/FrontEndApp'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/FrontEndApp/Index.html'));
});
// Start the app by listening on the default Heroku port
const server = http.createServer(app);
server.listen(port, () => console.log('running fam'));

