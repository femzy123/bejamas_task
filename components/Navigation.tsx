import React, { useState } from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { Close } from '@material-ui/icons';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 4px solid #e4e4e4;
`;

const Logo = styled("img")`
  margin-left: 2rem;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

const Cart = styled.div`
  position: relative;
  margin-right: 2rem;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`;

const CartNumber = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #000;
  color: #fff;
  padding: 1px 3px;
  text-align: center;
  font-size: 9px;
`;

const Popover = styled.div`
  position: absolute;
  bottom: -5;
  right: 0;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border: 2px solid #e4e4e4;
  z-index: 999;
  box-sizing: border-box;
  min-width: 250px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #c2c2c2;

  img {
    width: 72px;
    height: 72px;
  }
`;

const ClearButton = styled("button")`
  background: #fff;
  width: 100%;
  padding: 13px 39px;
  color: #000;
  display: block;
  border: 2px solid #000;
`;

function Navigation({cart, emptyCart}) {
  const [cartView, setCartView] = useState(false);

  const close = () => {
    setCartView(false);
  }

  return (
    <Navbar>
      <Logo src="/images/logo.jpg" alt="logo" />
      <Cart onClick={() => setCartView(!cartView)}>
        <ShoppingCartOutlinedIcon />
        {cart.length < 1 ? null : <CartNumber>{cart.length}</CartNumber>}
        {cartView ? (
          <Popover>
            <div style={{ textAlign: "right" }}>
              <CloseIcon onClick={close} style={{ cursor: "pointer" }} />
            </div>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <CartItem key={index}>
                  <div style={{ flex: 1, marginRight: "20px" }}>
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                  </div>
                  <div>
                    <img src={item.image.src} alt={item.image.alt} />
                  </div>
                </CartItem>
              ))
            ) : (
              <div style={{ fontWeight: 500, textAlign: "center", marginBottom: '10px' }}>Cart is empty</div>
            )}
            <ClearButton onClick={emptyCart}>
              <span style={{ fontWeight: 500 }}>CLEAR</span>
            </ClearButton>
          </Popover>
        ) : null}
      </Cart>
    </Navbar>
  );
}

export default Navigation
