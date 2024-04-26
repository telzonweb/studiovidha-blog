import Form from "../models/form.model.js";

export const formInput = async (req, res, next) => {
  //   console.log("form Input");
  const { name, email, number } = req.body;
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
