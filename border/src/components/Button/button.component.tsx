import React, { useEffect } from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./button.styles";
import Svg, { Path } from "react-native-svg";
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const runningBorderPath = (width: number, height: number, radius: number) => {
  const offset = 1.2;

  return `
    M ${radius + offset}, ${offset}
    L ${width - radius - offset}, ${offset}
    Q ${width - offset}, ${offset} ${width - offset}, ${radius + offset}
    L ${width - offset}, ${height - radius - offset}
    Q ${width - offset}, ${height - offset} ${width - radius - offset}, ${
    height - offset
  }
    L ${radius + offset}, ${height - offset}
    Q ${offset}, ${height - offset} ${offset}, ${height - radius - offset}
    L ${offset}, ${radius + offset}
    Q ${offset}, ${offset} ${radius + offset}, ${offset}
  `;
};

interface ButtonProps {
  width?: number;
  height?: number;
  radius?: number;
  color?: string;
  borderColor?: string;
  loading?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  width = 160,
  height = 50,
  radius = 10,
  color = "#333333",
  loading = false,
  borderColor = "#1bf555",
  onPress,
}) => {
  const runningBorderData = runningBorderPath(width, height, radius);
  const perimeter = 2 * (width + height) - 8 * radius + 2 * Math.PI * radius;

  const segmentLength = 80;
  const gapLength = perimeter - segmentLength;

  const offset = useSharedValue(0);
  const translateX = useSharedValue(0);

  useEffect(() => {
    if (loading) {
      translateX.value = withTiming(-6);
      offset.value = withRepeat(
        withTiming(perimeter, {
          duration: 1500,
          easing: Easing.linear,
        }),
        -1,
        false
      );
    } else {
      offset.value = 0;
      translateX.value = withTiming(0);
    }
  }, [loading]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: offset.value,
    };
  });

  const labelAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[
          styles.pressable,
          { backgroundColor: color, width, height, borderRadius: radius },
        ]}
      >
        <Animated.View style={[styles.labelContainer, labelAnimatedStyle]}>
          <Text style={[styles.label, { color: loading ? "#eee" : "#FFFFFF" }]}>
            {loading ? "Uploading..." : "Upload"}
          </Text>
        </Animated.View>
        {loading && (
          <Svg width={width} height={height}>
            <AnimatedPath
              d={runningBorderData}
              strokeLinecap="round"
              fill="none"
              stroke={borderColor}
              strokeWidth={2}
              strokeDasharray={`${segmentLength},${gapLength}`}
              animatedProps={animatedProps}
            />
          </Svg>
        )}
      </Pressable>
    </View>
  );
};

export default Button;
