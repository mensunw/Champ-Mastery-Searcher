// Mensun Wang
'use client';
import styled from 'styled-components';
import Link from 'next/link'

// styling for arrow button
const ArrowButton = styled.button`
  background-color: #c89c38; 
  color: white;
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #a67f2f;
    transform: translateX(5px);
  }
`;

export default function CallToAction() {
  return (
    <>
      <div className="flex justify-center">
        {/* links to the search page */}
        <Link href="/search">
          <ArrowButton>
            Search Now
            <span>➔</span>
          </ArrowButton>
        </Link>
      </div>
    </>
  )
}