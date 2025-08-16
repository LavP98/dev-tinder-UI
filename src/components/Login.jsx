import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState('lav@pandey.com');
  const [password, setPassword] = useState('Lav1998$');
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const loginHandler = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      console.log('data: ', response.data);
      dispatch(addUser(response.data));
      navigator('/'); // Redirect to feed page after successful login
      // Redirect to profile page after successful login
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={loginHandler}>
              {' '}
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  ``;
};

export default Login;
