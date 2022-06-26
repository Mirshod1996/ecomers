import "./CatalogProductsSort.scss";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";

const CatalogProductsSort = () => {
  return (
    <div className="catalog-products-sort">
      <div className="catalog-products-sort-icons">
        <button className="catalog-icon">
          <AppstoreOutlined />
        </button>
        <button className="catalog-icon">
          <BarsOutlined />
        </button>

        <span className="catalog-products-sort-icons-title">
          ## <p>Products Found</p>
        </span>
      </div>
      <hr className="catalog-line" />
      <div className="catalog-products-sort-select">
        <p className="catalog-products-sort-select-title">Sort By</p>
        <select name="" id="">
          <option value="Lowest">Prisce (Lowest)</option>
          <option value="Highest"> Prisce (Highest)</option>
          <option value="ABD"> Name (A-Z)</option>
          <option value="DBA">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default CatalogProductsSort;
