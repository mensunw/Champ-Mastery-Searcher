# Champ Mastery Searcher

## Project Overview

Champ Mastery Searcher is a lightweight web application built for our CS391 Final Project.  
The app allows users to search for League of Legends player profiles and view their top champion mastery data by entering a Riot ID and tag.  
It is built using **Next.js** for both frontend and backend logic, styled with **Tailwind CSS** and **styled-components**, and integrates with the **Riot Games API** to fetch real-time player data.

Our goal was to create a fast, easy-to-use platform where players can quickly look up champion mastery information without needing to log in or authenticate.

---

## Technologies Used

- **Next.js**: Framework for routing, API handling, and server-side functionality.
- **TypeScript**: Strong typing across the project for reliability.
- **Tailwind CSS**: Utility-first CSS framework for responsive layout and basic styling.
- **styled-components**: Component-scoped styling for custom elements like Navbar, Footer, and Cards.
- **Riot Games API**: Public API used to retrieve player and champion mastery data.
- **Vercel**: (Optional) Deployment platform if publishing the app.

---

## Team Contributions

- **Mensun Wang**  
  - Developed backend **API routes** to fetch player IDs and champion masteries.
  - Handled integration with **Riot Games API**, including error handling for API responses.

- **Jiale (Gerald) Quan**  
  - Built the **Search page** allowing users to input Riot ID and tag.
  - Designed and implemented the top **Navigation Bar** for page switching.

- **Jiaqing (Kevin) Xu**  
  - Created the **Home page** with project introduction and League of Legends branding.
  - Designed the **Mastery Card component** used to display individual champion information.

---

## Notes

- **API Key Expiration**: Riot Games API keys expire every 24 hours (for development keys). Make sure you are using a valid key.
- **Data Dragon Version**: We currently use **14.8.1** for champion images. If a new patch is released, update the version in image URLs if necessary.
- **Error Handling**: The app gracefully handles invalid inputs, nonexistent players, and API rate limits.

---

## Contact Information

- **Mensun Wang** — mensun@bu.edu — 718-224-1998
- **Jiale (Gerald) Quan** — geraldq@bu.edu — +1 857-272-3541
- **Jiaqing (Kevin) Xu** — jiaqing@bu.edu — 617-879-8217

---

# Thank you for checking out our project!
