import React, { Component } from 'react'

export default class Total extends Component {
  constructor(props){
    super(props);
    this.prevStep = this.props.prevStep;
  }
    render() {
      const {quantity,width,height,length,quality,grade,handles,reinforced} = this.props.total;
        return (
            <div id="total-cost" className="content-step">
              <h2>Total Cost</h2>

              <dl className="breakdown">
                <dt>Dimensions &amp; Quantity:</dt>
                <dd>{quantity} &times; {width}(W)&times;{height}(H)&times;{length}(L)</dd>

                <dt>Cardboard Grade:</dt>
                <dd>{grade} grade</dd>

                <dt>Print Quality:</dt>
                <dd>{quality}</dd>

                <dt>Optional Extras:</dt>
                <dd>
                  <ul>
                    {handles && <li>Handles</li>}
                    {reinforced && <li>Reinforced bottoms</li>}
                  </ul>
                </dd>

                <dt>Total Cost:</dt>
                <dd>&pound;{this.props.price.toFixed(2)}</dd>
              </dl>

              <div className="form-actions">
              <button type="button" className="btn btn-back" onClick={this.prevStep}>
                back
              </button>
            </div>
          </div>
        )
    }
}
