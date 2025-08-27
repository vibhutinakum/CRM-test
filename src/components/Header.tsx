import { useState, useEffect } from "react";
import "../css/Header.css";
import "../css/Theme.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Always default to light theme
      setIsDarkTheme(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Listen for system theme changes (optional - only applies if no saved preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Only apply system preference if no manual preference is saved
      if (!localStorage.getItem("theme")) {
        // Always default to light, ignore system preference
        setIsDarkTheme(false);
        document.documentElement.setAttribute("data-theme", "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        {/* Mobile search toggle */}
        <button
          className="mobile-search-toggle"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label="Toggle search"
        >
          <i className="bx bx-search"></i>
        </button>

        {/* Search bar */}
        <div
          className={`header__search ${
            isSearchOpen ? "search--mobile-open" : ""
          }`}
        >
          <i className="bx bx-search search-icon"></i>
          <input
            type="text"
            placeholder="Search Pipedrive"
            className="search-input"
          />
          <button
            className="mobile-search-close"
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
      </div>

      <div className="header__center">
        <div className="logo">
          <span className="logo__text">
            <img src="/logo.png" alt="Pipedrive Logo" />
          </span>
        </div>
      </div>

      <div className="header__right">
        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>

        {/* Actions */}
        <div
          className={`header__actions ${
            isMobileMenuOpen ? "actions--mobile-open" : ""
          }`}
        >
          <button className="btn btn--icon" title="Add new">
            <i className="bx bx-plus"></i>
          </button>
          <button className="btn btn--icon" title="Gifts">
            <i className="bx bx-gift"></i>
          </button>
          <button className="btn btn--icon" title="Messages">
            <i className="bx bx-envelope"></i>
          </button>
          <button className="btn btn--icon" title="Notifications">
            <i className="bx bx-bell"></i>
          </button>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={
              isDarkTheme ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkTheme ? (
              <i className="bx bx-sun"></i>
            ) : (
              <i className="bx bx-moon"></i>
            )}
          </button>

          <div className="user-profile">
            <img src="/profile.png" alt="User" className="user-avatar" />
            <div className="user-info">
              <span className="user-name">Phyllis Yang</span>
              <span className="user-company">Silicon Links Inc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
