import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
      allTransactions: [],
      filteredTransactions: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp =>resp.json())
    .then(data => {
      this.setState({allTransactions: data,
      filteredTransactions: data})
    })
  }


  handleChange = (value) => {
    let query = value
    let results = this.state.allTransactions
    if(query){
      results = results.filter(trans => (trans.description || trans.category).includes(query))
    }
    this.setState({filteredTransactions: results})
    //it will filter  by description but not category, and not perfectly
  }

  render() {
      console.log(this.state.filteredTransactions)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList 
        transactions={this.state.allTransactions}
        filteredTransactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
