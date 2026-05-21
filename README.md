# ArtVerse 🎨✨
### Full-Stack Digital Art Sharing Platform

ArtVerse is a modern full-stack social platform where artists can upload, explore, and showcase digital artwork with a sleek and responsive interface.  
The platform enables users to create accounts, upload artworks, browse creations from other artists, and manage their profiles in a visually immersive environment.

Built using a scalable MERN + Next.js architecture, this project demonstrates real-world frontend, backend, authentication, database, and cloud media integration.

---

## 🔹 Key Features

✨ User Authentication (Login/Register)  
🎨 Artwork Upload System  
🖼️ Live Artwork Preview  
☁️ Cloudinary Image Hosting  
🔍 Explore & Discover Artworks  
👤 User-Specific Profiles  
📱 Responsive Sidebar Dashboard  
🌗 Dark Themed Modern UI  
⚡ Real-Time Frontend + Backend Integration  
🔐 Protected Routes & Authentication  
🚀 GitHub Version Control & Deployment Ready  

---

## 🧱 Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Axios
- Lucide React
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary SDK
- bcryptjs
- dotenv
- cors

---

## 📁 Complete Project Structure

```bash
AV-ArtVerse/
│
├── client/
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   │
│   └── src/
│       │
│       ├── app/
│       │   ├── globals.css
│       │   ├── layout.jsx
│       │   ├── page.jsx
│       │   │
│       │   ├── home/
│       │   │   └── page.jsx
│       │   │
│       │   ├── auth/
│       │   │   ├── login/
│       │   │   │   └── page.jsx
│       │   │   └── register/
│       │   │       └── page.jsx
│       │   │
│       │   ├── explore/
│       │   │   └── page.jsx
│       │   │
│       │   ├── upload/
│       │   │   └── page.jsx
│       │   │
│       │   ├── premium/
│       │   │   └── page.jsx
│       │   │
│       │   ├── profile/
│       │   │   ├── page.jsx
│       │   │   ├── settings/
│       │   │   │   └── page.jsx
│       │   │   │
│       │   │   └── [username]/
│       │   │       └── page.jsx
│       │   │
│       │   ├── artwork/
│       │   │   └── [id]/
│       │   │       └── page.jsx
│       │   │
│       │   ├── dashboard/
│       │   │   ├── analytics/
│       │   │   │   └── page.jsx
│       │   │   ├── earnings/
│       │   │   │   └── page.jsx
│       │   │   └── uploads/
│       │   │       └── page.jsx
│       │   │
│       │   └── settings/
│       │       └── page.js
│       │
│       ├── components/
│       │   │
│       │   ├── auth/
│       │   │   ├── LoginForm.jsx
│       │   │   ├── RegisterForm.jsx
│       │   │   └── ProtectedRoute.jsx
│       │   │
│       │   ├── dashboard/
│       │   │   ├── AnalyticsChart.jsx
│       │   │   ├── RevenueCard.jsx
│       │   │   └── UploadManager.jsx
│       │   │
│       │   ├── explore/
│       │   │   ├── ArtworkModal.jsx
│       │   │   ├── CategoryFilter.jsx
│       │   │   ├── ExploreGrid.jsx
│       │   │   └── SearchBar.jsx
│       │   │
│       │   ├── feed/
│       │   │   └── RealFeed.jsx
│       │   │
│       │   ├── home/
│       │   │   ├── ArtCard.jsx
│       │   │   ├── Feed.jsx
│       │   │   ├── HeroSection.jsx
│       │   │   └── TrendingArt.jsx
│       │   │
│       │   ├── layout/
│       │   │   └── AppLayout.jsx
│       │   │
│       │   ├── navbar/
│       │   │   ├── MobileNav.jsx
│       │   │   ├── Navbar.jsx
│       │   │   ├── NotificationDropdown.jsx
│       │   │   ├── Sidebar.jsx
│       │   │   └── Topbar.jsx
│       │   │
│       │   ├── premium/
│       │   │   ├── PremiumCard.jsx
│       │   │   ├── PremiumPlans.jsx
│       │   │   ├── PurchaseButton.jsx
│       │   │   └── SubscriptionPlans.jsx
│       │   │
│       │   ├── profile/
│       │   │   ├── Followers.jsx
│       │   │   ├── PortfolioGrid.jsx
│       │   │   ├── ProfileHeader.jsx
│       │   │   └── ProfileStats.jsx
│       │   │
│       │   ├── settings/
│       │   │   └── SettingsPanel.jsx
│       │   │
│       │   ├── ui/
│       │   │   ├── Button.jsx
│       │   │   ├── Input.jsx
│       │   │   ├── Loader.jsx
│       │   │   ├── Modal.jsx
│       │   │   └── ThemeToggle.jsx
│       │   │
│       │   └── upload/
│       │       ├── ImagePreview.jsx
│       │       ├── TagSelector.jsx
│       │       └── UploadForm.jsx
│       │
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   ├── NotificationContext.jsx
│       │   └── ThemeContext.jsx
│       │
│       ├── data/
│       │   ├── categories.js
│       │   ├── dummyPosts.js
│       │   └── trending.js
│       │
│       ├── hooks/
│       │   ├── useAnalytics.js
│       │   ├── useAuth.js
│       │   ├── useTheme.js
│       │   └── useUpload.js
│       │
│       ├── lib/
│       │   ├── api.js
│       │   ├── auth.js
│       │   ├── axios.js
│       │   ├── cloudinary.js
│       │   └── helpers.js
│       │
│       ├── services/
│       │   ├── authService.js
│       │   ├── paymentService.js
│       │   ├── postService.js
│       │   └── userService.js
│       │
│       ├── store/
│       │   ├── authStore.js
│       │   ├── postStore.js
│       │   └── themeStore.js
│       │
│       └── styles/
│           ├── animations.css
│           ├── scrollbar.css
│           └── themes.css
│
├── server/
│   │
│   ├── package.json
│   ├── package-lock.json
│   │
│   ├── uploads/
│   │   └── uploaded_images
│   │
│   └── src/
│       │
│       ├── server.js
│       │
│       ├── config/
│       │   ├── cloudinary.js
│       │   ├── db.js
│       │   └── payment.js
│       │
│       ├── controllers/
│       │   ├── analyticsController.js
│       │   ├── artworkController.js
│       │   ├── authController.js
│       │   ├── commentController.js
│       │   ├── paymentController.js
│       │   ├── postController.js
│       │   └── userController.js
│       │
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   ├── errorMiddleware.js
│       │   ├── premiumMiddleware.js
│       │   └── uploadMiddleware.js
│       │
│       ├── models/
│       │   ├── Analytics.js
│       │   ├── Artwork.js
│       │   ├── Comment.js
│       │   ├── Like.js
│       │   ├── Post.js
│       │   ├── Purchase.js
│       │   └── User.js
│       │
│       ├── routes/
│       │   ├── analyticsRoutes.js
│       │   ├── artworkRoutes.js
│       │   ├── authRoutes.js
│       │   ├── commentRoutes.js
│       │   ├── paymentRoutes.js
│       │   ├── postRoutes.js
│       │   └── userRoutes.js
│       │
│       └── utils/
│           ├── analyticsHelper.js
│           ├── generateToken.js
│           └── imageUploader.js
│
├── docs/
│   ├── api-documentation.md
│   ├── database-schema.md
│   ├── roadmap.md
│   └── ui-guidelines.md
│
├── .gitignore
├── README.md
└── package.json
```

---

## 📸 Screenshots

### 🏠 Home Page

<img width="1881" height="909" alt="Screenshot 2026-05-21 234551" src="https://github.com/user-attachments/assets/2615ff36-edcf-4d1a-900f-ebb88f6ef7a9" />

### 🔍 Explore Page

<img width="1872" height="905" alt="Screenshot 2026-05-21 234753" src="https://github.com/user-attachments/assets/9cb02288-8b86-4550-88a2-4f225a84b88f" />

### 🎨 Upload Artwork

<img width="1866" height="900" alt="Screenshot 2026-05-21 235041" src="https://github.com/user-attachments/assets/0a052a92-8507-4328-adb0-e416af85c03d" />

### 👤 Profile Page

<img width="1876" height="916" alt="Screenshot 2026-05-21 235115" src="https://github.com/user-attachments/assets/e3df3ec1-91a1-4edd-87d7-b90545e9f837" />

> Place your screenshots inside the `/docs` folder using the same names.

---

## 🚀 Demo Video

https://youtu.be/PkaW_XzwK3Q

---

## 🧩 System Architecture

```txt
User Authentication
        ↓
JWT Authentication
        ↓
Artwork Upload Form
        ↓
Multer Middleware
        ↓
Cloudinary Upload
        ↓
MongoDB Database
        ↓
REST API (Express.js)
        ↓
Next.js Frontend
        ↓
Artwork Feed & User Profiles
```

---

## ⚙️ How It Works

1. User creates an account or logs in  
2. JWT verifies authentication  
3. User uploads artwork with details  
4. Multer processes image upload  
5. Cloudinary stores artwork images  
6. MongoDB stores metadata & user data  
7. Explore page dynamically fetches artworks  
8. Profile page displays user-specific posts  
9. Frontend updates instantly using APIs  

---

## 🛠️ Installation & Setup

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Create `.env` file inside `server/`

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## 🌍 Local URLs

### Frontend

```txt
http://localhost:3000
```

### Backend

```txt
http://localhost:5000
```

---

## 🚧 Future Enhancements

💬 Real-Time Messaging  
🔔 Notifications  
🤖 AI Art Generation  
💳 Payment Integration  
📁 Saved Collections  
❤️ Likes & Comments  
📈 Trending Algorithm  
🌍 Public Artist Portfolios  

---

## 🎓 What I Learned

- Full-stack MERN + Next.js development
- Authentication using JWT
- MongoDB integration
- Cloudinary image handling
- REST API architecture
- Responsive UI/UX development
- Git & GitHub workflow
- Frontend–backend integration
- Real-world debugging & deployment preparation

---

## 👨‍💻 Developed By

### Samarth Kasalkar  
TY BSc Computer Science  

GitHub:  
https://github.com/samarth-kasalkar-2005
