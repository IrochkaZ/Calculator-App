import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel';
import Button from './components/button';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true,
            left: null,
            operation: null,
            result: '0',
            progress: '0',
            part: false
        };

        this.calc = (fn) => {
            return new Function('return ' + fn)();
        }

        this.handleClick = (event) => {
            event.persist();

            const { left, operation, result, progress, start, part } = this.state;
            const val = event.target.innerText;

            if (val == "AC") {
                this.setState(() => ({
                    start: true,
                    left: null,
                    operation: null,
                    result: '0',
                    progress: '0',
                    part: false
                }));
                return true;
            }

            if (val == "=") {
                if (operation !== null && left !== null && result !== '0') {
                    const strToCalc = `${left}${operation}${result}`;
                    this.setState(() => ({
                        start: true,
                        left: this.calc(strToCalc),
                        result: this.calc(strToCalc),
                        progress: '0',
                        part: false
                    }));
                    return true;
                }
            }

            if (val == "+/-") {
                if (result !== '0') {
                    const strToCalc = -1 * parseFloat(result);
                    this.setState(() => ({
                        start: false,
                        left: strToCalc,
                        result: strToCalc,
                        progress: '0',
                        part: false
                    }));
                    return true;
                }
            }

            if (val == "%") {
                if (result !== '0') {
                    const strToCalc = (parseFloat(result) / 100).toFixed(4);
                    this.setState(() => ({
                        start: false,
                        left: strToCalc,
                        result: strToCalc,
                        progress: '0',
                        part: false
                    }));
                    return true;
                }
            }



            //after AC or App init works
            //regex cheking on number input from 0 to 9 
            if (start == true && /^[0-9]*$/.test(val) == true && result == '0') {
                this.setState(() => ({
                    result: val,
                    start: false
                }));
                return true;
            }


            // works after first symbol in result exist not eq '0'
            //regex cheking on number input from 0 to 9 AND point '.'
            if (start == false && /^[0-9.]*$/.test(val) == true) {
                // checking if ponit was used before or not  -> "state.part"  false=notUsed, true=Used
                if (val == '.' && part == false) {
                    this.setState(() => ({
                        result: result + val,
                        part: true
                    }));
                }

                if (val !== '.') {
                    this.setState(() => ({
                        result: result + val
                    }));
                }
                return true;
            }

            if (start == false && /^[*/+-]*$/.test(val) == true) {
                if (operation == null && left == null) {
                    this.setState(() => ({
                        operation: val,
                        left: result,
                        progress: `${result}${val}`,
                        result: '0',
                        part: false,
                        start: true
                    }));
                    return true;
                }

                if (operation == null && left !== null) {
                    this.setState(() => ({
                        operation: val,
                        progress: `${result}${val}`,
                        result: '0',
                        part: false,
                        start: true
                    }));

                    return true;
                }

                if (operation !== null && left !== null && result !== '0') {
                    const strToCalc = `${left}${operation}${result}`;
                    this.setState(() => ({
                        start: true,
                        left: this.calc(strToCalc),
                        result: this.calc(strToCalc),
                        progress: '0',
                        part: false
                    }));
                    return true;
                }

            }

            if (start == true && /^[*/+-]*$/.test(val) == true) {
                if (operation !== null && left !== null && result == '0') {
                    this.setState(() => ({
                        operation: val,
                        progress: `${progress.slice(0, -1)}${val}`
                    }));
                    return true;
                }
            }
        }

    }

    render() {

        const { result, progress } = this.state;
        return (
            <div className="wrapper">
                <Panel result={result} progress={progress} />
                <div className="controls">
                    <Button onClick={this.handleClick} cls="ac" val="AC" />
                    <Button onClick={this.handleClick} cls="pm" val="+/-" />
                    <Button onClick={this.handleClick} cls="pr" val="%" />
                    <Button onClick={this.handleClick} cls="dev" val="/" />

                    <Button onClick={this.handleClick} cls="seven" val="7" />
                    <Button onClick={this.handleClick} cls="eight" val="8" />
                    <Button onClick={this.handleClick} cls="nine" val="9" />
                    <Button onClick={this.handleClick} cls="multi" val="*" />

                    <Button onClick={this.handleClick} cls="four" val="4" />
                    <Button onClick={this.handleClick} cls="five" val="5" />
                    <Button onClick={this.handleClick} cls="six" val="6" />
                    <Button onClick={this.handleClick} cls="minus" val="-" />

                    <Button onClick={this.handleClick} cls="one" val="1" />
                    <Button onClick={this.handleClick} cls="two" val="2" />
                    <Button onClick={this.handleClick} cls="three" val="3" />
                    <Button onClick={this.handleClick} cls="plus" val="+" />

                    <Button onClick={this.handleClick} cls="zero" val="0" />
                    <Button onClick={this.handleClick} cls="pt" val="." />
                    <Button onClick={this.handleClick} cls="eq" val="=" />

                </div>
            </div>
        );
    }
}

export default App;
