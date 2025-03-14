import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Image, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {

      router.replace("hero");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../assets/images/Logo.png")}
        style={{ width: "30%", height: "30%" }}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/images/Bg Asset.png")}
        style={{ width: "90%", height: "90%", position: "absolute", bottom: 0, right: 0 }}
        resizeMode="contain"
      />
    </View>
  );
}