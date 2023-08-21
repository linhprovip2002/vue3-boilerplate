interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    updatedAt: Date;
    age: number;
    gender: boolean;
    createBy: number;
}

export default User;