import React, { useContext, useState } from "react";
import { Store } from "../api/RegStore";
import "../styles/Form.css";

const Form = () => {
  let [num, setNum] = useState();
  let data = useContext(Store);

  return (
    <>
      <section className="form">
        <div>
          <p>Pre Register Now</p>
          <p>Asap</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            data.handleCreate(num);
          }}
        >
          <input
            onChange={(e) => setNum(e.target.value)}
            className="shadow-xl"
            type="number"
            placeholder="Enter you number"
          />
          <button>Register</button>
        </form>
      </section>
    </>
  );
};

export default Form;
