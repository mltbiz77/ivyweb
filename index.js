// pages/index.js
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>IvyDeFi - Simple. DeFi for Everyone.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <header>
          <h1 className="headline">Simple. Powerful. DeFi for Everyone.</h1>
          <p className="subheadline">
            Manage, earn, swap, and explore Web3 — all in one sleek app.
          </p>
          <a 
            href="https://x.com/ivydefi_"
            target="_blank"
            rel="noopener noreferrer"
            className="followBtn"
          >
            Follow us on X
          </a>
        </header>
        <section className="features">
          <Feature 
            title="Manage Your Portfolio" 
            description="Real-time tracking of your assets with beautiful allocation charts."
          />
          <Feature 
            title="One-Click Yield Farming" 
            description="Earn passive income effortlessly with live earnings updates and smart toggling."
          />
          <Feature 
            title="Swap with Confidence" 
            description="Swap thousands of tokens instantly with the best rates and seamless UX."
          />
          <Feature 
            title="Explore Web3" 
            description="Seamlessly browse and interact with decentralized applications within the app."
          />
        </section>
        <footer>© 2025 IvyDeFi</footer>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
          color: #2e2e2e;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }
        header {
          max-width: 640px;
          background: #f7faff;
          padding: 1.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(79,142,247,0.15);
          animation: fadeInUp 1s ease forwards;
        }
        .headline {
          font-weight: 700;
          font-size: 2.75rem;
          color: #4f8ef7;
          margin: 0 0 0.5rem 0;
        }
        .subheadline {
          font-size: 1.25rem;
          color: #526488;
          margin: 0 0 2rem 0;
        }
        .followBtn {
          display: inline-block;
          padding: 0.75rem 2rem;
          font-weight: 700;
          font-size: 1.1rem;
          color: white;
          background: #4f8ef7;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(79,142,247,0.3);
          text-decoration: none;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .followBtn:hover {
          background: #366ccc;
          box-shadow: 0 12px 30px rgba(54,108,204,0.5);
        }
        .features {
          margin-top: 2rem;
          max-width: 900px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
          gap: 2rem;
          padding: 0 1rem;
        }
        footer {
          margin-top: 4rem;
          font-size: 0.9rem;
          color: #9aaab2;
          user-select: none;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 600px) {
          .headline {
            font-size: 2rem;
          }
          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

function Feature({ title, description }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{description}</p>
      <style jsx>{`
        .feature {
          background: #f7faff;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(79,142,247,0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .feature:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(79,142,247,0.3);
        }
        h3 {
          color: #4f8ef7;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        p {
          font-size: 1rem;
          color: #526488;
          line-height: 1.4;
        }
      `}</style>
    </div>
  )
}
