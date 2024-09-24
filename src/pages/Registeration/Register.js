import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Card from 'react-bootstrap/Card';
import { logo } from '../../assets';
import * as yup from 'yup';

const schema = yup.object().shape({
  course: yup.string().required('Please select a course'),
  fullName: yup.string().required('Full Name is required'),
  mobile: yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  education: yup.string().required('Educational Qualification is required'),
  yearOfPassing: yup.number()
    .typeError('Year of Passing is required')
    .required('Year of Passing is required')
    .min(1900, 'Year of Passing is too early')
    .max(new Date().getFullYear(), 'Year of Passing cannot be in the future'),
  address: yup.string().required('Address is required'),
  experience: yup.string().required('Experience is required'),
  vcubeSource: yup.array().min(1, 'Please select at least one source'),
});

function BasicExample() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className='d-flex justify-content-center mt-4'>
      <Card>
        <Card.Img variant="top" src={logo} style={{ height: '100px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title className='text-center'><h4>Student Registration Form</h4></Card.Title>
          <Card.Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label>Course Interested</label>
                <Controller
                  name="course"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select {...field} className={`form-control ${errors.course ? 'is-invalid' : ''}`}>
                      <option value="">Select Course</option>
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="Frontend">Frontend</option>
                      <option value="React">React</option>
                      <option value="Fullstack">Full stack</option>
                    </select>
                  )}
                />
                {errors.course && <div className="invalid-feedback">{errors.course.message}</div>}
              </div>

              <div className="mb-3">
                <label>Full Name</label>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input type='text' {...field} className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} />
                  )}
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
              </div>

              <div className="mb-3">
                <label>Mobile</label>
                <Controller
                  name="mobile"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input type='text' {...field} className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} />
                  )}
                />
                {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
              </div>

              <div className="mb-3">
                <label>Email</label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input type='email' {...field} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                  )}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="mb-3">
                <label>Educational Qualification</label>
                <Controller
                  name="education"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input type='text' {...field} className={`form-control ${errors.education ? 'is-invalid' : ''}`} />
                  )}
                />
                {errors.education && <div className="invalid-feedback">{errors.education.message}</div>}
              </div>

              <div className="mb-3">
                <label>Year of Passing</label>
                <Controller
                  name="yearOfPassing"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input type='number' {...field} className={`form-control ${errors.yearOfPassing ? 'is-invalid' : ''}`} />
                  )}
                />
                {errors.yearOfPassing && <div className="invalid-feedback">{errors.yearOfPassing.message}</div>}
              </div>

              <div className="mb-3">
                <label>Address</label>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea {...field} className={`form-control ${errors.address ? 'is-invalid' : ''}`} rows="3" />
                  )}
                />
                {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
              </div>

              <div className="mb-3">
                <label>Experience</label>
                <Controller
                  name="experience"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div className="d-flex">
                      <div className="form-check me-3">
                        <input type='checkbox' className="form-check-input" value="Experienced" {...field} />
                        <label className="form-check-label">Experienced</label>
                      </div>
                      <div className="form-check">
                        <input type='checkbox' className="form-check-input" value="Fresher" {...field} />
                        <label className="form-check-label">Fresher</label>
                      </div>
                    </div>
                  )}
                />
                {errors.experience && <div className="invalid-feedback">{errors.experience.message}</div>}
              </div>

              <div className="mb-3">
                <label>How Do You Know About V Cube</label>
                <Controller
                  name="vcubeSource"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <div className="d-flex flex-wrap">
                      {['Newspaper', 'Pamphlet', 'Banner', 'Friends', 'Old Student', 'Sulekha', 'Google', 'Web'].map((source) => (
                        <div className="form-check me-3 mb-2" key={source}>
                          <input type='checkbox' value={source} className="form-check-input" {...field} />
                          <label className="form-check-label">{source}</label>
                        </div>
                      ))}
                    </div>
                  )}
                />
                {errors.vcubeSource && <div className="invalid-feedback">{errors.vcubeSource.message}</div>}
              </div>

              <input type='submit' className="btn btn-primary" value="Submit" />
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
