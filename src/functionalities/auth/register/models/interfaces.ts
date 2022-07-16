

export interface UserRegister {
    name: string;
    nikname: string;
    username: string;
    password: string;
    creator: {
        is_creator: boolean;
    };
    entrepenaur: {
        is_entrepener: boolean;
    };
    gender: string;
    contact: {
        email: string;
    };

}
