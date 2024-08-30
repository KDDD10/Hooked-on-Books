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
- **Python**
- **Flask**: A lightweight WSGI web application framework.
- **Flask-SQLAlchemy**: ORM for database management.
- **Flask-JWT-Extended**: For handling JWT-based authentication.
- **PostgreSQL**: Used for the production database.
- **SQLite**: Used for local development and testing.
- **Heroku**: For deployment and hosting.

## Setup and Installation

### Prerequisites
Ensure you have the following installed on your machine:
- **Python**
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

[API documentation content here]

## Database Schema

[Database schema content here]

## Testing and Maintenance

[Testing and maintenance content here]

## Deployment

[Deployment instructions here]

## Contributing

[Contributing guidelines here]

## License

[License information here]

## Contact

[Contact information here]