import { Lines } from "./Lines";
import trebleClef from "./trebleclef.svg";
import "./staff.css";
export const Staff = () => {
  // needs a staff configuration
  return (
    <div>
      <img
        className="staffLine clef"
        src={trebleClef}
        alt="TrebleClef"
        height="133"
      />
      <Lines config={{ hSpace: 20, lineLength: 500 }} />
    </div>
  );
};
