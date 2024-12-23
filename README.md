<h1 align="center" id="title">Job Portal</h1>

<p id="description">A full-stack job portal built using the MERN stack (MongoDB Express React Node.js) that connects job seekers and recruiters. Job seekers can search and apply for jobs and upload resumes to their profiles with secure authentication powered by Clerk. Recruiters can post manage job openings and handle applications through a dedicated dashboard with options to accept or reject applications and view resumes. The platform integrates Sentry for real-time error tracking and MongoDB query optimization to enhance performance. The application is fully deployed and accessible online via Vercel.</p>

<h2>🚀 Demo</h2>

[https://job-portal-client-git-main-hemanths-projects-1e25ea55.vercel.app/](https://job-portal-client-git-main-hemanths-projects-1e25ea55.vercel.app/)

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   <h1>Features of the Full Stack Job Portal Website</h1>
    
    <h2>For Job Seekers</h2>
    
    *   **Search and Filter Jobs:** Easily search for job openings using keywords and filters.
    *   **Apply for Jobs:** Submit applications directly from the portal.
    *   **Resume Upload:** Upload and manage resumes on the profile page.
    *   **Secure Authentication:** Robust user authentication system implemented using **Clerk**.
    
    <h2>For Recruiters</h2>
    
    *   **Job Posting:** Create and publish new job openings with detailed descriptions.
    *   **Manage Job Posts:** Edit update or remove published job posts.
    *   **Application Management:** Accept or reject job applications from candidates.
    *   **Access Resumes:** View uploaded resumes of applicants directly from the dashboard.
    
    <h2>Additional Features</h2>
    
    *   **Error Tracking and Performance Monitoring:** Integrated with **Sentry** to monitor errors optimize MongoDB queries and enhance app performance.
    *   **Responsive Design:** Fully responsive user interface for seamless usage on any device.
    *   **Deployment:** Hosted online using **Vercel** ensuring high availability and fast performance.
    
    <p>This combination of features ensures a comprehensive and user-friendly experience for both job seekers and recruiters.</p>
    

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Repository</p>

```
git clone https://github.comHemanthyt/job-portal.git
```

<p>2. Install Backend Dependencies Navigate to the backend directory (root of the project) and install dependencies:</p>

```
npm install
```

<p>3. Install Frontend Dependencies Navigate to the client directory and install dependencies:</p>

```
cd client  npm install
```

<p>4. Set Up Environment Variables Create a .env file in the root directory and add the following variables:</p>

```
 JWT_SECRET   # Mongodb setup MONGODB_URI  # Coudinary setup CLOUDINARY_NAME CLOUDINARY_API_KEY CLOUDINARY_SECRET_KEY  # Clerk  setup CLERK_WEBHOOK_SECRET CLERK_PUBLISHABLE_KEY CLERK_SECRET_KEY
```

<p>5. Start the MongoDB Server Ensure MongoDB is running on your system.</p>

<p>6. Run the Development Servers Open two terminal windows:</p>

```
npm run server
```

<p>7. In the second terminal navigate to the client directory and start the React development server:</p>

```
cd client npm start
```

<p>8. Access the Application Open your browser and visit http://localhost:3000 to view the application.</p>

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   <h1>Technologies Used</h1>
    
    <p>This project is built using the following technologies:</p>
    
    <h2>Frontend</h2>
    
    *   **React:** A JavaScript library for building user interfaces used for creating the interactive UI.
    *   **CSS:** Styling the user interface to ensure a responsive and user-friendly design.
    *   **Clerk:** User authentication system for job seekers providing secure login and registration functionality.
    
    <h2>Backend</h2>
    
    *   **Node.js:** JavaScript runtime environment used for building the server-side logic.
    *   **Express.js:** Web framework for Node.js used to handle routes and server-side operations.
    *   **MongoDB:** NoSQL database for storing job seeker and recruiter data job posts and applications.
    *   **Sentry:** Performance monitoring and error tracking tool to improve application stability and performance.
    
    <h2>Deployment</h2>
    
    *   **Vercel:** Platform for deploying the frontend providing fast and reliable hosting for React applications.
    *   **Cloud Hosting (Optional):** For deploying the backend server (e.g. AWS Heroku Render).
    
    <p>This combination of technologies ensures a seamless and efficient user experience for both job seekers and recruiters.</p>
