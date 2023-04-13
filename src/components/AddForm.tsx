import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [add, setAdd] = useState<any>({
    name: "",
    email: "",
    phone: "",
  });

  const baseURL = `http://localhost:3000/users/`;

  const handleChange = (event: any, arg: any) => {
    setAdd({ ...add, [arg]: event.target.value });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    axios.post(baseURL, add).then((response) => {
      if (response.status == 201) {
        navigate("/");
      } else {
        alert("Somthing went wrong!");
      }
    });
  };

  return (
    <div className="container pt-5">
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="First name"
            value={add.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="First name"
            value={add.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            aria-label="First name"
            value={add.phone}
            onChange={(e) => handleChange(e, "phone")}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
