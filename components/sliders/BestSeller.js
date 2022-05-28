import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchByCatagory } from "../../redux/action/product";
import SingleProduct from "./../ecommerce/SingleProduct";

SwiperCore.use([Navigation]);

const BestSellerSlider = () => {


    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        fetchProducts();
    },[]);

    const fetchProducts = async () => {

        // With Category
        const allProducts = await fetchByCatagory("/static/product.json");        

        // Best Seller
        const bestSellerProducts = allProducts.sort(function (a, b) {
            return a.totalSell > b.totalSell ? -1 : 1;
        });


        setBestSeller(bestSellerProducts);
    };

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev_b",
                    nextEl: ".custom_next_b",
                }}
                className="custom-class"
            >
                {bestSeller.map((product, i) => (
                    <SwiperSlide key={i}>
                        <SingleProduct product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-nav">
                <button type="button" className="custom_prev_b">
                    Prev
                </button>
                <button type="button" className="custom_next_b">
                    Next
                </button>
            </div>
        </>
    );
};

export default BestSellerSlider;