# AGROFIX - Bulk Agricultural Product Ordering System

![AGROFIX Banner](/public/agrofix-banner.png)

## [🔗 Live Demo](https://agrofix.vercel.app)

## Overview

AGROFIX is a full-stack web application designed for bulk ordering of agricultural products like fruits and vegetables. The platform offers a streamlined experience for users to browse products, place orders, and track deliveries, while providing administrators with powerful tools to manage inventory and process orders efficiently.

## Features

### For Customers
- **Product Catalog**: Browse a comprehensive list of fresh fruits and vegetables
- **Bulk Ordering**: Place orders with specified quantities and delivery details
- **Order Tracking**: Monitor the status of your orders (Pending, In Progress, Delivered)
- **Responsive Design**: Seamless experience across desktop and mobile devices

### For Administrators
- **Secure Admin Dashboard**: Protected access to management features
- **Inventory Management**: Add, edit, and remove products from the catalog
- **Order Processing**: View all customer orders and update their status
- **User-friendly Interface**: Intuitive design for efficient administration

## Tech Stack

### Frontend
- **Next.js**: React framework for server-rendered applications
- **TailwindCSS**: Utility-first CSS framework for custom designs
- **React Context API**: For state management across components

### Backend
- **Express.js**: Node.js web application framework
- **PostgreSQL**: Relational database for data persistence
- **Node.js**: JavaScript runtime for server-side logic

### Deployment
- **Vercel**: Frontend hosting and serverless functions
- **Neon**: PostgreSQL database hosting

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- PostgreSQL (local or hosted)

### Frontend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/agrofix.git
   cd agrofix
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables
   Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup
1. Navigate to the backend directory
   ```bash
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables
   Create a `.env` file with:
   ```
   PORT=5000
   DATABASE_URL=postgresql://username:password@localhost:5432/agrofix
   ```

4. Start the server
   ```bash
   npm start
   # or
   yarn start
   ```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
PORT=5000
DATABASE_URL=postgresql://username:password@hostname:port/database
```

## Deployment

### Frontend
The frontend is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the environment variables
4. Deploy

### Backend
The backend is deployed on Render. To deploy your own instance:

1. Push your code to a GitHub repository
2. Connect your repository to Render
3. Create a new Web Service
4. Configure the environment variables
5. Deploy

## Future Enhancements
- User authentication and registration
- Payment gateway integration
- Order notifications via email/SMS
- Advanced product filtering and search
- Analytics dashboard for admins
- Mobile app version


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel](https://vercel.com/)
- [Neon](https://neon.tech/)

---

Made with ❤️ by Krushna D
