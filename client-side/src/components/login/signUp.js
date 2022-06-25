import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Daftar</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Masukkan email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Masukkan password"
          />
        </div>
        <div className="mb-3">
          <label>Konfirmasi Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Konfirmasi password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Daftar
          </button>
        </div>
        <p className="forgot-password text-right">
          Sudah punya akun? <a href="/">Masuk</a>
        </p>
      </form>
    )
  }
}