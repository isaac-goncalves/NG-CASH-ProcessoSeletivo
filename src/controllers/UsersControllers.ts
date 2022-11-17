
import { Request, Response } from "express";

import { accountsRepository } from "../repositories/accountsRepositories";

import { userRepository } from "../repositories/usersRepositories";

export class UserController {

    async create(request: Request, response: Response) {
        const { username, password } = request.body;

        if(!username || !password) {
            return response.status(400).json({ error: "Username or password is missing" });
        }

        try {
            
            const newAccount = accountsRepository.create( { balance: 100 } );

            await accountsRepository.save(newAccount);
            
            const newUser = userRepository.create({ username, password , accountid: newAccount });

            console.log(newUser);

            await userRepository.save(newUser); 
            
            return response.status(201).json({ message: "User created" });

        }
        catch(error) {
            console.log(error);
            return response.status(500).json({ message:"internal server error" });
        }

    }
}
