import React from 'react';
import Review from './Review';
import { setupMain } from '@testing-library/user-event/dist/cjs/setup/setup.js';
function App() {
  return (
    <main>
      <section className="container">
        <div className="title" >
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App;
