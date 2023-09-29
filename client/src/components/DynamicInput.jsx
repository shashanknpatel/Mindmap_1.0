import React, { Component } from 'react';

class DynamicInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      childComponents: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addChildInput = () => {
    const { childComponents, inputValue } = this.state;
    const newChild = <DynamicInput key={childComponents.length} />;
    this.setState({
      childComponents: [...childComponents, newChild],
      inputValue: '', // Clear the input field after adding a child.
    });
  };

  render() {
    const { inputValue, childComponents } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addChildInput}>Add Child Input</button>
        {childComponents.map((child, index) => (
          <div key={index} style={{ marginLeft: '20px' }}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}

export default DynamicInput;
