import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Shop Name</h3>
          <div class="card border-primary">
            <div class="card-body p-0 ">
              <h4 class="card-title">Category1</h4>
            </div>
          </div>
          <div class="card border-primary">
            <div class="card-body  p-0">
              <h4 class="card-title">Category2</h4>
            </div>
          </div>
          <div class="card border-primary ">
            <div class="card-body p-0">
              <h4 class="card-title">Category3</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
