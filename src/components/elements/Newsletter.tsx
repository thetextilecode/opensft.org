import Image from 'next/image';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useState } from 'react';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    // firstName &&
    // lastName &&
    email.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email,
      // MERGE1: firstName,
      // MERGE2: lastName,
    });
  };

  return (
    <form className='mc__form form-subscriber d-flex wow fadeIn animated'
          onSubmit={(e) => handleSubmit(e)}>
      {status === 'sending' && (
        <div className='mc__alert mc__alert--sending'>
          sending...
        </div>
      )}
      {status === 'error' && (
        <div
          className='mc__alert mc__alert--error'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className='mc__alert mc__alert--success'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status !== 'success' ? (
        <div className='mc__field-container'>
          <input
            type='email'
            className='form-control bg-white font-small'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required={true}
          />
        </div>
      ) : null}

      {status !== 'success' && (
        <button
          className='btn bg-dark text-white'
          type='submit'
        >
          Subscribe
        </button>
      )}
    </form>
  );
};

export interface INewsletter {
  newsletterId: string;
  newsletterUser: string;
}

const Newsletter = ({ newsletterUser, newsletterId }: INewsletter) => {
  const url = `//opensft.us14.list-manage.com/subscribe/post?u=${newsletterUser}&id=${newsletterId}`;

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
                <h4 className='font-size-20 mb-0 ml-3 subscribe-text'>
                  &nbsp;Subscribe
                </h4>
              </div>
              <div className='col my-4 my-md-0 des'>
                <h5 className='font-size-15 ml-4 mb-0'>
                  Research, blog posts, and news.<br />
                  <strong>
                    No spam. We promise.
                  </strong>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='mc__form-container'>
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
