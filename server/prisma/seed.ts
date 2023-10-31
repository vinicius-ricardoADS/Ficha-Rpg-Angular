import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Chip = {
    strength: number;
    ability: string;
    armor: number;
    fire_power: number;
    class: string;
    race: string;
    name: string;
    experience_points: number;
}

async function main() {

    let chips: Chip[] = [];

    const chip = await prisma.chip.create({
        data: {
            strength: 5,
            ability: "Heroica",
            armor: 6,
            fire_power: 9,
            class: "Necromante",
            race: "Humano",
            name: "Relfryin",
            experience_points: 7
        }
    });

    const chip2 = await prisma.chip.create({
        data: {
            strength: 4,
            ability: "Curar",
            armor: 11,
            fire_power: 0,
            class: "Suporte",
            race: "Elfo",
            name: "Helheim",
            experience_points: 21,
        }
    });

    const chip3 = await prisma.chip.create({
        data: {
            strength: 15,
            ability: "Ataque furtivo",
            armor: 5,
            fire_power: 0,
            class: "Assassino",
            race: "Humano",
            name: "Grindelward",
            experience_points: 10,
        }
    });

    chips.push(chip);
    chips.push(chip2);
    chips.push(chip3);

    console.log(chips);
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect()
    process.exit(1);
})