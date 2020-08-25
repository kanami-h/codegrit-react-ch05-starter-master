import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    chosenId: PropTypes.number
  }
  static defaultProps = {
    chosenId: 1
  }
  state = {
    comment: "実はコメントを書いているところです。"
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props)
    if (prevProps.chosenId !== this.props.chosenId) {
      this.setState({
        comment: ''
      })
    }
  }

  render() {
    const { comment } = this.state;
    return (
      <section className="comment-box">
        <div className="comment-area">{comment === '' ? "コメントする" : comment}</div>
      </section>
    );
  }
}