
export interface LoginRespose {
    token: string;
    username: User;
}

export interface User {
    id: string;
    name: string;
    nikname: string;
    username: string;
    description: string;
    headline: string;
    creator: {
        is_creator: boolean;
    };
    entrepenaur: {
        is_entrepener: boolean;
    }

}
