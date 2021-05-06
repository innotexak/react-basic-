// import './App.css';

// import React, { Component } from 'react';

// class Form extends Component {
//   state = {
//     firstName: '',
//     lastName: '',
//     people: [],
//   };

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: [event.target.value] });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const firstName = this.state.firstName;
//     const lastName = this.state.lastName;

//     if (firstName.length > 0 && lastName.length > 0) {
//       const person = ` ${firstName} ${lastName} `;
//       this.setState({
//         people: [...this.state.people, person],
//         firstName: '',
//         lastName: '',
//       });
//     }
//   };
//   render() {
//     return (
//       <section>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
//           <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
//           <button type="submit">Submit</button>
//         </form>
//         <h2>Displaying People</h2>
//         <div>{this.state.people}</div>
//       </section>
//     );
//   }
// }

// function App() {
//   return <Form />;
// }

// export default App;
