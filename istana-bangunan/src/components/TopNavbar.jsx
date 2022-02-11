import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/user'
import { Button } from "reactstrap";

class TopNavbar extends React.Component {
    render() {
        return (
            <div className="bg-light w-100  d-flex fixed-top  " style={{ height: "70px" }}>

                <div className="d-flex flex-grow-1 align-self-center justify-content-center fs-2 text-center text-dark">
                    <Link to="/" className="text-dark" role="button" style={{ textDecoration: 'none' }}>Istana Bangunan</Link>
                </div>
                <Link to="/admin" className="align-self-end me-5" style={{ textDecoration: 'none' }}>
                    <p>Admin</p>
                </Link>
                {
                    this.props.userGlobal.username ?
                        <a
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                            className="align-self-end me-5 text-danger"
                            color="danger"
                            onClick={this.props.logoutUser}
                        >
                            <p>Logout</p>
                        </a>
                        :
                        null
                }
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
    logoutUser
}

export default connect(mapStateToProps, mapStateToDispatch)(TopNavbar)