import React from 'react'
import '../style/CreateAcount.css'

const CreateAcount = () => {
  return (
    <div class="CreateAcount">
      <div class="CreateAcount-container">
        <h1 class="title">My account</h1>

        <form action="/" class="form">
          <div>
            <label for="name" class="label">
              Name
            </label>
            <p class="value">Camila Yokoo</p>

            <label for="email" class="label">
              Email
            </label>
            <p class="value">camilayokoo@gmail.com</p>

            <label for="password" class="label">
              Password
            </label>
            <p class="value">*********</p>
          </div>

          <input
            type="submit"
            value="Edit"
            class="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAcount
