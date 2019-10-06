import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel';
import Button from './components/button';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { operations: [] }
    };
}

render() {
    // const { result, progress } = this.state;
    return (
        <div className="wrapper">
            <Panel data={this.state.operation} progress={progress} />
            <div className="controls">
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="ac" val="AC" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="pm" val="+/-" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="pr" val="%" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="dev" val="/" />

                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="seven" val="7" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="eight" val="8" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="nine" val="9" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="multi" val="*" />

                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="four" val="4" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="five" val="5" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="six" val="6" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="minus" val="-" />

                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="one" val="1" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="two" val="2" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="three" val="3" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="plus" val="+" />

                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="zero" val="0" />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="pt" val="." />
                <Button onClick={this.handleClick} onKeyPress={this.onKeyPress} cls="eq" val="=" />

            </div>
        </div>
    );
}


export default App;
