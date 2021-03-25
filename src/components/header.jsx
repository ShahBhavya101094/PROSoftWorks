import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { login } from '../redux/actions/login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminRoutes, ADMIN_BASE_URL } from '../helpers/adminRoutes';
import { isLogin } from '../helpers/func';


class Header extends Component {



    render() {

        return (
            <div>
                Header
            </div>
        )
    }



}




export default Header