import React, { Component } from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component 
{   
    constructor(props) {
        super(props)
        this.state = { usuario: '', password:''}
        //this.handleChange = this.handleChange.bind(this)
        //this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChange1(event) {
        this.setState({ usuario:event.target.value })
      }
    
      handleChange2(event) {
        this.setState({ password:event.target.value })
      }  
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);   
        //http://localhost/struts2react/input1.jsp
        let url = 'http://localhost:8080/ServletXX1/ServletX1?username='+this.state.usuario+'&password='+this.state.password;
        fetch(url).then(response => response.text()).then(data => 
          {
          window.location.href = data;
          });
      }
  render() {
    return (
        <div class="container">
          <form id="signup" onSubmit={this.handleSubmit}>
            <div class="header">
              <h3> Iniciar Sesion</h3>
            </div>
            <div class="sep"></div>
            <div class="inputs">
              <input
                type="text"
                placeholder="Usuario"
                autofocus
                value={this.state.usuario}
                onChange={this.handleChange1}
              />
              <input 
              type="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.handleChange2}
              />
              <button id="submit" type="submit" class="btn btn-primary" value="Submit"> Acceder </button>
            </div>
          </form>
        </div>
    )
}
}
export default NameForm;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<NameForm />, wrapper) : false;