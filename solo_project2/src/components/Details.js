import mt from "./image/Mount-Everest.png"
import tower from "./image/tower.png"
import waterfall from "./image/angelWatterfall.png"

export default[
    {
        id: 1,
        tittle: "Mount Everest",
        location: "Nepal",
        startDate: "2023-01-01",
        endDate: "2023-05-01",
        description: "Mount Everest, Sanskrit and Nepali Sagarmatha, Tibetan Chomolungma, Chinese (Pinyin) Zhumulangma Feng or (Wade-Giles romanization) Chu-mu-lang-ma Feng, also spelled Qomolangma Feng, mountain on the crest of the Great Himalayas of southern Asia that lies on the border between Nepal and the Tibet Autonomous Region of China, at 27°59′ N 86°56′ E. Reaching an elevation of 29,032 feet (8,849 metres), Mount Everest is the highest mountain in the world.",
       coverImg: {mt}
        // coverImg: require('./image/Mount-Everest.png').default
    },
    {
        id: 2,
        tittle: "Eiffel Tower",
        location: "Paris",
        startDate: "2023-01-01",
        endDate: "2023-05-01",
        description: "For 130 years, the Eiffel Tower has been a powerful and distinctive symbol of the city of Paris, and by extension, of France. At first, when it was built for the 1889 World's Fair, it impressed the entire world by its stature and daring design, and symbolized French know-how and industrial genius.",
        coverImg: {tower}
    },
    {
        id: 3,
        tittle: "Angel Waterfall",
        location: "Venezuela",
        startDate: "2023-01-01",
        endDate: "2023-05-01",
        description: "Angel Falls, Spanish Salto Ángel, also called Salto Churún Merú, waterfall in the Guiana Highlands in Bolívar state, southeastern Venezuela, on the Churún River, a tributary of the Caroní, 160 miles (260 km) southeast of Ciudad Bolívar. The highest waterfall in the world, the cataract drops 3,212 feet (979 metres) and is 500 feet (150 metres) wide at the base.",
        coverImg: {waterfall}
    }
]