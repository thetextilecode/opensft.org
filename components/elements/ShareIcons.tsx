
export interface IShareIcons {
  to?: string;
  url?: string;
}

const ShareIcons = ({ to, url }: IShareIcons) => {
  return (
    <div className='social-icons single-share'>
      <ul className='text-grey-5 d-inline-block'>
        <li>
          <strong className='mr-10'>Share this:</strong>
        </li>
        <li className='social-facebook'>
          <a href='#'>
            <img
              src='/assets/imgs/theme/icons/icon-facebook.svg'
              alt='Facebook'
            />
          </a>
        </li>
        <li className='social-twitter'>

          <a href='#'>
            <img
              src='/assets/imgs/theme/icons/icon-twitter.svg'
              alt='Twitter'
            />
          </a>
        </li>
        <li className='social-instagram'>
          <a href='#'>
            <img
              src='/assets/imgs/theme/icons/icon-instagram.svg'
              alt='Instagram'
            />
          </a>
        </li>
        <li className='social-linkedin'>
          <a href='#'>
            <img
              src='/assets/imgs/theme/icons/icon-pinterest.svg'
              alt='Pinterest'
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareIcons;
