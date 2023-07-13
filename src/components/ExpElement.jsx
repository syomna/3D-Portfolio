import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Colors } from "../utils/colors";

const ExpElement = ({ img, title, place, isIti, date }) => {
  const iti = (
    <p style={{ fontSize: 12, color: Colors.grey }}>
      ● Worked on real-world projects, collaborating with a team of developers
      <br />
      ● Enhanced technical skills in front-end web development (HTML, CSS,
      JavaScript, TypeScript)
      <br />
      ● Familiarity with frameworks like Angular, React (with Redux)
      <br />
      ● Proficient in Node.js, Express.js, MongoDB
      <br />
      ● Knowledge of UI/UX principles using Figma
      <br />● Experienced in cross-platform mobile app development (React
      Native, Flutter)
    </p>
  );

  const upwork = (
    <p style={{ fontSize: 12, color: Colors.grey }}>
      • Collaborated with clients to develop seamless mobile applications using
      Flutter framework.
      <br />• Leveraged Firebase for real-time database, user authentication,
      and cloud storage. <br />• Integrated various APIs to enhance app
      functionality and enable data synchronization with external services.{" "}
      <br />• Developed captivating, responsive user interfaces using React.js
      and Next.js for web projects.
    </p>
  );
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: Colors.blue, color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #1c153b" }}
      date={date}
      iconStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        color: "#fff",
      }}
      icon={<img height={35} src={img} />}
    >
      <h4 className="vertical-timeline-element-title">{title}</h4>
      <h5 className="vertical-timeline-element-subtitle">{place}</h5>
      {isIti ? iti : upwork}
    </VerticalTimelineElement>
  );
};

export default ExpElement;
