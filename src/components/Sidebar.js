import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
      const {width,height,length,quantity,step,handles,reinforced,grade,quality} = this.props.info;
        return (
            <aside>
            <ul className="progress">
              <li>
                <a href="#step-1" className={step===1 ? "step step-1 is-active" : "step step-1"}>
                  <div className="step-number">1</div>
                  <h3 className="step-heading">Dimensions &amp; Quantity</h3>
                  <dl>
                    <dt>Width:</dt>
                    <dd>{width}m</dd>
                    <dt>Height:</dt>
                    <dd>{height}m</dd>
                    <dt>Length:</dt>
                    <dd>{length}m</dd>
                    <dt>Quantity:</dt>
                    <dd>{quantity}</dd>
                  </dl>
                </a>
              </li>
              <li>
                <a href="#step-2" className={step===2 ? "step step-2 is-active" : "step step-2"}>
                  <div className="step-number">2</div>
                  <h3 className="step-heading">Cardboard Grade</h3>
                  <span className="step-value">{grade}</span>
                </a>
              </li>
              <li>
                <a href="#step-3" className={step===3 ? "step step-3 is-active" : "step step-3"}>
                  <div className="step-number">3</div>
                  <h3 className="step-heading">Print Quality</h3>
                  <span className="step-value">{quality}</span>
                </a>
              </li>
              <li>
                <a href="#step-4" className={step===4 ? "step step-4 is-active" : "step step-4"}>
                  <div className="step-number">4</div>
                  <h3 className="step-heading">Optional Extras</h3>
                  <span className="step-value">{handles && "Handles"} - {reinforced && "Reinforced"}</span>
                </a>
              </li>
              <li>
                <a href="#total-cost" className="step step-total-cost">
                  <h3 className="step-total-cost-heading">Total Cost</h3>
                  <div className="step-total-cost-value">&pound;{this.props.price.toFixed(2)}</div>
                </a>
              </li>
            </ul>
          </aside>
        )
    }
}
