import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {required, minLengthCreator} from "../../validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControl/FormsControls.module.css"

const minLength = minLengthCreator(1)

const LoginForm = (props) => {
    return (
        <form className={style.container} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"Email"} validate={[required, minLength]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"} validate={[required, minLength]} type={'password'}/>
            </div>
            <div>
                Remember Me<Field component={Input} name={"rememberMe"} type={"checkbox"}/>
            </div>
                {props.error &&  <div className={style.formSummaryError}>
                    {props.error}
                </div>

                }
            <div>
                <button className={style.button}>LogIn</button>
                <div>test.test85558@gmail.com</div>
                <div>1111</div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
        form: "login"
    }
)(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
      return  <Redirect to={"/profile"}/>
    }

    return (
        <div className={style.container}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)