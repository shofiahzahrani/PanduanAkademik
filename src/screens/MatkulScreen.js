import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

// Data Mata Kuliah Lengkap dengan inisial nama matkul (bukan kode)
const DATA_MATKUL = [
  {
    id: "1",
    code: "IF601",
    initials: "ML",
    name: "Machine Learning",
    sks: 3,
    dosen: "Anggi Hanafiah, S.Kom., M.Kom",
    dayTime: "Senin & Rabu",
    grade: "A",
    color: "#1565C0",
  },
  {
    id: "2",
    code: "IF602",
    initials: "AM",
    name: "Pengembangan Aplikasi Mobile",
    sks: 4,
    dosen: "Panji Rachmat Setiawan, S.Kom., Mmsi",
    dayTime: "Selasa & Kamis",
    grade: "A",
    color: "#2E7D32",
  },
  {
    id: "3",
    code: "IF603",
    initials: "BD",
    name: "Basis Data",
    sks: 3,
    dosen: "Hendra Gunawan, St., M.Engs",
    dayTime: "Rabu",
    grade: "B+",
    color: "#E65100",
  },
  {
    id: "4",
    code: "IF604",
    initials: "JK",
    name: "Jaringan Komputer",
    sks: 3,
    dosen: "Dr. Apri Siswanto, S.Kom., M.Kom",
    dayTime: "Senin",
    grade: "A-",
    color: "#6A1B9A",
  },
  {
    id: "5",
    code: "IF605",
    initials: "CC",
    name: "Cloud Computing",
    sks: 3,
    dosen: "Rizdqi Akbar Ramadhan, S.Kom., M.Kom",
    dayTime: "Jumat",
    grade: "A",
    color: "#00838F",
  },
  {
    id: "6",
    code: "IF606",
    initials: "KB",
    name: "Kecerdasan Buatan",
    sks: 4,
    dosen: "Anggi Hanafiah, S.Kom., M.Kom",
    dayTime: "Selasa & Kamis",
    grade: "B+",
    color: "#C2185B",
  },
];

export default function MatkulScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* CARD DATA DITERIMA DARI */}
      <Card style={styles.receivedDataCard} mode="flat">
        <Card.Content style={{ paddingVertical: 10, paddingHorizontal: 12 }}>
          <Text style={styles.receivedLabel}>DATA DITERIMA DARI</Text>
          <Text style={styles.receivedScreenName}>Beranda (Home Screen)</Text>
          <Text style={styles.receivedDetailText}>
            Mahasiswa: 233510588 · Shofiah Zahrani · Semester Genap 2024/2025
          </Text>
        </Card.Content>
      </Card>

      <Text style={styles.subTitleText}>6 mata kuliah · 22 SKS total</Text>

      {/* List Item Mata Kuliah */}
      <FlatList
        data={DATA_MATKUL}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.customCardRow}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("DetailMatkul", {
                matkul: item,
                mhsNama: "Shofiah Zahrani",
                mhsNIM: "233510588",
              })
            }
          >
            {/* 1. Kiri: Avatar Lingkaran memakai inisial nama mata kuliah */}
            <Avatar.Text
              size={44}
              label={item.initials} // <-- SEKARANG MENGGUNAKAN INITIALS (ML, AM, BD, dll.)
              style={{ backgroundColor: "#E3F2FD" }}
              color={item.color}
              labelStyle={{ fontSize: 13, fontWeight: "bold" }} // Ukuran teks sedikit dinaikkan agar pas
            />

            {/* 2. Tengah: Informasi Text */}
            <View style={styles.textContainer}>
              <Text style={styles.matkulName}>{item.name}</Text>
              <Text style={[styles.matkulDosen, { color: item.color }]}>
                {item.dosen}
              </Text>
              <Text style={styles.matkulJadwal}>{item.dayTime}</Text>
            </View>

            {/* 3. Kanan: SKS dan Grade */}
            <View style={styles.metaContainer}>
              <View style={styles.sksBadge}>
                <Text style={styles.sksText}>{item.sks} SKS</Text>
              </View>
              <Text style={styles.gradeText}>{item.grade}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14, backgroundColor: "#f5f5f5" },

  receivedDataCard: {
    backgroundColor: "#F5F4EA",
    borderColor: "#D7D6C5",
    borderWidth: 0.8,
    borderRadius: 10,
    marginBottom: 8,
  },
  receivedLabel: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#5D5C4F",
    letterSpacing: 0.5,
  },
  receivedScreenName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1C1B12",
    marginTop: 2,
    marginBottom: 4,
  },
  receivedDetailText: { fontSize: 11, color: "#4A493E", lineHeight: 15 },

  subTitleText: {
    fontSize: 12,
    color: "gray",
    marginVertical: 8,
    marginLeft: 2,
  },

  customCardRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginVertical: 5,
    borderColor: "#e5e5e5",
    borderWidth: 0.6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 6,
  },
  matkulName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1c1b1f",
    marginBottom: 3,
  },
  matkulDosen: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 2,
    lineHeight: 14,
  },
  matkulJadwal: { fontSize: 11, color: "gray" },

  metaContainer: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "space-between",
    minWidth: 55,
    paddingVertical: 2,
  },
  sksBadge: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  sksText: { fontSize: 10, fontWeight: "bold", color: "#1565C0" },
  gradeText: { fontSize: 11, fontWeight: "600", color: "gray" },
});
