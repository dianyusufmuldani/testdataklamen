import React from "react";

const AddSkor = ({ modaAddSkor, onClose }) => {
  return (
    <>
      {modaAddSkor ? (
        <div className="w-[100%] h-[100%] flex items-center justify-center absolute bg-black/50">
          <div className="w-[500px] h-[300px] rounded-xl bg-white flex flex-col  justify-center relative">
            <div className="flex justify-between w-[90%] absolute top-2 right-5">
              <p></p>
              <button onClick={onClose} className="font-bold">
                X
              </button>
            </div>
            <h1>Input Skor</h1>
            <br />
            <form className="flex flex-col justify-center items-center ">
              <div>
                <tr>
                  <td>
                    <input
                      placeholder="Klub1"
                      className="border rounded-xl border-black px-2 mr-2"
                    />
                  </td>
                  <td> - </td>
                  <td>
                    <input
                      placeholder="Klub2"
                      className="border rounded-xl border-black px-2 ml-2"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Skor1"
                      className="border rounded-xl border-black px-2 mr-2"
                    />
                  </td>
                  <td> - </td>
                  <td>
                    <input
                      placeholder="Klub2"
                      className="border rounded-xl border-black px-2 ml-2"
                    />
                  </td>
                </tr>
              </div>
              <br />
              <button className="bg-gray-300 rounded-xl px-4 py-2">Save</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddSkor;
