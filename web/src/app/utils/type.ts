export type PropertysForms = {
    strength: string;
    ability: string;
    armor: string;
    fire_power: string;
    classes: string;
    race: string;
    name: string;
    experience_points: string;
}

export type PropertysEditForm = {
    strengthEntered: string;
    abilityEntered: string
    armorEntered: string
    fire_powerEntered: string
    classEntered: string
    raceEntered: string
    nameEntered: string
    experience_pointsEntered: string
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