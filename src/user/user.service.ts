import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [{
        id: "137",
        name: "Ilon",
        age: 28,
        gender: "male",
        email: "ilon@gmail.com",
        password: "ilon#as331" },
        {
        id: "138",
        name: "George",
        age: 38,
        gender: "male",
        email: "george@gmail.com",
        password: "george#as331" },
        {
    id: "139",
    name: "Galina",
    age: 48,
    gender: "female",
    email: "galina@gmail.com",
    password: "galina#as331" },
    ];

    constructor() {}

    async getAllUsers() {
        return this.users;
    }

    async createUser(data) {
        return this.users.push(data);
    }

    async getOneUserAccount(userId: string) {
        const user = this.users.find(item => item.id === userId)
        return user;
    }
}
