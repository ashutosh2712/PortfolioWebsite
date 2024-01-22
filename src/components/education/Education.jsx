import React from "react";
import "./education.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import educations from "../../educations";
const Education = () => {
  return (
    <section id="education">
      <h5>Education</h5>
      <h2>University Educations</h2>
      <div className="educationContainer">
        <VerticalTimeline lineColor="">
          {educations.map((education) => (
            <VerticalTimelineElement
              key={education.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "var(--color-primary)",
                color: "var(--color-white)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--color-primary)",
              }}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "var(--color-white)",
              }}
              date={education.date}
              icon={education.icon}
            >
              <h3>{education.college}</h3>
              <h5>{education.location}</h5>
              <p>{education.degree}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
