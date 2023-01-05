import Typewriter from "typewriter-effect";
import './Home.css'

function Type() {
  return (
    <div className="type-effect">
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Deep Learning Engineer",
          "Full Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;