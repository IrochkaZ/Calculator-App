import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel';
import Button from './components/button';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '3456',
            progress: '123+456',
        };
    }

    render() {
        const { result, progress } = this.state;
        return (
            <div className="wrapper">
                <Panel result={result} progress={progress} />
                <div className="controls">
                    <Button cls="ac" val="AC" />
                    <Button cls="pm" val="+/-" />
                    <Button cls="pr" val="%" />
                    <Button cls="dev" val="/" />

                    <Button cls="seven" val="7" />
                    <Button cls="eight" val="8" />
                    <Button cls="nine" val="9" />
                    <Button cls="multi" val="*" />

                    <Button cls="four" val="4" />
                    <Button cls="five" val="5" />
                    <Button cls="six" val="6" />
                    <Button cls="minus" val="-" />

                    <Button cls="one" val="1" />
                    <Button cls="two" val="2" />
                    <Button cls="three" val="3" />
                    <Button cls="plus" val="+" />

                    <Button cls="zero" val="0" />
                    <Button cls="pt" val="." />
                    <Button cls="eq" val="=" />

                </div>
            </div>
        );
    }
}

export default App;
