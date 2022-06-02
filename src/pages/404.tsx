import Link from 'next/link';

function Custom404() {
  return (
    <main className='main page-404'>
      <div className='container'>
        <div className='row align-items-center height-100vh text-center'>
          <div className='col-lg-8 m-auto'>
            <p className='mb-50'>
                <img
                  src='/assets/images/theme/404.png'
                  alt=''
                  className='hover-up'
                />
            </p>
            <h2 className='mb-30'>Page Not Found</h2>
            <p className='font-lg text-grey-700 mb-30'>
              The link you clicked may be broken or the page
              may have been removed.
              <br /> visit the
              <Link href='/src/pages'>
                <a>
                  <span> Homepage</span>
                </a>
              </Link>
              or
              <Link href='/src/pages/contact'>
                <a>
                  <span>Contact us</span>
                </a>
              </Link>
              about the problem
            </p>
            <form
              className='contact-form-style text-center'
              id='contact-form'
              action='src/pages/404#'
              method='post'
            >
              <div className='row'>
                <div className='col-lg-6 m-auto'>
                  <div className='input-style mb-20 hover-up'>
                    <input
                      name='name'
                      placeholder='Search'
                      type='text'
                    />
                  </div>
                </div>
              </div>
              <Link href='/src/pages'>
                <a className='btn btn-default submit-auto-width font-xs hover-up'>
                  Back To Home Page
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Custom404;
