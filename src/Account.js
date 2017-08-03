import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props);

    this.state = {
      balance: 0
    }
  }

  handleDepositClick(e) {
    e.preventDefault();
    let amount = this.inputBox.value;
    let newBalance;
    if (amount) {
      newBalance = this.state.balance + parseInt(amount, 10);
    } else {
      newBalance = this.state.balance;
    }
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }

  handleWithdrawClick(e) {
    e.preventDefault();
    let amount = this.inputBox.value;
    let newBalance = this.state.balance - amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)}/>
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)}/>
      </div>
    )
  }
}
