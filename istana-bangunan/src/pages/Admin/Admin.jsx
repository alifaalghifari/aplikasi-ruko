import React from 'react';
import TopNavbar from '../../components/TopNavbar'
import Database from './Database';
import Penjualan from './Penjualan';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
class Admin extends React.Component {
    state = {
        menu: 1,
    }
    render() {
        if (!this.props.userGlobal.username) {
            return (
                <Redirect to="/login" />
            )
        }

        return (
            <div className="" style={{ height: "100vh", overflow: "" }}>
                <TopNavbar />
                <div className="row h-100 w-100 m-end-0 " style={{ marginTop: '70px' }}>
                    <div className="col-2 fixed-top" style={{ marginTop: "70px" }} >
                        <ul class="list-group list-group-flush" role="button">
                            <li class="list-group-item" onClick={() => this.setState({ menu: 1 })}>Database</li>

                            <li class="list-group-item" role="button" onClick={() => this.setState({ menu: 2 })}>Penjualan</li>
                        </ul>
                    </div>
                    <div className="col-10 bg-secondary bg-opacity-10 pb-5 position-absolute end-0">
                        {
                            this.state.menu === 1 ?
                                <Database />
                                :
                                <Penjualan />
                        }
                    </div>
                </div>
            </div>

        )
    }
}

const mapsStateToProps = (state) => {
    return {
        userGlobal: state.user
    }
}

export default connect(mapsStateToProps)(Admin);