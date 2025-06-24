//for  creating a server
// This is a simple Express server setup that listens on port 3005 and responds with a message when
// accessed at the root URL.
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });
// app.listen(3005, () => {
//   console.log("Server is running on port 3005");
// });

// This code sets up a basic Express server with routes to handle requests for user data.
// const express = require("express");
// const axios = require("axios");
// const app = express();

// const PORT = 3005;
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/users", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     res.json({
//       message: "Successfully fetched users",
//       status: "success",
//       users: response.data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching users",
//       error: error.message,
//     });
//   }
// });
// app.listen(3005, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

///basic route setup with express
// This code sets up a basic Express server with routes to handle requests for user data.
// It includes routes for fetching all users, fetching a user by ID, and handling errors.
// const express = require("express");
// const axios = require("axios");
// const app = express();

// const PORT = 3005;
// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/users", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     res.json({
//       message: "Successfully fetched users",
//       status: "success",
//       users: response.data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching users",
//       error: error.message,
//     });
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${req.params.id}`
//     );
//     if (!response.ok) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }
//     const user = await response.json();
//     res.json({
//       message: "Successfully fetched user",
//       status: "success",
//       user: user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching user",
//       error: error.message,
//     });
//   }
// });

// app.listen(3005, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

///Middleware : This code sets up a basic Express server with middleware to log requests and handle errors.
const express = require("express");
const axios = require("axios");
const app = express();

const PORT = 3005;
app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.json({
      message: "Successfully fetched users",
      status: "success",
      users: response.data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message,
    });
  }
});

//A function that runs btween receiving the re and sending the req
const addTimestamp = (req, res, next) => {
  req.requestTime = new Date().toLocaleString();
  console.log("middleware run");
  next();
};
app.use(addTimestamp);
app.get("/", (req, res) => {
  res.send(`Hello from express at ${req.requestTime}`);
});
app.get("/about", (req, res) => {
  res.send(`About page at ${req.requestTime}`);
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
