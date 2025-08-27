import React, { useState } from "react";

// Data for the main accordion
const supportTopics = [
  { icon: "fa-plus-circle", category: "Account Opening", subtopics: ["Resident individual", "Minor", "Non Resident Indian (NRI)"] },
  { icon: "fa-user-circle", category: "Your Zerodha Account", subtopics: ["Your Profile", "Account modification", "Nomination"] },
  { icon: "fa-bolt", category: "Kite", subtopics: ["IPO", "Trading FAQs", "Margins"] },
  { icon: "fa fa-inr", category: "Funds", subtopics: ["Add money", "Withdraw money", "eMandates"] },
  { icon: "fa fa-terminal", category: "Console", subtopics: ["Portfolio", "Corporate actions", "Reports"] },
  { icon: "fa fa-circle-thin", category: "Coin", subtopics: ["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)"] },
];

// Data for the new sections
const announcements = [
    { text: "Exclusion of F&O contracts on 8 securities from August 29, 2025", href: "#" },
    { text: "Revision in expiry day of Index and Stock derivatives contracts", href: "#" },
];

const quickLinks = [
    { text: "Track account opening", href: "#" },
    { text: "Track segment activation", href: "#" },
    { text: "Intraday margins", href: "#" },
    { text: "Kite user manual", href: "#" },
];

const toSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

function CreateTicket() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h2 className="fw-normal">To create a ticket, select a relevant topic</h2>
        </div>
      </div>

      {/* Main content is now a two-column layout */}
      <div className="row justify-content-center">
        {/* Left Column: Accordion */}
        <div className="col-md-8">
          {supportTopics.map((topic) => (
            <div key={topic.category} className="border-bottom mb-2">
              <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => toggleCategory(topic.category)}
              >
                <div>
                  <i className={`fa ${topic.icon} text-primary me-3`}></i>
                  <span className="fw-normal">{topic.category}</span>
                </div>
                <i className={`fa fa-chevron-${openCategory === topic.category ? "up" : "down"} text-muted`}></i>
              </div>
              {openCategory === topic.category && (
                <div className="p-3 ps-5">
                  <ul className="list-unstyled">
                    {topic.subtopics.map((subtopic) => (
                      <li key={subtopic} className="mb-2">
                        <a href={`/support/${toSlug(topic.category)}/${toSlug(subtopic)}`} className="text-decoration-none text-dark">
                          {subtopic}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Announcements and Quick Links */}
        <div className="col-md-4">
          <div className="border p-3 mb-4" style={{borderLeft: '4px solid orange'}}>
            <ul className="list-unstyled">
                {announcements.map((item, index) => (
                    <li key={index} className="mb-2 small">
                        <a href={item.href} className="text-decoration-none">{item.text}</a>
                    </li>
                ))}
            </ul>
          </div>

          <div className="border p-3 bg-light">
            <h5 className="fw-normal fs-6 mb-3">Quick links</h5>
            <ul className="list-unstyled">
                {quickLinks.map((item, index) => (
                     <li key={index} className="mb-2 small">
                        <a href={item.href} className="text-decoration-none">{index + 1}. {item.text}</a>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;