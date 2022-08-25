import { createUserDto } from "../dto/user.dto";
import User from "../models/User.model";

export const createUser = async (userData: createUserDto): Promise<User> => {
  const user = new User({ ...userData, type: "user" });
  return user.save();
};
