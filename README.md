## Assignment

## Fruit.ai product

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Example JSON](#example-json-for-creating-a-new-faq)
- [Error Handling](#error-handling)
- [FAQ Model](#faq-model)

## Features

- **Get all FAQs:** Retrieve a list of all FAQs in the system.
- **Get a single FAQ:** Retrieve the details of an FAQ using its ID.
- **Create an FAQ:** Add a new FAQ to the system.
- **Update an FAQ:** Modify the details of an existing FAQ.
- **Delete an FAQ:** Remove an FAQ from the system.

## Requirements

- Python 3.9+
- Django 3.2+
- Django REST Framework
- React

## Setup

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/its999trevor/Appreciate-Assignment
    ```
   
2. Navigate to the server directory:
    ```bash
    cd server
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run database migrations:
    ```bash
    python manage.py migrate
    ```

5. Start the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    or if using yarn:
    ```bash
    yarn install
    ```

3. Set up environment variables by creating a `.env` file in the root of your project with the following key:
    ```bash
    VITE_API_URL=http://localhost:5000
    ```

## Running the Application

After starting the backend server, you can access the API at `http://127.0.0.1:8000/` using your preferred API testing tool (e.g., Postman, curl, etc.).

You can access the deployed API at [Deployed API Link](https://appreciate-assignment.onrender.com/api/faqs).

For the frontend, access the deployed app at [Deployed Frontend Link](https://appreciate-assignment-1.onrender.com/).

## API Endpoints

| Method | Endpoint          | Description                       |
|--------|-------------------|-----------------------------------|
| GET    | `/faqs/`           | Retrieve all FAQs                 |
| GET    | `/faqs/:id`        | Retrieve a specific FAQ by ID     |
| POST   | `/faqs/create/`    | Create a new FAQ                  |
| PUT    | `/faqs/:id`        | Update an FAQ by ID               |
| DELETE | `/faqs/:id`        | Delete an FAQ by ID               |

## Example JSON for Creating a New FAQ

```json
{
  "name": "John Doe",
  "title": "What is Django?",
  "description": "Django is a high-level Python web framework for building web applications.",
  "image_url": "url_link"
}
```

## Error Handling

- **404 Not Found:** If the requested FAQ does not exist, the API will return a 404 status with an error message.
- **400 Bad Request:** If there is a validation error in the request (e.g., missing or invalid data), the API will return a 400 status with the relevant error details.

## FAQ Model

The `Faq` model contains the following fields:

- `faqs_id`: Auto-incremented primary key for each FAQ.
- `name`: The name of the person asking the question (max length: 50 characters).
- `title`: A brief title summarizing the question (max length: 50 characters).
- `description`: A detailed answer to the FAQ (text field).
- `image_url`: The URL of an image related to the FAQ (optional).

```

### Key Fixes:
1. Adjusted the formatting to improve clarity.
2. Corrected heading levels and provided a proper table of contents.
3. Standardized the code block styles (bash, json).
4. Linked the deployed API and frontend URLs.
