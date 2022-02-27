//import DaTa from "../assets/currentorder.json";

const Order = (props) => {
  const { id, image, name, price, count, type, togo, orderCount, orderDis } =
    props.info;
  /* function submitOrder() {
    const isunic = true;
    for (let index = 0; index < DaTa.length; index++) {
      if (DaTa[index].id === id) {
        DaTa[index].orderCount ++;
        isunic = false;
      }
    }
  } */

  const pr = `$`+price;
  const xpr = `$`+(orderCount * price);

  return (
    <div className=" my-3">
      <div className="grid grid-cols-5 items-center gap-2">
        <div className=" col-span-4 grid grid-cols-4 items-center gap-2">
          <div className="grid grid-cols-4 col-span-3 items-center">
            <img src={image} alt="" className="w-12 aspect-square rounded-full" />
            <div className=" ml-4 col-span-3">
              <div className="text-white text-md sm:text-sm">{name}</div>
              <div className=" text-gray-500 text-sm">{pr}</div>
            </div>
          </div>
          <div className="bg-dark aspect-square rounded-xl grid justify-center content-center"><p className=" text-white">{orderCount}</p></div>
        </div>
        <div className="text-white sm:text-xs md:text-sm lg:text-lg grid justify-center content-center"><p>{xpr}</p></div>
      </div>
      <div className="grid grid-cols-5 items-center gap-2 mt-2">
        <div className="col-span-4 bg-dark w-full h-full rounded-lg p-1 pl-4 text-sm text-gray-400 grid content-center"><p>{orderDis}</p></div>
        <div className="aspect-square rounded-xl grid justify-center content-center border border-primary text-primary hover:text-white hover:bg-primary"><p className="">X</p></div>
      </div>
    </div>
  );
};

export default Order;
