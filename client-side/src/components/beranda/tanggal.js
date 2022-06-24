import React from 'react'

class Tanggal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div>
        {this.state.date.toLocaleTimeString("id-ID", options)}
      </div>
    );
  }
}

export default Tanggal