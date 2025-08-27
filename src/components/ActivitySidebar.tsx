import { useState } from "react";
import { Note, Tab } from "../types/candidate";
import Tabs from "./Tabs";
import "../css/ActivitySidebar.css";

interface ActivitySidebarProps {
  notes: Note[];
  activityTabs: Tab[];
}

const ActivitySidebar = ({ notes, activityTabs }: ActivitySidebarProps) => {
  const [activeTab, setActiveTab] = useState(activityTabs[0].id);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const renderActivityContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div className="notes-list">
            {notes.map((note) => (
              <div
                key={note.id}
                className={`note-item ${
                  selectedNote === note.id ? "selected" : ""
                }`}
                onClick={() => setSelectedNote(note.id)}
              >
                <div className="note-header">
                  <div className="note-meta">
                    <span className="note-icon">📝</span>
                    <span className="note-type">{note.type}</span>
                    <span className="note-status">{note.status}</span>
                  </div>
                </div>
                <div className="note-body">
                  <div className="note-content">{note.content}</div>
                </div>
                <div className="note-footer">
                  <span className="note-associations">{note.associations}</span>
                  <div className="note-author-info">
                    <span className="note-author">
                      <i className="bx bx-user-circle"></i> {note.author}
                    </span>
                    <span className="note-date">
                      <i className="bx  bx-stopwatch"></i> {note.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "notes":
        return <div className="tab-content">Notes & Calls timeline</div>;
      case "tasks":
        return <div className="tab-content">Upcoming tasks</div>;
      case "meeting":
        return <div className="tab-content">Scheduled meetings</div>;
      case "files":
        return <div className="tab-content">Related files</div>;
      default:
        return null;
    }
  };

  return (
    <div className="activity-sidebar">
      {/* Activity Header */}
      <div className="activity-header">
        <button className="btn btn--icon">
          <i className="bx bx-file"></i>
        </button>
        <button className="btn btn--icon">
          <i className="bx bx-phone-outgoing"></i>
        </button>
        <button className="btn btn--icon">
          <i className="bx bx-check-circle"></i>
        </button>
        <button className="btn btn--icon">
          <i className="bx bx-calendar-event"></i>
        </button>
      </div>

      {/* Activity Tabs */}
      <div>
        <Tabs
          tabs={activityTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        >
          {renderActivityContent()}
        </Tabs>
      </div>
    </div>
  );
};

export default ActivitySidebar;
