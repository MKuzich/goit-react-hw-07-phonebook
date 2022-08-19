import React from 'react';
import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filterChange }) => {
  const hanldeChange = e => filterChange(e.target.value);
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input type="text" name="filter" onChange={hanldeChange} />
    </Label>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
