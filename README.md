# Call Management App

This project is a call management application that allows users to manage and track their calls, with features to archive and unarchive calls, and provides a responsive design optimized for a phone-like experience.

## Features Implemented

- **Call Display:** Visual representation of call details including call ID and direction.
- **Archive and Unarchive:** Functions to archive and unarchive calls individually or all at once.
- **Swipe Gestures:** Swipe left or right to archive or unarchive calls, with smooth animations.
- **Responsive Design:** Utilized inline styles and flexbox for a responsive design that mimics a phone app layout.

## Challenges and Solutions

### Challenge 1: Swipe Gesture Implementation

**Issue:** Implementing swipe gestures for archiving and unarchiving calls was challenging, especially ensuring smooth animations and preventing default touch behaviors.

**Solution:** Used the `react-swipeable` library to handle swipe gestures and applied inline styles for smooth animations. Conditional styling was used to indicate swipe direction and actions.

### Challenge 2: Responsive Design

**Issue:** Ensuring the application layout is responsive and user-friendly on various devices, especially smaller screens.

**Solution:** Utilized inline styles with flexbox to create a responsive layout that adapts to different screen sizes, ensuring a user-friendly interface similar to a phone app.

### Challenge 3: Consistent Button Styling

**Issue:** Maintaining consistent button sizes and styles across different components was challenging.

**Solution:** Defined common button styles and applied them consistently across all components to ensure uniform appearance and functionality.

### Challenge 4: Conditional Rendering

**Issue:** Displaying different components based on the state (e.g., showing call details or the call list) required careful state management.

**Solution:** Used React state management to conditionally render components, ensuring seamless transitions between different views.

## Future Enhancements

- **Data Fetching:** Implement data fetching from an API to dynamically load call data.
- **User Interactivity:** Add features for users to update call details directly through the UI.
- **Detailed Analytics:** Provide more detailed analytics and visualizations for call data, such as charts and graphs.
- **Authentication:** Implement user authentication to secure access to call data.

## How to Use

### Setting Up the Project

1. Clone the repository: `https://github.com/SamTheKorean/ee812f3a.git`
2. Install dependencies: `npm install`

### Running the Application

1. Start the development server: `npm start`
2. Open your browser and go to `http://localhost:8080` to view the application.

## Tech Stack

- React (JavaScript): Core library for building the user interface.
- 'react-swipeable': Library for handling swipe gestures.
- Inline Styles: Used for styling components directly within the React code.
- Flexbox: CSS layout module used for designing responsive and flexible layouts.

## Contributors

- [Sam Lee](https://github.com/samthekorean)
