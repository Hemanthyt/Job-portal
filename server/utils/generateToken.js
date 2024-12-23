import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
// {
//   name:"Vox",
//   email:"vox@vox.com",
//   password:"123456",

// }
export default generateToken;
