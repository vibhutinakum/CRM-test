import { Candidate } from "../types/candidate";
import { EditCandidateForm } from "./EditCandidateForm";
import { useState } from "react";
import "../css/ProfileCard.css";

interface ProfileCardProps {
  candidate: Candidate;
  onSaveCandidate?: (updated: Candidate) => void;
  id: string;
}

const ProfileCard = ({ candidate, onSaveCandidate }: ProfileCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [previewCandidate, setPreviewCandidate] =
    useState<Candidate>(candidate);

  // Social media configuration
  const socialMediaConfig = [
    {
      key: "facebook" as keyof typeof candidate.socialAccounts,
      icon: "/facebook.svg",
      alt: "Facebook",
      title: "Visit Facebook Profile",
    },
    {
      key: "twitter" as keyof typeof candidate.socialAccounts,
      icon: "/twitter.svg",
      alt: "Twitter",
      title: "Visit Twitter Profile",
    },
    {
      key: "linkedin" as keyof typeof candidate.socialAccounts,
      icon: "/linkedin.svg",
      alt: "LinkedIn",
      title: "Visit LinkedIn Profile",
    },
    {
      key: "github" as keyof typeof candidate.socialAccounts,
      icon: "/github.svg",
      alt: "GitHub",
      title: "Visit GitHub Profile",
    },
    {
      key: "instagram" as keyof typeof candidate.socialAccounts,
      icon: "/instagram.svg",
      alt: "Instagram",
      title: "Visit Instagram Profile",
    },
  ];

  // Filter available social accounts
  const availableSocialAccounts = socialMediaConfig.filter(
    (social) =>
      candidate.socialAccounts?.[social.key] &&
      (candidate.socialAccounts[social.key] as string).trim() !== ""
  );

  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <div className="profile-avatar">
          <img
            src={candidate.profileImage}
            alt={candidate.name}
            className="avatar__image"
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-info__name">
            <span className="candidate-name">{candidate.name} </span>
            {availableSocialAccounts.length > 0 && (
              <div className="profile-social-links">
                {availableSocialAccounts.map((social) => (
                  <a
                    key={social.key}
                    href={candidate.socialAccounts?.[social.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="social-link"
                  >
                    <img src={social.icon} alt={social.alt} />
                  </a>
                ))}
              </div>
            )}
          </h1>
          <p className="profile-info__position">
            <span>{candidate.position} </span>
            <span>{candidate.location} </span>
            <span>{candidate.city}</span>
          </p>
        </div>

        <div className="profile-nav">
          <button className="btn btn--red">Contact Linked</button>
          <div className="profile-actions__secondary">
            <button className="btn btn--icon" title="Star">
              <i className="bx bx-star"></i>
            </button>
            <button className="btn btn--icon" title="Upload">
              <i className="bx  bx-block"></i>
            </button>
            <button
              className="btn btn--icon"
              title="Edit"
              onClick={() => setIsEditing(true)}
            >
              <i className="bx bx-edit"></i>
            </button>
            <button className="btn btn--icon" title="More">
              <i className="bx bx-dots-vertical-rounded"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="profile-card__activity">
        <div className="contact-item-wrapper">
          <div className="contact-item">
            <span className="contact-icon">
              <i className="bx bx-envelope"></i>
            </span>
            <span className="contact-text">
              <a href={`mailto:${previewCandidate.email}`} title="Send Email">
                {previewCandidate.email}
              </a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="bx bx-phone"></i>
            </span>
            <span className="contact-text">
              <a href={`tel:${previewCandidate.phone}`} title="Call Phone">
                {previewCandidate.phone}
              </a>
            </span>
          </div>
        </div>
        <span className="activity-text">
          <div>
            <i className="bx bx-user-circle"></i>
            {previewCandidate.lastActivity.user}
          </div>
          <div>
            <i className="bx  bx-stopwatch"></i>
            {previewCandidate.lastActivity.date}
          </div>
        </span>
      </div>

      <EditCandidateForm
        candidate={previewCandidate}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={(updated) => {
          setPreviewCandidate(updated);
          onSaveCandidate?.(updated);
        }}
      />
    </div>
  );
};

export default ProfileCard;
