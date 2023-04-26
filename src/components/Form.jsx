import React, { useContext } from "react";
import { Store } from "../api/RegStore";
import "../styles/Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  let data = useContext(Store);

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (value) => {
    data.handleCreate(value.number);
  };

  return (
    <>
      <section className="form">
        <div>
          <p>Pre Register Now</p>
          <p>Asap</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <span>
            <input
              type="number"
              className="shadow-xl"
              placeholder="Enter you Number"
              {...register("number", {
                required: {
                  value: true,
                  message: "Number is required",
                },
                maxLength: {
                  value: 10,
                  message: "Limit the max-length",
                },
                minLength: {
                  value: 10,
                  message: "Less than required value ",
                },
              })}
            />
            <p className="text-red-600 text-xl">{errors.number?.message}</p>
          </span>
          <button>Register</button>
        </form>
      </section>
    </>
  );
};

export default Form;
