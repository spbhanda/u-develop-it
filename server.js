const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Check the connection
// app.get("/", (req, res) => {
//    res.json({
//       messagge: "Hello World",
//    });
// });

// Default response for any other request (NOT FOUND)
app.use((req, res) => {
   res.status(404).end();
});

// Funtion starts Express.js server on port 3001
app.listen(PORT, () => {
   console.log(`Server running on prot ${PORT}`);
});
