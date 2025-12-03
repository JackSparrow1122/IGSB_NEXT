const NewDiscover = () => {
  return (
    <div className="bg-red-100 w-full h-[70vh] flex">
      <div className="w-[75%] h-full bg-green-100">
        <div className="up w-full h-[50%] bg-red-100 flex">
            <div className="left w-[70%] h-full bg-violet-500"></div>
            <div className="right w-[30%] h-full bg-green-600"></div>
        </div>
        <div className="down w-full h-[50%] bg-yellow-100 flex">
            <div className="right w-[30%] h-full bg-green-600"></div>
            <div className="left w-[70%] h-full bg-red-100"></div>
            
        </div>
      </div>
      <div className="w-[35%] h-full bg-blue-100"></div>
      <div></div>
    </div>
  );
};

export default NewDiscover;
