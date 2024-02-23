import DecorOption from "./components/options/DecorOption";
import About from "./content/About";
import About2 from "./content/About2";
import Contact from "./content/Contact";
import Hero from "./content/Hero";
import Portfolio from "./content/Portfolio";

//-----------------------------------------------------------------PAGE CONTENT

export const PAGE_CONTENT = [
    <Hero key={1} id={1}></Hero>, 
    <About2 key={2} id={2}></About2>,
    <About key={3} id={3}></About>,
    <Portfolio key={5} id={5}></Portfolio>,
    <Contact key={6} id={6}></Contact>,

]
export const NUM_SLIDES = PAGE_CONTENT.length;


//---------------------------------------------------------WALL

    export const WALL_OPTIONS = [
        <DecorOption changedElement="wallpaper" image="wall-1.webp" key="wall-1.webp" tooltip="White Striped"/>,
        <DecorOption changedElement="wallpaper" image="wall-2.webp" key="wall-2.webp" tooltip="Beige Classy"/>,
        <DecorOption changedElement="wallpaper" image="wall-3.webp" key="wall-3.webp" tooltip="Beige Paint"/>,
        <DecorOption changedElement="wallpaper" image="wall-4.webp" key="wall-4.webp" tooltip="Creme Branched"/>,
        <DecorOption changedElement="wallpaper" image="wall-5.webp" key="wall-5.webp" tooltip="White wood"/>,
        <DecorOption changedElement="wallpaper" image="wall-6.webp" key="wall-6.webp" tooltip="Marble effect"/>,
    ]

    export const INITIAL_WALL = "wall-3.webp";

//---------------------------------------------------------FLOOR

    export const FLOOR_OPTIONS = [
        <DecorOption changedElement="floor" image="wood-floor-1.webp" key="wood-floor-1.webp" tooltip="Oak modern"/>,
        <DecorOption changedElement="floor" image="wood-floor-2.webp" key="wood-floor-2.webp" tooltip="Raw wood"/>,
        <DecorOption changedElement="floor" image="wood-floor-3.webp" key="wood-floor-3.webp" tooltip="Walnut"/>,
        <DecorOption changedElement="floor" image="wood-floor-4.webp" key="wood-floor-4.webp" tooltip="Heather Oak"/>,
        <DecorOption changedElement="floor" image="wood-floor-5.webp" key="wood-floor-5.webp" tooltip="City Oak"/>,
    ]

    export const INITIAL_FLOOR = "wood-floor-2.webp";

//---------------------------------------------------------PAINTING

    export const PAINTING_OPTIONS = [
        <DecorOption changedElement="painting" image="painting-1.webp" key="painting-1.webp" tooltip="Stock photo"/>,
        <DecorOption changedElement="painting" image="painting-2.webp" key="painting-2.webp" tooltip={`Mark Rothco - "Untitled"`}/>,
        <DecorOption changedElement="painting" image="painting-3.webp" key="painting-3.webp" tooltip={`Gustav Klimt - "Portrait of Adele Bloch-Bauer I"`}/>,
        <DecorOption changedElement="painting" image="painting-4.webp" key="painting-4.webp" tooltip={`Pablo Picasso - "Portrait of Dora Mar"`}/>,
        <DecorOption changedElement="painting" image="painting-5.webp" key="painting-5.webp" tooltip={`Wladyslaw Strzeminski - "Oak"`}/>,
        <DecorOption changedElement="painting" image="painting-6.webp" key="painting-6.webp" tooltip={`Henri Matisse - "Circus"`}/>,
    ]
                
    export const INITIAL_PAINTING = "painting-1.webp";

//---------------------------------------------------------PLANT

    export const PLANT_OPTIONS = [
        <DecorOption changedElement="plant" image="plant-1.webp" key="wood-plant-1.webp" tooltip="Strelitzia Nicolai"/>,
        <DecorOption changedElement="plant" image="plant-2.webp" key="wood-plant-2.webp" tooltip="Opuntia Rubescens"/>,
        <DecorOption changedElement="plant" image="plant-3.webp" key="wood-plant-3.webp" tooltip="Phoenix Canariensis (small)"/>,
        <DecorOption changedElement="plant" image="plant-4.webp" key="wood-plant-4.webp" tooltip="Phoenix Canariensis (big)"/>,
        <DecorOption changedElement="plant" image="plant-5.webp" key="wood-plant-5.webp" tooltip="Areca Palm"/>,
    ]
                
    export const INITIAL_PLANT = "plant-2.webp";

//---------------------------------------------------------RUG

    export const RUG_OPTIONS = [
        <DecorOption changedElement="rug" image="rug-1.webp" key="rug-1.webp" tooltip="Clapton"/>,
        <DecorOption changedElement="rug" image="rug-2.webp" key="rug-2.webp" tooltip="Santorini"/>,
        <DecorOption changedElement="rug" image="rug-3.webp" key="rug-3.webp" tooltip="Yavu"/>,
        <DecorOption changedElement="rug" image="rug-4.webp" key="rug-4.webp" tooltip="Lines"/>,
        <DecorOption changedElement="rug" image="rug-5.webp" key="rug-5.webp" tooltip="Konakli"/>,

    ]
                
    export const INITIAL_RUG = "rug-2.webp";

