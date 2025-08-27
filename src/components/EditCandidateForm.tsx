import { useState } from "react";
import type { Candidate } from "../types/candidate";
import { Modal } from "./ui/Modal";
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormActions,
} from "./ui/form";

interface EditCandidateFormProps {
  candidate: Candidate;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedCandidate: Candidate) => void;
}

export function EditCandidateForm({
  candidate,
  isOpen,
  onClose,
  onSave,
}: EditCandidateFormProps) {
  const [formData, setFormData] = useState<Candidate>(candidate);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("details.")) {
      const detailField = field.replace("details.", "");
      setFormData((prev) => ({
        ...prev,
        details: {
          ...prev.details,
          [detailField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      onSave(formData);
      onClose();
    } catch (error) {
      console.error("Error saving candidate:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData(candidate);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Edit Candidate Details"
    >
      <form onSubmit={handleSubmit} className="edit-candidate-form">
        <div className="form-sections">
          <div className="form-section">
            <h3 className="form-section-title">Basic Information</h3>
            <FormGroup>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="position">Position</FormLabel>
              <FormInput
                id="position"
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
                required
              />
            </FormGroup>
            <div className="form-row">
              <FormGroup>
                <FormLabel htmlFor="location">Location</FormLabel>
                <FormInput
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="city">City</FormLabel>
                <FormInput
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <FormInput
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </FormGroup>
            </div>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Professional Details</h3>
            <FormGroup>
              <FormLabel htmlFor="currentOrganization">
                Current Organization
              </FormLabel>
              <FormInput
                id="currentOrganization"
                type="text"
                value={formData.details.currentOrganization}
                onChange={(e) =>
                  handleInputChange(
                    "details.currentOrganization",
                    e.target.value
                  )
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="skills">Skills</FormLabel>
              <FormTextarea
                id="skills"
                value={formData.details.skills}
                onChange={(e) =>
                  handleInputChange("details.skills", e.target.value)
                }
                placeholder="e.g., HTML, CSS, JavaScript, React"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="summary">Summary</FormLabel>
              <FormTextarea
                id="summary"
                value={formData.details.summary || ""}
                onChange={(e) =>
                  handleInputChange("details.summary", e.target.value)
                }
                placeholder="Brief professional summary"
              />
            </FormGroup>
            <div className="form-row">
              <FormGroup>
                <FormLabel htmlFor="totalExperience">
                  Total Experience
                </FormLabel>
                <FormInput
                  id="totalExperience"
                  type="text"
                  value={formData.details.totalExperience}
                  onChange={(e) =>
                    handleInputChange("details.totalExperience", e.target.value)
                  }
                  placeholder="e.g., 5 Years"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="relevantExperience">
                  Relevant Experience
                </FormLabel>
                <FormInput
                  id="relevantExperience"
                  type="text"
                  value={formData.details.relevantExperience}
                  onChange={(e) =>
                    handleInputChange(
                      "details.relevantExperience",
                      e.target.value
                    )
                  }
                  placeholder="e.g., 3 Years"
                />
              </FormGroup>
            </div>
            <div className="form-row">
              <FormGroup>
                <FormLabel htmlFor="currentEmploymentStatus">
                  Employment Status
                </FormLabel>
                <select
                  id="currentEmploymentStatus"
                  className="form-input"
                  value={formData.details.currentEmploymentStatus}
                  onChange={(e) =>
                    handleInputChange(
                      "details.currentEmploymentStatus",
                      e.target.value
                    )
                  }
                >
                  <option value="Employed">Employed</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Consultant">Consultant</option>
                </select>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="noticePeriod">Notice Period</FormLabel>
                <FormInput
                  id="noticePeriod"
                  type="text"
                  value={formData.details.noticePeriod}
                  onChange={(e) =>
                    handleInputChange("details.noticePeriod", e.target.value)
                  }
                  placeholder="e.g., 30 Days"
                />
              </FormGroup>
            </div>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Compensation</h3>
            <div className="form-row">
              <FormGroup>
                <FormLabel htmlFor="currentSalary">Current Salary</FormLabel>
                <FormInput
                  id="currentSalary"
                  type="text"
                  value={formData.details.currentSalary}
                  onChange={(e) =>
                    handleInputChange("details.currentSalary", e.target.value)
                  }
                  placeholder="e.g., $75,000"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="salaryExpectation">
                  Salary Expectation
                </FormLabel>
                <FormInput
                  id="salaryExpectation"
                  type="text"
                  value={formData.details.salaryExpectation}
                  onChange={(e) =>
                    handleInputChange(
                      "details.salaryExpectation",
                      e.target.value
                    )
                  }
                  placeholder="e.g., $85,000"
                />
              </FormGroup>
            </div>
            <FormGroup>
              <FormLabel htmlFor="salaryType">Salary Type</FormLabel>
              <select
                id="salaryType"
                className="form-input"
                value={formData.details.salaryType}
                onChange={(e) =>
                  handleInputChange("details.salaryType", e.target.value)
                }
              >
                <option value="Annual">Annual</option>
                <option value="Monthly">Monthly</option>
                <option value="Hourly">Hourly</option>
                <option value="Contract">Contract</option>
              </select>
            </FormGroup>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Personal Details</h3>
            <div className="form-row">
              <FormGroup>
                <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
                <FormInput
                  id="dateOfBirth"
                  type="text"
                  value={formData.details.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("details.dateOfBirth", e.target.value)
                  }
                  placeholder="e.g., 15 June 1993"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="availableFrom">Available From</FormLabel>
                <FormInput
                  id="availableFrom"
                  type="text"
                  value={formData.details.availableFrom}
                  onChange={(e) =>
                    handleInputChange("details.availableFrom", e.target.value)
                  }
                  placeholder="e.g., Jul 14, 2023"
                />
              </FormGroup>
            </div>
            <FormGroup>
              <FormLabel htmlFor="fullAddress">Full Address</FormLabel>
              <FormTextarea
                id="fullAddress"
                value={formData.details.fullAddress}
                onChange={(e) =>
                  handleInputChange("details.fullAddress", e.target.value)
                }
                placeholder="Complete address"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="languageSkills">Language Skills</FormLabel>
              <FormInput
                id="languageSkills"
                type="text"
                value={formData.details.languageSkills}
                onChange={(e) =>
                  handleInputChange("details.languageSkills", e.target.value)
                }
                placeholder="e.g., English (Fluent), Spanish (Intermediate)"
              />
            </FormGroup>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Status</h3>
            <FormGroup>
              <FormLabel htmlFor="status">Current Status</FormLabel>
              <select
                id="status"
                className="form-input"
                value={formData.details.status}
                onChange={(e) =>
                  handleInputChange("details.status", e.target.value)
                }
              >
                <option value="New">New</option>
                <option value="In Review">In Review</option>
                <option value="Submitted to Client">Submitted to Client</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </FormGroup>
          </div>
        </div>

        <FormActions>
          <button
            className="btn--secondary"
            type="button"
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            className="btn--primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </FormActions>
      </form>
    </Modal>
  );
}
