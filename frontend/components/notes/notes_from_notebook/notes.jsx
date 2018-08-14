import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.noteBar === true) {
      return <div>
        <h1>Worked!!</h1>
      </div>;
    } else {
      return (
        <div >
          <h1>Notebar Not working</h1>
        </div>
      );
    }
  }
}

export default Notes;