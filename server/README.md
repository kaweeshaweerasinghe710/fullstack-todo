# FocusFlow Backend (Node.js & Express)

This is the RESTful API for the TODO application, handling data persistence and business logic using Node.js, Express, and MongoDB.

##  How to Set Up and Run
1. Navigate to the server directory:  cd server
2. Install the dependencies:  npm insatll
3. Use a .env.example file in this directory and add your credentials: 

  PORT=5000
  MONGODB_URI=your_mongodb_connection_string_here

4. Start the server: node index.js


## API Endpoints

GET /api/tasks: Fetch all tasks.
POST /api/tasks: Create a new task (Title and optional Description).
PUT /api/tasks/:id/update: Update an existing task's details.
PATCH /api/tasks/:id/done: Toggle the completion status.
DELETE /api/tasks/:id: Remove a task from the database.

## Database Connection Notes
MongoDB Atlas: I used a cloud-hosted MongoDB Atlas cluster for data persistence.
Mongoose: Used for schema modeling to ensure data consistency (e.g., required titles and default boolean states).

## Assumptions & Limitations
I've ignored the .env file for security reasons. but I included a .env.example file so you can easily set up your own database connection to test the app.

Security:  CORS is set to allow all origins  which should be restricted in a production environment.
Port: Defaulted to port 5000.

