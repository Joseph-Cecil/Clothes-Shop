import './Register.css';

const Register = () => {
  return (
    <div className='Container_Register'>
      <div className='Wrapper_Register'>
        <h1>CREATE AN ACCOUNT</h1>

        <form>
          <input placeholder='Name'/>
          <input placeholder='Last Name'/>
          <input placeholder='UserName'/>
          <input placeholder='Email'/>
          <input placeholder='password'/>
          <input placeholder='confirm password'/>
          <span className='Agreement'>By creating an Account, I consent to the processing of my data
          in accordance with the <b>PRIVACY POLICY</b></span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register