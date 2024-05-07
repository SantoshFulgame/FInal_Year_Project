# FInal_Year_Project
# Home Service Application

Welcome to the Home Service Application repository! This application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Description

This application allows users to book various home services conveniently from their doorstep. Users can explore different services, view details, and book appointments as per their requirements.

## Features

- Browse different home services
- View service details
- Book appointments
- Admin dashboard for managing services and appointments
- Integration with Stripe for payment processing

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- MongoDB

## Installation

To install and run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running the following command:
4. Create a `.env` file in the root directory of the project and add the following environment variables:

**Frontend `.env`**
REACT_APP_SERVER_DOMIN=http://localhost:8080
REACT_APP_ADMIN_EMAIL=santoshfulgame71@gmail.com
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_51PATerSFQMoIzIImyoLIwSBkUkke0uVs2RK2m6LA3DwjxubGxGMAtg0vvCpXe2mZlE6Q0qmPeqDwpP3YtpGrTCGt00rQO6gyp4

**Backend `.env`**
MONGODB_USERNAME=santoshfulgame71
MONGODB_PASSWORD=Santosh@2023
MONGODB_URL=mongodb+srv://santoshfulgame71:Santosh@2023@santosh.yn2aanz.mongodb.net/HomeService?retryWrites=true&w=ma
STRIPE_SECRET_KEY=sk_test_51PATerSFQMoIzIImzLpjPhnVXsQZG1g3956w0v155ULPTNkMKOCbRsvYGZP8WG3AgC1Vr4YSiZ84kYlk7RoiipY500N9r85SJ6
FRONTEND_URL=http://localhost:3000

5. Start the backend server by running:
6. Navigate to the `client` directory in your terminal.
7. Install client-side dependencies by running:
8. Start the frontend server by running:
9. Open your web browser and visit `http://localhost:3000` to view the application.

## Contributors

- [Santosh Fulgame](https://github.com/SantoshFulgame)
  

## License

This project is licensed under the [MIT License](LICENSE).
