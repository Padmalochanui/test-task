import React from 'react';
import { Formik } from 'formik';
import '../App.css';
const FormikForm = () => (
    
    <div className='container mt-3'>
        
        <Formik
            initialValues={{ name: '', dob: '', sex: '', mob: '', id: '', idNum: '', title: '', GurdianName: '', email: '', EmergencyContact: '', address: '', state: '', city: '', country: '', pincode: '', occupation: '', religion: '', maritialStatus: '', bloodGroup: '', nationality: '' }}
            // validate={values => {
            //     const errors = {};
            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <h5>Personal Details</h5>
                        <div className='container-fluid'>
                            <div className=' d-flex'>
                                <label htmlFor="name">Name*  </label>
                                <input
                                    type="text"
                                    name="name"
                                    id='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className="form-control w-50"
                                />
                                {errors.name && touched.name && errors.name}

                                <label htmlFor="dob">Date of Birth or Age* </label>
                                <input
                                    type="date"
                                    name="dob"
                                    id='dob'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dob}
                                />
                                {errors.dob && touched.dob && errors.dob}
                                <label htmlFor="sex" >
                                    Sex*
                                </label>
                                <select
                                    name="sex"
                                    value={values.sex}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // style={{ display: "block" }}
                                >
                                    <option value="" label="Select sex">
                                        Select sex{" "}
                                    </option>
                                    <option value="male" label="male">
                                        {" "}
                                        Male
                                    </option>
                                    <option value="female" label="female">
                                        Female
                                    </option>
                                    <option value="other" label="other">
                                        Other
                                    </option>
                                </select>
                            </div>
                            <div className='d-flex mt-3'>
                                <label htmlFor="mob">Mobile </label>
                                <input
                                    type="text"
                                    name="mob"
                                    id='mob'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mob}
                                />
                                {errors.mob && touched.mob && errors.mob}

                                <label htmlFor="id">Govt Issued ID </label>
                                <select
                                    name="id"
                                    id='id'
                                    value={values.id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // style={{ display: "block" }}
                                >
                                    <option value="" label="Select ID">
                                        ID Type{" "}
                                    </option>
                                    <option value="Adhar" label="Adhar">
                                        {" "}
                                        Adhar
                                    </option>
                                    <option value="PAN" label="PAN">
                                        PAN
                                    </option>
                                    <option value="other" label="other">
                                        Other
                                    </option>
                                </select>
                                <input
                                    type="text"
                                    name="idNum"
                                    id='IdNum'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.idNum}
                                />
                                {errors.idNum && touched.idNum && errors.idNum}
                            </div>
                        </div>
                        <div>
                            <h5>Contact Details</h5>
                            <div className='d-flex'>
                                <label htmlFor="title">Guardian Details </label>
                                <select
                                    name="title"
                                    id='title'
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // style={{ display: "block" }}
                                >
                                    <option value="" label="Select Lebel">
                                        Enter Title{" "}
                                    </option>
                                    <option value="Mr." label="Mr.">
                                        {" "}
                                        Mr.
                                    </option>
                                    <option value="Ms." label="Ms.">
                                        Ms.
                                    </option>
                                </select>
                                <input
                                    type="text"
                                    name="GurdianName"
                                    id='GurdianName'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.GurdianName}
                                />
                                {errors.GurdianName && touched.GurdianName && errors.GurdianName}
                                <label htmlFor="email">Email  </label>
                                <input
                                    type="email"
                                    name="email"
                                    id='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className="form-control w-50"
                                />
                                {errors.email && touched.email && errors.email}

                                <label htmlFor="EmergencyContact">Emergency Contact Number </label>
                                <input
                                    type="text"
                                    name="EmergencyContact"
                                    id='EmergencyContact'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.EmergencyContact}
                                />
                                {errors.EmergencyContact && touched.EmergencyContact && errors.EmergencyContact}

                            </div>

                            <div className='mt-2'>
                                <h5>Address Details</h5>
                                <div className='d-flex '>
                                    <label htmlFor="address">Address  </label>
                                    <input
                                        type="text"
                                        name="address"
                                        id='address'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        className="form-control w-50"
                                    />
                                    {errors.address && touched.address && errors.address}
                                    <label htmlFor="state">State  </label>
                                    <input
                                        type="text"
                                        name="state"
                                        id='state'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.state}
                                        className="form-control w-50"
                                    />
                                    {errors.state && touched.state && errors.state}
                                    <label htmlFor="city">City  </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id='city'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city}
                                        className="form-control w-50"
                                    />
                                    {errors.city && touched.city && errors.city}
                                    <label htmlFor="country">Country  </label>
                                    <input
                                        type="text"
                                        name="country"
                                        id='country'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.country}
                                        className="form-control w-50"
                                    />
                                    {errors.country && touched.country && errors.country}
                                    <label htmlFor="pincode">Pincode  </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        id='pincode'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.pincode}
                                        className="form-control w-50"
                                    />
                                    {errors.pincode && touched.pincode && errors.pincode}
                                </div>
                                <div className='mt-2'>
                                    <h5>Other Details</h5>
                                    <div className='d-flex'>
                                        <label htmlFor="occupation">Occupation</label>
                                        <input
                                            type="text"
                                            name="occupation"
                                            id='occupation'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.occupation}
                                            className="form-control w-50"
                                        />

                                        <label htmlFor="religion" >
                                            Religion
                                        </label>
                                        <select
                                            name="religion"
                                            id='religion'
                                            value={values.religion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        // style={{ display: "block" }}
                                        >
                                            <option value="" label="Select religion">
                                                Select religion{" "}
                                            </option>
                                            <option value="Hinduism" label="Hinduism">
                                                {" "}
                                                Hindu
                                            </option>
                                            <option value="Muslim" label="Muslim">
                                                Muslim
                                            </option>
                                            <option value="other" label="other">
                                                Other
                                            </option>
                                        </select>


                                        <label htmlFor="maritialStatus" >
                                            Maritial Status
                                        </label>
                                        <select
                                            name="maritialStatus"
                                            id='maritialStatus'
                                            value={values.maritialStatus}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        // style={{ display: "block" }}
                                        >
                                            <option value="" label="Select status">
                                                Select status{" "}
                                            </option>
                                            <option value="married" label="married">
                                                {" "}
                                                Married
                                            </option>
                                            <option value="single" label="single">
                                                Single
                                            </option>
                                            <option value="other" label="other">
                                                Other
                                            </option>
                                        </select>
                                        <label htmlFor="bloodGroup" >
                                            Blood Group
                                        </label>
                                        <select
                                            name="bloodGroup"
                                            id='bloodGroup'
                                            value={values.bloodGroup}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        // style={{ display: "block" }}
                                        >
                                            <option value="" label="Select Group">
                                                Select Blood group{" "}
                                            </option>
                                            <option value="A" label="A">
                                                {" "}
                                                A
                                            </option>
                                            <option value="B" label="B">
                                                B
                                            </option>
                                            <option value="AB" label="AB">
                                                AB
                                            </option>
                                            <option value="O" label="O">
                                                O
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className='text-center mt-4'>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    </div>
);

export default FormikForm;