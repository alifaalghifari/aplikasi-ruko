import React from "react";
import { Input, Button, InputGroup } from "reactstrap"
import { IoIosSearch } from "react-icons/io";
import { API } from '../constants/API_URL'
import Axios from 'axios'
class Search extends React.Component {
    state = {
        wordSearch: ""
    }

    inputHandler = (e) => {
        this.setState({
            wordSearch: e.target.value
        })
    }

    searchBtnHandler = () => {
        console.log("testing search")

        Axios.get(`${API}/data/getSearch`, {
            params: {
                word: this.state.wordSearch,
                database: this.props.database
            }
        })
            .then((res) => {
                this.props.dataSearch(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }


    render() {
        return (
            <InputGroup >
                <Input
                    placeholder="Cari..."
                    value={this.state.wordSearch}
                    onChange={this.inputHandler}
                />
                <Button
                    className="btn btn-info text-white"
                    onClick={this.searchBtnHandler}
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                    <IoIosSearch />
                </Button>
            </InputGroup>
        )
    }
}

export default Search