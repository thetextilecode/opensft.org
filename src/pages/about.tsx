import Layout from '../components/layout/Layout';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface IAbout {
  newsletterId: string;
  newsletterUser: string;
}

function About({ newsletterId, newsletterUser }: IAbout) {
  return (
    <Layout parent='Home'
            sub='About'
            newsletterId={newsletterId}
            newsletterUser={newsletterUser}>
      <section className='section-padding'>
        <div className='container pt-25'>
          <div className='row'>
            <div className='col-lg-6 align-self-center mb-lg-0 mb-4'>
              <h6 className='mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated'>
                Our Mission
              </h6>
              <h1 className='font-heading mb-40'>
                We Want to Empower Businesses in Fashion with Open Source
              </h1>
              <p>
                OpenSFT is a nonprofit organisation that exists to provide the fashion and
                textile sector with educational resources and tools based on free and open source technology.
              </p>
              <p>
                An open source community fosters collaboration and makes it substantially easier for companies of
                varying sizes to pool together resources for important issues such as sustainability.
              </p>
            </div>
            <div className='col-lg-6'>
              <Image
                src='/assets/images/page/cristofer-maximilian-t-shirt-unsplash.jpg'
                alt=''
                layout={'responsive'}
                width={1500}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='team'
               className='pt-25 wow fadeIn animated'>
        <div className='container'>
          <div className='row mb-50 align-items-center'>
            <div className='col-md-6'>
              <h6 className='mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated'>
                Our Team
              </h6>
              <h2 className='mb-15 wow fadeIn animated'>
                Who is behind OpenSFT?
              </h2>
              <p className='text-grey-3 wow fadeIn animated'>
                OpenSFT primarily consists of volunteers with a passion to change fashion for the better.
                We have a combined experience of over ten years in open source software and the fashion sector. If
                you would like to take part, be sure to <Link href={'/contact'}>reach out</Link> to us.
              </p>
            </div>
            <div className='col-md-6 text-md-end mt-30'>
              <Link href={'/contact'}>
                <a
                  className='btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand text-hover-white border-radius-5 btn-shadow-brand hover-up'>
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*<section id='testimonials'*/}
      {/*         className='section-padding section-border'>*/}
      {/*  <div className='container pt-25'>*/}
      {/*    <div className='row mb-50'>*/}
      {/*      <div className='col-lg-12 col-md-12 text-center'>*/}
      {/*        <h6 className='mt-0 mb-10 text-uppercase text-brand font-sm wow fadeIn animated'>*/}
      {/*          Our Principles*/}
      {/*        </h6>*/}
      {/*        <h2 className='mb-15 text-grey-1 wow fadeIn animated'>*/}
      {/*          The values that*/}
      {/*          <br /> bring us together*/}
      {/*        </h2>*/}
      {/*        <p className='w-50 m-auto text-grey-3 wow fadeIn animated'>*/}
      {/*          At vero eos et accusamus et iusto odio*/}
      {/*          dignissimos ducimus quiblanditiis*/}
      {/*          praesentium. ebitis nesciunt voluptatum*/}
      {/*          dicta reprehenderit accusamus*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className='row align-items-center'>*/}
      {/*      <div className='col-md-6 col-lg-4'>*/}
      {/*        <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>*/}
      {/*          <div className='hero-card-icon icon-left-2 hover-up '>*/}
      {/*            <div style={{ width: '100%' }}>*/}
      {/*              <Image*/}
      {/*                className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'*/}
      {/*                src='/assets/images/page/avatar-1.jpg'*/}
      {/*                layout={'responsive'}*/}
      {/*                width={564}*/}
      {/*                height={702}*/}
      {/*                alt=''*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className='pl-30'>*/}
      {/*            <h5 className='mb-5 fw-500'>Transparency</h5>*/}
      {/*            <p className='font-sm text-grey-5'>*/}
      {/*              Adobe Jsc*/}
      {/*            </p>*/}
      {/*            <p className='text-grey-3'>*/}
      {/*              "Lorem ipsum dolor sit amet*/}
      {/*              consectetur adipisicing elit.*/}
      {/*              Debitis nesciunt voluptatum dicta*/}
      {/*              reprehenderit accusamus voluptatibus*/}
      {/*              voluptas."*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className='col-md-6 col-lg-4'>*/}
      {/*        <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>*/}
      {/*          <div className='hero-card-icon icon-left-2 hover-up'>*/}
      {/*            <div style={{ width: '100%' }}>*/}
      {/*              <Image*/}
      {/*                className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'*/}
      {/*                src='/assets/images/page/avatar-3.jpg'*/}
      {/*                layout={'responsive'}*/}
      {/*                width={564}*/}
      {/*                height={702}*/}
      {/*                alt=''*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className='pl-30'>*/}
      {/*            <h5 className='mb-5 fw-500'>Collaboration</h5>*/}
      {/*            <p className='font-sm text-grey-5'>*/}
      {/*              Knowledge sharing*/}
      {/*            </p>*/}
      {/*            <p className='text-grey-3'>*/}
      {/*              "Lorem ipsum dolor sit amet*/}
      {/*              consectetur adipisicing elit.*/}
      {/*              Debitis nesciunt voluptatum dicta*/}
      {/*              reprehenderit accusamus voluptatibus*/}
      {/*              voluptas."*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className='col-md-6 col-lg-4'>*/}
      {/*        <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>*/}
      {/*          <div className='hero-card-icon icon-left-2 hover-up '>*/}
      {/*            <div style={{ width: '100%' }}>*/}
      {/*              <Image*/}
      {/*                className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'*/}
      {/*                src='/assets/images/page/avatar-2.jpg'*/}
      {/*                layout={'responsive'}*/}
      {/*                width={564}*/}
      {/*                height={702}*/}
      {/*                alt=''*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className='pl-30'>*/}
      {/*            <h5 className='mb-5 fw-500'>Businesses</h5>*/}
      {/*            <p className='font-sm text-grey-5'>*/}
      {/*              Adobe Jsc*/}
      {/*            </p>*/}
      {/*            <p className='text-grey-3'>*/}
      {/*              "Lorem ipsum dolor sit amet*/}
      {/*              consectetur adipisicing elit.*/}
      {/*              Debitis nesciunt voluptatum dicta*/}
      {/*              reprehenderit accusamus voluptatibus*/}
      {/*              voluptas."*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </Layout>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsletterId: process.env.REACT_APP_MAILCHIMP_ID,
      newsletterUser: process.env.REACT_APP_MAILCHIMP_U,
    },
  };
};
