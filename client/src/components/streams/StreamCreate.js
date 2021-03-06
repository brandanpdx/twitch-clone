import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput() {
    return <div>I am an input</div>;
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="Title" component={this.renderInput} />
        <Field name="Description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
