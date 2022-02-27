const Menubar = () => {
  return (
    <section className="bg-danger w-full h-full grid gap-0 rounded-r-2xl sm:w-20 sm:col-span-2 md:col-span-1">
    <div className=" w-20 justify-self-end pt-2 pb-2 pl-2">
      <div className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-12 h-12 rounded-xl grid justify-center items-center"><p className="text-primary">home</p></div></div>
    </div>
    <ul className="justify-self-end sm:w-16">
      <li className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-10 h-10 rounded-xl grid justify-center items-center"><p className="text-primary">1</p></div></li>
      <li className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-10 h-10 rounded-xl grid justify-center items-center"><p className="text-primary">2</p></div></li>
      <li className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-10 h-10 rounded-xl grid justify-center items-center"><p className="text-primary">3</p></div></li>
      <li className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-10 h-10 rounded-xl grid justify-center items-center"><p className="text-primary">4</p></div></li>
      <li className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-10 h-10 rounded-xl grid justify-center items-center"><p className="text-primary">5</p></div></li>
      <li className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-10 h-10 rounded-xl grid justify-center items-center"><p className="text-primary">6</p></div></li>
    </ul>
    <div className="w-20 justify-self-end pt-2 pb-2 pl-2 self-end">
      <div className="mbtn aspect-square rounded-l-2xl grid justify-center items-center"><div className="w-12 h-12 rounded-xl grid justify-center items-center"><p className="text-primary">exit</p></div></div>
    </div>
  </section>
  )
}

export default Menubar