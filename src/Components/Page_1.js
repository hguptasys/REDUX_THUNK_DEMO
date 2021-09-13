import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchProducts } from "../redux/action";
import { edit, deleteD} from "../redux/action";
const Page_1 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data_All);
  console.log("data", data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <table class="table table-bordered" style={{width:"48%"}}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" style={{ width: "350px" }}>
              Name
            </th>
            <th scope="col" colspan="2" style={{ paddingLeft: "74px" }}>
              Action
            </th>
          </tr>
        </thead>
        {data.length>0 ?  <tbody>
          {data &&
            data.map((data) => (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td   style={{width:"100px"}}>
                  <button
                    id="edit"
                    type="submit"
                    className="d-flex justify-content-center"
                    onClick={() => dispatch(edit(data))}
                  
                  >
                   <span>Edit</span> 
                  </button>
                </td>
                <td>
                  <button
                    id="dlt"
                    type="submit"
                    className="dltBtn"
                    onClick={() => dispatch(deleteD(data.id))}
                  >
                    <span>Delete</span> 
                  </button>
                </td>
              </tr>
            ))}
        </tbody> : <h5 style={{width:"300px"}}>No Data Found</h5>}
       
      </table>
    </div>
  );
};

export default Page_1;
