# Node.js RESTful API with MongoDB

This project implements a RESTful API using Node.js, Express, and MongoDB. The application allows for CRUD operations on a user database, where each user has the fields: `name`, `email`, and `age`. The project demonstrates how to interact with a MongoDB database using Mongoose for data modeling.

## Features

- **Create** a new user
- **Read** all users or a specific user by their `ObjectId`
- **Update** an existing user's details
- **Delete** a user by their `ObjectId`

## Technologies Used

- **Node.js** - JavaScript runtime for building the backend
- **Express** - Framework for building RESTful APIs
- **MongoDB** - NoSQL database for storing user data
- **Mongoose** - ODM for MongoDB to model data and handle database interaction
- **ES Modules** - JavaScript `import`/`export` syntax enabled via `"type": "module"` in `package.json`

## Installation

1. **Clone the repository**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/node-mongodb-api.git
   ```

2. **Install dependencies**

   Navigate into the project directory and install the required dependencies:

   ```bash
   cd node-mongodb-api
   npm install
   ```

3. **Set up MongoDB**

   Make sure you have **MongoDB** running locally on your machine. You can either:

   - Install and run MongoDB locally, or
   - Use MongoDB Atlas to create a cloud-based MongoDB instance.

   Update the `mongoURI` variable in `server.js` with your MongoDB connection string:

   ```javascript
   const mongoURI = 'mongodb://localhost:27017/userdb'; // Replace with your MongoDB URI
   ```

4. **Start the server**

   Once dependencies are installed and MongoDB is running, start the application:

   ```bash
   npm start
   ```

   This will start the server on `http://localhost:5000`.

## API Endpoints

The following API endpoints are available:

### 1. **GET /users**

Fetch all users from the database.

**Response:**

- **200 OK**: Returns an array of all users in the database.

### 2. **GET /users/:id**

Fetch a specific user by their `ObjectId`.

**URL Parameters:**

- `id` (required): The unique `ObjectId` of the user.

**Response:**

- **200 OK**: Returns the user object.
- **404 Not Found**: If the user with the given `ObjectId` does not exist.

### 3. **POST /users**

Create a new user and save it to the database.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 30
}
```

**Response:**

- **201 Created**: Returns the created user object.
- **400 Bad Request**: If there is a validation error (e.g., missing fields).

### 4. **PUT /users/:id**

Update the details of an existing user by their `ObjectId`.

**URL Parameters:**

- `id` (required): The unique `ObjectId` of the user.

**Request Body:**

```json
{
  "name": "Updated Name",
  "email": "updatedemail@example.com",
  "age": 35
}
```

**Response:**

- **200 OK**: Returns the updated user object.
- **404 Not Found**: If the user with the given `ObjectId` does not exist.
- **400 Bad Request**: If there is a validation error.

### 5. **DELETE /users/:id**

Delete a user by their `ObjectId`.

**URL Parameters:**

- `id` (required): The unique `ObjectId` of the user.

**Response:**

- **200 OK**: Returns a message confirming the deletion.
- **404 Not Found**: If the user with the given `ObjectId` does not exist.

## Project Structure

```
├── models
│   └── User.js         # Mongoose model for User
├── node_modules        # Node.js modules (installed dependencies)
├── package.json        # Project metadata and dependencies
├── server.js           # Main entry point for the server and API routes
└── README.md           # Project documentation
```

## Running Tests

You can test the API using Postman or any other API testing tool.

1. **GET** `http://localhost:5000/users` - Fetch all users.
2. **GET** `http://localhost:5000/users/:id` - Fetch a user by `ObjectId`.
3. **POST** `http://localhost:5000/users` - Create a new user with a JSON body.
4. **PUT** `http://localhost:5000/users/:id` - Update a user by `ObjectId`.
5. **DELETE** `http://localhost:5000/users/:id` - Delete a user by `ObjectId`.

You can also use **MongoDB Compass** to visualize the data stored in the MongoDB database.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Key Points in the README:
- **Installation** instructions to set up the project.
- **API Endpoints** with details on request/response.
- **Project Structure** for easy navigation of the files.
- **Testing** using Postman or any similar tool.
- Instructions on **contributing** to the project.
