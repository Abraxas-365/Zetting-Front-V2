export interface Actor {
    id: string
    name: string;
    perfil_image: string;
    profession: string;
    description: string;
    features: Features;
    age: number | string;
    gender: string;
}

interface Features {
    height: number | string;
    body: string;
    skin: string;
    hair_type: string;
    hair_size: number;
    skills: Array<string>;
    facial_hair: string;
    hair_color: string;
    eye_color: string;
}
