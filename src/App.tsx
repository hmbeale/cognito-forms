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
    isElOverFlown("btn1")
      ? setbtn1TooltipIsVisible(true)
      : setbtn1TooltipIsVisible(false);
  };

  const toggleTooltipVisibilityBtn2 = () => {
    isElOverFlown("btn2")
      ? setbtn2TooltipIsVisible(true)
      : setbtn2TooltipIsVisible(false);
  };

  const setBtn1ToolTipNotVisible = () => {
    setbtn1TooltipIsVisible(false);
  };

  const setBtn2ToolTipNotVisible = () => {
    setbtn2TooltipIsVisible(false);
  };

  return (
    <>
      <section className="flex">
        <article className="wrapper">
          <button
            className="text--truncated"
            id="btn1"
            onMouseEnter={toggleTooltipVisibilityBtn1}
            onMouseLeave={setBtn1ToolTipNotVisible}
          >
            {btn1Text}
            {btn1TooltipIsVisible && (
              <span className="tooltip">{btn1Text}</span>
            )}
          </button>
          <button
            className="text--truncated"
            id="btn2"
            onMouseEnter={toggleTooltipVisibilityBtn2}
            onMouseLeave={setBtn2ToolTipNotVisible}
          >
            {btn2Text}
            {btn2TooltipIsVisible && (
              <span className="tooltip">{btn2Text}</span>
            )}
          </button>
          <button className="text--truncated" id="cancelBtn">
            Cancel
          </button>
          <button className="text--truncated" id="saveBtn">
            Save
          </button>
        </article>
      </section>
    </>
  );
}

export default App;
