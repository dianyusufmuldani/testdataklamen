import React, { useState } from "react";

const AddData = ({ modalAdd, onClose, onSave }) => {
  const [klub, setKlub] = useState(null);
  const [kotaKlub, setKotaKlub] = useState(null);
  return (
    <>
      {modalAdd ? (
        <div className="w-[100%] h-[100%] flex items-center justify-center absolute bg-black/50">
          <div className="w-[400px] h-[200px] rounded-xl bg-white flex flex-col  justify-center relative">
            <div className="flex justify-between w-[90%] absolute top-2 right-5">
              <p></p>
              <button onClick={onClose} className="font-bold">
                X
              </button>
            </div>
            <h1>Tambah Data</h1>
            <br />
            <form className="flex flex-col justify-center items-center ">
              <tr>
                <td>
                  <label>Nama Klub</label>
                </td>
                <td>
                  :
                  <input
                    value={klub}
                    onChange={(e) => setKlub(e.target.value)}
                    className="border rounded-xl border-black px-2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Kota Klub</label>
                </td>
                <td>
                  :
                  <input
                    value={kotaKlub}
                    onChange={(e) => setKotaKlub(e.target.value)}
                    className="border rounded-xl border-black px-2"
                  />
                </td>
              </tr>
              <br />
              <button
                onClick={() => onSave(klub, kotaKlub)}
                className="bg-gray-300 rounded-xl px-4 py-2"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddData;
