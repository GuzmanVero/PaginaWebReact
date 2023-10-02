import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cuenta = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" aria-describedby="emailHelp" 
                    placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;
