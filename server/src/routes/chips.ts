import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function chipsRoutes(app: FastifyInstance) {
    app.post('/chip', async (request, reply) => {
        const bodySchema = z.object({
            strength: z.string().transform(strength => Number(strength)),
            ability: z.string(),
            armor: z.string().transform(armor => Number(armor)),
            fire_power: z.string().transform(fire_power => Number(fire_power)),
            classes: z.string(),
            race: z.string(),
            name: z.string(),
            experience_points: z.string().transform(experience_points => Number(experience_points)),
        });

        const {
            strength,
            ability,
            armor,
            fire_power,
            classes,
            race,
            name,
            experience_points,
        } = bodySchema.parse(request.body);

        const chip = await prisma.chip.create({
            data: {
                strength,
                ability,
                armor,
                fire_power,
                class: classes,
                race,
                name,
                experience_points
            }
        });

        if (chip) reply.status(200).send( chip );

        reply.status(401).send({
            message: 'Error'
        })
    });

    app.get('/chip/:id', async (request, reply) => {
        const paramShema = z.object({
            id: z.string().transform(id => Number(id)),
        });

        const { id } = paramShema.parse(request.params);

        const product = await prisma.chip.findUniqueOrThrow({
            where: {
                id
            }
        });

        if (product) {
            reply.status(200).send(product);
        } else {
            reply.status(400).send({
                message: 'Not found'
            })
        }
    })

    app.get('/chip', async (request, reply) => {
        const chips = await prisma.chip.findMany({
            orderBy: {
                name: 'asc'
            },
        });

        if (chips.length > 0) reply.status(200).send(chips.map((chip) => {
            return {
                id: chip.id,
                strength: chip.strength,
                ability: chip.ability,
                armor: chip.armor,
                fire_power: chip.fire_power,
                class: chip.class,
                race: chip.race,
                name: chip.name,
                experience_points: chip.experience_points
            }
        }));

        reply.status(205).send({
            message: 'Nothing found'
        });
    });

    app.delete('/chip/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().transform(id => Number(id)),
        });

        const { id } = paramsSchema.parse(request.params);

        await prisma.chip.delete({
            where: {
                id,
            },
        }).then(() => {
            reply.status(200).send({
                message: 'Success'
            });
        }).catch(async (error) => {
            reply.status(401).send({
                message: 'Error'
            });
        });
    });

    app.put('/chip/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().transform(id => Number(id)),
        });

        const { id } = paramsSchema.parse(request.params);
        
        const bodySchema = z.object({
            strengthEntered: z.string().transform(id => Number(id)),
            abilityEntered: z.string(),
            armorEntered: z.string().transform(id => Number(id)),
            fire_powerEntered: z.string().transform(id => Number(id)),
            classEntered: z.string(),
            raceEntered: z.string(),
            nameEntered: z.string(),
            experience_pointsEntered: z.string().transform(id => Number(id))
        });

        const {
            strengthEntered,
            abilityEntered,
            armorEntered,
            fire_powerEntered,
            classEntered,
            raceEntered,
            nameEntered,
            experience_pointsEntered,
        } = bodySchema.parse(request.body);

        if (id) {
            const chip = await prisma.chip.findUniqueOrThrow({
                where: {
                    id
                }
            });

            if (chip) {
                const updateChip = await prisma.chip.update({
                    where: {
                        id
                    },
                    data: {
                        strength: strengthEntered === null ? chip.strength : strengthEntered,
                        ability: abilityEntered === null ? chip.ability : abilityEntered,
                        armor: armorEntered === null ? chip.armor : armorEntered,
                        fire_power: fire_powerEntered === null ? chip.fire_power : fire_powerEntered,
                        class: classEntered === null ? chip.class : classEntered,
                        race: raceEntered === null ? chip.race : raceEntered,
                        name: nameEntered === null ? chip.name : nameEntered,
                        experience_points: experience_pointsEntered === null ? chip.experience_points : experience_pointsEntered, 
                    }
                });

                if (updateChip) reply.status(200).send( updateChip );

                reply.status(400).send({
                    message: 'Error',
                });
            }
        }
    });
}