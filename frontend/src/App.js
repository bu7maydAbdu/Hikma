import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./components/Card";

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URI;
  const navigate = useNavigate();
  console.log(baseUrl);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    caption: "",
    file: {},
  });

  const [retrievedData, setRetrievedData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/post/`)
      .then((res) => {
        console.log(res.data);
        setRetrievedData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [retrievedData]);

  //submit form
  const sumbitForm = () => {
    // Handle form submission with formData and file
    console.log("Form Data:", formData);
    console.log("File:", typeof file);
    axios
      .post(`${baseUrl}/post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("helllooo successful");
        navigate("/");
      })
      .catch((err) => {
        // alert(" an error happend, please check console");
        console.log("hellooo error");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="navbar  bg-neutral  justify-around">
        <button className="btn btn-ghost text-2xl">Hikma</button>
        <button
          className="btn error"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Write A Hikma
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  flex  flex-col items-center gap-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">write Your Caption!</h3>

          <textarea
            className="textarea textarea-primary w-3/4"
            placeholder="Your Caption"
            value={formData.caption}
            onChange={(e) => {
              setFormData({ ...formData, caption: e.target.value });
            }}
          ></textarea>
          <h4>upload the picture:</h4>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={(e) => {
              setFormData({
                ...formData,
                file: e.target.files[0],
              }); // Use e.target.files[0] to get the first selected file
            }}
          />
          <div className="modal-action">
            <form method="dialog" onSubmit={(e) => e.preventDefault()}>
              {/* Prevent the default form submission to handle it manually */}
              <button className="btn" onClick={sumbitForm}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div
        class="grid grid-cols-3 gap-4 justify-center"
        style={{ marginTop: "50px" }}
      >
        {retrievedData.map((data, index) => (
          <Card key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
