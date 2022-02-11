import React from 'react';
import TopNavbar from '../components/TopNavbar';
import { Table, FormGroup, Label, Input, InputGroup, Button } from 'reactstrap'
import { API } from '../constants/API_URL'
import Axios from 'axios'

import Search from '../components/Search';

class Home extends React.Component {
    state = {
        data: [],
        page: 1,
        offset: 0,
        itemPerPage: 10,
        maxPage: 0,

        databaseActive: "alat_bangunan",
        wordSearch: "",
    }

    fetchData = () => {
        Axios.get(`${API}/data/get/${this.state.offset}`, {
            params: {
                database: this.state.databaseActive
            }
        })
            .then((resp) => {
                this.setState({ data: resp.data.data, maxPage: Math.ceil(resp.data.rows[0].jumlah / this.state.itemPerPage) })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderData = () => {
        let no = (this.state.page - 1) * this.state.itemPerPage
        return this.state.data.map((value, index) => {
            return (
                <tr className="text-center">
                    <th scope="row">
                        {++no}
                    </th>
                    <td>
                        {value.nama_barang}
                    </td>
                    <td>
                        {value.harga_jual}
                    </td>
                    <td>
                        {value.stok}
                    </td>
                    <td>
                        {value.keterangan}
                    </td>

                </tr>
            )
        })
    }

    pageHandler = (step) => {

        switch (step) {
            case "next":
                this.setState((state, props) => ({
                    page: state.page + 1, offset: ((state.page + 1) * state.itemPerPage) - state.itemPerPage
                }), () => {
                    this.fetchData()
                })
                break;
            case "prev":
                this.setState((state, props) => ({
                    page: state.page - 1, offset: ((state.page - 1) * state.itemPerPage) - state.itemPerPage
                }), () => {
                    this.fetchData()
                })
                break;

        }
        console.log(this.state.page)
        console.log(this.state.offset)
    }

    link = (page) => {
        this.setState({ page, offset: (page * this.state.itemPerPage) - this.state.itemPerPage }, () => {
            this.fetchData()
        })
    }

    renderPagination = () => {
        const list = []
        for (let page = 1; page <= this.state.maxPage; page++) {
            list.push(<li class={this.state.page === page ? "page-item active" : "page-item"} onClick={() => this.link(page)}><a class="page-link">{page}</a></li>)
        }
        return (
            <>
                {list}
            </>
        )
    }

    changeDatabase = (e) => {
        this.setState({
            databaseActive: e.target.name,
            page: 1,
            offset: 0,
        }, () => {
            this.fetchData()
        })
    }

    handleDataSearch = (newData) => {
        this.setState({
            data: newData
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="" style={{ height: "100vh" }}>
                <TopNavbar />
                <div style={{ marginTop: '70px', padding: "50px" }}>
                    <legend>
                        Pilih Database
                    </legend>
                    {/* Radio Button */}
                    <FormGroup tag="fieldset" className="w-25 d-flex justify-content-between">
                        <FormGroup check>
                            <Input
                                name="alat_bangunan"
                                type="radio"
                                checked={this.state.databaseActive === "alat_bangunan"}
                                onClick={this.changeDatabase}

                            />
                            <Label check>
                                Alat Bangunan
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                name="alat_motor"
                                type="radio"
                                checked={this.state.databaseActive === "alat_motor"}
                                onClick={this.changeDatabase}
                            />
                            {' '}
                            <Label check>
                                Alat Motor
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                name="alat_pertanian"
                                type="radio"
                                checked={this.state.databaseActive === "alat_pertanian"}
                                onClick={this.changeDatabase}
                            />
                            <Label check>
                                Alat Pertanian
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    {/* Search */}
                    <div className='w-25'>
                        <Search dataSearch={this.handleDataSearch} database={this.state.databaseActive} />
                    </div>

                    {/* Table */}
                    <Table striped >
                        <thead>
                            <tr className="text-center">
                                <th>
                                    No
                                </th>
                                <th>
                                    Nama Barang
                                </th>

                                <th>
                                    Harga Jual
                                </th>
                                <th>
                                    Stok
                                </th>
                                <th>
                                    Keterangan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderData()}
                        </tbody>
                    </Table>

                    {/* Pagination */}
                    <nav aria-label="...">
                        <ul class="pagination">
                            <Button onClick={() => this.pageHandler("prev")} disabled={this.state.page === 1}>Previous</Button>
                            {this.renderPagination()}
                            <Button onClick={() => this.pageHandler("next")} disabled={this.state.page === this.state.maxPage}>Next</Button>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Home;