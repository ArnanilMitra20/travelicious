# Travelicious

Travelicious is an Airbnb-type travel website that allows users to discover and list vacation rentals effortlessly. Built using modern web technologies, this project aims to provide a seamless user experience for both travelers and hosts.

## ✨ Features

- 🏡 List and manage properties
- 🔍 Search and filter stays(in progress)
- 📝 User authentication and profiles
- ⭐ Reviews and ratings

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript,Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB,Cloudinary(images)
- **Authentication:** Passport
- **Hosting:** Render

## 🚀 Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Run Locally

1. **Clone the repository**
   ```sh
   git clone https://github.com/ArnanilMitra20/travelicious.git
   cd travelicious
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add required API keys and database connection strings.

4. **Start the development server**
   ```sh
   npm start
   ```

5. **Visit the app**
   Open [travelicious](https://travelicious.onrender.com) in your browser.

## 📌 Roadmap

- [ ] Implement wishlist feature
- [ ] Enhance UI/UX design
- [ ] Add social login options
- [ ] Deploy on cloud services

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login an existing user
- `POST /api/auth/logout` - Logout the current user

### Listings
- `GET /api/listings` - Fetch all property listings
- `GET /api/listings/:id` - Fetch a specific property listing
- `POST /api/listings` - Create a new property listing
- `PUT /api/listings/:id` - Update a property listing
- `DELETE /api/listings/:id` - Delete a property listing

### Reviews
- `POST /api/reviews` - Add a review for a property
- `GET /api/reviews/:listingId` - Get all reviews for a property

## 🤝 Contributing

Contributions are welcome! Follow these steps:
1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📞 Contact

For any queries, reach out to:
- **GitHub:** [ArnanilMitra20](https://github.com/ArnanilMitra20)
- **Email:** arnanilmitra06@gmail.com
