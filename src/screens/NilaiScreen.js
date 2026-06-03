import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

export default function NilaiScreen() {
  // Data Transkrip Nilai lengkap 6 mata kuliah sesuai gambar mock-up
  const dataNilai = [
    {
      id: "1",
      code: "IF601",
      name: "Machine Learning",
      sks: 3,
      grade: "A",
      percent: "88%",
      cls: styles.gradeA,
    },
    {
      id: "2",
      code: "IF602",
      name: "Pengembangan Aplikasi Mobile",
      sks: 4,
      grade: "A",
      percent: "91%",
      cls: styles.gradeA,
    },
    {
      id: "3",
      code: "IF603",
      name: "Basis Data",
      sks: 3,
      grade: "B+",
      percent: "79%",
      cls: styles.gradeB,
    },
    {
      id: "4",
      code: "IF604",
      name: "Keamanan Jaringan",
      sks: 3,
      grade: "A-",
      percent: "85%",
      cls: styles.gradeA,
    },
    {
      id: "5",
      code: "IF605",
      name: "Cloud Computing",
      sks: 3,
      grade: "A",
      percent: "93%",
      cls: styles.gradeA,
    },
    {
      id: "6",
      code: "IF606",
      name: "Kecerdasan Buatan",
      sks: 4,
      grade: "B+",
      percent: "80%",
      cls: styles.gradeB,
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Header Info Mahasiswa */}
      <Card style={styles.infoCard} mode="outlined">
        <Card.Content>
          <Text style={styles.infoLabel}>TRANSKRIP NILAI</Text>
          <Text style={styles.infoText}>Shofiah Zahrani · NPM 233510588</Text>
        </Card.Content>
      </Card>

      {/* Box IPK Besar */}
      <Card style={styles.ipkCard}>
        <Card.Content style={styles.center}>
          <Text style={styles.ipkNumber}>3.82</Text>
          <Text style={styles.ipkLabel}>Indeks Prestasi Kumulatif</Text>
        </Card.Content>
      </Card>

      {/* List Transkrip Nilai */}
      {dataNilai.map((item) => (
        <Card key={item.id} style={styles.nilaiCard}>
          <Card.Content style={styles.nilaiRow}>
            {/* Badge Huruf Mutu */}
            <Avatar.Text
              size={40}
              label={item.grade}
              style={[styles.avatarBase, item.cls]}
              color={item.cls === styles.gradeA ? "#1B5E20" : "#E65100"}
              labelStyle={styles.avatarLabel}
            />

            {/* Detail Mata Kuliah */}
            <View style={styles.metaContainer}>
              <Text style={styles.matkulName}>{item.name}</Text>
              <Text style={styles.matkulSub}>
                {item.sks} SKS • {item.code}
              </Text>
            </View>

            {/* Angka Persentase */}
            <Text style={styles.percentText}>{item.percent}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14, backgroundColor: "#f5f5f5" },

  // Style Info Mahasiswa Atas
  infoCard: {
    backgroundColor: "white",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 0.5,
  },
  infoText: { fontSize: 13, fontWeight: "600", color: "#1c1b1f", marginTop: 2 },

  // Style Box IPK
  ipkCard: {
    backgroundColor: "white",
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },
  center: { alignItems: "center", justifyContent: "center" },
  ipkNumber: { fontSize: 32, fontWeight: "bold", color: "#1565C0" },
  ipkLabel: { fontSize: 11, color: "gray", marginTop: 2 },

  // Style Baris Nilai
  nilaiCard: {
    backgroundColor: "white",
    marginVertical: 4,
    borderRadius: 10,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
  },
  nilaiRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  avatarBase: { borderRadius: 8 },
  avatarLabel: { fontSize: 14, fontWeight: "bold" },

  // Warna Badge Dinamis (Sesuai Gambar)
  gradeA: { backgroundColor: "#E8F5E9" }, // Hijau lembut
  gradeB: { backgroundColor: "#FFF8E1" }, // Kuning/Oranye lembut

  metaContainer: { flex: 1, marginLeft: 15 },
  matkulName: { fontSize: 13, fontWeight: "bold", color: "#1c1b1f" },
  matkulSub: { fontSize: 11, color: "gray", marginTop: 2 },
  percentText: { fontSize: 12, color: "gray", fontWeight: "500" },
});
