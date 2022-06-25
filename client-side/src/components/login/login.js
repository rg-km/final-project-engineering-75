import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Masuk</h3>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder="Masukkan email"/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" placeholder="Masukkan password"/>
        </div>
        <div className="mb-1">
          <label>Masuk Sebagai</label>
        </div>
        <div className="mb-3">
          <div>
            <input type="radio" name="role" value="admin" id="admin"/>
            <label for="admin">Admin</label>
          </div>
          <div>
            <input type="radio" name="role" value="user"id="user"/>
            <label for="user">User</label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary mt-3" value="submit">
            Masuk
          </button>
        </div>
        <p className="forgot-password text-right">
          Belum punya akun? <a href="/sign-up">Daftar</a>
        </p>
      </form>
    )
  }
}