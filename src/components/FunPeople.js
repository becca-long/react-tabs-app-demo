import React, { Component } from 'react'
import FunPeopleForm from './FunPeopleForm'

class FunPeople extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         reason: '',
         disabled: true,
         funPeople: [],
      }

      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleReasonChange = this.handleReasonChange.bind(this)
      this.updateSubmitBtnState = this.updateSubmitBtnState.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.clearForm = this.clearForm.bind(this)
      this.removeFunPerson = this.removeFunPerson.bind(this)
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value})
        this.updateSubmitBtnState()
    }

    handleReasonChange(event) {
        this.setState({reason: event.target.value})
        this.updateSubmitBtnState()
    }

    updateSubmitBtnState() {
        if (!this.state.name || !this.state.reason) {
            this.setState({disabled: true})
        } else {
            this.setState({disabled: false})
        } 
    }

    handleSubmit(event) {
        event.preventDefault()
        this.state.funPeople.push({text: this.state.name + ' is fun because ' + this.state.reason, name: this.state.name})
        this.clearForm()
    }

    clearForm() {
        this.setState({name: '',
                       reason: '',
                       disabled: true})
    }

    removeFunPerson(index) {
        this.state.funPeople.splice(index, 1)
        this.forceUpdate()
    }

    render() {
        return (
            <section className="content">
                <h1 className="title">List of Fun People</h1>
                <div className="box">
                    <FunPeopleForm nameVal={this.state.name}
                                   reasonVal={this.state.reason}
                                   disabledVal={this.state.disabled}
                                   handleNameChange={this.handleNameChange}
                                   handleReasonChange={this.handleReasonChange}
                                   handleSubmit={this.handleSubmit}/>
                </div>
                <div className="columns">
                    {this.state.funPeople.length === 0 ? <p>Unfortunately, no one is fun :(</p> : 
                        this.state.funPeople.map((item, index) => 
                        <div className="column is-4" key={index}>
                            <div className="box content is-medium">
                                <p>{item.text}</p> 
                                <button className="button is-link"
                                        onClick={() => this.removeFunPerson(index)}>Remove {item.name}</button>
                            </div>
                        </div>
                    )
                    }
                </div>
            </section>
        )
  }
}

export default FunPeople