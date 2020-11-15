import React, { Component } from "react";
import { MDBSelect } from "mdbreact";

class SelectPage extends Component {
  state = {
    options: [
      {
        icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg",
        value: "example 1",
        text: "User nr 1"
      },
      {
        icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg",
        value: "example 2",
        text: "User nr 2"
      },
      {
        icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
        value: "example 3",
        text: "User nr 3"
      }
    ]
  };

  render() {
    return (
      <div>
        <MDBSelect
          multiple
          options={this.state.options}
          selected="Choose your option"
          label="Example label"
          selectAll
        />
      </div>
    );
  }
}

export default SelectPage;