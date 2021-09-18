import Router from 'express';

import validateInput from '../middlewares/input-validator';
import idValidator from '../middlewares/id-validator';

import {User} from './user-type';
import {createUser, getUserById, getUsers} from './user-util';


const userRouter = Router();

userRouter.post(
  '/create', validateInput,
   async (req, res) => {
     try {
       const user = <User>req.body;
       await createUser(user);
       return res.send('ok');
     } catch (err) {
       return res.status(422).json({error: err.message});
     }
   },
);

userRouter.get(
    '/list',
     async (req, res) => {
       try {
         const users = await getUsers({attributes: ['id', 'email', 'first_name', 'last_name']});
         return res.json(users);
       } catch (err) {
         return res.status(422).json({error: err.message});
       }
     },
  );

userRouter.get(
    '/list/:id', idValidator,
     async (req, res) => {
       try {
         const {id} = req.params;
         const users = await getUserById(Number(id));
         return res.json(users);
       } catch (err) {
         return res.status(422).json({error: err.message});
       }
     },
  );


export default userRouter;
