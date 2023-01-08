import React, {Component} from "react"
import Education from "./Education"
import EmploymentHistory from "./EmploymentHistory"
import Links from "./Links"
import PersonalDetails from "./PersonalDetails"
import ProfessionalSummary from "./ProfessionalSummary"
import Skills from "./Skills"
import './nav_bar.css'
export default class Forms extends Component{

    state={
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        
    }
    categories = ['Personal Details', 'Professional Summary', 'Employment History', 'Education', 'Links', 'Skills']
    
    changeStep = (selectStep) => {
      this.setState({step: selectStep})

    }
    handleChange =input => e => {
        this.setState({[input]: e.target.value })
      }

    renderSwitch(){
        const { step } = this.state;
        const { firstName, lastName, email, phone, country, city} = this.state;
        const values = {firstName, lastName, email, phone, country, city}

      switch (step) {
        case 1: 
          return (
            <PersonalDetails 
              handleChange={this.handleChange}
              values = {values}
            />
          )
        case 2: 
          return (
            <ProfessionalSummary 
              handleChange={this.handleChange}
              values = {values}/>
          )
        case 3: 
          return (
            <EmploymentHistory 
            handleChange={this.handleChange}
            values = {values}/>
          )
        case 4:
          return (
            <Education
              handleChange={this.handleChange}
              values = {values}/>
            
          )
        case 5:
          return (
            <Links
            handleChange={this.handleChange}
            values = {values}
            />
          )
        case 6:
          return (
            <Skills
            handleChange={this.handleChange}
            values = {values}
            />
          )
        default:     
      }
    }
    
    render(){
      console.log(this.state)
      console.log(typeof(this.state.step))
      return (
        <>
          <div className="container border bg-light">
          <div className="row">
          {this.categories.map((obj, i) => (
      <div key={i} id={i+1} className={`col border text-center containerCSS ${this.state.step === i+1 ? 'border-primary' : ''}`} onClick={() => this.changeStep(i+1) }>
            <h5>{obj}</h5>
           
        </div>
     
      ))}
          </div>
          {this.renderSwitch()}
          
          </div>
        </>
      );
        
         
    }
}