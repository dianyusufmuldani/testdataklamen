import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddData from "./component/addData";
import AddSkor from "./component/addSkor";

function App() {
  const [data, setData] = useState([
    {
      no: 1,
      klub: "manchester",
      ma: 2,
      me: 4,
      s: 3,
      k: 5,
      gm: 2,
      gk: 0,
      point: 20,
    },
    {
      no: 2,
      klub: "madrid",
      ma: 4,
      me: 3,
      s: 7,
      k: 6,
      gm: 4,
      gk: 2,
      point: 40,
    },
  ]);

  const [modalAdd, setModalAdd] = useState(false);
  const [modalAddSkor, setModalAddSkor] = useState(false);

  const handleSave = (klub, kotaKlub) => {
    console.log(klub, kotaKlub);
  };
  return (
    <div className="text-center w-[100%] flex flex-col items-center">
      <AddData
        modalAdd={modalAdd}
        onClose={() => setModalAdd(false)}
        onSave={handleSave}
      />
      <AddSkor
        modaAddSkor={modalAddSkor}
        onClose={() => setModalAddSkor(false)}
      />
      <h1 className="text-2xl mt-10">Data Klasemen</h1>
      <br />
      <div className="flex justify-between w-[700px] ">
        <button
          onClick={() => setModalAdd(true)}
          className="bg-gray-300 rounded-xl px-2 py-1"
        >
          Tambah Data
        </button>
        <button
          onClick={() => setModalAddSkor(true)}
          className="bg-gray-300 rounded-xl px-2 py-1"
        >
          Input Skor
        </button>
      </div>
      <br />
      <table className="border border-black px-2">
        <tr>
          <th className="border border-black px-2">No</th>
          <th className="border border-black px-2">Klub</th>
          <th className="border border-black px-2">Ma</th>
          <th className="border border-black px-2">Me</th>
          <th className="border border-black px-2">S</th>
          <th className="border border-black px-2">K</th>
          <th className="border border-black px-2">GM</th>
          <th className="border border-black px-2">GK</th>
          <th className="border border-black px-2">Point</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr>
              <td className="border border-black px-2">{item.no}</td>
              <td className="border border-black px-2">{item.klub}</td>
              <td className="border border-black px-2">{item.ma}</td>
              <td className="border border-black px-2">{item.me}</td>
              <td className="border border-black px-2">{item.s}</td>
              <td className="border border-black px-2">{item.k}</td>
              <td className="border border-black px-2">{item.gm}</td>
              <td className="border border-black px-2">{item.gk}</td>
              <td className="border border-black px-2">{item.point}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
