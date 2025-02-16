📚 Skill Swap - MERN E-learning Platform
A full-stack MERN-based e-learning platform where users can learn, teach, and swap skills. 
The project includes user authentication, course creation, payments, user , admin, and an superadmin dashboard.

![Screenshot 2024-10-24 130918](https://github.com/user-attachments/assets/e2649e3e-2fac-4fae-a974-d8c2aeff8f1c)


🚀 Features
✅ User Authentication (Signup, Login, Email Verification via OTP)
✅ Skill Swap Mechanism (Users can barter skills)
✅ Educators Can Create Courses (With video lectures)
✅ Payment Integration (Razorpay for paid courses)
✅ Super Admin Panel (Full access & control)
✅ Responsive UI (Built with React & Tailwind CSS)

🛠️ Tech Stack
Technology	Description
Frontend	React.js, Vite, React Router, Tailwind CSS
Backend	Node.js, Express.js, MongoDB, JWT
Authentication	JWT, Bcrypt, Nodemailer (OTP verification)
Payments	Razorpay Integration
Deployment	Vercel (Frontend), Render (Backend)
📂 Project Structure
/Skill-Swap
├── /frontend     # React Frontend (Vite)
│   ├── src/      # Components, Pages, Assets
│   ├── public/   # Static Assets
│   └── .env      # API Configuration
├── /server       # Node.js Backend (Express.js)
│   ├── models/   # MongoDB Schemas
│   ├── routes/   # API Endpoints
│   ├── controllers/ # Business Logic
│   ├── config/   # DB & Environment Setup
│   └── index.js  # Server Entry Point
└── README.md     # Project Documentation
🛠️ Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/your-username/Skill-Swap.git
cd Skill-Swap
2️⃣ Install Dependencies

npm install
cd frontend && npm install
cd ../server && npm install
3️⃣ Configure Environment Variables
Create a .env file inside /server and add:

MONGO_URI=your-mongodb-url
JWT_SECRET=your-secret-key
RAZORPAY_KEY=your-razorpay-key
Create another .env file inside /frontend:

VITE_API_URL=https://your-backend-url.com
4️⃣ Start the Development Server
Run both frontend and backend together:

npm run Alok
Or start them separately:

cd frontend && npm run dev
cd ../server && npm run dev
🚀 Deployment
🔹 Frontend on Vercel

cd frontend
vercel
🔹 Backend on Render
Push your code to GitHub
Go to Render and create a New Web Service
Select the repository, set the root directory to /server, and deploy

📜 API Endpoints
Method	Route	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
GET	/api/courses	Get all courses
POST	/api/courses	Create a new course
POST	/api/payment	Process payment
(More endpoints in /server/routes folder)

📸 Screenshots
📌 ![Screenshot 2024-10-24 131227](https://github.com/user-attachments/assets/9b4dd1a0-0dff-4dc8-8733-b428a20f247f)


🙌 Contributors
👤 Alok Kumar (@Alokkumarkaran)

📜 License
This project is open-source and available under the MIT License.

🔥 If you like this project, give it a ⭐ on GitHub! 🔥
