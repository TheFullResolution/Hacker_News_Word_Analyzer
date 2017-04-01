import React from 'react';

import style from 'scss/components/Page2.scss';

import { dropdowntext } from 'Page2/Page2Text';
import { Analyzer } from 'Analyzer/analyzer';
import DropDownList from 'Page2/components/DropDownList';
import AnalyzeButton from 'Page2/components/AnalyzeButton';
import Top10 from 'Page2/components/Top10';

export default class Page2Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      value: '',
      ready: false,
      processing: false,
      top10: []
    };
    this.dropdown = dropdowntext;
    this.optionUpdate = this.optionUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        processing: true
      };
    });
    Analyzer(this.state.value).then(result => {
      this.setState(() => {
        return {
          processing: false,
          top10: result
        };
      });
    });
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
    const { ready, info, processing, top10 } = this.state;
    let infoArea;
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
          <AnalyzeButton ready={ready} processing={processing} />
          <Top10 top10={top10} />
        </form>
      </div>
    );
  }
}
