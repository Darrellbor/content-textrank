import React, { Component } from "react";
import axios from "axios";

import { checkValidity } from "../../shared/utility";

import Layout from "../../components/Layout";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

class Home extends Component {
  state = {
    homeForm: {
      text: {
        value: "",
        valid: true,
        focused: false,
        messageClassName: "none"
      }
    },
    formIsValid: false,
    loading: false,
    errorState: false,
    errorValue: "",
    extractive: "",
    view: "form"
  };

  handleInputOnChange = (event, elementId, validations) => {
    const value = event.target.value;

    const updatedFormElement = {
      ...this.state.homeForm[elementId],
      value,
      valid: checkValidity(value, validations),
      messageClassName:
        !checkValidity(value, validations) && value !== ""
          ? "input__message--error"
          : "none"
    };

    const updatedForm = {
      ...this.state.homeForm,
      [elementId]: updatedFormElement
    };

    let formIsValid = true;
    for (let elementId in updatedForm) {
      formIsValid = updatedForm[elementId].valid && formIsValid;
    }

    this.setState({
      homeForm: updatedForm,
      formIsValid: formIsValid
    });
  };

  handleInputFocus = (name, updatedState) => {
    const updatedNameObject = {
      ...this.state.homeForm[name],
      ...updatedState
    };

    const updatedForm = {
      ...this.state.homeForm,
      [name]: updatedNameObject
    };

    this.setState({
      homeForm: updatedForm
    });
  };

  handleToggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  handleToggleView = () => {
    this.setState({ view: this.state.view === "form" ? "content" : "form" });
  };

  handleOnSummarizeText = e => {
    e.preventDefault();

    const homeForm = this.state.homeForm;

    if (homeForm.text.valid && homeForm.text.value !== "") {
      this.handleToggleLoading();
      axios
        .post("http://localhost:3501/summarize/v1/summarize-text", {
          text: homeForm.text.value
        })
        .then(res => {
          this.handleToggleLoading();
          this.setState({
            errorState: false,
            errorValue: "",
            extractive: res.data.extractive.join(" ")
          });

          this.handleToggleView();
        })
        .catch(err => {
          this.handleToggleLoading();
          this.setState({
            errorState: true,
            errorValue: err.response.data.message
          });
        });
    } else {
      window.alert("Please provide the text for summarization!");
    }
  };

  render() {
    const homeForm = this.state.homeForm;

    return (
      <Layout>
        <div className="Home">
          {this.state.errorState && (
            <div className="alert alert-danger">{this.state.errorValue}</div>
          )}
          {this.state.view === "form" ? (
            <form onSubmit={this.handleOnSummarizeText}>
              <TextArea
                label="Provide the text you would like to summarize"
                attributes={{
                  type: "text",
                  required: true,
                  theme: "default",
                  value: homeForm.text.value,
                  onChange: event =>
                    this.handleInputOnChange(event, "text", {
                      required: true
                    }),
                  onFocus: () =>
                    this.handleInputFocus("text", {
                      focused: true
                    }),
                  onBlur: () =>
                    this.handleInputFocus("text", {
                      focused: false
                    })
                }}
                hasError={!homeForm.text.valid}
                focused={homeForm.text.focused}
                message={
                  !homeForm.text.valid &&
                  !homeForm.text.focused &&
                  homeForm.text.value !== ""
                    ? "The text to summarize cannot be empty!"
                    : ""
                }
                messageClassName={homeForm.text.messageClassName}
              />

              <div className="Home__submit-btn">
                <Button disabled={!this.state.formIsValid}>
                  {" "}
                  {this.state.loading ? "Loading..." : "Summarize Text"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="Home__content">
              <h3>Extractive summarization</h3>
              <p>{this.state.extractive}</p>
              <br />
              <br />
              <Button
                color="brand--reverse"
                onClick={() => this.handleToggleView()}
              >
                Summarize Another text
              </Button>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default Home;
