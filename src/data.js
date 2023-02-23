import borek from './assets/borek.webp'
import pogca from './assets/pogca.webp'
import dolma from './assets/dolma.webp'
import sides from './assets/sides.webp'
import tatli from './assets/tatli.webp'
import pudding from './assets/pudding.webp'
import cake from './assets/cake.webp'
import kurabiye from './assets/kurabiye.webp'
import borek_dunno from './assets/dunno_borek.webp'
import borek_sigara from './assets/sigara_borek.webp'

export const food = [
    {
        id: 1,
        title: "börek",
        image: borek,
        type: "savoury",
        price: 10,
    },
    {
        id: 2,
        title: "poğça",
        image: pogca,
        type: "savoury",
        price: 12
    },
    {
        id: 3,
        title: "dolma",
        image: dolma,
        type: "savoury",
        price: 11,
    },
    {
        id: 4,
        title: "sides",
        image: sides,
        type: "savoury",
        price: 10,
    },
    {
        id: 5,
        title: "tatli",
        image: tatli,
        type: "sweet",
        price: 15,
    },
    {
        id: 6,
        title: "pudding",
        image: pudding,
        type: "sweet",
        price: 14,
    },
    {
        id: 7,
        title: "cake",
        image: cake,
        type: "sweet",
        price: 20,
    },
    {
        id: 8,
        title: "kurabiye",
        image: kurabiye,
        type: "sweet",
        price: 20,
    },
    {
        id: 9,
        title: "kiymali börek",
        image: borek_dunno,
        type:"savoury",
        price: 20,
        food: "börek",
    },
    {
        id: 10,
        title: "sigara börek",
        image: borek_sigara,
        type: "savoury",
        price: 30,
        food: "börek",
    },
    {
        id: 11,
        title: "peynirli börek",
        image: borek,
        type: "savoury",
        price: 10,
        food: "börek",
    },
    
];