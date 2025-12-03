# AXE CODE Platform

A modern, comprehensive learning and development platform for software engineers. **AXE CODE** empowers developers to master technical skills, collaborate on real-world projects, and build professional networks through live learning sessions, coding challenges, and community engagement.

**Status:** MVP (Minimum Viable Product) - Active Development  
**Built with:** React 18+ • Vite • JavaScript • CSS3  
**License:** MIT

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Data Models & Schema](#data-models--schema)
- [Available Pages](#available-pages)
- [Components](#components)
- [Development](#development)
- [Contributing](#contributing)

---

## Features

### Core Platform Features

- ** Live Learning Sessions** - Interactive real-time courses with expert instructors
- ** Coding Challenges** - Problem-solving exercises to enhance skills
- ** Tech Events** - Stay updated with industry trends and networking opportunities
- ** Blogging Platform** - Share knowledge, experiences, and tech insights
- ** Community Collaboration** - Local tech communities and software leagues
- ** Progress Tracking** - Monitor learning achievements and skill development
- ** Gamification** - Earn badges, points, and achievements
- ** Career Opportunities** - Job listings and professional networking

### MVP Highlights

- Fully responsive design (mobile, tablet, desktop)
- Modern, clean UI with smooth animations
- Structured data models with JSON schema validation
- Component-driven architecture
- Global styling system with CSS variables

---

## Quick Start

### Prerequisites

- **Node.js** v16+
- **npm** v7+

### Installation (Windows)

1. **Install dependencies**

   ```powershell
   npm install
   ```

2. **Start development server**

   ```powershell
   npm run dev
   ```

   Opens automatically at `http://localhost:5173`

3. **Build for production**

   ```powershell
   npm run build
   ```

4. **Preview production build**
   ```powershell
   npm run preview
   ```

---

## Project Structure

```
my-react-app/
├── public/                          # Static assets
│   └── ...
├── src/
│   ├── main.jsx                     # Application entry point
│   ├── App.jsx                      # Root component & routing
│   ├── index.css                    # Global styles & CSS variables
│   ├── routes.jsx                   # Route definitions
│   │
│   ├── assets/                      # Images, fonts, media
│   │
│   ├── model/                       # Data models & schemas
│   │   ├── schema.ts                # TypeScript type definitions
│   │   └── data/
│   │       ├── schema.json          # JSON Schema for validation
│   │       ├── homeData.json        # Home page content
│   │       ├── career.json          # Career/jobs listings
│   │       ├── News.json            # News & announcements
│   │       ├── newFeature.json      # Upcoming features
│   │       ├── eduContent.json      # Educational content
│   │       ├── blogsData.json       # Blogging features
│   │       ├── events.json          # Tech events info
│   │       ├── cartsData.json       # Home section cards
│   │       ├── cartsData2.json      # Colored cards section
│   │       ├── nav.json             # Navigation menu
│   │       ├── datafooter.json      # Footer data
│   │       ├── conversationData.json # Chat/conversations
│   │       ├── MVP.json             # MVP features list
│   │       └── ... (other data files)
│   │
│   ├── veiw/                        # UI Layer (intentional spelling)
│   │   ├── components/              # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Nav.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── GroupOfCarts.jsx
│   │   │   ├── VidSection.jsx
│   │   │   ├── ContentRenderer.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── ...
│   │   └── pages/                   # Page components
│   │       ├── Home.jsx
│   │       ├── CareerPage.jsx
│   │       ├── NewsPage.jsx
│   │       └── NextFeaturesPage.jsx
│   │
│   └── controller/                  # Business logic & utilities
│
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
└── README.md                        # This file
```

---

## Architecture

### MVC-Like Pattern

**Model** (`src/model/`)

- Contains data structures and TypeScript interfaces
- `schema.ts` - Type definitions for type safety
- `data/` folder - JSON data files for all pages
- `schema.json` - JSON Schema for data validation

**View** (`src/veiw/`)

- React components that render the UI
- **components/** - Reusable UI components
- **pages/** - Page-level components (route destinations)

**Controller** (`src/controller/`)

- Application logic and data loading
- API integration (future)
- Utility functions and helpers

### Data Flow

```
Data (JSON/API) → Model (Schema) → Controller (Logic) → View (React Components)
```

---

## Data Models & Schema

All data structures are defined in `src/model/data/schema.json` using JSON Schema format.

### Core Models

#### HomeData

```json
{
  "headline": "string",
  "paragraph": "string",
  "videoSource": "url",
  "thumbnail": "url"
}
```

#### CareerPage

```json
{
  "headline": "string",
  "job_listings": [JobListing],
  "cta_section": CareerCTA
}
```

#### NewsPage

```json
{
  "headline": "string",
  "news_list": [NewsItem]
}
```

#### NextFeaturesPage

```json
{
  "headline": "string",
  "features_list": [FeatureItem]
}
```

For complete schema documentation, see `src/model/data/schema.json`

---

## Available Pages

| Page         | Route       | File                   | Purpose                                   |
| ------------ | ----------- | ---------------------- | ----------------------------------------- |
| **Home**     | `/`         | `Home.jsx`             | Landing page with hero section & features |
| **Career**   | `/career`   | `CareerPage.jsx`       | Job listings and career opportunities     |
| **News**     | `/news`     | `NewsPage.jsx`         | Latest announcements and updates          |
| **Features** | `/features` | `NextFeaturesPage.jsx` | Upcoming platform features                |

---

## Key Components

### Layout Components

- **Header** - Fixed navigation with logo and menu
- **Nav** - Navigation menu with dropdown support
- **Footer** - Footer with links and social media
- **Layout** - Main page wrapper

### Content Components

- **HeroSection** - Large hero banner with CTA
- **Cart** - Individual card/box component
- **GroupOfCarts** - Grid layout for multiple cards
- **VidSection** - Video player section
- **ContentRenderer** - Dynamic content from JSON

### Feature Components

- **Donate** - Donation/support section
- **ScrollToTop** - Auto-scroll on route change
- **Toggle** - Mobile menu toggle
- **ButtonSlider** - Slider/carousel buttons

---

## Styling

### CSS System

- **Global styles:** `src/index.css`
- **CSS Variables:** Define colors, fonts, and spacing
- **Responsive design:** Mobile-first approach
- **Animations:** Smooth transitions and hover effects

### Key CSS Variables

```css
:root {
  --main-bg-color: #f0eee6;
  --white: rgba(255, 255, 255, 0.87);
  /* ... more variables */
}
```

---

## Development

### Code Style

- Follow existing naming conventions
- Use semantic HTML
- Write descriptive component names
- Keep components single-responsibility

### Component Structure

```jsx
// Example component
import React from "react";

const MyComponent = ({ data }) => {
  return <div className="my-component">{/* JSX content */}</div>;
};

export default MyComponent;
```

### Adding New Pages

1. Create component in `src/veiw/pages/`
2. Add JSON data file in `src/model/data/`
3. Update `src/routes.jsx`
4. Add schema definition in `src/model/data/schema.json`

### Adding New Data

1. Create JSON file in `src/model/data/`
2. Define TypeScript interface in `src/model/schema.ts`
3. Add JSON Schema definition in `src/model/data/schema.json`
4. Import and use in components

---

## Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
```

---

## Contributing

### Getting Started

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Guidelines

- Follow the existing code style and folder structure
- Add documentation for new features
- Update schema files when adding new data
- Test changes in different screen sizes
- Keep commits atomic and descriptive

### File Naming

- **Components:** PascalCase (e.g., `MyComponent.jsx`)
- **Data files:** camelCase (e.g., `homeData.json`)
- **Utilities:** camelCase (e.g., `helpers.js`)

---

## Troubleshooting

### Port Already in Use

```powershell
# Kill process on port 5173 and restart
npm run dev
```

### Module Not Found

- Ensure imports use correct relative paths
- Check file names match exactly (case-sensitive)
- Clear node_modules and reinstall if needed

### CSS Not Applying

- Check if CSS class is spelled correctly
- Verify CSS file is imported
- Clear browser cache and rebuild

---

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JSON Schema Guide](https://json-schema.org)
- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Support & Contact

For questions or support:

- Create an issue on GitHub
- Check existing documentation
- Review schema files for data structure

---

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## Roadmap

### Current (MVP)

- Home page with hero section
- Career/jobs page
- News & announcements
- Upcoming features showcase
- Responsive design
- Data models & schema

### Planned Features

- Live learning sessions with video streaming
- Interactive coding challenges
- User authentication & profiles
- Blog creation and commenting
- Real-time chat/discussions
- Progress tracking dashboard
- Gamification system
- Advanced analytics

---

**Happy coding! Join AXE CODE and become a software monster! **
