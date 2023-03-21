import './Login.css';


const Login = () => {
  return (
    <div className="Container_Login">
          <div className='Container_Login'>
      <div className='Wrapper_Login'>
        <h1>SIGN IN</h1>

        <form>
          <input placeholder='UserName'/>
          <input placeholder='Password'/>

          <button>LOGIN</button>
          <a href='/#'>DO NOT REMEMBER PASSWORD?</a >
          <a href='/#'>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login