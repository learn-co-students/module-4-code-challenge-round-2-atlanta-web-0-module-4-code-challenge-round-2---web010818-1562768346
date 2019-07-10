import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'


const API = ('https://boiling-brook-94902.herokuapp.com/transactions')
class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  handleChange = (event) => {
    console.log(event)
    console.log(this.state)
    ///filter function not working
    let filter = this.state.transactions.filter(transaction => transaction.description.includes(event.target.value) == event.target.value)
    this.setState({transactions: filter})
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} transactions={this.state.transactions}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
