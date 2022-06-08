export interface IShareIcons {
  title?: string;
  url?: string;
}

const ShareIcons = ({ title, url }: IShareIcons) => {
  return (
    <div className="social-icons single-share">
      <ul className="text-grey-5 d-inline-block">
        <li>
          <strong className="mr-10">Share this:</strong>
        </li>
        <li className="social-facebook">
          <a href={`https://www.facebook.com/sharer.php?u=${url}`}>
            <img src="/assets/images/theme/icons/icon-facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li className="social-twitter">
          <a href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}>
            <img src="/assets/images/theme/icons/icon-twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li className="social-instagram">
          <a href={`https://www.instagram.com/?url=${url}`}>
            <img src="/assets/images/theme/icons/icon-instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li className="social-linkedin">
          <a href={`https://pinterest.com/pin/create/button/?url=${url}`}>
            <img src="/assets/images/theme/icons/icon-pinterest.svg" alt="Pinterest" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareIcons;
