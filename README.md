# NewsHub 📰

A modern, responsive news aggregator platform built with Next.js and styled with Tailwind CSS. NewsHub provides a clean and intuitive interface to access various leading news sources in one place.

## ✨ Features

- 🎨 Modern UI with soft pastel color theme
- 🔍 Real-time search functionality with regex support
- 📱 Fully responsive design (mobile, tablet, and desktop)
- 🎯 Category-based organization
- 🔄 Smooth animations and transitions
- 📰 Curated list of reliable news sources
- ⚡ Fast and optimized performance

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- React Hooks - For state management

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/newshub.git
cd newshub
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📋 Available News Sources

The platform currently aggregates news from the following sources:

- Financial Times - Global business and financial news
- Business Insider - Business news and analysis
- Business Today - Indian business news and insights
- Bloomberg - Global financial news and market data
- Economic Times - Indian economic and business news
- Times of India - General news and current affairs

## 🎨 Color Scheme

The project uses a soft pastel color palette:

- Primary: Pink and Purple gradients
- Background: Light pink (#FDF2F8)
- Cards: White with purple accents
- Text: Dark gray for readability
- Accents: Soft purple and pink shades

## 🔧 Customization

### Adding New News Sources

To add more news sources, modify the `newspapers` array in the main component:

```javascript
const newspapers = [
  {
    name: "New Source Name",
    url: "https://source-url.com",
    description: "Source description",
    category: "Category",
  },
  // ... other sources
];
```

### Modifying Styles

The project uses Tailwind CSS for styling. You can modify the design by:

1. Adjusting classes in the component files
2. Customizing the `tailwind.config.js` file
3. Adding new styles in your CSS files

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 💖 Acknowledgments

Made with love by [Rohit Purkait](https://github.com/codeswithroh)
