// Jiaqing Xu
// AboutPage.tsx - Provides project description, tech stack, and team info

'use client';

import styled from 'styled-components';

// Styled container for the about content with soft background and shadow
const AboutContainer = styled.div`
  background-color: #f9fafb; 
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

// Main About page component
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <AboutContainer>
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-6 text-center">About This Project</h1>

        {/* Brief description of project context and functionality */}
        <p className="text-lg mb-6 text-center">
          This project was developed as the Final Project for BU&apos;s CS391 course (Spring 2025).
          It is a web application that allows users to search and view League of Legends champion mastery data
          by entering a summoner name and tag.
        </p>

        {/* Technologies used section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Next.js</li>                   {/* Fullstack React framework */}
            <li>React.js</li>                  {/* Component-based UI rendering */}
            <li>Tailwind CSS</li>              {/* Utility-first CSS for layout and spacing */}
            <li>styled-components</li>         {/* Scoped styling for custom components */}
            <li>Riot Games Developer API</li>  {/* External API for fetching player data */}
          </ul>
        </div>

        {/* Team member contact information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Team Members</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Mensun Wang</strong><br />
              Email: mensun@bu.edu<br />
              Phone: 718-224-1998
            </li>
            <li>
              <strong>Jiale (Gerald) Quan</strong><br />
              Email: geraldq@bu.edu<br />
              Phone: +1 857-272-3541
            </li>
            <li>
              <strong>Jiaqing (Kevin) Xu</strong><br />
              Email: jiaqing@bu.edu<br />
              Phone: 617-879-8217
            </li>
          </ul>
        </div>
      </AboutContainer>
    </div>
  );
}
