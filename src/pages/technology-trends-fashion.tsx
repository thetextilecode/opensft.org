import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { infoConfig } from '../../opensft.config';

function Privacy() {
  return (
    <Layout parent='Home' sub='Privacy'>
      <section className='mt-50 mb-50'>
        <div className='container'>
          <div className='row'>
            <div className='single-page pr-30'>
              <div className='single-header style-2'>
                <h2>Technology Trends Fashion (SEO check)</h2>
              </div>
              <div className='single-content'>
                <h4>Artificial Intelligence (AI)</h4>
                <ol start={1}>
                  <li>
                    Hi there, we’re Open Source Fashion & Textiles CIC (Companies House
                    number {infoConfig.companiesHouseNumber}) of 71-75, Shelton Street, Covent Garden London WC2H 9JQ
                    (“<strong>Open Source Fashion & Textiles CIC</strong>”) and welcome to our privacy policy which
                    also applies to our Affiliate Companies. This policy sets out how we handle your personal
                    information if you’re an Open Source
                    Fashion & Textiles CIC user or visitor to our Sites. It applies across Open Source Fashion &
                    Textiles CIC (the “<strong>Sites</strong>”).
                  </li>
                  <li>When we say ‘we’, ‘us’ or ‘Open Source Fashion & Textiles CIC’ it’s because that’s who we are
                    and we own and run the Sites.
                  </li>
                  <li>If we say ‘policy’ we’re talking about this privacy policy. If we say ‘user terms’ we’re talking
                    about the rules for using each of the Sites. The rules vary by product and each product
                    makes them separately available and seeks consent to them separately to this policy.
                  </li>
                </ol>
                <h4>Automation</h4>
                <ol start={4}>
                  <li>We collect certain personal information about visitors and users of our Sites.</li>
                  <li>The most common types of information we collect include things like: user-names, member names,
                    email addresses, IP addresses, other contact details, survey responses, blogs, photos, payment
                    information such as payment agent details, transactional details, tax information, support
                    queries, forum comments (if applicable), content you direct us to make available on our Sites
                    (such as item descriptions), your actions on our Sites (including any selections or inputs into
                    items) and web and email analytics data. We will also collect personal information from job
                    applications (such as, your CV, the application form itself, cover letter and interview notes).
                  </li>
                </ol>
                <h4>How we collect personal information</h4>
                <ol start={6}>
                  <li>We collect personal information directly when you provide it to us, automatically as you
                    navigate through the Sites, or through other people when you use services associated with the
                    Sites.
                  </li>
                  <li>We collect your personal information when you provide it to us when you complete membership
                    registration and buy or provide items or services on our Sites, subscribe to a newsletter, email
                    list, submit feedback, enter a contest, fill out a survey, or send us a communication.
                  </li>
                </ol>
                <h4>IoT</h4>
                <ol start={9}>
                  <li>
                    Although we generally collect personal information directly from you, on occasion, we also
                    collect certain categories of personal information about you from other sources. In particular:
                    <ol>
                      <li>financial and/or transaction details from payment providers located in the US, UK, and
                        Australia in order to process a transaction;
                      </li>
                      <li>
                        other third party sources/and or partners from Australia, US or UK, whereby we receive
                        additional information about you (to the extent permitted by applicable law), such as
                        demographic data or fraud detection information, and combine it with information we have
                        about you. For example, fraud warnings from service providers like identity verification
                        service.
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Privacy;
