import React, { Component } from 'react'

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Total from './Total';
import Sidebar from './Sidebar';

export default class Steps extends Component {
    constructor(){
        super();
        this.state = {
            step: 1,
            height: 0,
            length: 0,
            width: 0,
            quantity: 0,
            grade: "",
            quality: "",
            handles: false,
            reinforced: false
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    handleNextStep = () => {
        if(this.state.step < 5) {
            this.setState({
                step: this.state.step + 1
            })
        }
    }

    handlePrevStep = () => {
        switch (this.state.step) {
            case 4:
                this.setState({
                    reinforced: false,
                    step: this.state.step - 1
                });
                break;
            case 2:
                this.setState({
                    grade: "",
                    step: this.state.step -1
                });
                break;
            default:
                this.setState({
                    step: this.state.step - 1
                });
                break;
        }
    }

    calculateSize = () => {
        let box = this.state;
        let size = (box.length * box.width * 2) + (box.height * box.width * 2) + (box.width * box.length * 2);
        return size;
    }
    
    totalPrice = () => {
        let size = this.calculateSize();

        // Grade

        let grade = 0
        switch (this.state.grade) {
        case "A":
            grade = size * 0.20
            break;
        case "B":
            grade = size * 0.10
            break;
        case "C":
            grade = size * 0.05
            break;
        default:
            grade = 0
            break;
        }
        grade = grade * this.state.quantity

        // Extras

        let extras = 0
        if (this.state.handles) {
            extras = this.state.quantity * 0.10;
        }
        if (this.state.reinforced) {
            extras = extras + (this.state.quantity * 0.05);
        }
        let total = grade + extras

        //Quality

        let quality = 0
        switch (this.state.quality) {
        case '3-C':
            quality = this.state.quantity * size * 0.2;
            break;
        case '2-C':
            quality = this.state.quantity * size * 0.1;
            break;
        case 'Black':
            quality = this.state.quantity * size * 0.05;
            break;
        case 'None':
            quality = 0
            break;
        case 'FantasticBoxCo':
            quality = -(total * 0.05)
            break;
        default:
            quality = 0;
            break;
        }
        total = total + quality

        return total;
    }

    render() {
        return (
            <div className="container">
                <Sidebar info={this.state} price={this.totalPrice()}/>
                
                <section>

                {this.state.step === 1 && <Step1 handleInputChange={this.handleInputChange} 
                nextStep={this.handleNextStep} info={this.state}/>}

                {this.state.step === 2 && <Step2 handleInputChange={this.handleInputChange}
                prevStep={this.handlePrevStep} nextStep={this.handleNextStep}
                grade={this.state.grade} size={this.calculateSize()}/>}

                {this.state.step === 3 && <Step3 handleInputChange={this.handleInputChange}
                prevStep={this.handlePrevStep} nextStep={this.handleNextStep}
                quality={this.state.quality}/>}

                {this.state.step === 4 && <Step4 handleCheckbox={this.handleCheckbox} step={this.state.step}
                prevStep={this.handlePrevStep} nextStep={this.handleNextStep}
                handles={this.state.handles} reinforced={this.state.reinforced} grade={this.state.grade}/>}

                {this.state.step === 5 && <Total total={this.state} prevStep={this.handlePrevStep}
                price={this.totalPrice()}/>}
                
                </section>
            </div>
        )
    }
}
