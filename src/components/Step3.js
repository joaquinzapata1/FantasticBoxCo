import React, { Component } from 'react'

export default class Step3 extends Component {
  constructor(props){
    super(props);
    this.nextStep = this.props.nextStep;
    this.prevStep = this.props.prevStep;
    this.handleInputChange = this.props.handleInputChange;
  }
    render() {
      const quality = this.props.quality;
      const enabled = quality !== "";
        return (
            <div id="step-3" className="content-step">
              <h2>Step 3 - Print Quality</h2>

              <p className="intro">
              A variety of printing options are available for any branding / logos which are required:
              </p>

              <ol className="btn-radios-list">
                <li>
                  <label>
                    <input type="radio" name="quality" value="3-C"
                    onChange={this.handleInputChange}
                    defaultChecked={quality==="3-color" ? true : false}/>
                    <span className="btn btn-radio">
                      3 colours<br/>&pound;0.20 m<sup>2</sup>
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="quality" value="2-C"
                    onChange={this.handleInputChange}
                    defaultChecked={quality==="2-color" ? true : false}/>
                    <span className="btn btn-radio">
                      2 colours<br/>&pound;0.10 m<sup>2</sup>
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="quality" value="Black"
                    onChange={this.handleInputChange}
                    defaultChecked={quality==="black-only" ? true : false}/>
                    <span className="btn btn-radio">
                      Black only<br/>&pound;0.05 m<sup>2</sup>
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="quality" value="None"
                    onChange={this.handleInputChange}
                    defaultChecked={quality==="no-printing" ? true : false}/>
                    <span className="btn btn-radio">
                      No printing<br/>&pound;0.00
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="quality" value="FantasticBoxCo"
                    onChange={this.handleInputChange}
                    defaultChecked={quality==="FantasticBoxCo-branding" ? true : false}/>
                    <span className="btn btn-radio">
                      <strong>FantasticBoxCo</strong> branding<br/>5% discount on total price
                    </span>
                  </label>
                </li>
              </ol>

              <div className="form-actions">
                <button type="button" className="btn btn-back" onClick={this.prevStep}>
                back
                </button>
                <button type="button" className="btn btn-primary btn-next" onClick={this.nextStep} disabled={!enabled}>
                Next
                </button>
              </div>
            </div>
        )
    }
}
