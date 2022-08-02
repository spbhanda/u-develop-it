const mysql = require("mysql2");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
   {
      host: "localhost",
      // Your MySQL username
      user: "root",
      // MySQL password
      password: "",
      database: "election",
   },
   console.log("Connected to the election database")
);

// Check the connection, delete it later
// app.get("/", (req, res) => {
//    res.json({
//       messagge: "Hello World",
//    });
// });

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//    console.log(rows);
// });
//  **************************************************************************

// db.query(`SELECT * FROM candidates WHERE id =1`, (err, row) => {
//    if (err) {
//       console.log(err);
//    }
//    console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id =?`, 1, (err, result) => {
//    if (err) {
//       console.log(err);
//    }
//    console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
VALUES(?,?,?,?)`;

const params = [1, "Ronald", "Firbank", 1];

db.query(sql, params, (err, result) => {
   if (err) {
      console.log("Error: " + err);
   }
   console.log(result);
});

// Default response for any other request (NOT FOUND)
app.use((req, res) => {
   res.status(404).end();
});

// Funtion starts Express.js server on port 3001
app.listen(PORT, () => {
   console.log(`Server running on prot ${PORT}`);
});
