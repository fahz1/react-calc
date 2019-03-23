import React from 'react';
import CalcTitle from './calcTitle.js';
import OutputScreen from './outputScreen.js';
import OutputScreenRow from './outputScreenRow.js';
import Button from './button.js';

class Calc extends React.Component {
  constructor(props){
    super();

    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){
    const value = event.target.value;

    switch (value) {
      case '=':
      var ans = '';

        this.setState({ answer:ans , question: ''});
        break;

      case 'Clear':
      this.setState({ question: '', answer: '' });
      break;

      case 'Delete':
        {
          var str = this.state.question;
          this.setState({question: str});
          break;
        }

        default: {
          this.setState({ question: this.state.question += value })
          break;
        }
    }
  }
    render()
    {
    return (
    <div className="frame">
    <CalcTitle value="React Calculator"/>
    <div className="mainCalc">
    <OutputScreen/>
    <div className="button-row">
      <Button label={'Clear'}/>
      <Button label={'Delete'}/>
      <Button label={'.'}/>
      <Button label={'/'}/>
    </div>
    <div className="button-row">
      <Button label={'7'}/>
      <Button label={'8'}/>
      <Button label={'9'}/>
      <Button label={'*'}/>
    </div>
    <div className="button-row">
      <Button label={'4'}/>
      <Button label={'5'}/>
      <Button label={'6'}/>
      <Button label={'-'}/>
    </div>
    <div className="button-row">
      <Button label={'1'}/>
      <Button label={'2'}/>
      <Button label={'3'}/>
      <Button label={'+'}/>
    </div>
    <div className="button-row">
      <Button label={'0'}/>
      <Button label={'='}/>
    </div>
    </div>
    </div>
    );
  }
}

export default Calc;
