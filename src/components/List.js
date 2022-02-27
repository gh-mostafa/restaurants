import Food from "./Food";
import DaTa from "../assets/data.json";

const List = () => {
  return (
    <section className="overflow-hidden grid grid-rows-6 p-6 sm:col-span-6 md:col-span-7 lg:col-span-8">
      <div className="w-full TAB">
        <div className="w-full flex justify-between items-center" >
          <div>
            <h1 className="text-white text-3xl font-bold">cherkool</h1>
            <p className=" text-gray-400 text-md">best in world</p>
          </div>
          <div className="sm:w-32 md:w-60 h-10 bg-info border border-warning rounded-lg flex flex-row justify-evenly items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="search" placeholder="search ..." className="w-5/6 bg-transparent px-2 text-white" name="" id="" />
          </div>
        </div>
        <ul className="flex mt-4 sm: gap-0.5 md:gap-4 lg:gap-8 text-white text-md">
          <li className="tbbtn">hot dog</li>
          <li className="tbbtn">cold cat</li>
          <li className="tbbtn">aaaaa</li>
          <li className="tbbtn">bbbb</li>
          <li className="tbbtn">ccccc</li>
          <li className="tbbtn">ddddd</li>
        </ul>
      </div>
      <div className="mt-8 row-span-5">
        <div className="w-full flex justify-between items-center">
          <div className="text-white text-xl font-bold">choose ghaza</div>
          <div dir="rtl" className="sm:w-32 h-10 bg-danger border border-warning rounded-lg">
            <select name="type" id="type" className=" w-full h-full bg-transparent text-white text-center">
              <option selected>export</option>
              <option value="1">here</option>
              <option value="2">to go</option>
              <option value="3">kooft</option>
            </select>
          </div>
        </div>
        <div className="mt-8 p-4 h-5/6 border-4 border-warning rounded-xl overflow-y-scroll">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {DaTa.map((u) => u.count > 0 && <Food key={u.id} info={u} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
