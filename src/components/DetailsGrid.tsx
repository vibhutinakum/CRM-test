import * as React from "react";
import { Candidate } from "../types/candidate";
import "../css/DetailsGrid.css";

interface DetailsGridProps {
  candidate: Candidate;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ candidate }) => {
  const detailRows = [
    [
      {
        label: "Current Organization",
        value: candidate.details.currentOrganization,
      },
      { label: "Summary", value: candidate.details.summary || "-" },
    ],
    [
      { label: "Skills", value: candidate.details.skills },
      {
        label: "Current Employment Status",
        value: candidate.details.currentEmploymentStatus,
      },
    ],
    [
      { label: "Available From", value: candidate.details.availableFrom },
      { label: "Date of Birth", value: candidate.details.dateOfBirth },
    ],
    [
      { label: "Current Salary", value: candidate.details.currentSalary },
      {
        label: "Relevant Experience",
        value: candidate.details.relevantExperience,
      },
    ],
    [
      { label: "Notice Period", value: candidate.details.noticePeriod },
      {
        label: "Salary Expectation",
        value: candidate.details.salaryExpectation,
      },
    ],
    [
      { label: "Full Address", value: candidate.details.fullAddress },
      { label: "Status", value: candidate.details.status },
    ],
    [
      { label: "Resume", value: candidate.details.resume },
      { label: "Salary Type", value: candidate.details.salaryType },
    ],
    [
      { label: "Total Experience", value: candidate.details.totalExperience },
      { label: "Language Skills", value: candidate.details.languageSkills },
    ],
  ];

  return (
    <div className="details-grid">
      {detailRows.map((row, rowIndex) => (
        <div key={rowIndex} className="details-row">
          {row.map((detail, detailIndex) => (
            <div key={detailIndex} className="detail-item">
              <label className="detail-label">{detail.label}</label>
              <span className="detail-value">{detail.value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DetailsGrid;
