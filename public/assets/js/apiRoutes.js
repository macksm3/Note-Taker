// link to the db.json file
const db = require("../../../db/db");
const uuidv4 = require('uuid');
const fs = require("fs");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {    
    // add the uuid
    req.body.id = uuidv4.v4();
    console.log(req.body);
    db.push(req.body);
    res.json(true);
    // write file
    // send file to refresh the notes page
    
  });
  
  // API DELETE Requests
  app.delete("/api/notes", (req, res) => {
    //uuid
    // read the file 
    res.json(db);
    // filter for id to delete
    // write new file 
  });

};
