import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateResourceFilters } from '../../redux/action/resourceFiltersAction';
import CheckBox from './Checkbox';

export interface IConditionFilter {
  updateResourceFilters?: any;
}

const ConditionFilter = ({ updateResourceFilters }: IConditionFilter) => {
  // console.log(updateResourceFilters);

  const [sizes, setSizeCheckbox] = useState<{ value: string }[]>([
    { value: 'new' },
    { value: 'refurbished ' },
    { value: 'used' },
  ]);

  const Router = useRouter();
  const searchTerm = Router.query.search;

  const [selectedSizes, setSizes] = useState([]);

  useEffect(() => {
    const filters = {
      condition: selectedSizes,
    };

    updateResourceFilters(filters);
  }, [sizes, searchTerm]);

  const handleCheckBox = (event, filters, updateFilters, selectFilter, text) => {
    const value = event.target.value;
    const updateSizes = filters;

    updateSizes.forEach((item) => {
      if (item.value === value) {
        if (item.checked) {
          item.checked = false;
          const newsize = text.filter((item) => item !== value);
          selectFilter([...newsize]);
        } else {
          item.checked = true;
          const newsize = text.includes(value) ? text : [...text, value];
          selectFilter([...newsize]);
        }
      }
    });

    updateFilters([...updateSizes]);
  };

  return (
    <>
      <div className="custome-checkbox">
        <CheckBox
          heading="Select Size"
          filters={sizes}
          handleCheckBox={(e) => {
            handleCheckBox(e, sizes, setSizeCheckbox, setSizes, selectedSizes);
          }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  resources: state.resources.items,
});

const mapDidpatchToProps = {
  updateResourceFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(ConditionFilter);
