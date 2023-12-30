import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { US_STATES } from '@/lib/constants';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
const postalCodeRegex = /^\d{5}$/; // regex to ensure postal code is the correct length

const AddressForm = ({ onFormSubmit, initialData, formType }) => {
  const [firstName, setFirstName] = useState(initialData?.firstName || '');
  const [lastName, setLastName] = useState(initialData?.lastName || '');
  const [address, setAddress] = useState(initialData?.address || '');
  const [address2, setAddress2] = useState(initialData?.address2 || '');
  const [city, setCity] = useState(initialData?.city || '');
  const [state, setState] = useState(initialData?.state || '');
  const [postalCode, setPostalCode] = useState(initialData?.postalCode || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [showAddress2, setShowAddress2] = useState(!!initialData?.address2);
  const [formErrors, setFormErrors] = useState({});
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateFields = () => {
    const errors = {};
    if (!firstName.trim()) errors.firstName = 'First name is required';
    if (!lastName.trim()) errors.lastName = 'Last name is required';
    if (!address.trim()) errors.address = 'Address is required';
    if (!city.trim()) errors.city = 'City is required';
    if (!state.trim()) errors.state = 'State is required';
    if (!postalCode.trim()) {
      errors.postalCode = 'Postal code is required';
    } else if (!postalCodeRegex.test(postalCode)) {
      errors.postalCode = 'Invalid postal code';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phone.trim() || phone.replace(/-/g, '').length !== 10) {
      errors.phone = 'Invalid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = () => {
    if (!validateFields()) return; // Stop submission if validation fails
    const formData = {
      firstName,
      lastName,
      address,
      address2: showAddress2 ? address2 : '',
      city,
      state,
      postalCode,
      email,
      phone,
    };
    if (formType === 'shipping') {
      onFormSubmit(formData); // Pass the form data back to the parent component
    } else if (formType === 'billing') {
      onFormSubmit(formData);
    }
  };

  const handlePhoneChange = (e) => {
    //we will need to change this for intl nubmers...
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 6) {
      input = input.slice(0, 6) + '-' + input.slice(6);
    }
    if (input.length > 3) {
      input = input.slice(0, 3) + '-' + input.slice(3);
    }
    setPhone(input.slice(0, 12));
  };

  const handlePostalCodeChange = (e) => {
    //we will need to change this for intl addresses...
    let input = e.target.value;

    let numbers = input.replace(/[^\d]/g, '');

    numbers = numbers.substring(0, 5);

    setPostalCode(numbers);
  };

  const isFormFilled = () => {
    return (
      firstName.trim() &&
      lastName.trim() &&
      address.trim() &&
      city.trim() &&
      state.trim() &&
      postalCode.trim() &&
      email.trim() &&
      phone.trim()
    );
  };

  return (
    <form className="">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="placeholder:text-gray flex-grow border bg-offWhite font-normal border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="placeholder:text-gray flex-grow border bg-offWhite font-normal border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) validateEmail(e.target.value);
          }}
          className="placeholder:text-gray  col-span-2 md:col-span-1 bg-offWhite flex-grow font-normal border border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
          className="placeholder:text-gray col-span-2 md:col-span-1 bg-offWhite flex-grow font-normal border border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="placeholder:text-gray w-full border font-normal bg-offWhite border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
      </div>
      <div
        className="mt-4 flex items-center cursor-pointer"
        onClick={() => setShowAddress2(!showAddress2)}
      >
        <FiPlus size={20} color="#000" />
        <span className="ml-2 font-normal text-sm text-dark">
          Add Company, C/O, Apt, Suite, Unit
        </span>
      </div>
      {showAddress2 && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Address 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="placeholder:text-gray w-full font-normal bg-offWhite border border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
          />
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="placeholder:text-gray flex-grow font-normal bg-offWhite border border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
        <select
          value={state}
          placeholder="Select"
          onChange={(e) => setState(e.target.value)}
          className="placeholder:text-gray flex-grow border bg-offWhite border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl font-normal h-14 text-dark"
        >
          <option value="" className="text-gray">
            Select
          </option>{' '}
          {/* Added this line */}
          {US_STATES.map((state) => (
            <option
              key={state.abbreviation}
              value={state.abbreviation}
              className="text-dark"
            >
              {state.abbreviation}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={handlePostalCodeChange}
          className="placeholder:text-gray bg-offWhite col-span-2 md:col-span-1 flex flex-grow font-normal border border-dark border-opacity-30 hover:border-opacity-100 transition duration-250 p-4 rounded-xl h-14 text-dark"
        />
      </div>

      <div className="mt-6 flex justify-center md:justify-end">
        <button
          type="button"
          className={`px-4 py-2 rounded-xl ${
            isFormFilled()
              ? 'bg-black text-offWhite'
              : 'bg-offWhite border border-dark border-opacity-30 text-gray'
          }`}
          onClick={handleSubmit}
        >
          Save & Continue
        </button>
      </div>
      {Object.values(formErrors).map((error, index) => (
        <div key={index} className="error-message" style={{ color: 'red' }}>
          {error}
        </div>
      ))}
    </form>
  );
};

export default AddressForm;
