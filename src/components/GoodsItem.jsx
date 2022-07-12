import React from "react";

const GoodsItem = (props) => {
    const {finalPrice}=props.price;
    const {full_background} = props.displayAssets[0];
    const {
          mainId: id,
          displayName: name,
          displayDescription: description,
          displayType: descriptionType,
          addToBascket = Function.prototype,
          } = props;
    
    return (
        <div className="card">
        <div className="card-image">
          <img src={full_background} alt={name}/>
        </div>
        <div className="card-content">
        <span className="card-title">{name}</span>
        {
        description
          ?
            <p>
              {description}
            </p>
          :
            <p>
              {descriptionType}
            </p>
          }
        </div>
        <div className="card-action">
          <button
              className='btn'
              onClick={() => addToBascket({
                  id,
                  name,
                  finalPrice
              })}
          >
              Купить
          </button>
          <span className="right" style={{fontSize: '1.8rem'}}>{finalPrice} руб</span>
        </div>
      </div>
    )
}

export {GoodsItem}