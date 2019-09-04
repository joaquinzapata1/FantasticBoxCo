import React, { Component } from 'react'

export default class Step1 extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.props.handleInputChange;
        this.nextStep = this.props.nextStep;
    }
    
    render() {
        const {width,height,length,quantity} = this.props.info;
        const enabled = width > 0 && height > 0 && length > 0 && quantity > 0;
        return (
            <div id="step-1" className="content-step">
                <h2>Step 1 - Dimensions &amp; Quantity</h2>

                <p className="intro">
                    Enter the width, height, length and quantity of the box(es) you require.
                </p>

                <div className="form-row">
                    <label htmlFor="width">Width:</label>
                    <input type="number" name="width" id="width" value={width} min="0" step="0.01" 
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-row">
                    <label htmlFor="height">Height:</label>
                    <input type="number" name="height" id="height" value={height} min="0" step="0.01" 
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-row">
                    <label htmlFor="length">Length:</label>
                    <input type="number" name="length" id="length" value={length} min="0" step="0.01" 
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-row">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" name="quantity" id="quantity" value={quantity} min="0" step="1" 
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn btn-primary btn-next" 
                     onClick={this.nextStep} disabled={!enabled}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}
