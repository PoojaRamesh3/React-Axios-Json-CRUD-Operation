import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  interface info {
    id: number;
    name: string;
    email: string;
    phone: number;
  }

  const [details, setDetails] = useState<info[]>([]);

  const baseURL = "http://localhost:3000/users";

  const getData = () => {
    axios.get(baseURL).then((response) => {
      setDetails(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const editdata = (args: any) => {
    navigate(`/edit-form/${args}`);
  };

  const deleteHandler = (id: any) => {
    axios.delete(`http://localhost:3000/users/${id}`);
    getData();
  };

  const adddata = (args: any) => {
    navigate(`/add-form/${args}`);
  };

  return (
    <div className="container pt-5">
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success mb-5"
          onClick={() => {
            adddata(Math.floor(Math.random() * 16) + 6);
          }}
        >
          Add new details
        </button>
      </div>
      <table className="table table-dark table-striped border-info table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item: any) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {
                      editdata(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteHandler(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
