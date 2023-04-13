import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [edit, setEdit] = useState<any>({
    name: "",
    email: "",
    phone: "",
  });

  const baseURL = `http://localhost:3000/users/${id}`;

  const getData = () => {
    axios.get(baseURL).then((response) => {
      setEdit(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event: any, arg: any) => {
    setEdit({ ...edit, [arg]: event.target.value });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, edit).then((response) => {
      if (response.status == 200) {
        navigate("/");
      } else {
        alert("Somthing went wrong!");
      }
    });
  };

  return (
    <div className="container pt-5">
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-1">
          <input
            type="text"
            className="form-control"
            placeholder="Id"
            aria-label="First name"
            value={edit.id}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="First name"
            value={edit.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="First name"
            value={edit.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            aria-label="First name"
            value={edit.phone}
            onChange={(e) => handleChange(e, "phone")}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
