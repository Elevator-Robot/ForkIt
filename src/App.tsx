import { useState } from "react";

function App() {
  const [pallet, setPallet] = useState("");
  const [region, setRegion] = useState("");
  const [diet, setDiet] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted values:", { pallet, region, diet });
    // Optionally, you can clear the form or perform additional actions here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg-dark via-brand-bg-light to-brand-bg-dark caret-white">
      {/* Header with navigation */}
      <header className="bg-brand-surface-dark backdrop-blur-md border-b border-brand-surface-border fixed top-0 w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-light text-brand-text-primary">ForkIt</h1>
          <nav className="space-x-4">
            <a href="#" className="text-brand-text-primary hover:text-brand-accent-primary">Home</a>
            <a href="#" className="text-brand-text-primary hover:text-brand-accent-primary">Settings</a>
          </nav>
        </div>
      </header>

      {/* Centered form */}
      <div className="flex flex-col items-center justify-center pt-20 pb-24 min-h-screen w-full">
        <form onSubmit={handleSubmit} className="bg-brand-surface-dark p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="pallet" className="block text-brand-text-primary mb-2">Pallet</label>
            <input
              id="pallet"
              type="text"
              value={pallet}
              onChange={(e) => setPallet(e.target.value)}
              placeholder="Enter pallet"
              className="w-full rounded-md px-4 py-2 bg-brand-bg-dark border border-brand-surface-border text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-accent-primary/20"
            />
          </div>
          <div>
            <label htmlFor="region" className="block text-brand-text-primary mb-2">Region</label>
            <input
              id="region"
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="Enter region"
              className="w-full rounded-md px-4 py-2 bg-brand-bg-dark border border-brand-surface-border text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-accent-primary/20"
            />
          </div>
          <div>
            <label htmlFor="diet" className="block text-brand-text-primary mb-2">Diet</label>
            <input
              id="diet"
              type="text"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              placeholder="Enter diet"
              className="w-full rounded-md px-4 py-2 bg-brand-bg-dark border border-brand-surface-border text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-accent-primary/20"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary text-brand-text-primary shadow-sm hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent-primary/20"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
