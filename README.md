# CRM Candidate Detail Application

A modern, responsive CRM application built with React, TypeScript, and vanilla CSS. This application displays detailed candidate information with a clean, professional interface.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular components for easy maintenance and scalability
- **CSS Variables**: Easy theming support with CSS custom properties
- **TypeScript**: Full type safety and better development experience
- **No External Dependencies**: Built with core React and vanilla CSS only

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Application header with search and user info
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── ProfileCard.tsx  # Candidate profile display
│   ├── DetailsGrid.tsx  # Candidate details in grid format
│   ├── Tabs.tsx         # Reusable tabs component
│   ├── AssignedJobs.tsx # Jobs assigned to candidate
│   ├── ActivitySidebar.tsx # Activity feed and notes
│   ├── Button.tsx       # Reusable button component
│   └── CandidateDetail.tsx # Main page component
├── types/               # TypeScript type definitions
│   └── candidate.ts     # Candidate and related interfaces
├── data/                # Mock data
│   └── mockData.ts      # Sample data for development
└── styles/              # CSS files for each component
```

## Components

### Header
- Application logo and branding
- Search functionality
- User profile and notifications
- Action buttons

### Sidebar
- Navigation menu with icons
- Active state management
- Responsive behavior

### ProfileCard
- Candidate avatar and badges
- Personal information
- Contact details
- Action buttons

### DetailsGrid
- Two-column layout for candidate details
- Organized information display
- Responsive grid system

### Tabs
- Reusable tab component
- Support for different variants
- Active state management

### AssignedJobs
- List of jobs assigned to candidate
- Job status and actions
- Toggle switches for job management

### ActivitySidebar
- Activity feed display
- Notes and calls
- User activity information

## CSS Variables

The application uses CSS custom properties for consistent theming:

```css
:root {
  --primary-blue: #2563eb;
  --secondary-blue: #3b82f6;
  --success-green: #10b981;
  --warning-orange: #f59e0b;
  --gray-50: #f9fafb;
  /* ... more variables */
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the application

## Development

### Adding New Components
1. Create a new component file in `src/components/`
2. Create corresponding CSS file
3. Export from `src/components/index.ts`
4. Import and use in your application

### Theming
- Modify CSS variables in component CSS files
- Add new color schemes by updating the `:root` selector
- Support for dark mode and high contrast modes

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px
- Flexible grid layouts

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Responsive design works on all screen sizes

## Future Enhancements

- Dark theme toggle
- More candidate management features
- Integration with backend APIs
- Advanced search and filtering
- Export functionality
- Multi-language support
