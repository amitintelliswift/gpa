import React, { useEffect, useRef, useState } from "react";
import PlanDetails from "../../data/PlanDetail/PlanDetail.json";
import Modal from "../Modal/Modal";
const Tabs = (props) => {
  const { isMobile } = props;
  const [more, setMore] = useState(false);
  const [active, setActive] = useState(1);
  const [planData, setPlanData] = useState(PlanDetails.termsAndConditions);
  const wrapperRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleMore = () => {
    setMore(!more);
    setActive(0);
  };
  const toggleShow = () => setShow((p) => !p);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMore(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const alltabs = [
    {
      tabName: "Terms and Conditions",
      tabId: 1,
    },
    {
      tabName: "Coverage",
      tabId: 2,
    },
    {
      tabName: "Accidental Death",
      tabId: 3,
    },
    {
      tabName: "Permanent Total Disablement (PTD) ",
      tabId: 4,
    },
    {
      tabName: "Permanent Partial Disablement (PPD)",
      tabId: 5,
    },
    {
      tabName: "Children’s ",
      tabId: 6,
    },
    // {
    //   tabName: "Accidental Hospitalization (Inpatient)",
    //   tabId: 7,
    // },
    // {
    //   tabName: "Carriage of Dead Body",
    //   tabId: 8,
    // },
    // {
    //   tabName: "Funeral Expenses",
    //   tabId: 9,
    // },
    // {
    //   tabName: "Ambulance Charges",
    //   tabId: 10,
    // },
  ];

  const togglTabs = (id) => {
    setActive(() => id);
    let allData = {};
    if (id) {
      switch (id) {
        case 1:
          allData = PlanDetails.termsAndConditions;
          break;
        case 2:
          allData = PlanDetails.OurTerms;
          break;
          case 3:
          allData = PlanDetails.AccidentalDeath;
          break;
          case 4:
          allData = PlanDetails.Permanent;
          break;
        default:
          allData = PlanDetails.termsAndConditions;
      }
      setPlanData(allData);
    }
  };

  return (
    <section className="planDetails cardShadow">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="heading">Plan Details</div>
            <div className="planTabsWrap">
              {isMobile && (
                <div className="tabs isMobile">
                  {alltabs && alltabs.length > 2 ? (
                    <>
                      {alltabs.slice(0, 1).map((tab, index) => (
                        <button
                          className={`tab ${
                            active == tab.tabId ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => togglTabs(tab.tabId)}
                        >
                          {tab.tabName}
                        </button>
                      ))}
                      <button
                        className={`tab ${active == 0 ? "active" : ""}`}
                        onClick={toggleShow}
                      >
                        More
                      </button>
                    </>
                  ) : (
                    <>
                      {alltabs.map((tab, index) => (
                        <button
                          className={`tab ${
                            active == tab.tabId ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => togglTabs(tab.tabId)}
                        >
                          {tab.tabName}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              )}

              {show && (
                <Modal
                  show={show}
                  toggleShow={toggleShow}
                  title={"More"}
                  isFooter={false}
                  data={alltabs}
                  togglTabs={togglTabs}
                />
              )}

              <div className="tabs deskTop">
                {alltabs && alltabs.length > 4 ? (
                  <>
                    {alltabs.slice(0, 4).map((tab, index) => (
                      <button
                        className={`tab ${active == tab.tabId ? "active" : ""}`}
                        key={index}
                        onClick={() => togglTabs(tab.tabId)}
                      >
                        {tab.tabName}
                      </button>
                    ))}

                    <button
                      className={`tab hadDropdown ${
                        active == 0 ? "active" : ""
                      }`}
                      onClick={() => handleMore(0)}
                    >
                      More
                      {more && (
                        <ul className="dropDown" ref={wrapperRef}>
                          {alltabs.slice(4).map((tab, index) => (
                            <li>
                              <button
                                className={`dropTab ${
                                  active == tab.tabId ? "active" : ""
                                }`}
                                key={index}
                                onClick={() => togglTabs(tab.tabId)}
                              >
                                {tab.tabName}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    {alltabs.map((tab, index) => (
                      <button
                        className={`tab ${active == tab.tabId ? "active" : ""}`}
                        key={index}
                      >
                        {tab.tabName}
                      </button>
                    ))}
                  </>
                )}
              </div>
              <div className="tabContent">
                <div className="tabPane">
                  <ul>
                    {planData &&
                      planData.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tabs;
