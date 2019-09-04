import React, { Component } from 'react'

export default class Step4 extends Component {
  constructor(props){
    super(props);
    this.nextStep = this.props.nextStep;
    this.prevStep = this.props.prevStep;
    this.handleCheckbox = this.props.handleCheckbox;
  }

    render() {
      const handles = this.props.handles;
      const reinforced = this.props.reinforced;
      const grade = this.props.grade;
      const enabled = grade === "A";
        return (
            <div id="step-4" className="content-step">
              <h2>Step 4 - Optional Extras</h2>

              <ol className="btn-radios-list">
                <li>
                  <label>
                    <input type="checkbox" name="handles" value={handles}
                    defaultChecked={handles ? true : false}
                    onChange={this.handleCheckbox}/>
                    <span className="btn btn-radio">
                      Handles<br/>&pound;0.10 per box
                    </span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="reinforced" value={enabled ? reinforced : false}
                    defaultChecked={reinforced ? true : false} disabled={!enabled}
                    onChange={enabled ? this.handleCheckbox : undefined}/>
                    <span className="btn btn-radio">
                      Reinforced bottom<br/>&pound;0.05 per box<br/>
                      <small>(only available with grade A cardboard)</small>
                    </span>
                  </label>
                </li>
              </ol>

              <div className="form-actions">
                <button type="button" className="btn btn-back" onClick={this.prevStep}>
                  back
                </button>
                <button type="button" className="btn btn-primary btn-next" onClick={this.nextStep}>
                  Finish
                </button>
              </div>
            </div>
        )
    }
}
