import { Dimensions, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

import MatchCard from "./MatchCard";

const HEIGHT_SCROLL = Dimensions.get("screen").height * 0.9 - 20 - 50 - 65;
const cardHeight = HEIGHT_SCROLL * 0.92;

const MatchCarousel = ({ data, handleLockPress, stack }) => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Pressable
        style={{ flex: 1 }}
        delayLongPress={500}
        onLongPress={() => handleLockPress(stack)}
      >
        <Carousel
          loop
          vertical={true}
          height={cardHeight}
          data={data}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.92,
            parallaxScrollingOffset: 40,
            parallaxAdjacentItemScale: 0.9,
          }}
          scrollAnimationDuration={300}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <MatchCard
              img={item.img}
              firstName={item.firstName}
              age={item.age}
            />
          )}
          panGestureHandlerProps={{
            activeOffsetY: [-20, 20],
          }}
        />
      </Pressable>
    </GestureHandlerRootView>
  );
};

export default MatchCarousel;
