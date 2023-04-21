import styled from "styled-components";
import { addOns } from "../data/DynamicFormData";

interface formProps {
  registerAddon: any;
  payYearly: boolean;
}

const AddOns = ({ registerAddon, payYearly }: formProps) => {
  return (
    <>
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      <StyledAddOnDIV className='container m-0 p-0'>
        <div>
          {addOns.map((addon, index) => (
            <>
              <StyledAddonUL className='list-group my-3'>
                <li
                  className='list-group-item d-flex align-items-center justify-content-between py-3 px-3'
                  id={String(index)}
                  key={addon.name}
                >
                  <div className='d-flex align-items-center'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id={addon.name}
                      {...registerAddon(
                        `${addon.name.replace(/ /g, "").toLocaleLowerCase()}`
                      )}
                    />
                    <StyledLabel
                      htmlFor={String(addon.name)}
                      className='form-check-label ms-3 d-flex align-items-center'
                    >
                      <div>
                        <b>{addon.name}</b>
                        <br></br>
                        {addon.description}
                      </div>
                    </StyledLabel>
                  </div>
                  <span style={{ color: "hsl(217, 100%, 37%)" }}>
                    {!payYearly
                      ? "+ $" + addon.priceMonth + "/mo"
                      : "+ $" + addon.priceYear + "/yr"}
                  </span>
                </li>
              </StyledAddonUL>
            </>
          ))}
        </div>
      </StyledAddOnDIV>
    </>
  );
};

export default AddOns;

const StyledAddOnDIV = styled.div`
  input:checked ~ label[for="Online Service"] .list-group {
    background-color: hsl(229, 24%, 96%);
    border: 1px solid black;
  }
`;

const StyledAddonUL = styled.ul`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :hover {
    cursor: pointer;
    border: 0.5px solid black;
  }
`;
const StyledLabel = styled.label`
  :hover {
    cursor: pointer;
  }
`;
