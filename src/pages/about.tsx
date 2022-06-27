import Layout from '../components/layout/Layout';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { IConfig } from '../../types';

export interface IAbout {
  config: IConfig;
  newsletterId: string;
  newsletterUser: string;
}

function About({ config, newsletterId, newsletterUser }: IAbout) {
  return (
    <Layout
      parent="Home"
      sub="About"
      {...config}
      newsletterId={newsletterId}
      newsletterUser={newsletterUser}
    >
      <section className="section-padding">
        <div className="container pt-25">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-lg-0 mb-4">
              <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                Our Mission
              </h6>
              <h1 className="font-heading mb-40">
                We Want to Empower Businesses in Fashion with Open Source
              </h1>
              <p>
                OpenSFT is a nonprofit organisation that exists to provide the fashion and textile
                sector with educational resources and tools based on free and open source
                technology.
              </p>
              <p>
                An open source community fosters collaboration and makes it substantially easier for
                companies of varying sizes to pool together resources for important issues such as
                sustainability.
              </p>
            </div>
            <div className="col-lg-6">
              <Image
                src="/assets/images/page/cristofer-maximilian-t-shirt-unsplash.jpg"
                alt=""
                layout={'responsive'}
                width={1500}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="pt-25 wow fadeIn animated">
        <div className="container">
          <div className="row mb-50 align-items-center">
            <div className="col-md-6">
              <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                Our Team
              </h6>
              <h2 className="mb-15 wow fadeIn animated">Who is behind OpenSFT?</h2>
              <p className="text-grey-3 wow fadeIn animated">
                OpenSFT primarily consists of volunteers with a passion to change fashion for the
                better. We have a combined experience of over ten years in open source software and
                the fashion sector. If you would like to take part, be sure to{' '}
                <Link href={'/contact'}>reach out</Link> to us.
              </p>
            </div>
            <div className="col-md-6 text-md-end mt-30">
              <Link href={'/contact'}>
                <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand text-hover-white border-radius-5 btn-shadow-brand hover-up">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsletterId: String(process.env.REACT_APP_MAILCHIMP_ID),
      newsletterUser: String(process.env.REACT_APP_MAILCHIMP_U),
    },
  };
};
