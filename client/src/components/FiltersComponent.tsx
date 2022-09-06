import React, { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import styles from '../css-modules/filters.module.css'
import { useAppSelector } from '../hooks/redux';
import MySelect from './UI/select/MySelect';

const FiltersComponent = () => {
    const { apartments } = useAppSelector(state => state.apartmentReducer)

    return (
        <Stack className={styles.filters} direction="horizontal">
            <Stack className={styles.filtersRooms}>
                <span>Комнаты</span>
                {/* TODO разобраться с размером поля */}
                <MySelect
                    options={apartments}
                    defaultValue="Выберите кол-во комнат"
                />
                {/* <Form.Select className={styles.filtersRoomsSelect}>
                    <option >Выберете кол-во комнат</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                </Form.Select> */}
            </Stack>
            <Stack className={styles.filtersPrice}>
                <span>Цена</span>
                <Stack direction="horizontal">
                    <Form.Control className={styles.filtersPriceControl} type="text" placeholder="Мин"></Form.Control>
                    <Form.Control className={styles.filtersPriceControl} type="text" placeholder="Макс"></Form.Control>
                </Stack>
            </Stack>
            <span className={styles.sort}>Сортировка:</span>
            <span className={styles.sort}>сначала дорогие</span>
            <span className={styles.sort}>сначала дешевые</span>
        </Stack>
    );
};

export default FiltersComponent;