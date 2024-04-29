import "./App.css";
import { useState } from "react";

function App() {
  const [btn1TooltipIsVisible, setbtn1TooltipIsVisible] = useState(false);
  const [btn2TooltipIsVisible, setbtn2TooltipIsVisible] = useState(false);

  const btn1Text = "This text can be up to 40 characters!!!!";
  const btn2Text = "This text can be up to 40 characters!!!!";

  const isElOverFlown = (elId: string) => {
    const el = document.getElementById(elId);
    const scrollWidth: number | undefined = el?.scrollWidth;
    const clientWidth: number | undefined = el?.clientWidth;

    if (scrollWidth && clientWidth) {
      return scrollWidth > clientWidth;
    }
  };

  const toggleTooltipVisibilityBtn1 = () => {
    if (isElOverFlown("btn1")){
      setbtn1TooltipIsVisible(true)
    }
  };

  const toggleTooltipVisibilityBtn2 = () => {
    if (isElOverFlown("btn2")){
      setbtn2TooltipIsVisible(true)
    }

  };


  return (
    <>
      <section className="flex">
        <article className="wrapper">
          <button
            className="btn"
            id="btn1"
            onMouseEnter={toggleTooltipVisibilityBtn1}
            onMouseLeave={() => {setbtn1TooltipIsVisible(false)}}
          >
            {btn1Text}
            {btn1TooltipIsVisible && (
              <span className="tooltip">{btn1Text}</span>
            )}
          </button>
          <button
            className="btn"
            id="btn2"
            onMouseEnter={toggleTooltipVisibilityBtn2}
            onMouseLeave={() => {setbtn2TooltipIsVisible(false)}}
          >
            {btn2Text}
            {btn2TooltipIsVisible && (
              <span className="tooltip">{btn2Text}</span>
            )}
          </button>
          <button className="btn" id="cancelBtn">
            Cancel
          </button>
          <button className="btn" id="saveBtn">
            Save
          </button>
        </article>
      </section>
    </>
  );
}

export default App;
