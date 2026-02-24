# CSIT.OS

CSIT.OS is the definitive BSc CSIT notes portal. It provides a minimal, cyber-grid interface for accessing semester resources, verified notes, and past questions.

## Features

*   **Personalized Dashboard:** Users can set up their profile to see their current semester and relevant subjects immediately upon logging in.
*   **Academic Modules:** A comprehensive grid of all semesters and their respective subjects.
*   **Quick Search:** A global search modal accessible via keyboard shortcut (Ctrl+K or Cmd+K) to quickly find subjects and resources.
*   **Persistent State:** User preferences and onboarding status are saved locally to provide a seamless experience across sessions.
*   **Responsive Design:** A mobile-first approach ensuring the portal is accessible on all devices, complete with a bottom navigation dock for mobile users.

## Tech Stack

*   **Frontend Framework:** React 19
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Build Tool:** Vite
*   **Language:** TypeScript

## Project Structure

*   `App.tsx`: The main application component handling routing and state.
*   `components/`: Contains all reusable UI components.
    *   `Navbar.tsx`: Top navigation bar.
    *   `Hero.tsx`: Landing page hero section.
    *   `SearchModal.tsx`: Global search functionality.
    *   `SubjectDashboard.tsx`: Detailed view for a specific semester and its subjects.
    *   `BottomDock.tsx`: Mobile navigation dock.
    *   `LoadingScreen.tsx`: Initial loading animation.
    *   `Onboarding.tsx`: User setup flow.
    *   `ResourceCard.tsx`: Display component for individual resources.
    *   `GiscusComments.tsx`: Integration for user comments and discussions.
*   `constants.ts`: Global constants including semester data.
*   `types.ts`: TypeScript interfaces and type definitions.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system.

### Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

### Development

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

The compiled assets will be available in the `dist` directory.

## Usage

1.  Upon first visit, complete the onboarding process to select your current semester.
2.  Use the "My Semester" section for quick access to your current subjects.
3.  Browse other semesters using the "Academic Modules" grid.
4.  Press `Ctrl+K` (or `Cmd+K` on Mac) to open the search modal at any time.
