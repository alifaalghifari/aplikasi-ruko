import React from "react";
import { Form, FormGroup, Label, Input, Button, Table, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { API } from "../../constants/API_URL";
import Axios from 'axios'
import Search from "../../components/Search";

class Database extends React.Component {
    state = {
        data: [],
        page: 1,
        offset: 0,
        itemPerPage: 10,
        maxPage: 0,

        // menambah data
        edit: false,
        id: Number,
        nama: "",
        harga_beli: "",
        harga_jual: "",
        stok: 0,
        keterangan: "",

        // database active
        databaseActive: "alat_bangunan"
    }

    // mengambil data dari server
    fetchData = () => {
        Axios.get(`${API}/data/get/${this.state.offset}`, {
            params: {
                database: this.state.databaseActive
            }
        })
            .then((resp) => {
                this.setState({
                    data: resp.data.data,
                    maxPage: Math.ceil(resp.data.rows[0].jumlah / this.state.itemPerPage),
                    // page: 1,
                    // offset: 0
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    submitEditHandler = () => {
        const { id, nama, harga_beli, harga_jual, stok, keterangan, databaseActive } = this.state
        if (nama === "" || harga_beli === "" || harga_jual === "") {
            alert("Isi keseluruhan data")
        } else {
            Axios.put(`${API}/data/put`, {
                id,
                nama,
                harga_beli,
                harga_jual,
                stok,
                keterangan,
                database: databaseActive

            })
                .then((res) => {
                    alert('data berhasil di ubah')
                    this.fetchData()
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }

    editBtnHandler = (value) => {
        this.setState({
            edit: true,
            id: value.id,
            nama: value.nama_barang,
            harga_beli: value.harga_beli,
            harga_jual: value.harga_jual,
            stok: value.stok,
            keterangan: value.keterangan
        })
    }

    deleteBtnHandler = (id) => {
        let aksDelete = window.confirm("Apakah anda yakin akan menghapus ? ")

        if (aksDelete) {
            Axios.delete(`${API}/data/delete`, {
                data: {
                    id,
                    database: this.state.databaseActive
                }
            })
                .then((res) => {
                    alert("Berhasil menghapus data")
                    this.fetchData()
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }

    // render data
    renderData = () => {
        let no = (this.state.page - 1) * this.state.itemPerPage
        return this.state.data.map((value, index) => {
            return (
                <tr>
                    <th scope="row">
                        {++no}
                    </th>
                    <td>
                        {value.nama_barang}
                    </td>
                    <td>
                        {value.harga_beli}
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
                    <td>
                        <Button
                            color="info"
                            outline
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => this.editBtnHandler(value)}
                        >
                            Edit
                        </Button>
                        <Button
                            color="danger"
                            outline
                            onClick={() => this.deleteBtnHandler(value.id)}
                        >
                            Hapus
                        </Button>
                    </td>
                </tr >
            )
        })
    }

    pageHandler = async (step) => {

        switch (step) {
            case "next":
                await this.setState({ page: this.state.page + 1, offset: ((this.state.page + 1) * this.state.itemPerPage) - this.state.itemPerPage })
                break;
            case "prev":
                await this.setState({ page: this.state.page - 1, offset: ((this.state.page - 1) * this.state.itemPerPage) - this.state.itemPerPage })
                break;
            default:
                break;
        }
        this.fetchData()
    }

    link = (page) => {
        this.setState({ page, offset: (page * this.state.itemPerPage) - this.state.itemPerPage }, () => {
            this.fetchData()
        })
    }

    renderPagination = () => {
        const list = []

        for (let page = 1; page <= this.state.maxPage; page++) {
            list.push(<li class={this.state.page === page ? "page-item active" : "page-item"} onClick={() => this.link(page)}><a class="page-link" href="#">{page}</a></li>)
        }
        return (
            <>
                {list}
            </>
        )
    }

    closeButton = () => {
        this.setState({
            edit: false,
            nama: "",
            harga_beli: "",
            harga_jual: "",
            stok: 0,
            keterangan: "",
        })
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitBtnHandler = () => {
        const { nama, harga_beli, harga_jual, stok, keterangan, databaseActive } = this.state
        console.log(nama)
        // mencegah jika inputan belum lengkap
        if (nama === "" || harga_beli === "" || harga_jual === "") {
            alert("Isi keseluruhan data")
        } else {
            Axios.post(`${API}/data/post`, {
                nama,
                harga_beli,
                harga_jual,
                stok,
                keterangan,
                database: databaseActive
            })
                .then((resp) => {
                    alert("data berhasil di tambahkan")

                    // membersihkan kembali input
                    this.setState({
                        edit: false,
                        nama: "",
                        harga_beli: "",
                        harga_jual: "",
                        stok: 0,
                        keterangan: "",
                    })
                    this.fetchData()
                })
                .catch((err) => {
                    alert("terjadi kesalahan di server")
                })
        }
    }

    changeDatabase = (e) => {

        this.setState({
            databaseActive: e.target.value,
            page: 1,
            offset: 0,
        }, () => {
            this.fetchData()
        })
    }

    handleDataSearch = (newData) => {
        this.setState({
            data: newData,
            page: 1,
            offset: 0,
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="h-100">
                {/* Database */}
                <div className="mb-5">
                    <FormGroup className="w-50">
                        <Label for="exampleSelect">
                            Pilih Database
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            value={this.state.databaseActive}
                            onChange={this.changeDatabase}
                        >
                            <option value="alat_bangunan">
                                Alat Bangunan
                            </option>
                            <option value="alat_motor">
                                Alat Motor
                            </option>
                            <option value="alat_pertanian">
                                Alat Pertanian
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="w-50 d-flex ">
                        <div className="w-25 d-flex align-items-center" style={{ textAlign: 'center' }}>
                            <a class="btn btn-outline-primary" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ fontSize: '15px' }} >
                                Tambah Data
                            </a>
                        </div>
                        <Search dataSearch={this.handleDataSearch} database={this.state.databaseActive} />
                    </FormGroup>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Nama Barang
                                </th>
                                <th>
                                    Harga Beli
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
                                <th>
                                    Aksi
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.renderData()}
                        </tbody>
                    </Table>

                    <nav aria-label="...">
                        <ul class="pagination">
                            <Button onClick={() => this.pageHandler("prev")} disabled={this.state.page === 1}>Previous</Button>
                            {this.renderPagination()}
                            <Button onClick={() => this.pageHandler("next")} disabled={this.state.page === this.state.maxPage}>Next</Button>
                        </ul>
                    </nav>

                </div>

                {/* Info database */}
                <div>

                    <h3 className="text-center mb-5">INFO</h3>
                    <div className="d-inline-flex w-100 justify-content-around">
                        <div className="w-25">
                            <Card
                                body
                                color="info"
                                inverse
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Jumlah Barang
                                        {this.state.data.nama}
                                    </CardTitle>
                                    <CardText>
                                        300
                                    </CardText>

                                </CardBody>
                            </Card>
                        </div>
                        <div className="w-25">
                            <Card
                                body
                                color="info"
                                inverse

                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Jumlah Barang
                                    </CardTitle>
                                    <CardText>
                                        300
                                    </CardText>

                                </CardBody>
                            </Card>
                        </div>
                    </div>

                </div>
                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content border border-info border-2 rounded" >
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Tambah Data</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.closeButton}></button>
                            </div>
                            <div class="modal-body w-100 ">

                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Nama
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="nama"
                                            placeholder="Masukkan nama"
                                            type="text"
                                            value={this.state.nama}
                                            onChange={this.inputHandler}
                                        />

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Harga Beli
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="harga_beli"
                                            placeholder="Masukkan harga beli"
                                            type="text"
                                            value={this.state.harga_beli}
                                            onChange={this.inputHandler}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Harga Jual
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="harga_jual"
                                            placeholder="Masukkan harga jual"
                                            type="text"
                                            value={this.state.harga_jual}
                                            onChange={this.inputHandler}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Quantity
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="stok"
                                            placeholder="Masukkan quantity"
                                            type="number"
                                            value={this.state.stok}
                                            onChange={this.inputHandler}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">
                                            Keterangan
                                        </Label>
                                        <Input
                                            id="exampleText"
                                            name="keterangan"
                                            type="textarea"
                                            value={this.state.keterangan}
                                            onChange={this.inputHandler}
                                        />
                                    </FormGroup>
                                    <Button
                                        color="info"
                                        outline
                                        onClick={this.state.edit ? this.submitEditHandler : this.submitBtnHandler}
                                    >
                                        Kirim
                                    </Button>
                                </Form>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Database;

