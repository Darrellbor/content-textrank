//@flow
import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";

import * as actions from "../../store/actions/";

type AlertProps = {
  timer?: number,
  closable: boolean,
  message: String,
  style: string,
  onAlertClose: Function,
  data?: [
    {
      msg: String,
      param: string,
      style?: string
    }
  ]
};

type AlertState = {
  alertOpen: boolean
};

class Alert extends Component<AlertProps, AlertState> {
  timer: any;
  state = {
    alertOpen: true
  };

  static defaultProps = {
    closable: true
  };

  componentDidMount() {
    if (this.props.timer) {
      this.timerFunc();
    }
  }

  componentWillUnmount() {
    if (this.props.timer) {
      this.handleClearTimerFunc();
    }
    this.props.onAlertClose();
  }

  handleClearTimerFunc = () => {
    clearTimeout(this.timer);
  };

  timerFunc = () => {
    this.timer = setTimeout(() => {
      this.handleOnAlertClose();
    }, this.props.timer);
  };

  handleOnAlertClose = () => {
    this.setState({ alertOpen: false });
    this.props.onAlertClose();
  };

  render() {
    let display = <div />;

    if (this.state.alertOpen) {
      display = (
        <div className="Alert">
          {this.props.closable && (
            <button
              type="button"
              className="Alert__btn"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => this.handleOnAlertClose()}
            >
              <i className="fas fa-times"></i>
            </button>
          )}

          <div className="Alert__one">
            <div
              className={`alert alert-${this.props.style} `}
              role="alert"
              dangerouslySetInnerHTML={{ __html: this.props.message }}
            ></div>
          </div>

          <div className="Alert__data">
            {this.props.data &&
              this.props.data.length !== 0 &&
              this.props.data.map(item => (
                <div
                  key={item.param + uuid()}
                  className={`alert alert-${
                    item.style ? item.style : this.props.style
                  }  `}
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: item.msg }}
                ></div>
              ))}
          </div>
        </div>
      );
    }

    return display;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAlertClose: () => dispatch(actions.alertRemove())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Alert);
