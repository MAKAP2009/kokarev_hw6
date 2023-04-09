import React from 'react';
import './RegistrationForm.scss';
import styles from './RegistrationFormInvalid.module.scss';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {},
    };
  }

  handleInputChange = (event) => {
  const { name, value } = event.target;
  let errors = {...this.state.errors};
  if (name === 'email' && value.indexOf('@') === -1) {
    errors.email = 'Email is invalid';
  } else {
    errors = {...errors, [name]: null};
  }
  this.setState({ [name]: value, errors });
};


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit success:', this.state);
    const { firstName, lastName, email, password } = this.state;
    const errors = {};

    // Валидация полей формы
    if (!firstName) {
      errors.firstName = 'First name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length === 0) {
      console.log('Registration form submitted:', this.state);
    } else {
      this.setState({ errors });
    }
  
  };

  render() {
    const { firstName, lastName, email, password, errors } = this.state;

    return (
      <form className="registration-form" onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
          {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
          {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
        </label>
        <label>
        Email:
          <input
  type="email"
  name="email"
  value={email}
  onChange={this.handleInputChange}
  className={`${styles.emailInput} ${errors.email && email.indexOf('@') === -1 ? styles.invalid : ''}`}
/>


          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
