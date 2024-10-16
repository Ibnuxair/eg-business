# EG Business API Documentation

## Table of Contents
1. [Overview](#overview)
2. [Base URL](#base-url)
3. [Authentication](#authentication)
4. [Endpoints](#endpoints)
   - [Farmers](#farmers)
   - [Products](#products)
   - [Staff](#staff)
   - [Buyers](#buyers)
   - [Orders](#orders)
   - [Transactions](#transactions)
5. [Error Handling](#error-handling)
6. [Notes / Limitations](#notes-limitations)

## 1. Overview

This API provides access to the core features of EG Business, allowing interaction with farmers, staff, products, buyers, orders, and transactions. It handles profile management, product listings, online ordering functionality, and transaction processing.

## 2. Base URL

The API base URL for EG Business is:

**Production:**
https://api.egbusiness.com

**Development:**
http://localhost:3000

## 3. Authentication

All endpoints require authentication via a Bearer Token in the header.

**Header Format:**
Authorization: Bearer <your_token_here>

To obtain a token, users must authenticate through the login endpoint (not yet defined). Tokens should be included in the Authorization header of each request.

## 4. Endpoints

### Login
- **Method**: POST
- **Endpoint**: /login
- **Description**: Authenticates the user and provides a Bearer Token for further requests.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "your_password"
  }
- **Response**:
  ```json
  {
    "token": "your_generated_token"
  }
- ***Success***: 200 OK
- ***Error***:
  - 400 Bad Request (invalid credentials)
  - 401 Unauthorized (authentication failed)

### Farmers

**Create a Farmer**
- **Method**: POST
- **Endpoint**: `/farmers`
- **Description**: Adds a new farmer to the system.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "location": "Kano",
    "phone_number": "08012345678",
    "profile_image_url": "https://path.to/image.jpg"
  }
- **Responses**:
  - ***Success***: 201 Created
  - ***Error***: 400 Bad Request (missing fields)

**Get Farmer by ID**
- **Method**: GET
- **Endpoint**: `/farmers/{id}`
- **Description**: Retrieves details of a specific farmer by ID.
- **Response**:
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "location": "Kano",
    "phone_number": "08012345678",
    "profile_image_url": "https://path.to/image.jpg"
  }
- ***Success***: 200 OK
- ***Error***: 404 Not Found

### Products

**Create a Product**
- **Method**: POST
- **Endpoint**: `/products`
- **Description**: Adds a new product to a farmer’s inventory.
- **Request Body**:
  ```json
  {
    "farmer_id": 1,
    "product_name": "Corn",
    "price": 500,
    "description": "Fresh corn",
    "image_url": "https://path.to/product.jpg"
  }
**Responses**:
- ***Success***: 201 Created
- ***Error***: 400 Bad Request (missing fields)

**List Products**
- **Method**: GET
- **Endpoint**: `/products`
- **Description**: Fetches a list of all available products.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "farmer_id": 1,
      "product_name": "Corn",
      "price": 500,
      "description": "Fresh corn",
      "image_url": "https://path.to/product.jpg"
    }
  ]
- ***Success***: 200 OK
- ***Error***: 404 Not Found (no products found)

### Staff

**Add a Staff Member**
- **Method**: POST
- **Endpoint**: `/staff`
- **Description**: Adds a new staff member to the system.
- **Request Body**:
  ```json
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "Manager",
    "phone_number": "08087654321",
    "profile_image_url": "https://path.to/image.jpg"
  }
- **Responses**:
  - ***Success***: 201 Created
  - ***Error***: 400 Bad Request (missing fields)

### Buyers

**Create a Buyer**
- **Method**: POST
- **Endpoint**: `/buyers`
- **Description**: Adds a new buyer to the system.
- **Request Body**:
  ```json
    {
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone_number": "08091234567",
      "location": "Abuja"
    }

- **Responses**:
- ***Success***: 201 Created
- ***Error***: 400 Bad Request (missing fields)

**Get Buyer by ID**
- **Method**: GET
- **Endpoint**: `/buyers/{id}`
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone_number": "08091234567",
    "location": "Abuja"
  }
- ***Success***: 200 OK
- ***Error***: 404 Not Found

### Orders

**Create an Order**
- **Method**: POST
- **Endpoint**: /orders
- **Description**: Creates a new order for a buyer.
- **Request Body**:
  ```json
  {
    "buyer_id": 1,
    "product_id": 1,
    "quantity": 20,
    "status": "pending"
  }
- **Responses**:
- ***Success***: 201 Created
- ***Error***: 400 Bad Request (missing fields)

**List Orders**
- **Method**: GET
- **Endpoint**: `/orders`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "buyer_id": 1,
      "product_id": 1,
      "quantity": 20,
      "status": "pending"
    }
  ]
- ***Success***: 200 OK
- ***Error***: 404 Not Found (no orders found)

### Transactions

**Create a Transaction**
- **Method**: POST
- **Endpoint**: `/transactions`
- **Description**: Creates a new transaction for an order.
- **Request Body**:
  ```json
  {
    "order_id": 1,
    "amount": 10000,
    "transaction_status": "completed"
  }
- **Responses**:
- ***Success***: 201 Created
- ***Error***: 400 Bad Request (missing fields)

**Get Transaction by ID**
- **Method**: GET
- **Endpoint**: `/transactions/{id}`
- **Response**:
  ```json
  {
    "id": 1,
    "order_id": 1,
    "amount": 10000,
    "transaction_status": "completed"
  }
- ***Success***: 200 OK
- ***Error***: 404 Not Found

## 5. Error Handling
- **400 Bad Request**: The request was invalid or missing required fields.
- **401 Unauthorized**: Authentication failed or token was invalid.
- **403 Forbidden**: You do not have permission to access this resource.
- **404 Not Found**: The requested resource does not exist.
- **500 Internal Server Error**: A server error occurred, please try again later.

## 6. Notes / Limitations
- **Rate limits**: 100 requests per minute per user.
- **Farmers**: Allowed to list only 10 products at a time.
- **Image URLs**: Should be valid and accessible.