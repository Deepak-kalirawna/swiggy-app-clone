const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <>
      <li className="flex justify-between items-center  border-b-[2px] border-[#8a2b06] mt-[1rem] mb-[1rem]">
        <div>
          <h2 className="text-[#363636] mr-[1.5rem]">{props.title}</h2>
          <div className=" w-[10rem] flex justify-between items-center">
            <span className="font-bold text-[#8a2b06]">{price}</span>
            <span className="font-bold border-[1px] p-[0.5rem] rounded-[6px] text-[#363636]">
              x {props.amount}
            </span>
          </div>
        </div>
        <div className="flex">
          <button
            className="hover:bg-[#8a2b06] hover:text-white border-1-[#8a2b06] w-[3rem] align-middle rounded-[6px] bg-transparent cursor-pointer m-[0.25rem] ml-[1rem] font-bold text-[1.25rem] text-[#8a2b06]"
            onClick={props.onRemove}
          >
            −
          </button>
          <button
            className="hover:bg-[#8a2b06] hover:text-white border-1-[#8a2b06] w-[3rem] align-middle rounded-[6px] bg-transparent cursor-pointer m-[0.25rem] ml-[1rem] font-bold text-[1.25rem] text-[#8a2b06]"
            onClick={props.onAdd}
          >
            +
          </button>
        </div>
      </li>
      <hr className=" border-gray-60" />
    </>
  );
};

export default CartItem;
