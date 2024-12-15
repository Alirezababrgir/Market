const NumberInput = ({ incrementNumber, Number, decrementNumber }) => {
  return (
    <div className="flex flex-row w-50 h-10 rounded-lg relative bg-transparent mt-1 quantity">
      <button
        data-action="increment"
        onClick={incrementNumber}
        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
      <input
        type="number"
        className="focus:outline-none text-center w-9 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
        name="quantity"
        value={Number}
        onChange={() => {}}
      ></input>

      <button
        data-action="decrement"
        onClick={decrementNumber}
        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
    </div>
  );
};

export default NumberInput;
