import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchByCategory } from '../../redux/action/product';
import FeaturedResource from '../sliders/FeaturedResource';
import RelatedResource from '../sliders/RelatedResource';

const FetchSlider = ({ resourceFilters }) => {
  const [featured, setFeatured] = useState<any[]>([]);
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    fetchResources().then((resources) => {
      // do something
    });
  }, [resourceFilters.category]);

  const fetchResources = async () => {
    // With Category
    const allResources = await fetchByCategory('/static/resource.json', {
      category: resourceFilters.category,
    });

    // Without Category
    // const request = await fetch(`${server}/static/resource.json`);
    // const allResources = await request.json();

    // Featured Resource
    const featuredResources = allResources.filter((item) => item.featured);

    setFeatured(featuredResources);
    setRelated(allResources);
  };

  return (
    <>
      <FeaturedResource featured={featured} />
      <RelatedResource related={related} />
    </>
  );
};

const mapStateToProps = (state) => ({
  resourceFilters: state.resourceFilters,
});

export default connect(mapStateToProps)(FetchSlider);
