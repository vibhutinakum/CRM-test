import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProfileCard from "./ProfileCard";
import DetailsGrid from "./DetailsGrid";
import Tabs from "./Tabs";
import AssignedJobs from "./AssignedJobs";
import ActivitySidebar from "./ActivitySidebar";
import {
  mockCandidate,
  mockAssignedJobs,
  mockNotes,
  mockDetailTabs,
  mockActivityTabs,
} from "../data/mockData";
import "../css/CandidateDetail.css";

const CandidateDetail: React.FC = () => {
  const { id: candidateId } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState("candidates");
  const [activeDetailTab, setActiveDetailTab] = useState("assigned-jobs");
  const [candidate, setCandidate] = useState(mockCandidate);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Footer actions removed with footer

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeDetailTab) {
      case "assigned-jobs":
        return (
          <AssignedJobs
            jobs={mockAssignedJobs}
            candidateName={mockCandidate.name}
          />
        );
      case "all-details":
        return (
          <div className="tab-details">
            <h3>All Candidate Details</h3>
            <p>Complete information about {mockCandidate.name}</p>
          </div>
        );
      case "related-emails":
        return (
          <div className="tab-details">
            <h3>Related Emails</h3>
            <p>Email communications with {mockCandidate.name}</p>
          </div>
        );
      case "candidate-questions":
        return (
          <div className="tab-details">
            <h3>Candidate Questions</h3>
            <p>Questions and answers from {mockCandidate.name}</p>
          </div>
        );
      case "hotlists":
        return (
          <div className="tab-details">
            <h3>Hotlists</h3>
            <p>Hotlists containing {mockCandidate.name}</p>
          </div>
        );
      case "related-deals":
        return (
          <div className="tab-details">
            <h3>Related Deals</h3>
            <p>Deals associated with {mockCandidate.name}</p>
          </div>
        );
      case "contacts-pitched":
        return (
          <div className="tab-details">
            <h3>Contact(s) Pitched</h3>
            <p>Contacts pitched for {mockCandidate.name}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="crm-layout">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isExpanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded(!sidebarExpanded)}
      />

      <div className="crm-main">
        <Header />

        <div className="candidate-detail">
          <div className="candidate-detail__content">
            {/* Left Column */}
            <div className="candidate-detail__left">
              <div className="breadcrumb-header">
                <div className="candidate__breadcrumb">
                  <a href="/candidates">
                    Candidates <i className="bx  bx-chevron-right"></i>{" "}
                  </a>
                  <span>
                    Robert Hardy <i className="bx  bx-chevron-right"></i>{" "}
                  </span>
                  <span className="id-block">ID-{candidateId}</span>
                </div>
                <div className="button-wrapper">
                  <button type="button" className="btn--secondary">
                    Request Profile Update
                  </button>
                  <button type="button" className="btn--secondary">
                    Previous
                  </button>
                  <button type="button" className="btn--secondary">
                    Next
                  </button>
                </div>
              </div>
              <ProfileCard
                candidate={candidate}
                onSaveCandidate={(updated: typeof candidate) =>
                  setCandidate(updated)
                }
                id={candidateId ?? ""}
              />
              <DetailsGrid candidate={candidate} />

              {/* Detail Tabs */}
              <Tabs
                tabs={mockDetailTabs}
                activeTab={activeDetailTab}
                onTabChange={setActiveDetailTab}
              >
                {renderTabContent()}
              </Tabs>
            </div>

            {/* Right Column */}
            <div className="candidate-detail__right">
              <ActivitySidebar
                notes={mockNotes}
                activityTabs={mockActivityTabs}
              />
            </div>
          </div>
        </div>

        {/* Footer removed as per design */}
      </div>
    </div>
  );
};

export default CandidateDetail;
