import React, { Component } from "react";

class Post1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="singlePost">
        <h4>Post #{this.props.match.params.id}</h4>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          deserunt nesciunt voluptas. Numquam est, expedita dolorem velit
          aperiam dicta quis odio libero, enim, voluptatum magnam laudantium
          sapiente! Odio, earum blanditiis.
        </p>
      </div>
    );
  }
}

export default Post1;
