import React from 'react';
import Counter from './features/counter/Counter';
import RegistrationForm from './features/registration/RegistrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Toolkit Counter & Registration Form</h1>
      </header>
      <main>
        <Counter />
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;