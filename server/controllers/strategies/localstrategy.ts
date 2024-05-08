import passport from 'passport';
import { Strategy } from 'passport-local';
import { Users } from '../../models/models';
import bcryptjs from 'bcryptjs';

// Create Serializer and deserializer on the passport object
passport.serializeUser((user: any, done) => {
  done(null, user?._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const checkUser = await Users.findById(id);

    if (!checkUser) throw new Error('User Not Found!');

    const {
      _id,
      full_name,
      profile_photo,
      genotype,
      blood_group,
      gender,
      email,
      appointments,
    } = checkUser;

    // If id is a valid user, pass on to be authenticated
    done(null, {
      _id: _id.toString(),
      full_name,
      profile_photo,
      genotype,
      blood_group,
      gender,
      email,
      appointments,
    });
  } catch (error) {
    done(error, null);
  }
});

// Create the local strategy middleware on the passport object
const localStrategy = new Strategy(
  { usernameField: 'email', passwordField: 'password' },
  async (username, password, done) => {
    try {
      const checkUser = await Users.findOne({ email: username });

      if (!checkUser) throw new Error('Invalid login Credentials U');
      if (!bcryptjs.compareSync(password, checkUser.password))
        throw new Error('Invalid login Credentials P');

      // If the login details is correct,
      // pass the user object to the password verification function done
      // Pass only important details to the frontend in json
      const {
        _id,
        full_name,
        profile_photo,
        genotype,
        blood_group,
        gender,
        email,
        appointments,
      } = checkUser;

      done(null, {
        _id: _id.toString(),
        full_name,
        profile_photo,
        genotype,
        blood_group,
        gender,
        email,
        appointments,
      });

      // Catching all errors
    } catch (error) {
      done(error, undefined);
    }
  }
);

export default localStrategy;
