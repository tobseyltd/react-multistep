import styled from "styled-components";
import { addOns, plans } from "../data/DynamicFormData";

interface parentProps {
  payYearly: boolean;
  setPage: () => void;
  sumPlans: number;
  data: any;
}

const Summary = ({ data, payYearly, setPage }: parentProps) => {
  const { ...formData } = data;

  let totalSumPlan = 0;
  let totalSumAddons = 0;
  return (
    <>
      <div className='mb-3'>
        <h2>Finishing Up</h2>
        <p>Double-check everything before confirming your order</p>
      </div>

      <StyledSummaryDiv className='d-flex-flex-column'>
        <div className='d-flex align-items-center justify-content-between'>
          <div>
            <span>
              <b>
                {" "}
                {formData.plan}
                {!payYearly ? " (Monthly)" : " (Yearly)"}
              </b>
            </span>
            <br />
            <span
              onClick={setPage}
              className='text-secondary text-decoration-underline'
              style={{ fontSize: 14, cursor: "pointer" }}
            >
              Change
            </span>
          </div>

          <div>
            <span style={{color: 'hsl(217, 100%, 37%)'}}>
              {" "}
              {plans.map((plan) => {
                if (plan.plan === formData.plan && !payYearly) {
                  totalSumPlan = plan.priceMonth;
                  return "+ $" + plan.priceMonth + "/mo";
                }
                if (plan.plan === formData.plan && payYearly) {
                  totalSumPlan = plan.priceYear;
                  return "+ $" + plan.priceYear + "/yr";
                }
              })}
            </span>
          </div>
        </div>

        {formData.onlineservice && (
          <div className='d-flex align-items-center justify-content-between mt-4 pt-3 border-top'>
            <div>
              <span className='text-secondary' style={{ fontSize: 13 }}>
                Online Service
              </span>
            </div>

            <div>
              <span style={{color: 'hsl(217, 100%, 37%)'}}>
                {" "}
                {addOns.map((addon) => {
                  if (
                    addon.name.replace(/ /g, "").toLocaleLowerCase() ===
                      "onlineservice" &&
                    !payYearly
                  ) {
                    totalSumAddons += addon.priceMonth;
                    return (
                      <span style={{ fontSize: 13 }}>
                        {"+ $" + addon.priceMonth + "/mo"}
                      </span>
                    );
                  }

                  if (
                    addon.name.replace(/ /g, "").toLocaleLowerCase() ===
                      "onlineservice" &&
                    payYearly
                  ) {
                    totalSumAddons += addon.priceYear;
                    return (
                      <span style={{ fontSize: 13 }}>
                        {"+ $" + addon.priceYear + "/yr"}
                      </span>
                    );
                  }
                })}
              </span>
            </div>
          </div>
        )}

        {formData.largerstorage && (
          <div className='d-flex align-items-center justify-content-between pt-2'>
            <div>
              <span className='text-secondary' style={{ fontSize: 13 }}>
                Larger Storage
              </span>
            </div>

            <div>
              <span style={{color: 'hsl(217, 100%, 37%)'}}>
                {" "}
                {addOns.map((addon) => {
                  if (
                    addon.name.replace(/ /g, "").toLocaleLowerCase() ===
                      "largerstorage" &&
                    !payYearly
                  ) {
                    totalSumAddons += addon.priceMonth;
                    return (
                      <span style={{ fontSize: 13 }}>
                        {"+ $" + addon.priceMonth + "/mo"}
                      </span>
                    );
                  }

                  if (
                    addon.name.replace(/ /g, "").toLocaleLowerCase() ===
                      "largerstorage" &&
                    payYearly
                  ) {
                    totalSumAddons += addon.priceYear;
                    return (
                      <span style={{ fontSize: 13 }}>
                        {"+ $" + addon.priceYear + "/yr"}
                      </span>
                    );
                  }
                })}
              </span>
            </div>
          </div>
        )}

        {formData.customizableprofile && (
          <div className='d-flex align-items-center justify-content-between pt-2'>
            <div>
              <span className='text-secondary' style={{ fontSize: 13 }}>
                Customizable Profile
              </span>
            </div>

            <div>
              <span style={{color: 'hsl(217, 100%, 37%)'}}>
                {" "}
                {addOns.map((addon) => {
                  if (
                    addon.name.replace(/ /g, "").toLocaleLowerCase() ===
                      "customizableprofile" &&
                    !payYearly
                  ) {
                    totalSumAddons += addon.priceMonth;
                    return (
                      <span style={{ fontSize: 13 }}>
                        {"+ $" + addon.priceMonth + "/mo"}
                      </span>
                    );
                  }

                  if (
                    addon.name.replace(/ /g, "").toLocaleLowerCase() ===
                      "customizableprofile" &&
                    payYearly
                  ) {
                    totalSumAddons += addon.priceYear;
                    return (
                      <span style={{ fontSize: 13 }}>
                        {"+ $" + addon.priceYear + "/yr"}
                      </span>
                    );
                  }
                })}
              </span>
            </div>
          </div>
        )}
      </StyledSummaryDiv>

      {/*/// TOTAL CALC  //////////////////////////////////////////////////////////////////////////////////  */}
      <StyledTotalDiv className='d-flex align-items-center justify-content-between'>
        <span>Total (per {!payYearly ? "month" : "year"})</span>
        <span className='total'>
          +${totalSumPlan + totalSumAddons}
          {!payYearly ? "/mo" : "/yr"}
        </span>
      </StyledTotalDiv>
    </>
  );
};

export default Summary;


const StyledSummaryDiv = styled.div`
  background-color: hsl(231, 11%, 97%);
  padding: 1rem;
  border-radius: 1rem;
`;

const StyledTotalDiv = styled.div`
  padding: 1rem;
  .total {
    color: blue;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
