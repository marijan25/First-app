
const Form = () => {

  return (
    <form className="form">
        <h2>Login Form</h2>
        <div className="form-container">
            <label>Username</label> <br />
            <input type='text' placeholder='Add username' 
            />
        </div>
        <div className="form-container">
            <label>Password</label> <br />
            <input type='password' placeholder='Add password'
            />
        </div>
        <div className="form-container">
            <label>E-mail</label> <br />
            <input type='text' placeholder='Add email' 
            /> <br/>
        </div>
        <div className="form-container">
        <input className="btn" type='submit' value='Save' />
        </div>
    </form>
  )
}

export default Form
