import User from '../models/User';
import bcrypt from 'bcryptjs';
import createToken from '../utils/Auth/createToken';
import verifyPassword from '../utils/Auth/validatePassword';
import mapValidationErrors from '../utils/validation/mapValidationErrors';
import validation from '../validation/users';

const controller = {
  async register({ body }, res) {
    const errors = mapValidationErrors(validation(body));
    if (errors) return res.status(400).send(errors);

    const { email } = body;
    let user = await User.findOne({ email });
    if (user)
      return res.status(400).send({ errors: { user: 'User Already Exists' } });

    user = new User({ ...body });
    user.password = bcrypt.hashSync(user.password, 10);
    await user.save();

    return res.status(200).send({ user });
  },
  async login({ body }, res) {
    const errors = mapValidationErrors(validation(body, true));
    if (errors) return res.status(400).send(errors);

    const { email, password } = body;

    let user = await User.findOne({ email });
    if (!user)
      return res.status(400).send({ errors: { user: 'User Does Not Exist' } });

    const isValidPwd = await verifyPassword(user, password);
    if (!isValidPwd)
      return res.status(400).send({ errors: { password: 'Password Invalid' } });

    return res.status(200).send({ user, token: createToken(user) });
  }
};

export default controller;
