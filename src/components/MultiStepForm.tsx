import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";
import { formSteps } from "../data/DynamicFormData";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import bgimage from "../assets/images/bg-sidebar-desktop.svg";

const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [payYearly, setYearly] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    setFormData(data);
  };
  console.log(errors.email);
  return (
    <>
      <StyledSection className='container rounded'>
        <div
          className='d-flex flex-column flex-xl-row'
          style={{ height: "100%" }}
        >
          <StyledCol
            className='col-4 p-xl-4'
            style={{ backgroundImage: `url(${bgimage})` }}
          >
            <ul className='list-group d-flex justify-content-center flex-row flex-xl-column'>
              {formSteps.map((step, index) => (
                <li
                  className='list-group-item d-flex justify-content-between align-items-start border-0 bg-transparent my-2'
                  key={step}
                >
                  <span
                    className={`${
                      currentPage === index + 1 && "active-step"
                    } + list-group-item  rounded-circle me-xl-2  bg-transparent text-white`}
                  >
                    {index + 1}
                  </span>
                  <StyledStepDiv className='d-none ms-2 me-auto text-white d-xl-flex flex-xl-column'>
                    <span>STEP {index + 1}</span>
                    <span className='fw-bold'>{step.toUpperCase()}</span>
                  </StyledStepDiv>
                </li>
              ))}
            </ul>
          </StyledCol>

          {/*/// Thank You Page //////////////////////////////////////////////////////////////////////////////////  */}
          {currentPage === 5 ? (
            <StyledFormContent
              className='col py-4 px-5 mx-4 d-flex flex-column justify-content-between'
              onSubmit={handleSubmit(onSubmit)}
              id='multistep'
            >
              <ThankYou />
            </StyledFormContent>
          ) : (
            <StyledFormContent
              className='col py-4 px-xl-5 mx-xl-4 d-flex flex-column justify-content-between'
              onSubmit={handleSubmit(onSubmit)}
              id='multistep'
            >
              {/*/// FORM Pages //////////////////////////////////////////////////////////////////////////////////  */}
              {currentPage === 1 && (
                <PersonalInfo
                  registerName={register("name", {
                    required: true,
                    minLength: 10,
                  })}
                  registerEmail={register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  registerPhone={register("phone", { required: true })}
                  hasNameErrors={
                    <>
                      {errors.name?.type === "required" && (
                        <p className='text-danger'>
                          The Name field is required
                        </p>
                      )}
                      {errors.name?.type === "minLength" && (
                        <p className='text-danger'>
                          The name must be at least 10 characters
                        </p>
                      )}
                    </>
                  }
                  hasEmailErrors={
                    <>
                      {errors.email?.type === "required" && (
                        <p className='text-danger'>
                          The email field is required
                        </p>
                      )}
                      {errors.email?.type === "pattern" && (
                        <p className='text-danger'>
                          The email field must contain a valid pattern!
                        </p>
                      )}
                    </>
                  }
                  hasPhoneErrors={
                    <>
                      {errors.phone?.type === "required" && (
                        <p className='text-danger'>
                          "Phone Number must be valid and contain numbers"
                        </p>
                      )}
                    </>
                  }
                />
              )}

              {currentPage === 2 && (
                <SelectPlan
                  registerPlan={register("plan", { required: true })}
                  registerYearlyPayment={register("yearlyPayment")}
                  payYearly={payYearly}
                  setYeary={() => setYearly(!payYearly)}
                  hasPlanErrors={
                    <>
                      {errors.plan?.type === "required" && (
                        <p className='text-danger'>Please select a plan!</p>
                      )}
                    </>
                  }
                />
              )}

              {currentPage === 3 && (
                <AddOns registerAddon={register} payYearly={payYearly} />
              )}

              {currentPage === 4 && (
                <Summary
                  payYearly={payYearly}
                  setPage={() => setCurrentPage(2)}
                  data={formData}
                  sumPlans={0}
                />
              )}

              {/*/// FORM NAVIGATION //////////////////////////////////////////////////////////////////////////////////  */}
              <div className='d-flex flex-row justify-content-between bg-white align-items-end'>
                <div>
                  {currentPage !== 1 && (
                    <StyledBackButton
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className='back-button'
                    >
                      Go back
                    </StyledBackButton>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => isValid && setCurrentPage(currentPage + 1)}
                    type='submit'
                    className='btn btn-primary mt-5 btn-md'
                  >
                    {currentPage !== formSteps.length ? "Next Page" : "Confirm"}
                  </button>
                </div>
              </div>
            </StyledFormContent>
          )}
        </div>
      </StyledSection>
    </>
  );
};

export default MultiStepForm;

const StyledCol = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  @media (max-width: 1200px) {
    background-image: url("../src/assets/images/bg-sidebar-mobile.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 140px;
    border-radius: 0px;
  }
`;

const StyledSection = styled.section`
  background-color: white;
  padding: 1rem;
  width: 56vw;
  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    padding: 0px;
    background-color: transparent;
  }
`;

const StyledFormContent = styled.form`
  height: 38rem;
  @media (max-width: 1200px) {
    padding: 1rem;
    margin-top: -3rem;
    z-index: 110;
    background-color: white;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
  }
`;

const StyledStepDiv = styled.div`
  font-size: 0.85rem;
  letter-spacing: 0.15rem;
`;

const StyledBackButton = styled.span`
  cursor: pointer;
  color: hsl(229, 24%, 57%);
  font-weight: 700;

  :hover {
    color: hsl(213, 96%, 18%);
  }
`;
