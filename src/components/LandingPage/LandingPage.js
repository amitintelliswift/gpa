import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LandingPage.css";
import Header from "../Layout/Header/Header";
import HeaderNav from "../Layout/Header/HeaderNav";
import ProductBenefits from "../ProductBenefits/ProductBenefits";
import ForwardIcon from "../../static/icons/forward_Icon.svg";
import CalenderIcon from "../../static/icons/calender_Icon.svg";
import kotakLogoRed from "../../static/images/kotakLogoRed.png";
import GraphicsImg from "../../static/images/leftside_Graphics_Image.svg";
import Tabs from "../Tabs/Tabs";
import { Link } from "react-router-dom";
import * as AllRoutes from "../../routes";
import history from "../../history";
import { savePremiumData } from "../../actions/saveData";
import {
  getPartnerTokenDetails,
  getIMDWiseGroupProductCode,
} from "../../actions/getPartnerTokenDetails";
import { sortBy } from "lodash";

const LandingPage = (props) => {
  const dispatch = useDispatch();
  const [activeClass, setActiveClass] = useState(108);
  const [policyOption, setPolicyOption] = useState();
  let allData = [];
  let selectedOption = "";
  
  const getPartnerToken = useSelector(
    (state) => state.getPartnerTokenDetails.partnerTokenDetails
  );
  const wiseGroupProductCode = useSelector(
    (state) => state.getPartnerTokenDetails.wiseGroupProductCode
  );
  const [data, setData] = useState();
  const [productCondition, setProductCondition] = useState();
  const [dataToNext, setDataToNext] = useState({ planID: 108, premium: 3000, totalSumInsured: 2075000 });
  const [opt, setOpt] = useState("");
  const [urlParam, setUrlParam] = useState(false);

  // Append the URL
  useEffect(() => {
    const customURL =
      "?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263";
    history.push({
      pathname: AllRoutes.LANDING_PAGE,
      search: customURL,
    });
  }, []);

  // Get the isKsec Value from URL
  useEffect(() => {
    setTimeout(() => {
      const search = window.location.search;
      const isKsec = new URLSearchParams(search).get("isKsec");
      setUrlParam(isKsec === "1" ? true : false);
    }, 1);
  }, []);

  // Partner Token API CALL
  useEffect(() => {
    dispatch(getPartnerTokenDetails());
  }, [dispatch]);

  // GET IMDWISE Product API CALL
  useEffect(() => {
    if (urlParam) {
      dispatch(
        getIMDWiseGroupProductCode(getPartnerToken?.vParentIntermediaryCode)
      );
    }
  }, [dispatch, getPartnerToken, urlParam]);

  // Setting Value from getIMDWiseGroupProductCode to Local State
  useEffect(() => {
    wiseGroupProductCode &&
      wiseGroupProductCode?.listGroupProductCoverageSumInsured?.map((op) => {
        if (activeClass === op.nPlanid) {
          allData.push(op);
        
        }
      });
    setPolicyOption(1);
    setData(allData);

  }, [wiseGroupProductCode,]);

  // Toggle Table with Data
  const toggleBenfitTable = (nPlanid, nTotalSumInsured, nTotalPremium, selOpt) => {
    wiseGroupProductCode.listGroupProductCoverageSumInsured?.map((op) => {
      if (nPlanid === op.nPlanid) {
        allData.push(op);
        selectedOption = selOpt;
        
      }
    });
    setPolicyOption(selectedOption);
        setActiveClass(() => (
            nPlanid
        ));
        setData(allData);

        

        setDataToNext({
            planID: nPlanid,
            premium: nTotalPremium,
            totalSumInsured: nTotalSumInsured,
            selectedPlan: selOpt
        })


  };
  // Store the premium Data
  useEffect(() => {
    dispatch(savePremiumData(dataToNext));
  }, [dataToNext]);

  // Function for click event on confirm Button
  const handleConfirm = () => {
    // console.log(policyOption)
  };

  // Function to check the checkbox
  const handleChange = (event) => {
    setOpt(event.target.value);
  };

  return (
    <main className="main">
      <Header />
      <HeaderNav />

      {/* KOTAK GROUP SMART CASH */}
      <section className="smartCash cardShadow">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="smartLeftContent">
                <div className="logoWrap">
                  <img src={kotakLogoRed} alt="kotakLogo" />
                </div>
                <div className="smartcashText">
                  <div className="heading">Kotak Group Smart Cash</div>
                  <div className="optionInfo">
                    <div className="options">
                      <img src={ForwardIcon} alt="claim" />
                      <span>24Hr claim Settlement</span>
                    </div>
                    <div className="options">
                      <img src={CalenderIcon} alt="Refund" />
                      <span>30 Days Easy Refund</span>
                    </div>
                  </div>
                  <div className="planDetail">
                    <button className="plandetailBtn">View Plan Details</button>
                  </div>
                </div>
              </div>
            </div>
           <div className="col-sm-12 col-md-12 col-lg-7">
                  <div className="smartRightContent">
                    <div className="heading">Cover, Premium</div>
                    <div className="infoText">
                      In case of your death before age of 60 years, your nominee
                      will get an amount of ₹ 1 Crore, Tax free.
                    </div>
                    <div className="clickableWrapper">
                      {wiseGroupProductCode.listGroupProductPlanDetails?.sort((a,b)=> a.nTotalSumInsured-b.nTotalSumInsured).map(
                        (op, index) => (
                          <button
                            className={
                              activeClass === op.nPlanid
                                ? "clickableButton active"
                                : "clickableButton"
                            }
                            onClick={() =>
                              toggleBenfitTable(op.nPlanid, op.nTotalSumInsured, op.nTotalPremium, index + 1)
                            }
                            key={index}
                          >
                            <span className="optionText">
                              Option {index + 1}
                            </span>
                            <span className="premiumText">
                              Premium <strong>₹ {(op.nTotalPremium)}</strong>
                            </span>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCT BENEFITS */}
          <section className="cardShadow productBenefits">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5">
                  <div className="leftContent">
                    <img src={GraphicsImg} alt="benefits" />
                    <div className="heading1">
                      You Can Count On Us Whenever Your Loved Ones Need Us
                    </div>
                    <div className="botText">
                      In Case Of Your Death Before Age Of 60 Years, Your{" "}
                      <br></br>Nominee Will Get An Amount Of ₹ 1 Crore, Tax
                      Free.
                    </div>
                    </div>
                    </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="rightContent">
                <div className="heading">Product benefits</div>
                <div className="benifitTable">
                  <ProductBenefits
                    benifits={data}
                    selectedOption={policyOption}
                    premium={dataToNext}
                    // totalSumInsured={dataToNext}
                  />
                </div>
                <div className="conformWrap">
                  <div className="conformText">
                    <input
                      type="checkbox"
                      value="opt"
                      onChange={handleChange}
                    />
                    <span>
                      Optional:save time by renewing the policy automatically
                      for 3 years by debiting the premium amount from the bank
                      account or credit car provided
                    </span>
                  </div>
                  <div className="buttonWrap">
                    <Link
                      to={AllRoutes.DEALER_JOURNEY_STEP_ONE}
                      state={{
                        policyData: dataToNext,
                        checkOptional: opt,
                      }}
                    >
                      <button className="btnConfirm" onClick={handleConfirm}>
                        Confirm
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Tabs isMobile={true} productCondition={productCondition} />
    </main>
  );
};
export default LandingPage;
