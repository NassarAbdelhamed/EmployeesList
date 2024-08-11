# Employees List App
This is a full-stack web application that allows users to manage a list of employees. The application is built using Spring Boot for the backend, PostgreSQL for the database, and Next.js for the frontend.
# Features
* Add Employee: Create a new employee record with details like name, job tittle, hire date, salary, and age.
* Edit Employee: Modify existing employee details.
* Remove Employee: Delete an employee from the list.
* View Employee Statistics:
* Max Salary: Display the employees with the highest salary.
* Min Salary: Display the employees with the lowest salary.
* Oldest Employee: Show the oldest employees.
* Youngest Employee: Show the youngest employees.
# Technologies Used
* Backend: Spring Boot
* Database: PostgreSQL
* Frontend: Next.js (React)
* API Communication: RESTful APIs
* Containerization: Docker (optional)
# Getting Started
## Prerequisites
* Java 17 or later
* Node.js 18 or later
* PostgreSQL (local or Dockerized)
* Maven (for building the Spring Boot application)
* Docker (optional, for containerizing the application)
## Setting Up the Backend
### 1. Clone the repository: 
```bash
git clone https://github.com/NassarAbdelhamed/EmployeesList.git
```
* Navigate to the spring folder
### 2. Configure the database:
* Update the application.properties file with your PostgreSQL credentials.
### 3. Run the Spring Boot application:
* The backend API will be accessible at `http://localhost:8080`.
## Setting Up the Frontend
### 1. Navigate to the Next.js/app folder
### 2. Install dependencies:
  ```bash
  npm install
  ```
### 3. Run the Next.js development server:
```bash
     npm run dev
```
* The frontend will be accessible at `http://localhost:3000`.
## API Endpoints
* GET /app/employees : Get a list of all employees.
* POST /app/employees : Add a new employee.
* PUT /app/employees?id={id} : Update an existing employee.
* DELETE /app/employees?id={id} : Delete an employee.
* GET /app/employees/maxSalary : Get the employees with the maximum salary.
* GET /app/employees/minSalary : Get the employees with the minimum salary.
* GET /app/employees/maxAge : Get the oldest employees.
* GET /app/employees/minAge : Get the youngest employees.
# Contributing
Contributions are welcome! Please create a pull request or open an issue to discuss the changes you want to make.
# Contact
If you have any questions, feel free to contact the project maintainer at nassarabdelhamed556@gmail.com.

