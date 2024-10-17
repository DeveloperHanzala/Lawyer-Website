import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Auth = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace these with your actual authentication logic
    const validUsername = 'Hanzala';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
      navigate('/apointment')
      // Redirect to a different page or perform other actions
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <section className="vh-140 bg " >
        <div className="container py-5 h-100  ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 ">
              <div className="card form1" style={{ borderRadius: '5rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid img " style={{ borderRadius: '1rem 0 0 1rem', height: '110vh' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleLogin}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form2Example17" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                          <label className="form-label text-white mx-2" >User Name</label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <label className="form-label text-white mx-2" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          {error && <div className="alert alert-danger">{error}</div>}
                          <button type="submit" className="btn btn-warning text-black btn2">Login</button>
                        </div>
                        <a className="small text-white mx-2" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2 text-primary mx-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" className='text-white' style={{ color: '#393f81' }}>Register here</a></p>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Auth
