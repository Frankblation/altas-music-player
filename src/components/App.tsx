import { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    // Check user's system preference on initial load
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }

    // Listen for changes in system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => setDarkMode(event.matches);
    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange); // Clean up listener on unmount
    };
  }, []);

  useEffect(() => {
    // Apply the dark or light mode classes to the document root
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <MusicPlayer />
      </main>

      <Footer />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity duration-200"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;
