interface Props {
  registerName: any;
  registerEmail: any;
  registerPhone: any;
  hasNameErrors: JSX.Element;
  hasEmailErrors: JSX.Element;
  hasPhoneErrors: JSX.Element;
}

const PersonalInfo = ({
  registerName,
  registerEmail,
  registerPhone,
  hasNameErrors,
  hasEmailErrors,
  hasPhoneErrors,
}: Props) => {
  return (
    <>
      {" "}
      <div>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <div className='mb-2'>
        <label
          htmlFor='name'
          className='form-label'
          style={{ color: "hsl(213, 96%, 25%)" }}
        >
          Name
        </label>
        <input
          {...registerName}
          id='name'
          type='text'
          placeholder='e.g. Stephen King'
          className='form-control p-2'
        />
        {hasNameErrors}
      </div>
      <div className='mb-3'>
        <label
          htmlFor='email'
          className='form-label'
          style={{ color: "hsl(213, 96%, 25%)" }}
        >
          Email Address
        </label>
        <input
          id='email'
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          className='form-control p-2'
          {...registerEmail}
        />
        {hasEmailErrors}
      </div>
      <div className='mb-3'>
        <label
          htmlFor='phone'
          className='form-label'
          style={{ color: "hsl(213, 96%, 25%)" }}
        >
          Phone Number
        </label>
        <input
          id='phone'
          type='text'
          className='form-control p-2'
          placeholder='e.g. + 1 234 567 890'
          {...registerPhone}
        />
        {hasPhoneErrors}
      </div>
    </>
  );
};

export default PersonalInfo;
