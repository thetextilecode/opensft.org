const CommentsForm = () => {
  return (
    <div className="comment-form">
      <h4 className="mb-15">Leave a Comment</h4>
      <div className="product-rate d-inline-block mb-30"></div>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <form
            className="form-contact comment_form"
            action="src/components/elements/CommentsForm#"
            id="commentForm"
          >
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control w-100"
                    name="comment"
                    id="comment"
                    cols={30}
                    rows={9}
                    placeholder="Write Comment"
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="website"
                    id="website"
                    type="text"
                    placeholder="Website"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="button button-contactForm">
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
