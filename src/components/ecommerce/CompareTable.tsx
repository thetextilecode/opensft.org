import Link from 'next/link';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/action/cart';
import { IProduct } from '../../../types';

export interface ICompareTable {
  addToCart?: any;
  data?: any;
  deleteFromCompare?: any;
  features?: any;
}

const CompareTable = ({ data, features, deleteFromCompare, addToCart }: ICompareTable) => {
  const handleCart = (product: IProduct) => {
    addToCart(product);
    toast.success('Add to Cart !');
  };

  return (
    <table className='table text-center'>
      <tbody>
      {features.map((feature: any, i: number) => (
        <tr key={i}>
          <th
            className='text-muted font-md fw-600'
            style={{ textTransform: 'capitalize' }}
          >
            {feature}
          </th>
          {data.map((product, i) =>
            feature == 'preview' ? (
              <td className='row_img' key={i}>
                {/*<div style={{ width: '100%' }}>*/}
                {/*<Image src={product.images[0].img} layout={'fill'} alt={''} />*/}
                <img src={product.images[0].img} alt={''} />
                {/*<Image src={product.images[0].img} layout={'responsive'} alt={''}*/}
                {/*       width={product.images[0].imgOriginalWidth} height={product.images[0].imgOriginalHeight} />*/}
                {/*</div>*/}
              </td>
            ) : feature == 'name' ? (
              <td className='product_name' key={i}>
                <h5>
                  <Link href={'/compare'}>
                    <a>{product.title}</a>
                  </Link>
                </h5>
              </td>
            ) : feature == 'price' ? (
              <td className='product_price' key={i}>
                <span className='price'>${product.price}</span>
              </td>
            ) : feature == 'rating' ? (
              <td key={i}>
                <div className='rating_wrap'>
                  {product.review >= 0 && (
                    <>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{
                            width: `${product.ratingScore}%`,
                          }}
                        ></div>
                      </div>

                      <span className='rating_num'>
                        ({product.review})
                      </span>
                    </>
                  )}
                </div>
              </td>
            ) : feature == 'description' ? (
              <td className='row_text font-xs' key={i}>
                <p>{product.desc}</p>
              </td>
            ) : feature == 'color' ? (
              <td className='row_color' key={i}>
                <ul className='list-filter color-filter'>
                  {product.variations.map((item, i) => (
                    <li key={i}>
                      <Link href={'/#'}>
                        <a>
                          <span
                            className={`product-color-${item}`}
                          ></span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            ) : feature == 'stock' ? (
              <td className='row_stock' key={i}>
                {product.stock >= 0 ? (
                  <span>In Stock</span>
                ) : (
                  <span className='text-brand font-weight-bold'>
                    Out of stock
                  </span>
                )}
              </td>
            ) : feature == 'weight' ? (
              <td className='row_weight' key={i}>
                {product.weight} gram
              </td>
            ) : feature == 'dimensions' ? (
              <td className='row_dimensions' key={i}>N/A</td>
            ) : feature == 'buy' ? (
              <td className='row_btn' key={i}>
                {product.stock >= 0 ? (
                  <button
                    className='btn  btn-sm'
                    onClick={(e) => handleCart(product)}
                  >
                    <i className='fi-rs-shopping-bag mr-5'></i>
                    Add to cart
                  </button>
                ) : (
                  <Link href='/contact'>
                    <button className='btn  btn-sm btn-secondary'>
                      <i className='fi-rs-headset mr-5'></i>
                      Contact Us
                    </button>
                  </Link>

                )}
              </td>
            ) : feature == ' ' ? (
              <td className='row_remove' key={i}>
                <a
                  onClick={() =>
                    deleteFromCompare(product.id)
                  }
                >
                  <i className='fi-rs-trash mr-5'></i>
                  <span>Remove</span>
                </a>
              </td>
            ) : null,
          )}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(CompareTable);
