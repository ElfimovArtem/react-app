import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  submitHandler = () => {
    const {title} = this.state;
    const newPost = {
      title, id: Date.now().toString(),
    };

    console.log(newPost);
    this.setState({ title: '' });
  };

  changeInputHandler = (ev) => {
    this.setState({
      title: ev.target.value
    });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.value}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button
            className="btn btn-success"
            type="button"
            onClick={this.submitHandler}
        >
          Создать
        </button>
      </form>
    )
  }
}
