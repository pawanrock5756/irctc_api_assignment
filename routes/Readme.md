Railway Management System API 
This project is a Railway Management System API designed as a simplified clone of the IRCTC system. It allows users to search for trains between stations, check seat availability, and book seats. Admins have additional privileges to manage trains and seats.

Features
User Registration and Login:

Register as a user to access the system.
Secure login with JWT-based authentication.
Admin Privileges:

Add new trains.
Update train details, such as seat counts.
Booking System:

Search for trains between source and destination stations.
View seat availability.
Book a seat in real time, ensuring race conditions are handled.
Authorization:

Admin endpoints are protected with an API key.
User actions require an authorization token.
Tech Stack
Backend Framework: Node.js with Express.js
Database: MySQL
Authentication: Authentication: JWT (JSON Web Tokens)
Environment Variables: dotenv for configuration