import Layout from '../components/layout/Layout';
import Image from 'next/image';
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
                We Want to Empower Businesses in Fashion with Technology
              </h1>
              <p>
                OpenSFT exists to develop solutions for the fashion industry with the planet in
                mind. We provide the fashion and textile sector with technical solutions focused on
                conscious decisions from the ground up, to better tackle important issues such as
                climate change.
              </p>
              <br />

              <p>
                <Link href={'/contact'}>
                  <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand text-hover-white border-radius-5 btn-shadow-brand hover-up">
                    Contact Us
                  </a>
                </Link>
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
    </Layout>
  );
}

export default About;
