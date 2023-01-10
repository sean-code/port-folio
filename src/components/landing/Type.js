import Typewriter from "typewriter-effect";
import './Home.css'

function Type() {
  return (
    <div className="type-effect">
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "Bioinformatician Graduate",
          "UI/UX Designer",
          "Deep Learning Engineer",
          
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
    </div>
  );
}

export default Type;