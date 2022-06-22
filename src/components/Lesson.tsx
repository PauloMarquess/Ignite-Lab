const Lesson = () => {
  return (
    <a href="#">
      <span className="text-gray-300">Terça • 22 de junho • 19h00</span>
      <div className=" rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium">
            Contéudo Liberado
          </span>
          <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
            Ao Vivo
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          Abertura do evento Ignite Lab
        </strong>
      </div>
    </a>
  );
};

export default Lesson;
