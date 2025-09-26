import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import * as Yup from 'yup' 

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
    //Create a state to handle errors
        const [errors, setErrors] = useState({})

        // create a function to handle the submit button 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await validationSchema.validate(formData, {abortEarly: false});
            console.log('Form Submitted', formData);
        } catch (error) {
            const newErrors = {};

            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
            // console.log("Error Msg", formData);
        }
}
        
    //Create a validation schema variable with a function to handle all the form fields using Yup
    const validationSchema = Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required(""),
            email: Yup.string("Invalid email").required('Email is required'),
            password: Yup.string().required("Password is Required").matches(5, '').matches(/[!@#%^&*(),.?":{}|<>]/, 'Password contain at least one symbol').matches(/[A-Z]/, 'Password must contain at least one uppercase letter').matches(/[a-z]/, 'Password must contain at least one lowercase letter'),
            confirmPassword: Yup.string().oneOf([Yup.ref("password")], 'Passwords must match').required(),
            age: Yup.number().typeError("Age must be a number").min(16, 'Must be atleast 16years old').required("Age is required"),
            gender: Yup.string().required(""),
            interests: Yup.array().min(1, 'Must have atleast one interest').required("Interest is required"),
            birthDate: Yup.date().required("Date of birth is required"),
        })
    
        // create a handleChange variable to handle the change event of the input fields to add data using the onChange function
        const handleChange = (e) => {
        let {name, value} = e.target;
            SetFormData({
                ...formData,
                [name]: value,
            });
        }
        
        const handleCheckboxChange = (e) => {
        let {name, checked} = e.target;
        let updatedInterests = [...formData.interests];
            if (checked) {
                updatedInterests.push(name);
            } else {
                updatedInterests = updatedInterests.filter(
                    (interest) => interest !== name
                );
            }

            SetFormData({
                ...formData,
                interests: updatedInterests,
            })
        }
        
    return (
        <div className='BasicForm'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='FirstName flex gap-8'>
                    <label>First Name:</label>
                        <input
                            type="text"
                            name='firstName'
                            value={formData.firstName}
                            placeholder='Enter your first name'
                            onChange={handleChange}
                    />
                    {errors.firstName && <div className='error'>{errors.firstName}</div>}
                </div>

                <div className='LastName flex gap-10'>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name='lastName'
                        value={formData.lastName}
                        placeholder='Enter your last name'
                        onChange={handleChange}
                    />
                    {errors.lastName && <div className='error'>{errors.lastName}</div>}
                </div>

                <div className='Email flex gap-5'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Enter your Email'
                        onChange={handleChange}
                    />
                    {errors.email && <div className='error'>{errors.email}</div>}
                </div>

                <div className="width-100 flex flex-row items-center gap-7">
                    <label>Phone Number:</label>
                    <PhoneInput className='text-black'
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                    />
                </div>
                
                <div className='Password flex gap-10'>
                    <label>Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        placeholder='******'
                        onChange={handleChange}
                    />
                    {errors.password && <div className='error padding-10'>{errors.password}</div>}
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
                    {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
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
                    {errors.age && <div className='error'>{errors.age}</div>}
                </div>
                
                <div className='Gender'>
                    <label>Gender:</label>
                    <select name='gender' value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <div className='error'>{errors.gender}</div>}
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
                        {errors.interests && <div className='error'>{errors.interests}</div>}
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
                    {errors.birthDate && <div className='error'>{errors.birthDate}</div>}
                </div>
                
                <div className='submitBtn'>
                    <button type='submit'>Submit</button>
                    </div>
            </form>
        </div>
  )
}

export default BasicForm
