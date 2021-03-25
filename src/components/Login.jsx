import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { login } from '../redux/actions/login';
import Header from '../components/header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminRoutes, ADMIN_BASE_URL } from '../helpers/adminRoutes';
import { isLogin } from '../helpers/func';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}



class LoginForm extends Component {
    handleValidationforEmail = (a, b, c) => {
        let regex = /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/
        if (b.match(regex)) {
            c();
        } else {
            c("Please enter valid email");
        }
    }

    handleSubmit = e => {
        let { dispatch } = this.props;
        e.preventDefault();
        this.props.history()
    };


    render() {

        return (
            <div>
                <Header>

                </Header>

                    Login
            </div>
        )
    }

    componentDidMount() {
        // this.props.form.validateFields();
    }
    componentDidUpdate(prevProps) {
        let { loading, data, history } = this.props;

        if (!loading && prevProps.loading !== loading) {
            if (data && prevProps.data !== data) {
                if (data && data.status === 200) {
                    localStorage.setItem("adminData", JSON.stringify(data.data))
                    history.push(adminRoutes.PATTERNLIST)
                }
                else {
                    message.error(data && data.data.message)
                    history.push(ADMIN_BASE_URL)
                }
                if (isLogin()) {
                    this.props.history.push(adminRoutes.PATTERNLIST);
                }
            }

        }
    }
}



const mapStateToProps = ((state) => {
    let { loading, data, error } = state.login
    return {
        loading,
        data,
        error
    }
})


export default LoginForm