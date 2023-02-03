import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={'login'} placeholder={'Login'} component={'input'}/>
        </div>
        <div> <Field name={'password'} placeholder={'Password'} component={'input'}/></div>
        <div><Field name={'remember me'} component={'input'} type={'checkbox'}/> remember me</div>
        <button>Login</button>
      </form>
  );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props)=>{
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onsubmit}/>
  </div>
}
export default Login;
