import React, { useState } from 'react';
import axios from 'axios';

const AddTeacher = () => {
  const [teacherDetails, setTeacherDetails] = useState({
    teacherId: '',
    fullName: '',
    gender: '',
    dob: '',
    address: '',
    contactNumber: '',
    email: '',
    standard: '',
    section: ''
  });

  const [errors, setErrors] = useState({
    teacherId: '',
    fullName: '',
    gender: '',
    dob: '',
    address: '',
    contactNumber: '',
    email: '',
    standard: '',
    section: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const classes = [
    { classId: 101, standard: '1', section: 'A' },
    { classId: 102, standard: '1', section: 'B' },
    { classId: 103, standard: '1', section: 'C' },
    { classId: 104, standard: '1', section: 'D' },
    { classId: 201, standard: '2', section: 'A' },
    { classId: 202, standard: '2', section: 'B' },
    { classId: 203, standard: '2', section: 'C' },
    { classId: 204, standard: '2', section: 'D' },
    { classId: 301, standard: '3', section: 'A' },
    { classId: 302, standard: '3', section: 'B' },
    { classId: 303, standard: '3', section: 'C' },
    { classId: 304, standard: '3', section: 'D' },
    { classId: 401, standard: '4', section: 'A' },
    { classId: 402, standard: '4', section: 'B' },
    { classId: 403, standard: '4', section: 'C' },
    { classId: 404, standard: '4', section: 'D' }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields before submission
    let isValid = true;
    const newErrors = { ...errors };

    // Check if fields are filled
    Object.keys(teacherDetails).forEach((key) => {
      if (!teacherDetails[key]) {
        newErrors[key] = 'This field is required';
        isValid = false;
      } else {
        newErrors[key] = '';
      }
    });

    // Check if email is valid
    if (teacherDetails.email && !isValidEmail(teacherDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Find classId based on standard and section
    const classId = findClassId(teacherDetails.standard, teacherDetails.section);
    
    // Prepare the payload for the API request
    const payload = {
      teacherId: parseInt(teacherDetails.teacherId),
      name: teacherDetails.fullName,
      gender: teacherDetails.gender,
      dob: teacherDetails.dob,
      address: teacherDetails.address,
      contactNumber: teacherDetails.contactNumber,
      email: teacherDetails.email,
      classId: classId
    };

    try {
      // Call the backend API to add teacher
      const response = await axios.post('http://localhost:5011/api/Teacher/AddTeacher', payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        setSuccessMessage('Teacher Added Successfully');
        setTimeout(() => {
          setMessage('');
        }, 2000);
        // Reset form fields after successful submission
        setTeacherDetails({
          teacherId: '',
          fullName: '',
          gender: '',
          dob: '',
          address: '',
          contactNumber: '',
          email: '',
          standard: '',
          section: ''
        });
        setErrors({});
      } else {
        throw new Error('Error adding teacher');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while adding the teacher');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
  
    // If the field is contactNumber, limit the input to 10 characters
    if (name === 'contactNumber' && value.length > 10) {
      newValue = value.slice(0, 10); // Limiting to the first 10 characters
      setErrors({ ...errors, [name]: 'Phone number cannot exceed 10 digits' });
    } else {
      setErrors({ ...errors, [name]: '' }); // Clear validation error when input changes
    }
  
    setTeacherDetails({ ...teacherDetails, [name]: newValue });
  };
  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Dummy function to find classId based on standard and section
  const findClassId = (standard, section) => {
    const classInfo = classes.find(cls => cls.standard === standard && cls.section === section);
    return classInfo ? classInfo.classId : null;
  };

  return (
    <div className="container ">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card mt-5">
          <div className="card-header">
            <h4 className="card-title">Add Teacher</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="teacherId" className="form-label">Teacher ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="teacherId"
                  name="teacherId"
                  value={teacherDetails.teacherId}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.teacherId}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={teacherDetails.fullName}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.fullName}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender:</label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={teacherDetails.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <span className="text-danger">{errors.gender}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={teacherDetails.dob}
                  onChange={handleChange}
                  max="2002-12-31"
                />
                <span className="text-danger">{errors.dob}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  value={teacherDetails.address}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.address}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  name="contactNumber"
                  value={teacherDetails.contactNumber}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.contactNumber}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={teacherDetails.email}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              <div className="mb-3">
          <label className="form-label">Standard:</label>
          <select
            className="form-control"
            name="standard"
            value={teacherDetails.standard}
            onChange={handleChange}
          >
            <option value="">Select Standard</option>
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <span className="text-danger">{errors.standard}</span>
        </div>

        <div className="mb-3">
          <label className="form-label">Section:</label>
          <select
            className="form-control"
            name="section"
            value={teacherDetails.section}
            onChange={handleChange}
          >
            <option value="">Select Section</option>
            {['A', 'B', 'C', 'D'].map(section => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
          <span className="text-danger">{errors.section}</span>
        </div>
              <div className="text-end">
                <button type="submit" className="btn btn-success me-2">Submit</button>
                <button type="reset" className="btn btn-danger">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default AddTeacher;
