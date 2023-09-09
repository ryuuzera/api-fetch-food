import User from "../entities/user.entity";
import { Repository } from "./interface";

interface UserRepository extends Repository<User> {}

export default UserRepository;