'use strict'; 
const e = React.createElement; 
class myButton extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return 'Oluwamakinde Toluwase'; 
    } 
 
    return e( 
      'button', 
      { onClick: () => this.setState({ isliked: true }) }, 
      'Oluwamakinde Toluwase' 
    ); 
  } 
} 
const domContainer = document.querySelector('#some_random_id'); 
ReactDOM.render(e(myButton), domContainer);