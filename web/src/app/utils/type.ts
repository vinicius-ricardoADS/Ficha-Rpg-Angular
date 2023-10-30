export type PropertysForms = {
    strength: number | undefined;
    ability: string | undefined;
    armor: number | undefined;
    fire_power: number | undefined;
    class: string | undefined;
    race: string | undefined;
    name: string | undefined;
    experience_points: number | undefined;
}

export interface Chips {
    id: number
    strength: number;
    ability: string;
    armor: number;
    fire_power: number;
    class: string;
    race: string;
    name: string;
    experience_points: number;
}