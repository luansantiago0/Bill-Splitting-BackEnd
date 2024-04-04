# BillSplitting Backend Documentation

Welcome to the BillSplitting backend documentation! This document provides an overview of the backend architecture, endpoints, and setup instructions.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Prisma
- bcrypt
- JSON Web Tokens (JWT)


## Installation

1. **Clone the Repository:**

## Install Dependencies:

```cd bill-splitting-backend```
```npm install```

## Set Up Environment Variables:

PORT=8000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret

## Run the Server:

```npm start```

## Endpoints

### `POST /register`

Registers a new user.

**Request Body:**
```
{
  "email": "user@example.com",
  "password": "password",
  "emailConfirmation": "user@example.com"
}

"User registered successfully"
```

### `POST /login`

```
{
  "email": "user@example.com",
  "password": "password"
}

  "token": "jwt_token"

```

## Contributing

We welcome contributions from the community! To contribute to the project, follow these steps:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`).
3. **Commit your changes** (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature/your-feature-name`).
5. **Create a new Pull Request.**







