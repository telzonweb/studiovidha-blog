import Form from "../models/form.model.js";
import { errorHandler } from "../utils/error.js";

export const formInput = async (req, res, next) => {
  //   console.log("form Input");
  const { name, email, number, message } = req.body;
  console.log(req.body);
  // if any field does not exists then show error
  if (
    !name ||
    !email ||
    !number ||
    name === "" ||
    email === "" ||
    number === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  // create a new form input
  const newUserInput = new Form({
    name,
    email,
    number,
    message,
  });

  // save the new user
  try {
    await newUserInput.save();
    res.json(newUserInput);
  } catch (error) {
    next(error);
  }
};

export function testing() {
  console.log("testing");
}
