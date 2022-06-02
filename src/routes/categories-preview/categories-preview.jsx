import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preivew/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    /// object.keys(...) change your object on an array
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
