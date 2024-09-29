import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    if (inputData.trim() !== "") {
      setData([...data, inputData]);
      setInputData("");
    }
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1 className="mt-[30px] text-center text-3xl text-[#fff] xs:mt-[100px] xl:mt-[60px]">
        ToDoList App
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-[400px] h-[34px] mt-[50px] flex mx-auto xs:flex-col xs:w-[80%] md:text-[1.1em] lg:w-[60%] xl:w-[50%] xxl:text-[1.3em]"
      >
        <input
          type="text"
          className="rounded-[5px] bg-[#eee] text-[#000] text-center w-full p-[3px] cursor-pointer focus:outline-none md:h-[40px] xxl:h-[60px]"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAdd}
          className="bg-[#240b36] text-[#fff] w-[100px] h-[34px] mb-[30px] ml-[10px] rounded-[5px] cursor-pointer p-[5px] focus:outline-none hover:bg-[#d50000] xs:mt-[20px] xs:mx-auto md:h-[40px] lg:text-[1.2em] xxl:h-[60px]"
        >
          Add
        </button>
      </form>

      <section className="text-center text-[#fff] mt-[80px] mb-[50px] mx-auto w-[400px] h-max flex flex-col xs:w-[80%] sm:mt-[40px] md:text-[1.1em] lg:w-[60%] lg:text-[1.2em] xl:w-[50%] custom1:mt-[70px] xxl:text-[1.3em] xxl:mt-[70px]">
        {data.map((item, index) => (
          <article
            key={index}
            className="bg-[#240b36] rounded-[8px] p-[5px] overflow-wrap break-words w-full h-full mb-[20px] xxl:p-[10px]"
          >
            {" "}
            {item}
            <button
              type="button"
              onClick={() => handleDelete(index)}
              className="bg-[#d50000] text-[#fff] w-[80px] mx-auto mt-[10px] rounded-[5px] cursor-pointer p-[5px] focus:outline-none ml-[15px] h-[34px] hover:bg-[#8d0202] md:h-[40px]"
            >
              Delete
            </button>
          </article>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default App;
