# Hooked on Book

Welcome to **Hooked on Book**! This project is a web-based platform where users can discover, review, and discuss their favorite books. The application allows users to manage their book collections, add books, and rate and review them.

Here is the Live Link to the site: https://hooked-on-books.vercel.app/

## Table of Contents

- [Frontend](#frontend)
  - [Description](#description)
  - [Rationale](#rationale)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Features](#features)
  - [File Structure](#file-structure)
  - [Deployment](#deployment)
  - [Testing and Maintenance](#testing-and-maintenance)
  - [Credits](#credits)
- [Backend](#backend)
  - [Project Overview](#project-overview)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [API Documentation](#api-documentation)
  - [Database Schema](#database-schema)
  - [Testing and Maintenance](#testing-and-maintenance-1)
  - [Deployment](#deployment-1)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Frontend

### Description

**Hooked on Book** is designed to be a community-driven platform where users can explore new books, share reviews, and engage in discussions. Users can create accounts, log in, and manage their profiles. The platform tracks the highest-rated books and allows users to add their own books to the community library.

### Rationale

The purpose of **Hooked on Book** is to create an engaging platform for book lovers to connect and share their literary experiences. The application is designed with a focus on user experience, making it easy to navigate, responsive across devices, and enjoyable for users of all ages.

### Technologies

- **Frontend**:
  - React.js
  - CSS (with custom styling)
- **Backend**:
  - Python
  - Flask
- **Testing**:
  - Manual Testing
  - React Testing Library

### Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/hooked-on-book.git
    ```
2. Navigate to the project directory:
    ```bash
    cd hooked-on-book
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory with the following content:
    ```env
    REACT_APP_API_BASE_URL=https://hooked-on-books-39bd24fadd57.herokuapp.com/api
    ```
5. Start the application:
    ```bash
    npm start
    ```
6. The application will be available at `http://localhost:3000`.

### Usage

1. Open the application in your browser.
2. Register a new account or log in with an existing account.
3. Explore the book catalog, add new books, and write reviews.
4. Manage your profile and keep track of your favorite books and reviews.

### Features

- **User Authentication**: Secure login and registration system.
- **Book Management**: Add, edit, and delete books from the library.
- **Review System**: Write and manage reviews for different books.
- **Profile Management**: Customize your profile and view your activity history.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.

### File Structure

```
hooked-on-book/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── FeaturedInspiration/
│   │       ├── InspirationDetail.js
│   │       └── InspirationDetail.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── AddBooks/
│   │   │   ├── AddBooks.js
│   │   │   └── AddBooks.css
│   │   └── Profile/
│   │       ├── Profile.js
│   │       └── Profile.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .env
├── package.json
└── README.md
```

### Deployment

To deploy this project on Vercel:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

4. Follow the prompts to deploy the project. After deployment, Vercel will provide a URL where you can access your live application.

### Testing and Maintenance

#### Objective

Ensure the application is functional, meets all requirements, and remains up-to-date post-deployment.

#### Testing Activities

- **Unit Testing**: Test individual components using Jest and React Testing Library.
- **Integration Testing**: Ensure components interact correctly within the application.
- **System Testing**: Verify the entire application works as expected.
- **Cross-Browser Testing**: Test the application in different browsers to ensure compatibility.

#### Maintenance Activities

- **Monitor for Bugs**: Continuously monitor the application for any bugs or issues.
- **Update Dependencies**: Regularly update project dependencies to maintain security and performance.
- **Enhance Features**: Implement new features or improvements based on user feedback.
- **Backup**: Regularly backup the project and database to prevent data loss.

### Credits

- **React.js**: Used for building the frontend.
- **Node.js & Express.js**: Used for the backend API.
- **Python and Flask**: Used for storing user data, books, and reviews.
- **Heroku**: Used for hosting the backend API.

## Backend

### Project Overview

The backend of **Hooked on Book** provides a RESTful API that supports the following features:

- **User Authentication**: Register and login users securely.
- **Book Management**: Create, update, and delete books in the database.
- **Review Management**: Add and manage user reviews for books.
- **User Profiles**: Manage user information and activity.

The API is designed to be consumed by the React.js frontend, but it is also accessible for integration with other services or applications.

### Technologies Used

- **Python**
- **Flask**: A lightweight WSGI web application framework.
- **Flask-SQLAlchemy**: ORM for database management.
- **Flask-JWT-Extended**: For handling JWT-based authentication.
- **PostgreSQL**: Used for the production database.
- **SQLite**: Used for local development and testing.
- **Heroku**: For deployment and hosting.

### Setup and Installation

#### Prerequisites

Ensure you have the following installed on your machine:

- **Python**
- **pipenv**
- **PostgreSQL**

#### Steps

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

### API Documentation

#### Authentication

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

#### Books

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

#### Reviews

- **Add a Review**:
  - Endpoint: `/api/books/<book_id>/reviews`
  - Method: `POST`
  - Data: `{ "rating": 5, "review_text": "Great book!", ... }`
  - Response: `{ "id": 1, "rating": 5, "review_text": "Great book!", ... }`

- **Get Reviews for a Book**:
  - Endpoint: `/api/books/<book_id>/reviews`
  - Method: `GET`
  - Response: `[{ "id": 1, "rating": 5, "review_text": "Great book!", ... }]`

### Database Schema

#### Users

- **id**: Primary key
- **username**: Unique username
- **password_hash**: Hashed password for security

#### Books

- **id**: Primary key
- **title**: Title of the book
- **author**: Author of the book
- **description**: Description of the book
- **genre**: Genre of the book
- **published_date**: Date when the book was published

#### Reviews

- **id**: Primary key
- **book_id**: Foreign key referencing the book
- **user_id**: Foreign key referencing the user
- **rating**: Rating given by the user (1-5)
- **review_text**: Text of the review
- **created_at**: Timestamp of when the review was created

### Testing and Maintenance

#### Testing

- **Unit Tests**: The backend includes unit tests to ensure that each component functions correctly.
- **Integration Tests**: Test the interaction between different parts of the application.
- **Run Tests**:
    ```bash
    flask test
    ```

#### Maintenance

- **Monitor Logs**: Regularly check the Heroku logs to monitor for errors.
- **Database Backups**: Schedule regular backups of the PostgreSQL database.
- **Dependency Updates**: Keep dependencies up-to-date to ensure security and performance.

### Deployment

The backend is deployed on Heroku. Here's how to deploy updates:

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

### Contributing

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

### License

[Add your license information here]

### Contact

[Add your contact information here]

Enjoy exploring and reviewing your favorite books with **Hooked on Book**!