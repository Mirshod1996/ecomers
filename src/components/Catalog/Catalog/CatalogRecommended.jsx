import React from "react";
import "./CatalogRecommended.scss";

const CatalogRecommended = () => {
  return (
    <div className="container">
      <div className="recommend">
        <div className="recommend-furnituries">
          <div className="recommend-furnituries-title">
            <h3>Eget quis quam metus, scelerisque.</h3>
            <br />
            <p className="recommend-furnituries-title-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, omnis. Aliquam eveniet odio eos tempore itaque
              doloremque sapiente ut vero repellendus temporibus minus beatae
              deleniti corrupti ratione laboriosam ea officia, nihil quos!
              Voluptatibus ut veniam a, illum tempore eaque animi debitis, nisi
              facere, saepe dolorum dolorem deleniti? <br />
              <br /> Eaque ducimus praesentium minus sit nisi accusamus
              reprehenderit facere aliquam illo nostrum nam consectetur sint
              quam perspiciatis dolor voluptates ullam quo beatae aut labore
              fuga, quasi a ex! Molestiae error vitae reiciendis consectetur.
            </p>
          </div>
          <img
            src={
              "https://m.media-amazon.com/images/I/711P8bnZSTL._AC_SL1500_.jpg"
            }
            className="recommend-furnituries-img"
            alt=""
          />
        </div>
        <div className="recommend-equipment">
          <img
            src={
              "https://media.wired.co.uk/photos/6132162711e231d9eb8a55f9/16:9/w_4992,h_2808,c_limit/0609_noreturntooffice.jpg"
            }
            className="recommend-equipment-img"
            alt=""
          />
          <div className="recommend-equipment-title">
            <h3>Eget quis quam metus, scelerisque.</h3>
            <p className="recommend-equipment-title-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia
              beatae ullam sequi vel, debitis earum totam alias expedita
              placeat, asperiores voluptate? Eveniet modi iusto, voluptates
              obcaecati asperiores nulla id nihil totam. Quas nihil illo magnam
              id laboriosam. Quo totam quod id minus voluptatibus deserunt,
              atque eveniet quos magni repudiandae aspernatur maiores porro ex
              qui quisquam voluptatem, aliquid hic? Laboriosam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogRecommended;
