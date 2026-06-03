import { Linking, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen() {
  const mhsData = {
    nama: "Shofiah Zahrani",
    npm: "233510588",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    angkatan: "2023",
    kampus: "Universitas Islam Riau",
    email: "shofiahzahrani@student.uir.ac.id",
    ipk: "3.82",
    semester: "6",
    sksLulus: "110",
  };

  const daftarMinat = [
    "Machine Learning",
    "Android Dev",
    "Data Science",
    "Cloud",
  ];

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${mhsData.email}`);
  };

  const handleMapsPress = () => {
    Linking.openURL("https://maps.google.com/?q=Universitas+Islam+Riau");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {/* 1. Header Biru dengan Avatar */}
      <View style={styles.blueHeader}>
        <Avatar.Text
          size={70}
          label="SZ"
          style={styles.avatar}
          color="#1565C0"
          labelStyle={styles.avatarLabel}
        />
        <Text style={styles.whiteTextName}>{mhsData.nama}</Text>
        <Text style={styles.whiteTextSub}>
          {mhsData.npm} · {mhsData.prodi}
        </Text>
      </View>

      <View style={styles.contentPadding}>
        {/* 2. Card Data Profil yang Dipassing */}
        <Card style={styles.passingCard} mode="outlined">
          <Card.Content>
            <Text style={styles.passingTitle}>DATA PROFIL YANG DIPASSING</Text>
            <Text style={styles.passingText}>
              Nama: <Text style={styles.passingValueText}>{mhsData.nama}</Text>{" "}
              · NPM: <Text style={styles.passingValueText}>{mhsData.npm}</Text>
            </Text>
          </Card.Content>
        </Card>

        {/* 3. Baris Statistik Nilai */}
        <View style={styles.statsRow}>
          <Card style={styles.statsCard}>
            <Card.Content style={styles.center}>
              <Text style={styles.statsNumber}>{mhsData.ipk}</Text>
              <Text style={styles.statsLabel}>IPK</Text>
            </Card.Content>
          </Card>
          <Card style={styles.statsCard}>
            <Card.Content style={styles.center}>
              <Text style={styles.statsNumber}>{mhsData.semester}</Text>
              <Text style={styles.statsLabel}>Semester</Text>
            </Card.Content>
          </Card>
          <Card style={styles.statsCard}>
            <Card.Content style={styles.center}>
              <Text style={styles.statsNumber}>{mhsData.sksLulus}</Text>
              <Text style={styles.statsLabel}>SKS Lulus</Text>
            </Card.Content>
          </Card>
        </View>

        {/* 4. Informasi Academic List */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Informasi Akademik
        </Text>
        <Card style={styles.infoCard}>
          <Card.Content style={{ paddingVertical: 5 }}>
            <View style={styles.infoRow}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons name="domain" size={18} color="gray" />
                <Text style={styles.infoLabelText}>Fakultas</Text>
              </View>
              <Text style={styles.infoValueText}>{mhsData.fakultas}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="code-tags"
                  size={18}
                  color="gray"
                />
                <Text style={styles.infoLabelText}>Prodi</Text>
              </View>
              <Text style={styles.infoValueText}>{mhsData.prodi}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="calendar-range"
                  size={18}
                  color="gray"
                />
                <Text style={styles.infoLabelText}>Angkatan</Text>
              </View>
              <Text style={styles.infoValueText}>{mhsData.angkatan}</Text>
            </View>

            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={18}
                  color="gray"
                />
                <Text style={styles.infoLabelText}>Kampus</Text>
              </View>
              <Text style={styles.infoValueText}>{mhsData.kampus}</Text>
            </View>
          </Card.Content>
        </Card>

        {/* 5. Bagian Minat Custom Badge (Solusi Pasti Rapi) */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Minat
        </Text>
        <Card style={styles.infoCard}>
          <Card.Content style={styles.chipsGroup}>
            {daftarMinat.map((minat, index) => (
              <View key={index} style={styles.customBadge}>
                <Text style={styles.customBadgeText}>{minat}</Text>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* 6. Tombol Aksi Bawah */}
        <View style={styles.buttonRow}>
          <Button
            mode="outlined"
            icon="email-outline"
            onPress={handleEmailPress}
            style={styles.actionButton}
            textColor="#1c1b1f"
          >
            Email
          </Button>
          <Button
            mode="outlined"
            icon="map-marker-radius-outline"
            onPress={handleMapsPress}
            style={styles.actionButton}
            textColor="#1c1b1f"
          >
            Maps
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  contentPadding: { padding: 14 },

  blueHeader: {
    backgroundColor: "#1565C0",
    alignItems: "center",
    paddingVertical: 25,
  },
  avatar: { backgroundColor: "white", marginBottom: 10 },
  avatarLabel: { fontSize: 24, fontWeight: "bold" },
  whiteTextName: { color: "white", fontSize: 16, fontWeight: "bold" },
  whiteTextSub: { color: "rgba(255,255,255,0.7)", fontSize: 11, marginTop: 2 },

  passingCard: {
    backgroundColor: "#fdfdfd",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 15,
  },
  passingTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  passingText: { fontSize: 13, color: "#2d2d2d" },
  passingValueText: { color: "#2d2d2d", fontWeight: "500" },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  statsCard: {
    width: "31.5%",
    backgroundColor: "white",
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  statsNumber: { fontSize: 16, fontWeight: "bold", color: "#1565C0" },
  statsLabel: { fontSize: 10, color: "gray", marginTop: 2 },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1c1b1f",
    marginVertical: 8,
    marginLeft: 2,
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f0f0",
  },
  iconLabelGroup: { flexDirection: "row", alignItems: "center" },
  infoLabelText: {
    fontSize: 12,
    color: "#1c1b1f",
    marginLeft: 10,
    fontWeight: "500",
  },
  infoValueText: { fontSize: 12, color: "#1c1b1f", fontWeight: "bold" },

  // STYLING CUSTOM BADGE YANG AMAN DAN PASTI RAPI DI IOS
  chipsGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  customBadge: {
    backgroundColor: "#E3F2FD",
    marginRight: 8,
    marginVertical: 4,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6, // Menggunakan padding manual agar tinggi kotak seimbang alami
    alignItems: "center",
    justifyContent: "center",
  },
  customBadgeText: {
    color: "#1565C0",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  actionButton: {
    width: "48.5%",
    backgroundColor: "white",
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    borderRadius: 20,
  },
});
