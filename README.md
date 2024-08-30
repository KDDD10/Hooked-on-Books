# Hooked on Book - Backend

This is the backend of the **Hooked on Book** project, a web-based platform where users can discover, review, and discuss their favorite books. The backend is built using Python Flask and provides a RESTful API that serves data to the frontend and handles user authentication, book management, and review functionality. The application is deployed on Heroku.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Testing and Maintenance](#testing-and-maintenance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

The backend of **Hooked on Book** provides a RESTful API that supports the following features:

- **User Authentication**: Register and login users securely.
- **Book Management**: Create, update, and delete books in the database.
- **Review Management**: Add and manage user reviews for books.
- **User Profiles**: Manage user information and activity.

The API is designed to be consumed by the React.js frontend, but it is also accessible for integration with other services or applications.

## Technologies Used

- **Python **
- **Flask**: A lightweight WSGI web application framework.
- **Flask-SQLAlchemy**: ORM for database management.
- **Flask-JWT-Extended**: For handling JWT-based authentication.
- **PostgreSQL**: Used for the production database.
- **SQLite**: Used for local development and testing.
- **Heroku**: For deployment and hosting.

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Python **
- **pipenv**
- **PostgreSQL**

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/hooked-on-book-backend.git
    cd hooked-on-book-backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    pipenv install
    pipenv shell
    ```

3. **Install dependencies**:
    ```bash
    pipenv install -r requirements.txt
    ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory with the following variables:

    ```bash
    FLASK_APP=app
    FLASK_ENV=development
    SECRET_KEY=<your_secret_key>
    SQLALCHEMY_DATABASE_URI=sqlite:///dev.db 
    JWT_SECRET_KEY=<your_jwt_secret_key>
    ```

5. **Initialize the database**:
    ```bash
    flask db init
    flask db migrate
    flask db upgrade
    ```

6. **Run the application**:
    ```bash
    flask run
    ```

The backend should now be running on `http://localhost:5000`.

## API Documentation

### Authentication

- **Register User**:
  - Endpoint: `/api/auth/register`
  - Method: `POST`
  - Data: `{ "username": "user", "password": "pass" }`
  - Response: `{"access_token": "JWT token"}`

- **Login User**:
  - Endpoint: `/api/auth/login`
  - Method: `POST`
  - Data: `{ "username": "user", "password": "pass" }`
  - Response: `{"access_token": "JWT token"}`

### Books

- **Get All Books**:
  - Endpoint: `/api/books`
  - Method: `GET`
  - Response: `[{ "id": 1, "title": "Book Title", "author": "Author", ... }]`

- **Get Single Book**:
  - Endpoint: `/api/books/<id>`
  - Method: `GET`
  - Response: `{ "id": 1, "title": "Book Title", "author": "Author", ... }`

- **Create a Book**:
  - Endpoint: `/api/books`
  - Method: `POST`
  - Data: `{ "title": "Book Title", "author": "Author", "description": "Description", ... }`
  - Response: `{ "id": 1, "title": "Book Title", "author": "Author", ... }`

- **Update a Book**:
  - Endpoint: `/api/books/<id>`
  - Method: `PUT`
  - Data: `{ "title": "Updated Title", "author": "Updated Author", ... }`
  - Response: `{ "id": 1, "title": "Updated Title", "author": "Updated Author", ... }`

- **Delete a Book**:
  - Endpoint: `/api/books/<id>`
  - Method: `DELETE`
  - Response: `{ "message": "Book deleted" }`

### Reviews

- **Add a Review**:
  - Endpoint: `/api/books/<book_id>/reviews`
  - Method: `POST`
  - Data: `{ "rating": 5, "review_text": "Great book!", ... }`
  - Response: `{ "id": 1, "rating": 5, "review_text": "Great book!", ... }`

- **Get Reviews for a Book**:
  - Endpoint: `/api/books/<book_id>/reviews`
  - Method: `GET`
  - Response: `[{ "id": 1, "rating": 5, "review_text": "Great book!", ... }]`

## Database Schema

### Users

- **id**: Primary key
- **username**: Unique username
- **password_hash**: Hashed password for security

### Books

- **id**: Primary key
- **title**: Title of the book
- **author**: Author of the book
- **description**: Description of the book
- **genre**: Genre of the book
- **published_date**: Date when the book was published

### Reviews

- **id**: Primary key
- **book_id**: Foreign key referencing the book
- **user_id**: Foreign key referencing the user
- **rating**: Rating given by the user (1-5)
- **review_text**: Text of the review
- **created_at**: Timestamp of when the review was created

## Testing and Maintenance

### Testing

- **Unit Tests**: The backend includes unit tests to ensure that each component functions correctly.
- **Integration Tests**: Test the interaction between different parts of the application.
- **Run Tests**:
    ```bash
    flask test
    ```

### Maintenance

- **Monitor Logs**: Regularly check the Heroku logs to monitor for errors.
- **Database Backups**: Schedule regular backups of the PostgreSQL database.
- **Dependency Updates**: Keep dependencies up-to-date to ensure security and performance.

## Deployment

The backend is deployed on Heroku. Here’s how to deploy updates:

1. **Login to Heroku**:
   ```bash
   heroku login
   ```

2. **Initialize Git (if not already done)**:
   ```bash
   git init
   heroku git:remote -a your-heroku-app-name
   ```

3. **Deploy to Heroku**:
   ```bash
   git add .
   git commit -m "Deploying updates"
   git push heroku master
   ```

4. **Migrate the Database** (if necessary):
   ```bash
   heroku run flask db upgrade
   ```

## Contributing

We welcome contributions to the **Hooked on Book** backend. To contribute:

1. **Fork the repository** on GitHub.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes** and commit them:
    ```bash
    git commit -m "Add your feature"
    ```
4. **Push to your fork**:
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Submit a pull request** on GitHub.

Please ensure that your code follows the project's coding standards and is well-documented.

!!!!!

#   H o o k e d - o n - B o o k s 
 
 