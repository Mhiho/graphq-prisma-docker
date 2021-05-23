import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APP_SECRET, getUserId } from '../utils';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const resolvers: any = {
    Query: {
        getUserById: async (id: any) => {
            return await prisma.user.findUnique({where: {id: id}})
        },
        getAllUsers: async() => {
            return await prisma.user.findMany()
        }
    },
    // Mutations: {
    //     signUp: async(args: any) => {
    //         // 1
    //         const password = await bcrypt.hash(args.password, 10)
          
    //         // 2
    //         const user = await prisma.user.create({ data: { ...args, password } })
          
    //         // 3
    //         const token = jwt.sign({ userId: user.id }, APP_SECRET)
          
    //         // 4
    //         return {
    //           token,
    //           user,
    //         }
    //       },
          
    //       login: async(args:any) => {
    //         // 1
    //         const user = await prisma.user.findUnique({ where: { email: args.email } })
    //         if (!user) {
    //           throw new Error('No such user found')
    //         }
          
    //         2
    //         const valid = await bcrypt.compare(args.password, user.password)
    //         if (!valid) {
    //           throw new Error('Invalid password')
    //         }
          
    //         const token = jwt.sign({ userId: user.id }, APP_SECRET)
          
    //         // 3
    //         return {
    //           token,
    //           user,
    //         }
    //       }
    // }
};