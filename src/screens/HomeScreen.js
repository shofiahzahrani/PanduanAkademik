import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ route, navigation }) {
  const kelasTerpilih = route.params?.kelasTerpilih;
  const mhsNama = route.params?.mhsNama;
  const mhsNIM = route.params?.mhsNIM;

  // Menambahkan properti initials (bukan kode kaku angka lagi)
  const matkulAktif = [
    {
      id: "1",
      code: "IF601",
      initials: "ML", // Machine Learning
      name: "Machine Learning",
      sks: 3,
      dosen: "Anggi Hanafiah, S.Kom., M.Kom",
      grade: "A",
      color: "#1565C0",
    },
    {
      id: "2",
      code: "IF602",
      initials: "AM", // Aplikasi Mobile
      name: "Pengembangan Aplikasi Mobile",
      sks: 4,
      dosen: "Panji Rachmat Setiawan, S.Kom., Mmsi",
      grade: "A",
      color: "#2E7D32",
    },
    {
      id: "3",
      code: "IF603",
      initials: "BD", // Basis Data
      name: "Basis Data",
      sks: 3,
      dosen: "Hendra Gunawan, St., M.Engs",
      grade: "B+",
      color: "#E65100",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {kelasTerpilih && (
        <Card style={styles.alertCard}>
          <Card.Content>
            <Text style={styles.alertTitle}>
              🎉 Data Berhasil Dikirim Balik ke PanduanAkademik!
            </Text>
            <Text style={styles.alertText}>
              Mahasiswa: {mhsNama} ({mhsNIM})
            </Text>
            <Text style={styles.alertText}>
              Mendaftar Kelas: {kelasTerpilih}
            </Text>
          </Card.Content>
        </Card>
      )}

      <Card style={styles.welcomeCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.whiteTextBold}>
            Selamat Datang, Shofiah! 👋
          </Text>
          <Text style={styles.whiteTextSub}>
            Semester Genap 2024/2025 — Aktif
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⭐ IPK 3.82</Text>
          </View>
        </Card.Content>
      </Card>

      <Text variant="titleMedium" style={styles.sectionTitle}>
        Menu Cepat
      </Text>

      {/* Grid Menu Cepat 3 Kolom */}
      <View style={styles.gridThreeColumns}>
        {/* Tombol Mata Kuliah */}
        <TouchableOpacity
          style={styles.qItemThree}
          onPress={() => navigation.navigate("Mata Kuliah")}
        >
          <View style={[styles.qIcon, { backgroundColor: "#E3F2FD" }]}>
            <MaterialCommunityIcons
              name="bookshelf"
              size={20}
              color="#1565C0"
            />
          </View>
          <Text style={styles.qLabel} numberOfLines={1}>
            Mata Kuliah
          </Text>
        </TouchableOpacity>

        {/* Tombol Nilai */}
        <TouchableOpacity
          style={styles.qItemThree}
          onPress={() => navigation.navigate("Nilai")}
        >
          <View style={[styles.qIcon, { backgroundColor: "#F3E5F5" }]}>
            <MaterialCommunityIcons
              name="chart-bar"
              size={20}
              color="#6A1B9A"
            />
          </View>
          <Text style={styles.qLabel} numberOfLines={1}>
            Nilai
          </Text>
        </TouchableOpacity>

        {/* Tombol Profil */}
        <TouchableOpacity
          style={styles.qItemThree}
          onPress={() => navigation.navigate("Profil")}
        >
          <View style={[styles.qIcon, { backgroundColor: "#E8F5E9" }]}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={20}
              color="#2E7D32"
            />
          </View>
          <Text style={styles.qLabel} numberOfLines={1}>
            Profil
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeaderRow}>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Mata Kuliah Aktif
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Mata Kuliah")}>
          <Text style={styles.seeAllLink}>Lihat Semua ›</Text>
        </TouchableOpacity>
      </View>

      {matkulAktif.map((item) => (
        <Card
          key={item.id}
          style={styles.courseCard}
          onPress={() =>
            navigation.navigate("DetailMatkul", {
              matkul: item,
              mhsNama: "Shofiah Zahrani",
              mhsNIM: "233510588",
            })
          }
        >
          <Card.Content style={styles.courseRow}>
            {/* AMAN: Mengganti label angka slice dengan inisial nama matkul */}
            <Avatar.Text
              size={36}
              label={item.initials} // <-- SEKARANG MEMAKAI INISIAL (ML, AM, BD)
              style={{ backgroundColor: "#E3F2FD" }}
              color={item.color}
              labelStyle={{ fontSize: 12, fontWeight: "bold" }}
            />
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.courseDosen} numberOfLines={1}>
                {item.dosen}
              </Text>
            </View>
            <View style={styles.courseMeta}>
              <Text style={styles.sksText}>{item.sks} SKS</Text>
              <Text style={styles.gradeText}>{item.grade}</Text>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14, backgroundColor: "#f5f5f5" },
  welcomeCard: {
    backgroundColor: "#1565C0",
    borderRadius: 12,
    marginBottom: 15,
  },
  whiteTextBold: { color: "white", fontWeight: "bold", fontSize: 16 },
  whiteTextSub: { color: "rgba(255,255,255,0.7)", fontSize: 11, marginTop: 2 },
  badge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1c1b1f",
    marginVertical: 10,
  },

  gridThreeColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  qItemThree: {
    width: "31.5%",
    backgroundColor: "white",
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
  qIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  qLabel: {
    fontSize: 11,
    fontWeight: "500",
    color: "#1c1b1f",
    textAlign: "center",
  },

  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  seeAllLink: { fontSize: 12, color: "#1565C0", fontWeight: "500" },
  courseCard: {
    backgroundColor: "white",
    marginVertical: 4,
    borderRadius: 10,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
  },
  courseRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10, // Sedikit dilonggarkan agar lebih rapi
    paddingHorizontal: 10,
  },
  courseInfo: { flex: 1, marginLeft: 12, paddingRight: 5 },
  courseName: { fontSize: 13, fontWeight: "bold", color: "#1c1b1f" },
  courseDosen: { fontSize: 11, color: "gray", marginTop: 2 },
  courseMeta: { alignItems: "flex-end" },
  sksText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1565C0",
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },
  gradeText: { fontSize: 11, color: "gray", marginTop: 4 },
  alertCard: {
    backgroundColor: "#E8F5E9",
    borderColor: "#A5D6A7",
    borderWidth: 0.5,
    marginBottom: 12,
    borderRadius: 10,
  },
  alertTitle: {
    color: "#2E7D32",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 2,
  },
  alertText: { color: "#2E7D32", fontSize: 11 },
});
