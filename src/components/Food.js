const Food = (props) => {
  const { id, image, name, price, count, type, togo } = props.info;
  console.log(`${process.env.PUBLIC_URL}${image}`);
  return (
    <div className="h-64 w-44 justify-self-center relative">
      <div className="absolute bottom-0 w-full h-56 bg-danger rounded-2xl"></div>
      <img src={image} alt="" className="absolute left-6 h-32 w-32 rounded-full" />
      <div className="absolute w-32 left-6 bottom-4 grid grid-rows-5 items-center">
        <p className="text-white text-lg row-span-3 text-center">{name}</p>
        <div className="row-span-2">
          <p className="text-white text-center text-sm">$ {price}</p>
          <p className="text-gray-500 text-center text-sm">{count} more remain</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
