import React from 'react';
import { LabelStyled, Input } from './Filter.styled';
import { getFilter } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filterSearchWord = useSelector(getFilter);

  const changeFilterSearhWord = e => {
    console.log(e.currentTarget.value);
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <LabelStyled>
      Find contacts by name
      <Input
        type="text"
        value={filterSearchWord}
        name="filter"
        onChange={changeFilterSearhWord}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </LabelStyled>
  );
};

export default Filter;
