import React from "react";
import StudentUniversity from "./StudentUniversity";
import harvard from "../../assets/IMG.png";

const UniversityCards = () => {
  const universities = [
    {
      id: "GyorUniversity",
      name: "GyorUniversity",
      logo: harvard,
      location: "Cambridge, Massachusetts, USA",
      programs: [
        "Business Administration",
        "Computer Science",
        "Law",
        "Medicine",
      ],
      highlights: [
        "Founded in 1636",
        "#1 World University Ranking",
        "20,000+ Students",
        "98% Employment Rate",
      ],
      contact: { phone: "+1 (617) 495-1000", email: "admissions@harvard.edu" },
    },
    {
      id: "BmuUniversity",
      name: "BmuUniversity",
      logo: harvard,
      location: "Cambridge, Massachusetts, USA",
      programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
      highlights: [
        "Founded in 1861",
        "#2 World University Ranking",
        "11,000+ Students",
        "95% Research Publication Rate",
      ],
      contact: { phone: "+1 (617) 253-1000", email: "admissions@mit.edu" },
    },
    {
      id: "DebrecenUniversity",
      name: "DebrecenUniversity",
      logo: harvard,
      location: "Stanford, California, USA",
      programs: ["Computer Science", "Business", "Engineering", "Medicine"],
      highlights: [
        "Founded in 1885",
        "#3 World University Ranking",
        "16,000+ Students",
        "97% Graduate Success Rate",
      ],
      contact: { phone: "+1 (650) 723-2300", email: "admissions@stanford.edu" },
    },
    {
      id: "WekerleUniversity",
      name: "WekerleUniversity",
      logo: harvard,
      location: "Oxford, United Kingdom",
      programs: ["Philosophy", "Economics", "Literature", "Medicine"],
      highlights: [
        "Founded in 1096",
        "#4 World University Ranking",
        "24,000+ Students",
        "95% Research Excellence",
      ],
      contact: { phone: "+44 (1865) 270000", email: "admissions@ox.ac.uk" },
    },
    {
      id: "HungryUniversity",
      name: "HungryUniversity",
      logo: harvard,
      location: "Cambridge, United Kingdom",
      programs: ["Mathematics", "Physics", "Engineering", "Natural Sciences"],
      highlights: [
        "Founded in 1209",
        "#5 World University Ranking",
        "21,000+ Students",
        "92% Student Satisfaction",
      ],
      contact: { phone: "+44 (1223) 337733", email: "admissions@cam.ac.uk" },
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Top Universities</h1>
      <div className="row">
        {universities.map((university, index) => (
          <StudentUniversity key={index} university={university} />
        ))}
      </div>
    </div>
  );
};

export default UniversityCards;
