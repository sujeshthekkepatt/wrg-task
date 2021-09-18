import validator from 'validator';

import {User} from '../routes/user-type';

const validateInput = (req: any, res: any, next: any) => {
  try {
    let {firstName, lastName, achivements, introduction, email, experience, phone} = <User>req.body;
    console.log("hola" ,req.body)
    firstName = validator.escape(firstName);
    lastName = validator.escape(lastName);
    achivements = validator.escape(achivements);
    introduction = validator.escape(introduction);
    email = validator.escape(email);
    experience = validator.escape(experience);
    phone = validator.escape(phone);

    if (!validator.isEmail(email) || validator.isEmpty(email)) {
      return res.status(422).json({error: 'INVALID_EMAIL'});
    }
    if (validator.isEmpty(firstName)) {
      return res.status(422).json({error: 'EMPTY_FIRST_NAME'});
    }
    if (validator.isEmpty(lastName)) {
      return res.status(422).json({error: 'EMPTY_LAST_NAME'});
    }
    if (validator.isEmpty(achivements)) {
      return res.status(422).json({error: 'EMPTY_ACHIVEMENT'});
    }
    if (validator.isEmpty(introduction)) {
      return res.status(422).json({error: 'EMPTY_INTRODUCTION'});
    }
    if (validator.isEmpty(experience)) {
      return res.status(422).json({error: 'EMPTY_EXPERIENCE'});
    }
    if (validator.isEmpty(phone)) {
      return res.status(422).json({error: 'EMPTY_PHONE_NUMBER'});
    }
    req.body = {
      firstName,
      lastName,
      achivements,
      introduction,
      email,
      experience,
      phone,
    };
    return next();
  } catch (err) {
    return next(err);
  }
};

export default validateInput;
