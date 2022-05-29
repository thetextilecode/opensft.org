
export interface ISocialIcons {
  facebook?: string;
  instagram?: string;
  linkedIn?: string;
  pinterest?: string;
  twitter?: string;
}

const SocialIcons = ({ facebook, instagram, linkedIn, pinterest, twitter }: ISocialIcons) => {
  return (
    <div className='mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0 animated'>
      <a href={`https://facebook.com/${facebook}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/imgs/theme/icons/icon-facebook.svg'
          alt='Facebook'
        />
      </a>
      <a href={`https://twitter.com/${twitter}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/imgs/theme/icons/icon-twitter.svg'
          alt='Twitter'
        />
      </a>
      <a href={`https://instagram.com/${instagram}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/imgs/theme/icons/icon-instagram.svg'
          alt='Instagram'
        />
      </a>
      <a href={`https://pinterest.com/${pinterest}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/imgs/theme/icons/icon-pinterest.svg'
          alt='Pinterest'
        />
      </a>
    </div>
  );
};

export default SocialIcons;
