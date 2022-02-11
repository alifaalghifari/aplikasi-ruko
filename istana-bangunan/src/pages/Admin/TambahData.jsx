import React from 'react'
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class TambahData extends React.Component {
    state = {
        showModal: false
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="d-flex justify-content-center mt-5 ">
                {/* <div className="w-25 p-3 border border-info rounded">

                    <h2>Buat Data</h2>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Nama
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Masukkan nama"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Harga Beli
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Masukkan harga beli"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Harga Jual
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Masukkan harga jual"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Quantity
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Masukkan quantity"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Keterangan
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>
                        <Button
                            color="info"
                            outline
                        >
                            Kirim
                        </Button>
                    </Form>


                </div> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default TambahData