###To-Do List Application###
Description:-
This To-Do List application allows users to manage tasks with features such as creating, viewing, updating, and deleting tasks. Tasks are stored in a MongoDB database, ensuring that they persist across sessions.

***Features***
1.Create tasks with a title and description.
2.View all tasks.
3.Update task details.
4.Delete tasks.


***Installation***
Clone the repository:

git clone https://github.com/your-username/todo-app.git
cd todo-app
Install dependencies:


npm install
Set up your MongoDB database:

You can use MongoDB Atlas to set up a cloud database or run MongoDB locally.
Update the MONGO_URI in your .env file with your MongoDB connection string.
Create an .env file in the root directory and add the following:


MONGO_URI=your-mongo-db-connection-string
PORT=3000
Start the server:


npm start
The application will be running on http://localhost:3000.

***API Endpoints***

1.POST /tasks
  Description: Create a new task.
  Request Body:
  
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  
  Response:
  
  {
    "task": {
      "_id": "task-id",
      "title": "Task Title",
      "description": "Task Description"
    }
  }


2.GET /tasks
  Description: Retrieve all tasks.
  Response:
  
  {
    "allTasks": [
      {
        "_id": "task-id",
        "title": "Task Title",
        "description": "Task Description"
      }
    ]
  }


3.PUT /tasks/:id
  Description: Update an existing task by ID.
  Request Body:
  
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description"
  }
  
  Response:
  
  {
    "message": "Task updated",
    "task": {
      "_id": "task-id",
      "title": "Updated Task Title",
      "description": "Updated Task Description"
    }
  }


4.DELETE /tasks/:id
  Description: Delete a task by ID.
  Response:
  
  {
    "message": "Task deleted successfully"
  }


***Code Structure***
The application follows a simple model-view-controller (MVC) pattern. The key parts of the project are:

->models/: Contains the task.model.js file where the Mongoose schema for the Task is defined.

->task.model.js defines the structure of a task, including the title and description fields.

->controllers/: Contains the logic for handling HTTP requests for the tasks.

->task.controller.js contains functions for creating, reading, updating, and deleting tasks. Each function is responsible for a specific operation on the task data.

->routes/: Contains the routes that define how API requests are mapped to controller actions.

->task.routes.js sets up the routes for /tasks and binds them to the appropriate controller methods.

->server.js: This is the entry point of the application, where the server is configured and the routes are connected to the Express app.

***Key Decisions***
Use of MongoDB: MongoDB was chosen for this application as it is a flexible, schema-less database, making it easy to store task data.

Async/Await: The application uses async/await for asynchronous operations to simplify the code and make it more readable. This is especially useful when interacting with the database for creating, fetching, updating, or deleting tasks.

Error Handling: The app consistently handles errors using try/catch blocks, ensuring that any issues (such as database connectivity errors) result in meaningful error responses with appropriate status codes.

Status Codes: HTTP status codes are used appropriately to reflect the status of the operation:

201 Created for successful task creation.
200 OK for successful data retrieval, task updates, and deletions.
400 Bad Request for invalid requests (e.g., missing title).
404 Not Found when a task does not exist.
500 Internal Server Error for unexpected errors.
Testing the Application

***You can test the API endpoints using tools like Postman or cURL. Here are some example requests:***


Create Task:-------------------------------------------------------------------------------------

POST http://localhost:3000/tasks

{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread"
}

Get All Tasks:-------------------------------------------------------------------------------------

GET http://localhost:3000/tasks

Update Task:----------------------------------------------------------------------------------------

PUT http://localhost:3000/tasks/:id

{
  "title": "Updated Task",
  "description": "Updated description"
}

Delete Task:-----------------------------------------------------------------------------------------

DELETE http://localhost:3000/tasks/:id
