import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux/es/exports";
import CategoryPreview from "../../components/category-preivew/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
