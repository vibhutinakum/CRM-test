import { useEffect } from "react";
import "../css/Sidebar.css";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({
  activeSection,
  onSectionChange,
  isExpanded = false,
  onToggle,
}: SidebarProps) => {
  const navigationItems = [
    { id: "dashboard", icon: "bx-grid-alt", label: "Dashboard" },
    { id: "candidates", icon: "bx-user", label: "Candidates" },
    { id: "organizations", icon: "bx-building", label: "Organizations" },
    { id: "deals", icon: "bx-briefcase", label: "Deals" },
    { id: "activities", icon: "bx-calendar", label: "Activities" },
    { id: "emails", icon: "bx-envelope", label: "Emails" },
    { id: "files", icon: "bx-file", label: "Files" },
    { id: "products", icon: "bx-dollar-circle", label: "Products" },
    { id: "reports", icon: "bx-bar-chart-alt-2", label: "Reports" },
    { id: "settings", icon: "bx-cog", label: "Settings" },
  ];

  // Add/remove body class based on sidebar state
  useEffect(() => {
    const body = document.body;
    if (isExpanded) {
      body.classList.add("sidebar-expanded");
    } else {
      body.classList.remove("sidebar-expanded");
    }

    // Cleanup on unmount
    return () => {
      body.classList.remove("sidebar-expanded");
    };
  }, [isExpanded]);

  return (
    <div className={`sidebar ${isExpanded ? "sidebar--expanded" : ""}`}>
      {/* Toggle Button */}
      {onToggle && (
        <button
          className="sidebar__toggle"
          onClick={onToggle}
          title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <i
            className={`bx ${
              isExpanded ? "bx-chevron-left" : "bx-chevron-right"
            }`}
          ></i>
        </button>
      )}

      <div className="sidebar__nav">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar__nav-item ${
              activeSection === item.id ? "sidebar__nav-item--active" : ""
            }`}
            onClick={() => onSectionChange(item.id)}
            title={!isExpanded ? item.label : undefined}
          >
            <i className={`bx ${item.icon}`}></i>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
