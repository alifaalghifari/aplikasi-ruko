import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap';
import { loginUser } from '../../redux/actions/user';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    btnSendHandler = () => {
        alert(this.state.username)
    }

    render() {
        if (this.props.userGlobal.username) {
            return (
                <Redirect to="/admin" />
            )
        }
        return (
            <div className="" style={{ height: '100vh' }}>
                {
                    this.props.userGlobal.errMsg ?
                        <div className="w-100 d-flex justify-content-center" style={{ position: 'absolute', marginTop: '80px' }}>
                            <Alert
                                className="w-50"
                                color="warning"
                            >
                                {this.props.userGlobal.errMsg}
                            </Alert>
                        </div>
                        :
                        null
                }

                <TopNavbar />
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <Form className="w-25 " style={{ marginTop: '200px' }}>
                        <FormGroup>
                            <Label for="username">
                                Nama
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="Masukkan nama"
                                type="text"
                                onChange={this.inputHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Masukkan Password"
                                type="password"
                                onChange={this.inputHandler}
                            />
                        </FormGroup>

                        <Button
                            color="info"
                            outline
                            onClick={() => this.props.loginUser(this.state)}
                        >
                            Masuk
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user
    }
}

const mapStateToDispatch = {
    loginUser
}

export default connect(mapStateToProps, mapStateToDispatch)(Login)