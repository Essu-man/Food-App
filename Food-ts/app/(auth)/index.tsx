import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

interface CarouselItem {
  title: string;
  description: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const carouselItems: CarouselItem[] = [
    { title: "Welcome to FoodApp", description: "Explore delicious meals!" },
    { title: "Fast Delivery", description: "Get your food in minutes." },
    { title: "Easy Ordering", description: "Order with a few taps." },
  ];

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <Carousel
        width={width}
        height={300}
        data={carouselItems}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        renderItem={({ item }: { item: CarouselItem }) => (
          <View className="flex-1 justify-center items-center bg-white mx-4 rounded-lg shadow-lg">
            <Text className="text-2xl font-bold text-gray-800">{item.title}</Text>
            <Text className="text-lg text-gray-600 mt-2">{item.description}</Text>
          </View>
        )}
      />
      <View className="flex-row mt-4">
        {carouselItems.map((_, index: number) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
      <View className="mt-8">
        <Text
          className="text-blue-500 text-lg"
          onPress={() => router.push("/Sign-in")}
        >
          Login
        </Text>
        <Text
          className="text-blue-500 text-lg mt-4"
          onPress={() => router.push("/Sign-up")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}