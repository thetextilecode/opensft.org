import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className='newsletter p-30 mt-30 text-white wow fadeIn animated'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7 mb-md-3 mb-lg-0'>
            <div className='row align-items-center'>
              <div className='col flex-horizontal-center'>
                <Image
                  className='icon-email'
                  src='/assets/images/theme/icons/icon-email.svg'
                  alt=''
                  width={40}
                  height={40}
                />
                <h4 className='font-size-20 mb-0 ml-3'>
                  &nbsp;Subscribe
                </h4>
              </div>
              <div className='col my-4 my-md-0 des'>
                <h5 className='font-size-15 ml-4 mb-0'>
                  Research, blog posts, and news.<br/>
                  <strong>
                    Never spam. We promise.
                  </strong>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            {/* }<!-- Begin Mailchimp Signup Form -->{*/}

            <div id="mc_embed_signup">
              <form action="https://spoolbox.us7.list-manage.com/subscribe/post?u=871c25f5e6e64d7c20422cfe4&amp;id=54202e9780"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="form-subscriber d-flex wow fadeIn animated validate"
                    target="_blank" noValidate={true}>
                <div id="mc_embed_signup_scroll call">
                  <input type="email" name="EMAIL" className="email form-control bg-white font-small" id="mce-EMAIL" placeholder="email address" required/>
                    {/*}<!-- real people should not fill this in and expect good things - do not remove this or risk
                     form bot signups-->{*/}
                    <div style={{position: 'absolute', left: '-5000px', ariaHidden: true }}>
                      <input type="text" name="b_871c25f5e6e64d7c20422cfe4_54202e9780" tabIndex="-1" value=""/>
                    </div>
                  <input type="submit" placeholder="Join the Movement" name="subscribe" id="mc-embedded-subscribe" className="btn"/>

                </div>
              </form>
            </div>
            {/*}
            <form className='form-subscriber d-flex wow fadeIn animated'>
              <input
                type='email'
                className='form-control bg-white font-small'
                placeholder='Enter your email'
              />
              <button
                className='btn bg-dark text-white'
                type='submit'
              >
                Subscribe
              </button>
            </form>
            {*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
