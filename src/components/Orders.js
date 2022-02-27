import Order from "./Order";
import DaTa from "../assets/data.json";

const Orders = () => {
  return (
    <section className="sm:col-span-4 lg:col-span-3 overflow-hidden p-4 bg-danger rounded-l-xl">
      <div className="">
        <div className=" text-2xl font-bold text-white">order #123124</div>
        <div className="grid sm:grid-rows-3 md:grid-rows-1 md:grid-cols-3 sm:mt-2 md:mt-4">
          <div className="border border-warning rounded-lg text-primary text-center p-1 hover:text-white hover:bg-primary text-sm">Lorem, ipsum.</div>
          <div className="border border-warning rounded-lg text-primary text-center p-1 hover:text-white hover:bg-primary text-sm">Lorem.</div>
          <div className="border border-warning rounded-lg text-primary text-center p-1 hover:text-white hover:bg-primary text-sm">Lorem, ipsum.</div>
        </div>
        <div className="grid grid-cols-5 mt-2 text-white text-sm">
          <div className="col-span-3 gap-1">name</div>
          <div className="">count</div>
          <div className="">price</div>
        </div>
      </div>
      <div className="border-y-2 border-warning sm:h-1/2 md:h-3/5 p-2 overflow-y-scroll my-2">
        <div className="">
          {DaTa.map((u) => (
            <Order key={u.id} info={u} />
          ))}
        </div>
      </div>
      <div className="w-full grid grid-cols-2 text-white my-4">
        <div className="text-gray-500">discount</div>
        <div className=" text-right">$11</div>
        <div className="text-gray-500">sub total</div>
        <div className="text-right">$123</div>
      </div>
      <div className="w-full h-8 bg-primary text-white rounded-lg grid justify-center content-center"><p>pay and buy</p></div>
    </section>
  );
};

export default Orders;
