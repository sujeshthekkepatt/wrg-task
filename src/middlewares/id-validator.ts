import validator from 'validator';


const validateId = (req: any, res: any, next: any) => {
  try {
    const {id} = req.params;
    if (!validator.isNumeric(id) || validator.isEmpty(id)) {
      return res.status(422).json({error: 'ID_IS_INVALID'});

    }
    return next();
  } catch (err) {
    return next(err);
  }
};

export default validateId;
