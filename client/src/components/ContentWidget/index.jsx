import React, { Component } from "react";

import Modal from "../Modal";

class ContentWidget extends Component {
  state = {
    modal: false
  };

  handleToggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div className="contentWidget">
        <div
          className="contentWidget__body"
          onClick={() => this.handleToggleModal()}
        >
          <h3>{this.props.innerContent}</h3>
        </div>
        <h5 onClick={() => this.handleToggleModal()}>
          {this.props.description}
        </h5>

        {this.state.modal && (
          <Modal width="medium" onClose={() => this.handleToggleModal()}>
            {this.props.children}
          </Modal>
        )}
      </div>
    );
  }
}
export default ContentWidget;
