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

export const categories = [
    {
        id: 1,
        title: "börek",
        image: borek,
        type: "savoury",
        category: "borek"
    },
    {
        id: 2,
        title: "poğça",
        image: pogca,
        type: "savoury",
        category: "pogca",
    },
    {
        id: 3,
        title: "dolma",
        image: dolma,
        type: "savoury",
        category: "dolma",
    },
    {
        id: 4,
        title: "sides",
        image: sides,
        type: "savoury",
        category: "sides",
    },
    {
        id: 5,
        title: "tatli",
        image: tatli,
        type: "sweet",
        category: "tatli",


    },
    {
        id: 6,
        title: "pudding",
        image: pudding,
        type: "sweet",
        category: "pudding",

    },
    {
        id: 7,
        title: "cake",
        image: cake,
        type: "sweet",
        category: "cake",

    },
    {
        id: 8,
        title: "kurabiye",
        image: kurabiye,
        type: "sweet",
        category: "kurabiye",

    },
];


export const foods = [
        {
            id: 9,
            title: "kiymali börek",
            image: borek_dunno,
            type:"savoury",
            price: 20,
            category: "borek",
        },
        {
            id: 10,
            title: "sigara börek",
            image: borek_sigara,
            type: "savoury",
            price: 30,
            category: "borek",
        },
        {
            id: 11,
            title: "peynirli börek",
            image: borek,
            type: "savoury",
            price: 10,
            category: "borek",
        },
        {
            id: 12,
            title: "pogca bok",
            image: borek,
            type: "savoury",
            price: 10,
            category: "pogca",
        },
        
]
