import { connect } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { closeQuickView } from '../../redux/action/quickViewAction';
import ResourceDetails from './ResourceDetails';
import Image from 'next/image';

const images: { src: string }[] = [
  { src: '/images/offer/offer-1.jpg' },
  { src: '/images/offer/offer-2.jpg' },
  { src: '/images/offer/offer-3.jpg' },
];

export interface IQuickView {
  closeQuickView?: any;
  quickView?: any;
}

const QuickView = ({ quickView, closeQuickView }: IQuickView) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Image src={images[i].src} width={75} alt={''} layout={'fill'} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal open={!!quickView} onClose={closeQuickView}>
      {quickView && (
        <div className="quick-view">
          <ResourceDetails resource={quickView} quickView={quickView} />
        </div>
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  quickView: state.quickView,
});

export default connect(mapStateToProps, { closeQuickView })(QuickView);
