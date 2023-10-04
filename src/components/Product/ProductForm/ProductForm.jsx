import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Selects from '../Selects/Selects';
import ProductFormButtons from '../ProductFormButtons/ProductFormButtons';
import styles from './productform.module.scss';

const ProductForm = ({
                       isProductInFavourite,
                       deleteFromFavourites,
                       addToFavourites,
                     }) => {
  const sneakerData = useLoaderData().data;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <form
          action='/'
          method='post'
          className={styles['product__form']} // Используйте модульные стили
          onSubmit={handleSubmit}
      >
        <div className={styles['form__items']}> {/* Используйте модульные стили */}
          <div className={styles['form__header']}> {/* Используйте модульные стили */}
            <h3 className={styles['form__title']}>{sneakerData.title}</h3> {/* Используйте модульные стили */}
            <b className={styles['form__price']}>{sneakerData.price} руб.</b> {/* Используйте модульные стили */}
          </div>
          <Selects />
          <ProductFormButtons
              isProductInFavourite={isProductInFavourite}
              deleteFromFavourites={deleteFromFavourites}
              addToFavourites={addToFavourites}
          />
        </div>
      </form>
  );
}

export default ProductForm;
