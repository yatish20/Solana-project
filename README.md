# Solana Wallet Integration Project

## Project Overview
This project is a **Solana Wallet Integration App** that allows users to connect their Solana wallet, view their balance, create and mint tokens, and track transaction history. The UI is designed with an engaging and modern experience using animations and a unique color palette.

## Features
- **Wallet Integration**: Users can connect/disconnect their Solana wallet (Phantom, Solflare, etc.).
- **Authentication**: Wallet authentication with a user-defined password before connecting.
- **Balance Display**: Shows the user’s current Solana balance.
- **Token Creation & Minting**: Users can create and mint custom tokens using the SPL Token Program.
- **Transaction History**: Displays past transactions.
- **Signup/Login System**: Users must sign up and log in before accessing the dashboard.
- **Modern UI**: Designed with animations, interactive elements, and a clean interface.

## Tech Stack
### Frontend:
- React.js
- CSS (Custom Styling, Animations, and Layouts)

### Backend:
- Node.js with Express.js
- Solana Web3.js (for wallet and transaction interactions)
- MySQL (for user authentication and transaction history storage)

## Project Structure
```
project-folder/
│── backend/              # Express.js backend
│── frontend/             # React frontend
│   ├── components/       # Reusable React components
│   ├── pages/            # Page views (Dashboard, Token Creator, Signup, etc.)
│   ├── context/          # WalletContext for managing wallet state
│   ├── styles/           # Separate CSS files for each component
│── database/             # SQL database scripts
│── README.md             # Project documentation
```

## Installation

### Prerequisites:
- Node.js and npm installed
- MySQL installed and database configured
- Solana CLI installed

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-url.git
   ```
2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   cd frontend && npm install
   cd ../backend && npm install
   ```
4. Configure environment variables in `.env` file for backend:
   ```sh
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   SOLANA_NETWORK=devnet
   ```
5. Start the backend server:
   ```sh
   cd backend
   node server.js
   ```
6. Start the frontend server:
   ```sh
   cd frontend
   npm start
   ```

## Usage
1. **Signup & Login**: Users land on the signup page and must log in to access the dashboard.
2. **Connect Wallet**: Authenticate with a password and connect your Solana wallet.
3. **View Balance**: Your Solana balance is displayed on the dashboard.
4. **Create & Mint Tokens**: Use the Token Creator section to generate SPL tokens.
5. **View Transactions**: See past transaction history.

## Future Improvements
- Implement multi-factor authentication for wallet connections.
- Improve the UI with additional animations and effects.
- Expand the token management features.

## Contributors
- Yatish shah - Developer

## License
This project is licensed under the MIT License.

