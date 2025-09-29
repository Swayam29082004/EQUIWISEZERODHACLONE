# 📈 EquiWise – Zerodha Clone

EquiWise is a **full-stack trading platform clone** inspired by **Zerodha**.  
It provides a **modern stock trading experience** with user authentication, order management, holdings, positions, and an intuitive dashboard interface.

---

## 🌍 Live Deployment

- 🔹 **Landing Page (Frontend):** [EquiWise Frontend](https://equiwise-frontend.onrender.com/equiwise-frontend)  
- 🔹 **Trading Dashboard:** [EquiWise Dashboard](https://equiwise-dashboard.onrender.com)

---

## 🚀 Features

### 🔹 Frontend (Landing Page)
- Beautiful **marketing website** built with React.
- Pages: Home, About, Pricing, Products, Support, Signup.
- Mobile-friendly responsive design.
- Integrated with stock-trading theme assets.

### 🔹 Dashboard (Trading UI)
- Secure **React dashboard** for logged-in users.
- Holdings, Orders, Positions, Funds, and Watchlist.
- Graphs & Charts (Doughnut, Vertical Graph).
- Action windows for buying/selling stocks.
- Context-based global state management.

### 🔹 Backend (API Server)
- **Node.js + Express.js** backend.
- Authentication with **JWT + middleware**.
- REST API routes for Users, Orders, Holdings, and Positions.
- MongoDB models & schemas for structured data.
- Centralized token handling and validation.

---

## 🛠️ Tech Stack

- **Frontend (Landing Page):** React, CSS, Font Awesome  
- **Dashboard:** React, Chart.js, Context API  
- **Backend:** Node.js, Express.js, MongoDB, JWT  
- **Other Tools:** Git, REST APIs, dotenv  

---

## 📂 Project Structure

```
├── README.md                # Main documentation
├── backend                  # Node.js API server
│   ├── Controllers/         # Auth & business logic
│   ├── Middlewares/         # JWT Auth middleware
│   ├── Routes/              # API endpoints
│   ├── model/               # Mongoose models
│   ├── schemas/             # Data schemas
│   ├── util/                # Utility functions
│   └── index.js             # Server entry point
├── dashboard                # React-based trading dashboard
│   ├── src/components/      # UI Components (Holdings, Orders, Graphs, etc.)
│   └── build/               # Production build
└── frontend                 # React-based landing page
    ├── src/landing_page/    # Pages (Home, Pricing, About, Signup, etc.)
    └── public/              # Static assets & images
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Swayam29082004/EQUIWISEZERODHACLONE.git
cd EQUIWISEZERODHACLONE
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
npm run dev   # or node index.js
```

### 3️⃣ Setup Dashboard
```bash
cd dashboard
npm install
npm start
```

### 4️⃣ Setup Frontend (Landing Page)
```bash
cd frontend
npm install
npm start
```

---

## 🌐 Usage

- Visit **Frontend** → Landing page (`http://localhost:3000`)  
- Login/Signup, then access **Dashboard** → Trading UI (`http://localhost:3001`)  
- Backend runs on **API server** (`http://localhost:5000`)  

---

## 📡 Deployment (Render)

The project is deployed on **Render**:

- **Frontend:** [https://equiwise-frontend.onrender.com/equiwise-frontend](https://equiwise-frontend.onrender.com/equiwise-frontend)  
- **Dashboard:** [https://equiwise-dashboard.onrender.com](https://equiwise-dashboard.onrender.com)  

You can manually deploy via Render Dashboard:  
1. Connect GitHub repo.  
2. Select service (`Static Site` for React apps, `Web Service` for backend).  
3. Provide build command (`npm run build`) and publish directory (`build`).  
4. Deploy 🚀  

---

## 📝 Future Improvements
- Live market data integration (e.g., NSE/BSE APIs).  
- Payment gateway for fund deposits.  
- Advanced charting features.  
- Notifications & alerts system.  
- Admin panel for user & order management.  

---

## 👨‍💻 Author
**Swayam Chaudhary**  
- GitHub: [Swayam29082004](https://github.com/Swayam29082004)  
- LinkedIn: [swayam-chaudhary-161075286](https://linkedin.com/in/swayam-chaudhary-161075286)  
- Email: swayamchaudhari123@gmail.com  

---
