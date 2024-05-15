# Medikall

Medikall is an online Doctor Appointment System that allows hospitals to streamline their appointment scheduling process. It provides a convenient way for patients to schedule appointments ahead of time, eliminating the need to wait in long queues.

## Features

- **Appointment Scheduling**: Patients can easily schedule appointments with doctors from the comfort of their own homes.
- **Doctor Availability**: The system displays the availability of doctors, making it easier for patients to choose a suitable time slot.
- **Patient Registration**: New patients can register their details in the system to facilitate the appointment booking process.
- **Notifications**: Patients receive notifications and reminders about their upcoming appointments.
- **Admin Dashboard**: Hospital administrators have access to a dashboard where they can manage doctors, appointments, and other system settings.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/medikall.git`
2. Install the required dependencies: `cd server && npm install && cd ../client && npm install`
3. Configure the database connection in the `.env` file.
4. Start the application: `npm start`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- React.js/TypeScript
- TailwindCSS

## Deployed (Live Link)

[Medikall Live Site](https://new-medikall.onrender.com/)

# Technical Details

In the Medikall project, I used several technologies to enhance its functionality and security.

## User Authentication with PassportJS

To ensure secure user authentication, I integrated PassportJS into the Medikall system. PassportJS is a popular authentication middleware for Node.js that provides a flexible and modular approach to handle user authentication. It supports various authentication strategies, such as local username/password (This was used in this project), social media logins, and more. By using PassportJS, I was able to implement a robust and secure authentication system for Medikall.

## Type Safety with TypeScript

To enhance the maintainability and reliability of the codebase, I utilized TypeScript in the Medikall project. TypeScript is a statically typed superset of JavaScript that adds type annotations and compile-time type checking to JavaScript code. By using TypeScript, I was able to catch potential type-related errors during development, improve code readability, and provide better tooling support. This helped me ensure the correctness and stability of the Medikall application.

## Remote Database Solution with MongoDB

For storing and managing data in Medikall, I opted for MongoDB, a popular NoSQL database solution. MongoDB offers a flexible and scalable approach to handle structured and unstructured data. It provides a document-oriented data model, which allowed me to store data in JSON-like documents. By using MongoDB, I was able to efficiently store and retrieve data for the Medikall application. Additionally, MongoDB's support for horizontal scaling and replication made it a suitable choice for handling the potential growth of the system.

These technologies, namely PassportJS for user authentication, TypeScript for type safety, and MongoDB Atlas for the remote database solution, played a crucial role in the development of Medikall, ensuring its security, reliability, and scalability.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact [Stephen Omoregie](mailto:cre8stevedev@gmail.com).
