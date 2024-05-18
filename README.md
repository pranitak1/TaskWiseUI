# TaskWiseUI

TaskWiseUI is a powerful, AI-powered task management board application frontend designed to help teams manage their workspaces, projects, and tasks efficiently. This repository contains the frontend code for the TaskWise application.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **User Authentication**: Signup, login, logout, email verification, password reset.
- **User Profile Management**: View, edit, and delete user profiles.
- **Workspace Management**: Create, view, update, and delete workspaces; manage workspace members.
- **Project Management**: Create, view, update, and delete projects within workspaces.
- **Task Management**: Create, view, update, and delete tasks within projects.
- **Calendar View**: View tasks in a calendar layout.
- **Notifications**: View and manage action notifications.
- **Statistics and Aggregations**: Retrieve and display various statistics for workspaces, projects, and tasks.

## Technologies Used
- **Frontend**: React, Redux, JavaScript, HTML, CSS
- **Styling**: Tailwind CSS, Material-UI
- **State Management**: Redux
- **Version Control**: Git, GitHub

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/pranitak1/TaskWiseUI.git
    cd TaskWiseUI
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    REACT_APP_API_BASE_URL=http://localhost:5000/api
    REACT_APP_AUTH_SECRET=your_jwt_secret
    ```

4. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

### Running Tests
To run tests, use the following command:
```sh
npm test
# or
yarn test
