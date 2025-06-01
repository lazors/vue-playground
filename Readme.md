# Vue.js Playground POC

A comprehensive Vue.js playground project featuring modern development practices, multiple views, dynamic components, and end-to-end testing capabilities.

## 🚀 Features

- **Vue 3** with Composition API
- **TypeScript** support
- **Vue Router** for navigation
- **Pinia** state management
- **Vite** for fast development and building
- **Playwright** for end-to-end testing
- **Dynamic form validation** and reactive components
- **Comprehensive test locators** for automated testing

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lazors/vue-playground.git
cd vue-playground
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- Vue 3 and related packages
- TypeScript and build tools
- Playwright for testing
- Development dependencies

### 3. Install Playwright Browsers (Optional - for testing)

```bash
npx playwright install --with-deps
```

## 🚀 Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at:

- **Local**: http://localhost:5173
- If port 5173 is busy, Vite will automatically use the next available port (e.g., 5174)

### Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Run Tests

Execute Playwright end-to-end tests:

```bash
npm run test
```

## 📱 Application Structure

The playground includes four main sections accessible via navigation tabs:

### 1. **Personal Data** (`/`)

- Personal information form
- Search functionality
- Form fields: First Name, Email, Country

### 2. **Create Consultation** (`/consultation`)

- Consultation creation form
- Industry selection
- Submit functionality

### 3. **Settings** (`/settings`)

- Theme selection (Light/Dark)
- Notifications toggle
- Save settings functionality
- Disabled button for testing

### 4. **Feedback** (`/feedback`)

- Dynamic feedback form
- Rating system (1-5 stars)
- Real-time validation
- Conditional warning messages

## 🧪 Testing Features

All interactive elements include `data-testid` attributes for reliable automated testing:

- `first-name` - Personal data first name input
- `email` - Email input field
- `country-select` - Country selection dropdown
- `search-user` - User search input
- `industry-select` - Industry selection
- `submit-consultation` - Consultation submit button
- `theme-select` - Theme selection dropdown
- `notifications-checkbox` - Notifications toggle
- `save-settings` - Settings save button
- `disabled-button` - Disabled state testing
- `feedback-textarea` - Feedback text input
- `rating-select` - Rating dropdown
- `hidden-warning` - Dynamic warning element
- `submit-feedback` - Feedback submit button

## 📁 Project Structure

```
vue-playground/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── NavigationTabs.vue
│   │   ├── PersonalDataForm.vue
│   │   ├── ConsultationForm.vue
│   │   └── SearchBar.vue
│   ├── views/              # Page components
│   │   ├── Home.vue
│   │   ├── Consultation.vue
│   │   ├── Settings.vue
│   │   └── Feedback.vue
│   ├── router/             # Vue Router configuration
│   │   └── index.ts
│   ├── store/              # Pinia state management
│   │   └── userStore.ts
│   ├── main.ts             # Application entry point
│   ├── App.vue             # Root component
│   └── vite-env.d.ts       # TypeScript declarations
├── playwright/
│   └── tests/              # End-to-end tests
│       └── user.spec.ts
├── data/
│   └── users.json          # Sample data
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── playwright.config.ts    # Playwright configuration
└── index.html              # HTML entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run Playwright tests

## 🌟 Key Technologies

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Next-generation frontend tooling
- **Vue Router**: Official router for Vue.js
- **Pinia**: Intuitive state management
- **Playwright**: Reliable end-to-end testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Troubleshooting

### Common Issues

**Port already in use**: If you see a port conflict, Vite will automatically use the next available port.

**TypeScript errors**: Make sure all dependencies are installed with `npm install`.

**Playwright tests failing**: Ensure browsers are installed with `npx playwright install --with-deps`.

### Getting Help

If you encounter any issues:

1. Check that Node.js version is 16.0 or higher
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Restart the development server

---

**Happy coding!** 🎉
