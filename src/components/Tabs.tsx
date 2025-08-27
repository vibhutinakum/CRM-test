import * as React from "react";
import { Tab } from "../types/candidate";
import "../css/Tabs.css";

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: "default" | "activity";
  children?: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
  children,
}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [expandedAccordion, setExpandedAccordion] =
    React.useState<string>(activeTab);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    setExpandedAccordion(activeTab);
  }, [activeTab]);

  const handleAccordionToggle = (tabId: string) => {
    if (expandedAccordion === tabId) {
      setExpandedAccordion("");
    } else {
      setExpandedAccordion(tabId);
      onTabChange(tabId);
    }
  };

  // Mobile accordion view
  if (isMobile) {
    return (
      <div className={`tabs tabs--${variant} tabs--mobile-accordion`}>
        {tabs.map((tab) => (
          <div key={tab.id} className="accordion-item">
            <button
              className={`accordion-header ${
                expandedAccordion === tab.id ? "accordion-header--active" : ""
              }`}
              onClick={() => handleAccordionToggle(tab.id)}
            >
              <span>{tab.label}</span>
              <span
                className={`accordion-icon ${
                  expandedAccordion === tab.id ? "accordion-icon--open" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {expandedAccordion === tab.id && children && (
              <div className="accordion-content">{children}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Desktop tabs view
  return (
    <div className={`tabs tabs--${variant}`}>
      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${
              activeTab === tab.id ? "tab-button--active" : ""
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children && <div className="tab-content">{children}</div>}
    </div>
  );
};

export default Tabs;
