import Image from 'next/image';

const CommentsArea = () => {
  return (
    <div className="comments-area">
      <div className="row">
        <div className="col-lg-8">
          <h4 className="mb-30">Comments</h4>
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb text-center">
                  <div style={{ width: '100%' }}>
                    <Image
                      src="/assets/images/page/avatar-6.jpg"
                      alt=""
                      layout={'responsive'}
                      width={564}
                      height={702}
                    />
                  </div>
                  <h6>
                    <a href="src/components/elements/CommentsArea#">Jacky Chan</a>
                  </h6>
                  <p className="font-xxs">Since 2012</p>
                </div>
                <div className="desc">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: '90%' }}></div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                      <a
                        href="src/components/elements/CommentsArea#"
                        className="text-brand btn-reply"
                      >
                        Reply
                        <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--single-comment --> */}
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb text-center">
                  <div style={{ width: '100%' }}>
                    <Image
                      src="/assets/images/page/avatar-7.jpg"
                      alt=""
                      layout={'responsive'}
                      width={564}
                      height={702}
                    />
                  </div>
                  <h6>
                    <a href="src/components/elements/CommentsArea#">Ana Rosie</a>
                  </h6>
                  <p className="font-xxs">Since 2008</p>
                </div>
                <div className="desc">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: '90%' }}></div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                      <a
                        href="src/components/elements/CommentsArea#"
                        className="text-brand btn-reply"
                      >
                        Reply
                        <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--single-comment --> */}
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb text-center">
                  <div style={{ width: '100%' }}>
                    <Image
                      src="/assets/images/page/avatar-8.jpg"
                      alt=""
                      layout={'responsive'}
                      width={564}
                      height={702}
                    />
                  </div>
                  <h6>
                    <a href="src/components/elements/CommentsArea#">Steven Keny</a>
                  </h6>
                  <p className="font-xxs">Since 2010</p>
                </div>
                <div className="desc">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: '90%' }}></div>
                  </div>
                  <p>
                    Authentic and Beautiful, Love these way more than ever expected They are Great
                    earphones
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                      <a
                        href="src/components/elements/CommentsArea#"
                        className="text-brand btn-reply"
                      >
                        Reply
                        <i className="fi-rs-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--single-comment --> */}
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="mb-30">Customer reviews</h4>
          <div className="d-flex mb-30">
            <div className="product-rate d-inline-block mr-15">
              <div className="product-rating" style={{ width: '90%' }}></div>
            </div>
            <h6>4.8 out of 5</h6>
          </div>
          {/* <div className="progress">
                                <span>5 star</span>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{"width":"} 0%;"}}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    50%
                                </div>
                            </div>
                            <div className="progress">
                                <span>4 star</span>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{"width":"} 5%;"}}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    25%
                                </div>
                            </div>
                            <div className="progress">
                                <span>3 star</span>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{"width":"} 5%;"}}
                                    aria-valuenow="45"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    45%
                                </div>
                            </div>
                            <div className="progress">
                                <span>2 star</span>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{"width":"} 5%;"}}
                                    aria-valuenow="65"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    65%
                                </div>
                            </div>
                            <div className="progress mb-30">
                                <span>1 star</span>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{"width":"} 5%;"}}
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    85%
                                </div>
                            </div> */}
          <a href="src/components/elements/CommentsArea#" className="font-xs text-muted">
            How are ratings calculated?
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentsArea;
