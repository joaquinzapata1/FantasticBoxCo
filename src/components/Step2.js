import React, { Component } from 'react'

export default class Step2 extends Component {
  constructor(props){
    super(props);
    this.nextStep = this.props.nextStep;
    this.prevStep = this.props.prevStep;
    this.handleInputChange = this.props.handleInputChange;
  }
    render() {
      const grade = this.props.grade;
      const enabled = grade !== "";
      const size = this.props.size;
        return (
            <div id="step-2" className="content-step">
          <h2>Step 2 - Cardboard Grade</h2>

          <p className="intro">
            <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard, each altering the price per m<sup>2</sup>:
​          </p>

          <ol className="btn-radios-list">
            <li>
              <label>
                <input type="radio" name="grade" value="A"
                onChange={this.handleInputChange}
                checked={grade==="A" ? true : false}/>
                <span className="btn btn-radio">
                  A Grade<br/>&pound;0.20 m<sup>2</sup>
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="grade" value="B"
                onChange={this.handleInputChange}
                checked={grade==="B" ? true : false}/>
                <span className="btn btn-radio">
                  B Grade<br/>&pound;0.10 m<sup>2</sup>
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="grade" value="C" disabled={size > 2 ? true : false}
                onChange={this.handleInputChange}
                checked={grade==="C" ? true : false}/>
                <span className="btn btn-radio">
                  C Grade<br/>&pound;0.05 m<sup>2</sup>
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
