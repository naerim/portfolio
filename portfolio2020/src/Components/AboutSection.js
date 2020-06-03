import React from "react";

const AboutSection = () => {
  return (
    <section className="About">
      <div className="AboutContents">
        <div className="Title">
          <h2>ABOUT</h2>
        </div>
        <div className="AboutBox">
          <div className="Image">
            <img src="#" alt="MyPhoto" />
            <h5>EXP 19991119</h5>
          </div>
          <div className="Level">
            <h3>LV.22</h3>
            <div className="LevelBox">
              <img src="#" alt="Level" />
            </div>
          </div>
          <h3>Class: Student</h3>
          <div className="HPMP">
            <img src="#" alt="HPMP" />
          </div>
          <div className="Introduce">
            <h4>안녕하세요. 저는 개발자 김내림입니다.</h4>
          </div>
        </div>
      </div>

      <div className="Skills">
        <div className="CPlusPlus">
          <h3>C++</h3>
          <div> </div>
        </div>
        <div className="Java">
          <h3>JAVA</h3>
          <div> </div>
        </div>
          <div className="HTML">
              <h3>HTML</h3>
              <div> </div>
          </div>
        <div className="CSS">
          <h3>CSS</h3>
          <div> </div>
        </div>
        <div className="Javascript">
          <h3>Javascript</h3>
          <div> </div>
        </div>
        <div className="React">
          <h3>React</h3>
          <div> </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
