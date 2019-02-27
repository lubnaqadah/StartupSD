import React from "react";
import {FormControl, FormGroup} from 'react-bootstrap';

class FontSize extends React.Component {


    handleSelect = evt => this.props.nameFont(evt);

render() {
    return (
        <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="select" onChange={this.handleSelect}>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </FormControl>
        </FormGroup>

        //            <div>
        //                <FormGroup controlId="formControlsSelect">
        //                    <FormControl componentClass="select" placeholder="select">
        //                        <option value="12">12</option>
        //                        <option value="14">14</option>
        //                        <option value="16">16</option>
        //                        <option value="18">18</option>
        //                        <option value="20">20</option>
        //                        <option value="22">22</option>
        //                        <option value="24">24</option>
        //                        <option value="26">26</option>
        //                        <option value="28">28</option>
        //                        <option value="30">30</option>
        //                        <option value="32">32</option>
        //                        <option value="34">34</option>
        //                        <option value="36">36</option>
        //                        <option value="38">38</option>
        //                        <option value="40">40</option>
        //                    </FormControl>
        //                </FormGroup>
        //            </div>

    )
}
}

export default FontSize;