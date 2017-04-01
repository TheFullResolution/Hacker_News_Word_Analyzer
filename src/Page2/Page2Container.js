import React from 'react';

import style from 'scss/components/Page1.scss';

import { dropdowntext } from 'Page2/Page2Text';
import { Analyzer } from 'Page2/Analyzer/analyzer';
import DropDownList from 'Page2/components/DropDownList';

export default class Page2Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      value: '',
      ready: false
    };
    this.dropdown = dropdowntext;
    this.optionUpdate = this.optionUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    Analyzer(this.state.value);
  }
  optionUpdate(value) {
    const { options } = this.dropdown;
    const foundIndex = options.findIndex(item => {
      return item.value === value;
    });
    this.setState(() => {
      return {
        info: options[foundIndex].info,
        value: value,
        ready: options[foundIndex].ready
      };
    });
  }
  render() {
    const { ready, info } = this.state;
    let submitButton, infoArea;
    if (!ready) {
      submitButton = (
        <button type="submit" className="button" disabled>
          Analyze!
        </button>
      );
    } else {
      submitButton = (
        <button type="submit" className="button">
          Analyze!
        </button>
      );
    }
    if (info) {
      infoArea = (
        <div>
          <p>{info}</p>
          {!ready && <p className="warning">This analysis is not ready yet</p>}
        </div>
      );
    }
    return (
      <div className={style.content}>
        <h2>Mighty Analyzer</h2>
        <form onSubmit={this.handleSubmit}>
          <DropDownList
            content={this.dropdown}
            optionUpdate={this.optionUpdate}
          />
          {infoArea}
          {submitButton}
        </form>
      </div>
    );
  }
}
