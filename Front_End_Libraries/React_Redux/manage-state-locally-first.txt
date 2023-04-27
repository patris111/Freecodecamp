class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input : event.target.value
    });
  }
  submitMessage(){
    let newMessages = [...this.state.messages, this.state.input];
    this.setState({
      messages: newMessages,
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        {console.log(this.state.messages)}
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitMessage}> Button </button>
        <ul>
          {this.state.messages.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
};
