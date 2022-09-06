import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from '../../../css-modules/filters.module.css';
import { IApartment } from '../../../models/IApartment';

const MySelect = ({ options, defaultValue }: { options: IApartment[]; defaultValue: string }) => {
  // извлечение данных поля "rooms" объектов квартир, удаление дубликатов, сортировка
  var set = new Set();

  options?.map((option) => set.add(option.rooms));

  var sortable = Array.from(set).sort(function (a: any, b: any) {
    return a - b;
  });

  return (
    <Form.Select className={styles.filtersRoomsSelect}>
      <option value="">{defaultValue}</option>
      {sortable.map((sortedOption: any) => (
        <option value={sortedOption} key={sortedOption}>
          {sortedOption}
        </option>
      ))}
    </Form.Select>
  );
};

export default MySelect;
