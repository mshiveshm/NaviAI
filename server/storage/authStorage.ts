import bcrypt from "bcryptjs";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

class AuthStorage {
  private users: Map<string, User> = new Map();
  private emailIndex: Map<string, string> = new Map();
  private currentId = 1;

  async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Promise<User> {
    // Check if email already exists
    if (this.emailIndex.has(userData.email.toLowerCase())) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const user: User = {
      id: this.currentId.toString(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.users.set(user.id, user);
    this.emailIndex.set(user.email, user.id);
    this.currentId++;

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const userId = this.emailIndex.get(email.toLowerCase());
    if (!userId) return null;
    return this.users.get(userId) || null;
  }

  async findUserById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  getAllUsers(): User[] {
    return Array.from(this.users.values()).map(user => ({
      ...user,
      password: '[HIDDEN]' // Don't expose passwords
    })) as User[];
  }
}

export const authStorage = new AuthStorage();