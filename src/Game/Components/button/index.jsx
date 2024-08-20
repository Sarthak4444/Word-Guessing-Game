function Button({ onButtonClick }) {
  return (
    <button
      className="bg-green-500 hover:bg-green-600 max-w-fit text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
      onClick={onButtonClick}
    >
      CHANGE QUESTION
    </button>
  );
}

export default Button;
