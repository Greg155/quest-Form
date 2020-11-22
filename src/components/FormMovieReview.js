import React from "react";

class FormMovieReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "https://post-a-form.herokuapp.com/api/movies",
      comment: "",
    };
  }

  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleOnChangeUrl = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  handleOnChangeComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies";
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie review has been succesfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert(`There was an error when adding the employe`);
      });
  };

  render() {
    return (
      <div className="movie_form">
        <h1>Movie review</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Description</legend>
            <div className="movie-data">
              <label htmlFor="description">Title</label>
              <input
                onChange={this.handleOnChangeTitle}
                value={this.state.title}
                placeholder="Movie name"
              />
            </div>

            <div className="movie-data">
              <label htmlFor="description">Poster url</label>
              <input
                onChange={this.handleOnChangeUrl}
                value={this.state.url}
                placeholder="url"
              />
            </div>

            <div className="comment-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                onChange={this.handleOnChangeComment}
                value={this.state.comment}
                placeholder="Comment"
              />
            </div>

            <hr />
            <div className="submit-data">
              <input type="submit" value="Send" onClick={this.submitForm} />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default FormMovieReview;
