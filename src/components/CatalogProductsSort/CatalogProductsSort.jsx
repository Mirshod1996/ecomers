import "./CatalogProductsSort.scss";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";

const CatalogProductsSort = ({ productsLength, newData, setNewData }) => {
  const sortProducts = (event) => {
    let data = newData;
    if (event.target.value === "ABD") {
      setNewData(data.sort());
      console.log(data);
    }
    if (event.target.value === "DBA") {
      setNewData(data.reverse());
    }

    if (event.target.value === "Highest") {
      newData.sort(function (a, b) {
        return b.price - a.price;
      });
      setNewData(newData);
    }
    if (event.target.value === "Lowest") {
      newData.sort(function (a, b) {
        return a.price - b.price;
      });
      setNewData(newData);
    }
  };

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
          <p> {productsLength} Products Found</p>
        </span>
      </div>
      <hr className="catalog-line" />
      <div className="catalog-products-sort-select">
        <p className="catalog-products-sort-select-title">Sort By</p>
        <select name="" id="" onChange={(e) => sortProducts(e)}>
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
