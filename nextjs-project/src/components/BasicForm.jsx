import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const BasicForm = () => {
    // insert form data as variables in a useState function as an array to handle the form data
            const [formData, SetFormData] = useState({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                age: "",
                gender: "",
                interests: [],
                birthDate: "",
            });
    // create a handleChange variable to handle the change event of the input fields to add data using the onChange function
const handleChange = (e) => {
    const {name, value} = e.target;
        SetFormData({
            ...formData,
            [name]: value
        })
    }
    
    // create a handleChange variable to handle the change event of the input fields to add data using the onChange function
const handleCheckboxChange = (e) => {
    const {name, checked} = e.target;
    let updatedInterests = [...formData.interests];
        if (checked) {
            updatedInterests.push(name);
        } else {
            updatedInterests = updatedInterests.filter(
                (interests) => interest !== name
            );
        }

        SetFormData({
            ...formData,
            interests: updatedInterests,
        })
    }

    //Create a state to handle errors
const [errors, setErrors] = useState()

    //Create an isValid variable with a function to handle 
const isValidEmail = (email) => {
        //The regular expression for basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    //The regular expression for basic phone number validation (09 digits for Cameroon)
    // const isValidPhoneNumber = (phoneNumber) => {
    //     const phoneRegex = /^\d{09}$/;
    //     return phoneRegex.test(phoneNumber);
    // };

    //The regular expression for basic password validation
const isValidPassword = () => {
        const symbolRegex = /[!@#%^&*(),.?":{}|<>]/;
        const numberRegex = /[0.9]/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        return (
            password.length >= 8 &&
            symbolRegex.test(password) &&
            numberRegex.test(password) &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password)
        );
    }

const isValidAge = (age) => {
            return parseInt(age) >= 16 && parseInt(age) <= 100;
    };


    // create a validateForm variable and function to handle the form input validation
const validateForm = () => {
        let newErrors = {}
        if (!formData.firstName) {
            newErrors.firstName = "First name is Required"
        }
        if (!formData.lastName) {
            newErrors.lastName = "Last name is Required"
        }
        if (!formData.email) {
            newErrors.email = "Invalid Email!"
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid Email format"
        }
    
        if (!formData.password) {
            newErrors.password = "Password is Required"
        } else if (!isValidPassword(formData.password)) {
            newErrors.password = "Password must be atleast 8 characters long and contain at least one symbol, number, one uppercase letter, and one lowercase letter";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is Required";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmpassword = "Phone Number must be 09 digits";
        }
        if (!formData.age) {
            newErrors.age = "Age is Required"
        } else if (!isValidAge(formData.age)) {
            newErrors.age = "You must be atleast 16years old and above";
        }
        if (!formData.gender) {
            newErrors.gender = "Gender is Required";
        }
        if (!formData.interests.length === 0) {
            newErrors.interests = "Select atleast one interest";
        }
        if (!formData.birthDate) {
            newErrors.birthDate = "Date of Birth is Required"
        }

        setErrors(newErrors);
        return object.keys(newErrors).length === 0;
    };
    console.log(errors);

    // create a function to handle the submit button 
const SubmitBtn = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log("Form Submitted", formData)
        } else {
            console.log("Form Validation Failed!")
        }
      }
    return (
        <div className='BasicForm'>
            <form className='form' onSubmit={SubmitBtn}>
                <div className='FirstName'>
                    <label>First Name:</label>
                        <input
                            type="text"
                            name='firstName'
                            value={formData.firstName}
                            placeholder='Enter your first name'
                            onChange={handleChange}
                        />
                </div>

                <div className='LastName'>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name='lastName'
                        value={formData.lastName}
                        placeholder='Enter your last name'
                        onChange={handleChange}
                    />
                </div>

                <div className='Email'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Enter your Email'
                        onChange={handleChange}
                    />
                </div>

                <div className='PhoneNumber'>
                    <label>Phone Number:</label>
                    <PhoneInput
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                    />
                </div>
                
                <div className='Password'>
                    <label>Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        placeholder='******'
                        onChange={handleChange}
                    />
                </div>
                
                <div className='ConfirmPassword'>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        placeholder='Confirm your password'
                        onChange={handleChange}
                    />
                </div>
                
                <div className='Age'>
                    <label>Age:</label>
                    <input
                        type="number"
                        name='age'
                        value={formData.age}
                        placeholder='Enter your Age'
                        onChange={handleChange}
                    />
                </div>
                
                <div className='Gender'>
                    <label>Gender:</label>
                    <select name='gender' value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className='Interests'>
                    <label>Interests:</label>
                    <div className='interests'>
                        <label>
                            <input
                                type="checkbox"
                                name='coding'
                                value={formData.firstName}
                                checked={formData.interests.includes('coding')}
                                    onChange={handleCheckboxChange}
                            />
                            Coding
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name='sports'
                                checked={formData.interests.includes('sports')}
                                onChange={handleCheckboxChange}
                            />
                            Sports
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name='reading'
                                checked={formData.interests.includes('reading')}
                                onChange={handleCheckboxChange}
                            />
                            Reading
                        </label>
                        </div>
                </div>
                
                <div className='BirthDate'>
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            name='birthDate'
                            value={formData.birthDate}
                            placeholder='Enter your Date of Birth'
                            onChange={handleChange}
                        />
                </div>
                
                <div className='submitBtn'>
                    <button type='submit'>Submit</button>
                    </div>
            </form>
        </div>
  )
}

export default BasicForm
