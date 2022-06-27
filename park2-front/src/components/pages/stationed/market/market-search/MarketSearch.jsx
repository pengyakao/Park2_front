import React, { Component } from 'react';
import './style.css'
import Btn from '../../../../commons/btn/Btn'
import Title from '../../../../commons/title/Title'

class MarketSearch extends Component {
  state = { 
    number: '',
    phone: '',
    db_number: 'abc',
    db_phone: '123'
  } 
  render() { 
    return (
      <div className="search">
        <div className="filter">
          <img src="/stationed/search-bg.png" alt="" />
        </div>
        <div className="popup">
          <div className="popup-box">
            <img src="./img/smile.svg" alt="" className="face" />
            <div className="msg">
              查無此訂單編號或申請人手機號碼，請查明後再試！
            </div>
            <Btn name="確定" shouldCheck={false} onHandle={this.removePopup}/>
          </div>
        </div>
        <div className="search-container">
          <Title title="《我出去一下》風格品牌出店計畫報名查詢" />
          <div className="form-group">
            <label for="search-number">請輸入申請編號*</label>
            <input type="text" className="form-control" id="search-number" value={this.state.number}
              onChange={(event)=>this.setState({number: event.target.value})}
            />
          </div>
          <div className="form-group">
            <label for="search-phone">請輸入申請人手機*</label>
            <input type="text" className="form-control" id="search-phone" value={this.state.phone}
              onChange={(event)=>this.setState({phone: event.target.value})}
            />
          </div>
          <Btn name="送出查詢" shouldCheck={true} onHandle={this.handleCheck}/>
        </div>
      </div>
    );
  }
  handleCheck = () => {
    if((this.state.number === this.state.db_number) && (this.state.phone === this.state.db_phone)) {
      window.location.href = "/stationed/market-state";
    }else{
      document.querySelector('.popup').classList.add('show-popup')
    }
  }
  removePopup = () => {
    document.querySelector('.popup').classList.remove('show-popup')
  }
}
 
export default MarketSearch;