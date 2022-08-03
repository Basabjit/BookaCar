import React from 'react'
import Home from './Home'
function Register() {
  return (<>
       <Home/>
    <div className='myregistrationform'>
    <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input name="email" type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input name="password" type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input name="address2" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input name="city" type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState"  className="form-select">
    <option defaultValue={true}>choose your state</option>
    <option value={'West Bengal'}>West Bengal</option>
    <option value={'Delhi'}>Delhi</option>
    <option value={'Tripura'}>Tripura</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input name='zip' type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="4r">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Accept all terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
</>
  )
}

export default Register