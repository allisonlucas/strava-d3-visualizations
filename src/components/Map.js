import React, { Component } from 'react';
import { parseJson } from '../utils/parsers';
import EasyFit from 'easy-fit';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jsonData: undefined,
            geoJson: undefined
        };

        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.fileInput = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.jsonData !== this.state.jsonData) {
            this.setState({ geoJson: parseJson(this.state.jsonData) });
        }
    }

    handleFileUpload(e) {
        e.preventDefault();
        this.setState({ jsonData: this.parseFitFile(this.fileInput.current.files[0]) });
    }

    parseFitFile(file) {
        const reader = new FileReader();
        reader.onload = e => {
            // Create an EasyFit instance (options argument is optional)
            // See https://github.com/pierremtb/easy-fit for all available options
            const easyFit = new EasyFit({
                speedUnit: 'mph',
                lengthUnit: 'mi',
                temperatureUnit: 'fahrenheit'
            });
            // Parse file
            easyFit.parse(e.target.result, (error, data) => {
                if (error) {
                    console.error('Error parsing .fit file: ', error);
                } else {
                    this.setState({jsonData: data });
                }
            });
    
        };
        reader.readAsArrayBuffer(file);
    };

    render () {
        return (
            <form onSubmit={this.handleFileUpload}>
                <span>Select a .fit file provided by Strava (or Garmin).</span>
                <br/>
                <input type="file" id="file" name="file" encType="multipart/form-data" ref={this.fileInput}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Map;
