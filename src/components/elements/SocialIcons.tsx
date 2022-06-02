
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
      {facebook && <a href={`https://facebook.com/${facebook}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/images/theme/icons/icon-facebook.svg'
          alt='Facebook'
        />
      </a>}
      {twitter && <a href={`https://twitter.com/${twitter}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/images/theme/icons/icon-twitter.svg'
          alt='Twitter'
        />
      </a>}
      {instagram && <a href={`https://instagram.com/${instagram}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/images/theme/icons/icon-instagram.svg'
          alt='Instagram'
        />
      </a>}
      {pinterest && <a href={`https://pinterest.com/${pinterest}`} rel={'nofollow noreferrer'} target={'_blank'}>
        <img
          src='/assets/images/theme/icons/icon-pinterest.svg'
          alt='Pinterest'
        />
      </a>}
    </div>
  );
};

export default SocialIcons;
