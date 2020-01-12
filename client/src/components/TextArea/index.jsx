//@flow
import React from "react";

import Label from "../Label";
import Password from "../Icons/Password";
import InputSuccess from "../Icons/InputSucess";
import InputCancel from "../Icons/InputCancel";

type TextareaProps = {
  attributes: Object,
  hasError: boolean,
  focused: boolean,
  label?: string,
  message?: string,
  messageClassName?: string,
  appendItem: any,
  prependItem: any,
  handleAppendItemClick?: Function,
  isPasswordVisible?: boolean
};

const Textarea = (props: TextareaProps) => {
  let appendedItem,
    textareaClassName = "textarea";
  let messageClassName = props.messageClassName
    ? props.messageClassName + " textarea__message"
    : "textarea__message";

  props.hasError &&
    props.attributes.value !== "" &&
    !props.focused &&
    (textareaClassName += " textarea--invalid");
  props.focused && (textareaClassName += " textarea--focus");

  switch (props.appendItem) {
    case "password":
      appendedItem = (
        <div className="textarea__icon" onClick={props.handleAppendItemClick}>
          {props.isPasswordVisible ? <Password type="close" /> : <Password />}
        </div>
      );
      break;
    case "success":
      appendedItem = (
        <div className="textarea__icon">
          <InputSuccess />
        </div>
      );
      break;
    case "cancel":
      appendedItem = (
        <div className="textarea__icon" onClick={props.handleAppendItemClick}>
          <InputCancel />
        </div>
      );
      break;
    default:
      props.appendItem &&
        (appendedItem = (
          <div className="textarea__icon" onClick={props.handleAppendItemClick}>
            {props.appendItem}
          </div>
        ));
  }
  return (
    <div
      className={
        props.attributes.theme
          ? `textarea__group textarea__theme--${props.attributes.theme}`
          : "textarea__group"
      }
    >
      {props.label && (
        <Label>
          {props.label}
          {props.attributes.required && " *"}
        </Label>
      )}
      <div className={textareaClassName}>
        {props.prependItem && (
          <div className="textarea__prepend">{props.prependItem}</div>
        )}
        <textarea className="textarea__item" {...props.attributes} />
        {props.appendItem && (
          <div className="textarea__append">{appendedItem}</div>
        )}
      </div>
      {props.message && (
        <small className={messageClassName}>{props.message}</small>
      )}
    </div>
  );
};

Textarea.defaultProps = {
  attributes: {
    required: false,
    value: "",
    theme: "default",
    onChange: () => null,
    onFocus: () => null,
    onBlur: () => null
  },
  appendedItem: null,
  handleAppendItemClick: () => null
};

export default Textarea;
