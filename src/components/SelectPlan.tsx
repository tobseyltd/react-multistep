import styled from "styled-components";
import { plans } from "../data/DynamicFormData";

interface FormProps {
  registerPlan: any;
  registerYearlyPayment: any;
  payYearly: boolean;
  setYeary: () => void;
  hasPlanErrors: JSX.Element;
}

const SelectPlan = ({
  registerPlan,
  registerYearlyPayment,
  payYearly,
  setYeary,
  hasPlanErrors,
}: FormProps) => {
  return (
    <>
      <div>
        <h2>Select your plan</h2>
        <p>you have the option of monthly or year billing</p>
      </div>
      <div className='container p-0'>
        <div className='d-flex flex-xl-row flex-column justify-content-between'>
          {plans.map((plan) => (
            <StyledPlanDiv key={plan.plan}>
              <input
                type='radio'
                id={plan.plan}
                value={plan.plan}
                {...registerPlan}
              />

              <StyledPlanLabel
                htmlFor={plan.plan}
                className='form-label d-flex d-xl-block px-3 py-xl-3'
              >
                <img src={plan.img} alt={plan.plan} />

                <div className='pt-xl-5 p-3 p-xl-0'>
                  <b>{plan.plan}</b>
                  <br></br>

                  {!payYearly ? (
                    <span className='fs-6 text-secondary '>
                      ${plan.priceMonth}/mo
                    </span>
                  ) : (
                    <>
                      <span className='text-secondary'>
                        ${plan.priceYear}/yr
                      </span>

                      <StyledFreeMonthP>2 Months free</StyledFreeMonthP>
                    </>
                  )}
                </div>
              </StyledPlanLabel>
            </StyledPlanDiv>
          ))}
        </div>
        {hasPlanErrors}
        <StyledSwitchDiv>
          <div className='container d-flex flex-row justify-content-center align-items-center py-2'>
            <label htmlFor='yearlyPayment' className='form-label me-3'>
              {!payYearly ? (
                <div className='mt-1'>
                  <b>Monthly</b>
                </div>
              ) : (
                <div className='text-secondary mt-1'> Monthly</div>
              )}
            </label>

            <div className='form-check form-switch'>
              <div>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault'
                  {...registerYearlyPayment}
                  onChange={setYeary}
                />
              </div>
            </div>

            <label htmlFor='yearlyPayment' className='form-label ms-1'>
              {!payYearly ? (
                <div className='text-secondary mt-1'>Yearly</div>
              ) : (
                <div className='mt-1'>
                  <b>Yearly</b>
                </div>
              )}
            </label>
          </div>
        </StyledSwitchDiv>
      </div>
    </>
  );
};

export default SelectPlan;

const StyledSwitchDiv = styled.div`
  background-color: hsl(231, 11%, 96%);
  margin-top: 2rem;
  border-radius: 0.5rem;
`;

const StyledFreeMonthP = styled.p`
 font-size: 0.8rem;
 margin-top 0.2rem;
 color: hsl(217, 100%, 37%);
`;

const StyledPlanLabel = styled.label`
  cursor: pointer;
  width: 130px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const StyledPlanDiv = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  input {
    display: none;
  }

  cursor: pointer;

  input:hover ~ label[for="Arcade"] {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }

  input ~ label[for="Arcade"] {
    border: 1px solid hsl(229, 24%, 86%);
    border-radius: 10px;
  }

  input:checked ~ label[for="Arcade"] {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }

  input:hover ~ label[for="Advanced"] {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }

  input ~ label[for="Advanced"] {
    border: 1px solid hsl(229, 24%, 86%);
    border-radius: 10px;
  }

  input:checked ~ label[for="Advanced"] {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }

  input:hover ~ label[for="Pro"] {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }

  input ~ label[for="Pro"] {
    border: 1px solid hsl(229, 24%, 86%);
    border-radius: 10px;
  }

  input:checked ~ label[for="Pro"] {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }
`;
