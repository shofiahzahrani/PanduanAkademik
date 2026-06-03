import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainTabs");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logoIcon}>🎓</Text>
      </View>
      <Text variant="headlineMedium" style={styles.title}>
        PanduanAkademik
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Sistem Informasi Akademik Mahasiswa
      </Text>
      <ActivityIndicator
        animating={true}
        color="white"
        size="small"
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1565C0",
  },
  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  logoIcon: { fontSize: 35 },
  title: { color: "white", fontWeight: "bold" },
  subtitle: { color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 5 },
});
