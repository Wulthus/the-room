
//-----------------------------------------------------------------------------------------GLOBALS

    export const SLIDER_TIMER_SECONDS = 10;
    // Make sure to account for slides' transition time.

    export const SLIDER_TIMER_INTERVAL = 1;
    //Interval at which slider timer function will run. Value of 1 is equal to 1 second.

    export const MENU_ICON_WIDTH_PIXELS = 60;
    //Width of menu icon element visible on the screen. Value essencial for positioning purposes.

    export const MENU_ICON_HEIGHT_PIXELS = 30;
    //Height of menu icon element visible on the screen.

    export const DIMMER_MIN_RANGE = 30;
    //Min value for the dimmer. 30 corresponds to 0.3 brigthness and 1.7 contrast

    export const DIMMER_MAX_RANGE = 100;
    //Max value for the dimmer. 100 corresponds to 1.0 brigthness and 1.0 contrast
    
    export const COVER_ANIMATION_SECONDS = 1.2;
    //Time in seconds it takes for the wall/floor changing animation to finish.

//------------------------------------------------------------------------------------------SCREEN

    export const SCREEN_BOX_SHADOW_LENGTH = 15;
    //Length of extra box shadow radiating from the screen once brigthness is set below maximum value

    export const SCROLL_MIN_MOVEMENTX = 5;
    //Miminal difference in x coordinate for pointer events to trigger scrolling. Must be an integer.

//------------------------------------------------------------------------------------------DIMMER

    export const LIGHTS_ON_ANIMATION_DELAY_SECONDS = 1.5
    //Delay between screen lightwening up and "Lights On" animation start.

    export const LIGHT_INCRIMENT_INTERVAL_SECONDS = 0.02
    //Dictates how long every step in "Lights On" animation shoudd take. 

//-------------------------------------------------------------------------------------------CAMERA

    export const PAN_INTERVAL_MILISECONDS = 25
    //interval at which camera panning functions run. Higher values give more fine control.

    export const PAN_Y_LIMIT_PERCENT = 30
    //Maximum camera pitch angle, in precentage.

    export const PAN_X_LIMIT_PERCENT = 30
    //Maximum camera yaw angle, in precentage.

//-----------------------------------------------------------------ROUND MODAL

    const STANDARD_MODAL_SIZE_PX = 300;
    //Size of round modal window, in pixels
    
    const STANDARD_CONTENT_SIZE_PX = 70;
    //Size of round modal window selectable elements, in pixels
    
    const STANDARD_CONTENT_OFFFSET_PX = 70;
    //Offset of selectable elements from the center of the round modal, in pixels


        //-----------------------------------------------------------------------------ELEMENT SPECIFIC SETTINGS


        export const WALL_MODAL_SIZE_PX = STANDARD_MODAL_SIZE_PX;
        export const WALL_CONTENT_SIZE_PX = STANDARD_CONTENT_SIZE_PX;
        export const WALL_CONTENT_OFFFSET_PX = STANDARD_CONTENT_OFFFSET_PX;

        export const FLOOR_MODAL_SIZE_PX = STANDARD_MODAL_SIZE_PX;
        export const FLOOR_CONTENT_SIZE_PX = STANDARD_CONTENT_SIZE_PX;
        export const FLOOR_CONTENT_OFFFSET_PX = STANDARD_CONTENT_OFFFSET_PX;

        export const PAINTING_MODAL_SIZE_PX = STANDARD_MODAL_SIZE_PX;
        export const PAINTING_CONTENT_SIZE_PX = STANDARD_CONTENT_SIZE_PX;
        export const PAINTING_CONTENT_OFFFSET_PX = STANDARD_CONTENT_OFFFSET_PX;

        export const PLANT_MODAL_SIZE_PX = STANDARD_MODAL_SIZE_PX;
        export const PLANT_CONTENT_SIZE_PX = STANDARD_CONTENT_SIZE_PX;
        export const PLANT_CONTENT_OFFFSET_PX = STANDARD_CONTENT_OFFFSET_PX;

        export const RUG_MODAL_SIZE_PX = STANDARD_MODAL_SIZE_PX;
        export const RUG_CONTENT_SIZE_PX = STANDARD_CONTENT_SIZE_PX;
        export const RUG_CONTENT_OFFFSET_PX = STANDARD_CONTENT_OFFFSET_PX;


        export const PLANT_MODAL_PADDING = '.7rem';
        //Size of padding for the modal option displaying available plants