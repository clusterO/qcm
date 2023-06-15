# FormStats

FormStats is a powerful framework for generating custom questionnaires and gathering responses. It provides an intuitive interface for creating and managing forms, allowing users to easily design and distribute questionnaires. FormStats also offers real-time tracking and statistical analysis of form submissions.

## Project Overview

FormStats is designed to streamline the process of creating and distributing questionnaires. With its user-friendly interface, administrators can easily create custom questionnaires tailored to their specific needs. Users can then respond to the questionnaires, and their submissions are securely stored for analysis.

## Features

- Create and manage custom questionnaires
- Allow users to respond to questionnaires
- Real-time tracking of form submissions
- Generate statistical reports and analysis
- Secure authentication and access control
- Standalone backend with CodeIgniter, integrated with Angular frontend

## Installation

1. Clone the repository: `git clone https://github.com/your-username/formstats.git`
2. Install dependencies:
   - Backend:
     1. Change directory to formstats
     2. Install dependencies: `composer update`
     3. Configure the database connection in the `config/database.php` file.
     4. Run database migrations: `php spark migrate`
   - Frontend: Navigate to the Angular project directory qcm and run `npm install`.

## Usage

1. Start the CodeIgniter backend server. `php spark serve`
2. Start the Angular frontend development server: `ng serve`
3. Access the application in your browser at `http://localhost:4200`.
4. Create an administrator account to access the FormStats dashboard.
5. Use the dashboard to create custom questionnaires and track responses.

## API Documentation

The FormStats API provides endpoints for managing forms, submissions, and generating reports. You can find the detailed API documentation [here](/api/docs).

## Contributing

Contributions are welcome! If you'd like to contribute to FormStats, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them.
4. Push the changes to your forked repository: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
