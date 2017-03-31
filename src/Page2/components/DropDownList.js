import React, { PropTypes } from 'react';

import style from 'scss/components/DropDownList.scss';

export default class DropDownList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.optionUpdate(event.target.value);
  }

  render() {
    const { content } = this.props;
    return (
      <div className={style.dropdown}>
        <label>
          {content.label}&nbsp;
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='' defaultValue hidden></option>
            {content.options.map((item, index) => {
              return (
                <option key={index} value={item.value}>{item.option}</option>
              );
            })}
          </select>
        </label>
      </div>
    );
  }
}

DropDownList.propTypes = {
  content: PropTypes.object.isRequired,
  optionUpdate: PropTypes.func.isRequired
};
