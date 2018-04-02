import React from 'react';
import '../styles/AlertButton.css';

class AlertButton extends React.Component {

  onClickAlert() {
    if (this.props.dateStrings[0] && this.props.dateStrings[1]) {
      alert(`선택하신 날짜는 ${this.props.dateStrings[0]}, 그리고 ${this.props.dateStrings[1]}입니다!`);
    } else if (!this.props.dateStrings[0] && !this.props.dateStrings[1]) {
      alert('시작 날짜와 끝나는 날짜를 선택해주세요.');
    } else if (!this.props.dateStrings[0] && this.props.dateStrings[1]) {
      alert('시작 날짜를 선택해주세요.');
    } else if (this.props.dateStrings[0] && !this.props.dateStrings[1]) {
      alert('끝나는 날짜를 선택해주세요.')
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickAlert.bind(this)} className="alert">적용</button>
      </div>
    );
  }
}

export default AlertButton;
