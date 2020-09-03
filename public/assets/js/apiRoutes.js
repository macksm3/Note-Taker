// link to the db.json file
const db = require("../../../db/db");
const uuidv4 = require('uuid');
const fs = require('fs');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  app.get("/api/notes", function(req, res) {
    res.json(db);
    db.forEach(function(noteObj) {
      // console.log(noteObj);
      // console.log('------------------');
      if(!noteObj.id){
        noteObj.id = uuidv4.v4();
        // console.log(noteObj.id);
      }
    });
    console.log(db);
    console.log(`write the db to a file here`);
    // write the newly modified file
    // fs.appendFile('../../db/db.json', db, function(err) {
    //   if(err) return console.log(err);
    //   console.log('write file failure');
    // });
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {    
    // add the uuid
    req.body.id = uuidv4.v4();
    // console.log(req.body);
    db.push(req.body);
    res.json(true);
    console.log(db);
    // write file
    // send file to refresh the notes page
    
  });
  
  // API DELETE Requests
  app.delete("/api/notes/*", (req, res) => {
    console.log("delete button clicked");
    // console.log(req.params);
    //uuid
    const noteID = req.params[0];
    console.log(`ID of note to delete: ${noteID}`);
    const delNote = db.filter(function(notes) {
      return notes.id === noteID;
    });
    console.log(`filtered object:`);
    console.log(delNote);
    console.log('------------------------------------');
    // read the file 
    res.json(db);
    // filter for id to delete
    // write new file 
  });

};
