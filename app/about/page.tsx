'use client';

import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f9fafb; 
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <AboutContainer>
        <h1 className="text-4xl font-bold mb-6 text-center">About This Project</h1>

        <p className="text-lg mb-6 text-center">
          This project was developed as the Final Project for BU's CS391 course (Spring 2025).
          It is a web application that allows users to search and view League of Legends champion mastery data 
          by entering a summoner name and tag.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Next.js</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>styled-components</li>
            <li>Riot Games Developer API</li>
          </ul>
        </div>

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
