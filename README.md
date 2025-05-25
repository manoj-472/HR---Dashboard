# HR Performance Dashboard

A Next.js-based dashboard for HR managers to track employee performance, manage bookmarks, and view analytics.

## Features
- **Dashboard Homepage**: Displays employee cards with name, email, age, department, and performance rating. Includes View, Bookmark, and Promote buttons.
- **Search & Filter**: Search by name, email, or department; filter by department or rating.
- **Employee Details**: Dynamic page with tabs for Overview, Projects, and Feedback.
- **Bookmarks**: View and manage bookmarked employees.
- **Analytics**: Bar chart showing department-wise average ratings.
- **Bonus**: Pagination, mock login screen, dark/light mode, responsive design.

## Setup Instructions
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open `http://localhost:3000` in your browser.

## Dependencies
- Next.js
- Tailwind CSS
- Zustand
- Chart.js
- react-chartjs-2
- next-themes

## Screenshots
(TODO: Add screenshots of homepage, employee details, bookmarks, and analytics pages)

## Notes
- Uses `https://dummyjson.com/users` for mock data.
- Dark/light mode implemented with `next-themes`.
- Responsive design for mobile and desktop.
- Pagination implemented with Previous/Next buttons.