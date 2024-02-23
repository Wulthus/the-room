import styled from "styled-components";
import Wall from "./components/Wall";
import Screen from "./components/Screen";
import Menu from "./components/Menu";
import BrightnessOption from "./components/options/BrightnessOption";
import SlideshowOption from "./components/options/SlideshowOption";
import SignatureOption from "./components/options/SignatureOption";
import CameraOption from "./components/options/CameraOption";
import RoundModal from "./components/RoundModal";
import Room from "./components/Room";
import Painting from "./components/Painting";
import Plant from "./components/Plant";
import Rug from "./components/Rug";
import HelpOption from "./components/options/HelpOption";
import RotateMessage from "./components/RotateMessage";

import { TraningBoardIcon, LightBulbIcon, QuestionMark, CameraIcon, RollingPinIcon } from "./components/Icons";
import { WallpaperProvider } from "./context/wallpaperContext";
import { FloorProvider } from "./context/floorContext";
import { RoundModalContextProvider } from "./context/roundModalContext";
import { CameraProvider } from "./context/cameraContext";
import { MENU_ICON_WIDTH_PIXELS } from "./config";
import { PaintingProvider } from "./context/paintingContext";
import { PlantProvider } from "./context/plantContext";
import { RugProvider } from "./context/rugContext";
import { SlideTimerProvider } from "./context/slideTimerContext";

const View = styled.div`
  width: 100dvw;
  height: 100dvh;

  overflow: hidden;

  background-color: #000;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  transition: filter .2s;
  
  @media (max-width: 970px) {
    --font-xl: 3rem;
    --font-l: 1.8rem;
    --font-s: .8rem;
  }

  @media (max-width: 740px) {
    --font-xl: 2.4rem;
    --font-m: .9rem;
  }

  @media (max-height: 400px) {
    --font-l: 1.5rem;
    --font-s: .7rem;
  }

  @media (orientation: portrait) {
    filter: blur(10px);
    pointer-events: none;
  }
`

function App() {
  
  return (
    <>
      <RotateMessage />
      <View data-type="View">
        <RoundModalContextProvider>
          <SlideTimerProvider>
            <WallpaperProvider>
              <FloorProvider>
                <CameraProvider>
                  <PaintingProvider>
                    <PlantProvider>
                      <RugProvider>  
  {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                        <RoundModal />
                        <Menu type="top" right="0%" widthPx="280" heightPx="125">
                          <SlideshowOption />
                          <TraningBoardIcon />
                        </Menu>
                        <Menu type="top" right={`${MENU_ICON_WIDTH_PIXELS}px`} widthPx="280" heightPx="125">
                          <BrightnessOption />
                          <LightBulbIcon />
                        </Menu>
                        <Menu type="top" right={`${MENU_ICON_WIDTH_PIXELS * 2}px`} widthPx="280" heightPx="160">
                          <CameraOption />
                          <CameraIcon />
                        </Menu>
                        <Menu type="bottom"  right="0%" widthPx="280" heightPx="125">
                          <SignatureOption />
                          <RollingPinIcon />
                        </Menu>
                        <Menu type="bottom"  right={`${MENU_ICON_WIDTH_PIXELS}px`} widthPx="280" heightPx="230">
                          <HelpOption />
                          <QuestionMark />
                        </Menu>
                        <Room data-type="Room">
                          <Plant />
                          <Screen />
                          <Wall type="center" />
                          <Wall type="top" />
                          <Wall type="bottom">
                            <Rug />
                          </Wall>
                          <Wall type="left">
                            <Painting />
                          </Wall>
                          <Wall type="right" />
                        </Room>
  {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                      </RugProvider>
                    </PlantProvider>
                  </PaintingProvider>
                </CameraProvider>
              </FloorProvider>
            </WallpaperProvider>
          </SlideTimerProvider>
        </RoundModalContextProvider>
      </View>
    </>
  )
}

export default App
