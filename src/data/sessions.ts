import type {Session} from '../types';

export const sessions: Session[] = [
    {
        id: 1,
        title: "La Maison Hantée",
        description: "Échappez à la malédiction de la vieille maison hantée avant qu'il ne soit trop tard.",
        duration: 60,
        difficulty: "Moyen",
        maxPlayers: 6,
        image: "/images/house.jpg"
    },
    {
        id: 2,
        title: "L'Asile Abandonné",
        description: "Découvrez les sombres secrets de cet asile abandonné et échappez aux esprits tourmentés.",
        duration: 90,
        difficulty: "Difficile",
        maxPlayers: 8,
        image: "/images/asylum.jpg"
    },
];