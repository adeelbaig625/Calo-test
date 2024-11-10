# Calo test

This project is a web application that integrates with the Unsplash API to fetch and display random images. It also includes a `Create Job` functionality to add job entries. The project is divided into a backend server for API calls and a frontend client to render the data.

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (for both frontend and backend).
- An [Unsplash](https://unsplash.com/developers) developer account to obtain an API key.

---

### Backend Setup (Server)

1. **Create an Unsplash API Key**  
   - Go to [Unsplash Developers](https://unsplash.com/developers) and create an account if you don’t have one.
   - Register an application to get your API access key.

2. **Configure Environment Variables**  
   - In the `server` folder, copy `.env.example` to `.env`.
   - Set your server’s `PORT` and add the Unsplash `ACCESS_KEY` to the `.env` file:
     ```plaintext
     PORT=YOUR_SERVER_PORT
     ACCESS_KEY=YOUR_UNSPLASH_API_KEY
     ```

3. **Install Dependencies**  
   - Open a terminal in the `server` folder and run:
     ```bash
     npm install
     ```

4. **Run the Server**  
   - Start the server by running:
     ```bash
     npm run dev
     ```

---

### Frontend Setup (Client)

1. **Set Backend Base URL**  
   - In the `client/src/constants` folder, set the `BASE_URL` to match the server’s port you configured in the backend setup.

2. **Install Dependencies**  
   - In the `client` folder, install dependencies by running:
     ```bash
     npm install
     ```

3. **Run the Client**  
   - Start the client with:
     ```bash
     npm run dev
     ```

---

### Features

1. **Unsplash Image Integration**  
   - The backend fetches random images from Unsplash using the provided API key.
   - The frontend displays these images based on the data returned by the backend.

2. **Create Job Functionality**  
   - A modal in the frontend allows users to create new job entries by submitting a job name.
   - Jobs are stored in the backend and can be viewed as a list on the frontend.

### Usage

Once both the server and client are running:
- The backend will fetch images from Unsplash and save job entries.
- The frontend will display images and provide a modal to add new job entries.

---

### Additional Notes
- If you change the backend server port, make sure to update `BASE_URL` in the frontend.
- Avoid committing the `.env` file containing sensitive information.

---

## Time Report

This section provides an estimated time spent on each part of the project:

| Section                  | Time Spent (Hours) |
|--------------------------|--------------------|
| Backend Setup            | 3.0               |
| Frontend Setup           | 3.5               |
| Unsplash API Integration | 1.0               |
| Create Job Functionality | 2.5               |
| Testing & Debugging      | 2.0               |
| Documentation (README)   | 0.5               |

---
