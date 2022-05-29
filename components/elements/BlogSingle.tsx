import Link from 'next/link';
import Image from 'next/image';
import ShareIcons from './ShareIcons';
import CommentsForm from './CommentsForm';
import CommentsArea from './CommentsArea';

const BlogSingle = () => {
  return (
    <div className='single-page pl-30'>
      <div className='single-header style-2'>
        <h1 className='mb-30'>
          Best smartwatch 2021: the top wearables you can buy
          today
        </h1>
        <div className='single-header-meta'>
          <div className='entry-meta meta-1 font-xs mt-15 mb-15'>
            <span className='post-by'>
              By <a href='#'>John</a>
            </span>
            <span className='post-on has-dot'>9 April 2020</span>
            <span className='time-reading has-dot'>
              8 mins read
            </span>
            <span className='hit-count  has-dot'>29k Views</span>
          </div>
          <ShareIcons />
        </div>
      </div>
      <figure className='single-thumbnail'>
        <div style={{ width: '100%' }}>
        <Image src='/assets/imgs/blog/blog-6.jpg'
               alt=''
               layout={'responsive'}
               width={1200}
               height={800} />
        </div>
      </figure>
      <div className='single-content'>
        <p>
          The best smartwatch needs to be able to monitor your
          health, track your location when exercising, offer a
          variety of other apps that you wouldn't normally see on
          your smartphone, sport good battery life and, perhaps
          most importantly, have an affordable price.
        </p>
        <p>
          We've reviewed and ranked all of the best smartwatches
          on the market right now, and we've made a definitive
          list of the top 10 devices you can buy today. One of the
          10 picks below may just be your perfect next smartwatch.
        </p>
        <p>
          Those top-end wearables span from the Apple Watch to
          Fitbits, Garmin watches to Tizen-sporting Samsung
          watches. There's also Wear OS which is Google's own
          wearable operating system in the vein of Apple's watchOS
          - you’ll see it show up in a lot of these devices.
        </p>
        <p>
          Throughout our review process, we look at the design,
          features, battery life, spec, price and more for each
          smartwatch, rank it against the competition and enter it
          into the list you'll find below.
        </p>
        <h4>1. Apple Watch SE</h4>
        <ul className='mb-20'>
          <li>Updated content on a regular basis</li>
          <li>Secure &amp; hassle-free payment</li>
          <li>1-click checkout</li>
          <li>Easy access &amp; smart user dashboard</li>
        </ul>
        <h4>2. Samsung Galaxy Watch 3</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque esse eos minima. Eius quo autem impedit quibusdam
          maiores, voluptatum quae sunt sit nisi voluptatem sed,
          esse quisquam labore, at est!
        </p>
        <table className='font-md'>
          <tbody>
          <tr className='stand-up'>
            <th>Stand Up</th>
            <td>
              <p>
                35″L x 24″W x 37-45″H(front to back
                wheel)
              </p>
            </td>
          </tr>
          <tr className='folded-wo-wheels'>
            <th>Folded (w/o wheels)</th>
            <td>
              <p>32.5″L x 18.5″W x 16.5″H</p>
            </td>
          </tr>
          <tr className='folded-w-wheels'>
            <th>Folded (w/ wheels)</th>
            <td>
              <p>32.5″L x 24″W x 18.5″H</p>
            </td>
          </tr>
          <tr className='door-pass-through'>
            <th>Door Pass Through</th>
            <td>
              <p>24</p>
            </td>
          </tr>
          <tr className='frame'>
            <th>Frame</th>
            <td>
              <p>Aluminum</p>
            </td>
          </tr>
          <tr className='weight-wo-wheels'>
            <th>Weight (w/o wheels)</th>
            <td>
              <p>20 LBS</p>
            </td>
          </tr>
          </tbody>
        </table>
        <h4>3. Apple Watch 6</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque esse eos minima. Eius quo autem impedit quibusdam
          maiores, voluptatum quae sunt sit nisi voluptatem sed,
          esse quisquam labore, at est!
        </p>
        <ul className='product-more-infor mb-30'>
          <li>
            <span>Type Of Packing</span> Bottle
          </li>
          <li>
            <span>Color</span> Green, Pink, Powder Blue, Purple
          </li>
          <li>
            <span>Quantity Per Case</span> 100ml
          </li>
          <li>
            <span>Ethyl Alcohol</span> 70%
          </li>
          <li>
            <span>Piece In One</span> Carton
          </li>
        </ul>
        <h4>4. Fitbit Versa 3</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque esse eos minima. Eius quo autem impedit quibusdam
          maiores, voluptatum quae sunt sit nisi voluptatem sed,
          esse quisquam labore, at est!
        </p>
        <div className='banner-img banner-big wow fadeIn f-none  mb-30 animated'>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '20%' }}>
            <Image
              className='border-radius-10'
              src='/assets/imgs/banner/banner-4.png'
              alt=''
              layout={'responsive'}
              objectFit='contain' // Scale your image down to fit into the container
              width={1320}
              height={300}
            />
          </div>
          <div className='banner-text'>
            <h6 className='mb-15 mt-40'>Repair Services</h6>
            <h5 className='fw-600 mb-20'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're an Apple <br />
              Authorised Service Provider
            </h5>
          </div>
        </div>
        <h4>5. Samsung Galaxy Watch Active 2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque esse eos minima. Eius quo autem impedit quibusdam
          maiores, voluptatum quae sunt sit nisi voluptatem sed,
          esse quisquam labore, at est!
        </p>
        <ul className='product-more-infor mt-30'>
          <li>
            <span>Type Of Packing</span> Bottle
          </li>
          <li>
            <span>Color</span> Green, Pink, Powder Blue, Purple
          </li>
          <li>
            <span>Quantity Per Case</span> 100ml
          </li>
          <li>
            <span>Ethyl Alcohol</span> 70%
          </li>
          <li>
            <span>Piece In One</span> Carton
          </li>
        </ul>
      </div>
      <div
        className='entry-bottom mt-50 mb-30 wow fadeIn  animated'
        style={{ 'visibility': 'visible', 'animationName': 'fadeIn' }}
      >
        <div className='tags w-50 w-sm-100'>
          <Link href='/blog-category-big'>
            <a
              rel='tag'
              className='hover-up btn btn-sm btn-rounded mr-10'
            >
              deer
            </a>
          </Link>
          <Link href='/blog-category-big'>
            <a
              rel='tag'
              className='hover-up btn btn-sm btn-rounded mr-10'
            >
              nature
            </a>
          </Link>
        </div>
        <ShareIcons />
      </div>
      <CommentsArea />
      <CommentsForm />
    </div>
  );
};

export default BlogSingle;
