CRUD API with MongoDB

This is a simple **CRUD (Create, Read, Update, Delete) API** built using **Node.js, Express, and MongoDB**. It follows the **MVC (Model-View-Controller)** architecture and is designed for production use.

Features 🚀
- RESTful API for managing users
- Database connection with MongoDB
- Middleware for request handling
- Proper folder structure for scalability
- Error handling for smooth API interactions

Installation & Setup ⚙️

Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A package manager (npm or yarn)

Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/Divyanshu1712/CRUD.git
   cd CRUD
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure your MongoDB connection:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/practice-db-backend
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Your API will be running at: `http://localhost:5000`

## API Endpoints 🌍
| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| GET    | /api/users     | Get all users            |
| GET    | /api/users/:id | Get user by ID           |
| POST   | /api/user      | Create a new user        |
| PUT    | /api/users/:id | Update a user            |
| DELETE | /api/users/:id | Delete a user            |

Folder Structure 📂
```
CRUD/
│── controllers/   # Handles request logic
│── middlewares/   # Custom middleware functions
│── models/        # Mongoose schemas
│── routes/        # API route definitions
│── .env           # Environment variables (not pushed to GitHub)
│── .gitignore     # Ignore sensitive files
│── connection.js  # MongoDB connection setup
│── index.js       # Main server file
│── package.json   # Dependencies & scripts
```

Technologies Used 🛠️
- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables management

Contributing 🤝
Contributions are welcome! If you find any issues or have suggestions:
1. Fork this repo
2. Create a new branch (`feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request 🚀

License 📜
This project is open-source and available under the [MIT License](LICENSE).

