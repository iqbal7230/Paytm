# Paymate

Paymate is a user-friendly payment application that allows users to create accounts and initiate fund transfers with ease. Built using React and styled with Tailwind CSS, Paymate aims to provide a seamless and secure experience for all your payment needs.

## Features

- **User Registration**: Users can create an account with a simple registration process.
- **Fund Transfer**: Easily initiate fund transfers to other users.
- **Transaction History**: View a history of all transactions made.
- **Responsive Design**: The app is fully responsive and works on all devices.

## Screenshot
![alt text](<frontend/img/Screenshot (313).png>)
![alt text](<frontend/img/Screenshot (314).png>)
![alt text](<frontend/img/Screenshot (316).png>)
![alt text](<frontend/img/Screenshot (317).png>)


## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js 
- **Database**: MongoDB 
- **Authentication**: JWT (JSON Web Token) for secure authentication

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/paymate.git
    cd paymate
    ```

2. **Install dependencies for the backend**:

    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**:

    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the `backend` directory and add the following:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the backend server**:

    ```bash
    cd backend
    npm start
    ```

6. **Run the frontend development server**:

    ```bash
    cd ../frontend
    npm start
    ```

7. **Open your browser**:

    Navigate to `http://localhost:3000` to see the application running.

