import React, { useContext, useEffect } from "react";
import { Store } from "../api/RegStore";
import "../styles/Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  let data = useContext(Store);

  const form = useForm();
  const { register, setValue, watch, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (value) => {
    data.handleCreate(value.number);
  };

  const number = watch("number");
  const maxLength = 12;

  useEffect(() => {
    if (number && number.toString().length > maxLength) {
      setValue("number", number.toString().slice(0, maxLength));
      register("number").disabled = true;
    } else {
      register("number").disabled = false;
    }
  }, [number, maxLength, register, setValue]);

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
                minLength: {
                  value: 10,
                  message: "Number should have 10 digits",
                },
                pattern: {
                  value: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
                  message: "Invalid Number",
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
