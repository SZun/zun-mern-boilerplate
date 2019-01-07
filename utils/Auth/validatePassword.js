import bcrypt from 'bcryptjs';

const verifyPassword = async (user, password) =>
  await bcrypt.compare(password, user.password);

export default verifyPassword;
