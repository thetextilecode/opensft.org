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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
