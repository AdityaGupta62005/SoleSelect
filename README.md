# SoleSelect - Shoe Booking Platform

A modern, full-featured e-commerce platform for browsing, filtering, and purchasing shoes. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

### 🔐 Authentication System
- **User Registration & Login**: Secure authentication with role-based access
- **Protected Routes**: Authentication required for all main features
- **Admin Dashboard**: Separate admin interface with elevated permissions
- **Session Management**: Persistent login state across browser sessions

### 🛒 Shopping Experience
- **Product Catalog**: Browse extensive shoe collection with detailed information
- **Advanced Filtering**: Filter by brand, size, color, and price range
- **Search Functionality**: Find shoes quickly with intelligent search
- **Shopping Cart**: Add, remove, and modify cart items with size/color selection
- **Wishlist**: Save favorite items for later (coming soon)

### 💳 Checkout & Orders
- **Secure Checkout**: Complete order process with shipping and payment details
- **Order Management**: Track order status and history
- **Order Confirmation**: Detailed confirmation with order tracking
- **Multiple Payment Options**: Credit card processing (mock implementation)

### 👤 User Management
- **User Profiles**: Comprehensive profile management with personal information
- **Order History**: View all past orders with detailed breakdowns
- **Security Settings**: Change passwords and manage account security
- **Notification Preferences**: Customize email and SMS notifications

### 🔧 Admin Features
- **Dashboard Analytics**: Revenue, orders, products, and user statistics
- **Inventory Management**: Add, edit, and remove products
- **Order Processing**: Monitor and update order statuses
- **User Administration**: Manage user accounts and permissions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Context API
- **Icons**: Lucide React
- **Storage**: localStorage (development), ready for database integration
- **Authentication**: Custom implementation (ready for JWT/OAuth)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/soleselect.git
   cd soleselect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Demo Credentials

### Admin Access
- **Email**: admin@gmail.com
- **Password**: admin123

### User Registration
- Register with any valid email and password
- All new registrations default to user role

## 📁 Screenshots

![Screenshot 2025-06-09 181630](https://github.com/user-attachments/assets/2f3023e7-cd9c-424b-aef2-66e88dd2d9ae)
![Screenshot 2025-06-09 181700](https://github.com/user-attachments/assets/152cf321-0cb0-40ec-b8ce-662be02d6bc5)
![Screenshot 2025-06-09 181732](https://github.com/user-attachments/assets/c8f38811-4741-4513-82ea-02ced8e45a24)
![Screenshot 2025-06-09 181751](https://github.com/user-attachments/assets/c6f5a210-c7b6-4f45-95ed-5f46b5a4d549)
![Screenshot 2025-06-09 182021](https://github.com/user-attachments/assets/ae93e3c7-62d5-4678-b2a0-94a9da0350d8)
![Screenshot 2025-06-09 182504](https://github.com/user-attachments/assets/9524747e-02f4-464a-bf29-ddfda5bd8102)
![Screenshot 2025-06-09 182639](https://github.com/user-attachments/assets/7f5cbbb8-2beb-4486-aac5-a18d7e519d05)
![Screenshot 2025-06-09 182716](https://github.com/user-attachments/assets/503170e3-85a2-4c0d-9c53-681d27bc86ce)


## 🎯 Key Components

### Authentication Context
Manages user authentication state, login/logout functionality, and role-based access control.

### Cart Context
Handles shopping cart operations including adding items, updating quantities, and calculating totals.

### Protected Routes
Ensures authentication is required for accessing main application features.

### Admin Dashboard
Comprehensive admin interface with analytics, inventory management, and order processing.

## 🔄 State Management

The application uses React Context API for global state management:

- **AuthContext**: User authentication and session management
- **CartContext**: Shopping cart state and operations
- **localStorage**: Persistent data storage for cart and orders

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Mode Support**: Built-in theme switching capability
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error states and user feedback
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔮 Future Enhancements

### Planned Features
- [ ] Real-time notifications
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search with AI
- [ ] Inventory tracking
- [ ] Multiple payment gateways
- [ ] Social authentication
- [ ] Email notifications
- [ ] Mobile app (React Native)

### Backend Integration
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] RESTful API development
- [ ] JWT authentication
- [ ] File upload for product images
- [ ] Payment processing (Stripe/PayPal)
- [ ] Email service integration
- [ ] Analytics and reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful component and variable names
- Write self-documenting code with comments where necessary

### Component Structure
- Keep components small and focused
- Use custom hooks for complex logic
- Implement proper error boundaries
- Follow React best practices

### Testing (Coming Soon)
- Unit tests with Jest and React Testing Library
- Integration tests for user flows
- E2E tests with Playwright

## 🐛 Known Issues

- Mock data is used for demonstration purposes
- Payment processing is simulated
- Email notifications are not implemented
- Real-time features require backend integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@soleselect.com or create an issue in the GitHub repository.

---

**SoleSelect** - Step Into Style 👟
