import React, { useContext } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  // console.log("di side bar : ", cart);
  // console.log(useContext(CartContext));

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowRoundForward className="text-2xl"></IoMdArrowRoundForward>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[60vh] lg:h-[60vh] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2"> Total : </span> $
            {parseFloat(total).toFixed(2)}
          </div>
          {/* Clear Cart Icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2></FiTrash2>
          </div>
        </div>

        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
