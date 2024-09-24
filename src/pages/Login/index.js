import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../services/authApi';
import { useGlobalContext } from '../../context/GlobalProvider'; 
import { formConfig } from '../../config/formConfig';
import { logo } from '../../assets';
import { generateUniqueNumber, getYupSchema } from '../../utils/commonfunctions';

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false); 
  const { setUserDetails } = useGlobalContext();
  
  useEffect(() => {
    let timer;
    if (loginError) {
      timer = setTimeout(() => {
        setLoginError('');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [loginError]);

  const formFields = formConfig.login.fields;
  const schema = getYupSchema(formFields);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // const response = await login(data.email, data.password);
      // if (response.data.accessToken) {
      let fakeAuthToken = generateUniqueNumber(10);
        localStorage.setItem('authToken', fakeAuthToken);
        setUserDetails({id:1, name:'Rama Krish'});
        navigate('/dashboard');
      // } else {
      //   setLoginError('Login failed. No token received.');
      // }
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="p-4 rounded shadow-sm" style={{ minWidth: '350px', width: '100%', maxWidth: '400px' }}>
        <div className="text-center">
          <img src={logo} alt="Vcube Logo" width="172"/>
          <h2 className="mt-2">Log in</h2>
          <p className="text-muted">Welcome back! Please enter the details</p>
        </div>
        
        {loginError && (
          <div className="alert alert-danger">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {formConfig.login.fields.map((field) => (
            <div className="mb-3" key={field.name}>
              <label className="form-label">{field.label}</label>
              <Controller
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <input
                    {...controllerField}
                    className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                )}
              />
              {errors[field.name] && (
                <div className="invalid-feedback">
                  {errors[field.name]?.message}
                </div>
              )}
            </div>
          ))}
          <div className="d-flex justify-content-between">
            <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
              Login
            </button>
          </div>
        </form>

        <footer className="mt-4 text-center text-muted">
          <small>&copy; 2024 Vcube Software Solutions</small>
        </footer>
      </div>
    </div>
  );
}
