import { Linking, ScrollView, Share, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function DetailMatkulScreen({ route, navigation }) {
  // Menangkap data dinamis yang dipassing dari MatkulScreen / HomeScreen
  const { matkul, mhsNama, mhsNIM } = route.params;

  // Data tambahan dummy default jika data detail spesifik dari mock-up tidak terpassing penuh
  const detailMatkul = {
    room: matkul.room || "Lab AI-302",
    hari: matkul.hari || "Senin & Rabu",
    jam: matkul.jam || "08:00–09:40",
    percent: matkul.persen || 88,
    desc:
      matkul.desc || "Supervised, unsupervised, dan reinforcement learning.",
    phone: matkul.phone || "+6281234567890",
    email: matkul.email || "budi@uir.ac.id",
    grade: matkul.nilai || "A",
  };

  // --- IMPLICIT INTENTS ---
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Halo Prof/Dr/Bapak/Ibu ${matkul.dosen}, saya ${mhsNama} (${mhsNIM}) ingin bertanya mengenai mata kuliah ${matkul.name}.`,
    );
    Linking.openURL(
      `https://wa.me/${detailMatkul.phone.replace(/\D/g, "")}?text=${msg}`,
    );
  };

  const handlePhone = () => {
    Linking.openURL(`tel:${detailMatkul.phone}`);
  };

  const handleMaps = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/Universitas+Riau+Pekanbaru",
      "_blank",
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `📚 ${matkul.name} (${matkul.code}) — PanduanAkademik\nMahasiswa: ${mhsNama} · ${mhsNIM}\nDosen: ${matkul.dosen}`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Pertanyaan Akademik - ${matkul.name}`);
    const body = encodeURIComponent(
      `Yth. ${matkul.dosen},\n\nSaya ${mhsNama} (${mhsNIM}) ingin berkonsultasi mengenai...`,
    );
    Linking.openURL(
      `mailto:${detailMatkul.email}?subject=${subject}&body=${body}`,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {/* 1. Hero Header Biru */}
      <View style={styles.heroHeader}>
        <View style={styles.heroTopRow}>
          <View>
            <Text style={styles.heroCodeText}>
              {matkul.code} · {matkul.sks} SKS
            </Text>
            <Text style={styles.heroMatkulName}>{matkul.name}</Text>
            <Text style={styles.heroDosenName}>{matkul.dosen}</Text>
          </View>
          <Avatar.Text
            size={32}
            label={detailMatkul.grade}
            style={styles.gradeAvatar}
            color="#1565C0"
            labelStyle={{ fontWeight: "bold", fontSize: 14 }}
          />
        </View>

        {/* Pills Badge Hari & Jam */}
        <View style={styles.pillsRow}>
          <View style={styles.pillBadge}>
            <MaterialCommunityIcons
              name="calendar-blank"
              size={12}
              color="white"
            />
            <Text style={styles.pillText}>{detailMatkul.hari}</Text>
          </View>
          <View style={styles.pillBadge}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={12}
              color="white"
            />
            <Text style={styles.pillText}>{detailMatkul.jam}</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentPadding}>
        {/* 2. Card Data yang Dipassing Ke Screen Ini */}
        <Card style={styles.dataCard} mode="outlined">
          <Card.Content>
            <Text style={styles.cardLabel}>
              DATA YANG DIPASSING KE SCREEN INI
            </Text>
            <Text style={styles.cardMainText}>
              Mahasiswa: <Text style={styles.boldText}>{mhsNama}</Text> · NIM:{" "}
              <Text style={styles.boldText}>{mhsNIM}</Text>
            </Text>
            <Text style={styles.cardMainText}>
              Mata Kuliah: <Text style={styles.boldText}>{matkul.name}</Text> (
              {matkul.code})
            </Text>
          </Card.Content>
        </Card>

        {/* 3. Progress Nilai Bar */}
        <Card style={styles.cardWrapper}>
          <Card.Content>
            <Text style={styles.cardLabel}>Progress Nilai</Text>
            <View style={styles.progressRow}>
              <View style={styles.progressBarOuter}>
                <View
                  style={[
                    styles.progressBarInner,
                    { width: `${detailMatkul.percent}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressPercentText}>
                {detailMatkul.percent}%
              </Text>
            </View>
            <Text style={styles.progressDescText}>{detailMatkul.desc}</Text>
          </Card.Content>
        </Card>

        {/* 4. Detail Kelas Table */}
        <Card style={styles.cardWrapper}>
          <Card.Content style={{ paddingVertical: 5 }}>
            <Text style={[styles.cardLabel, { marginTop: 5, marginBottom: 5 }]}>
              Detail Kelas
            </Text>

            <View style={styles.infoRow}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="door-open"
                  size={16}
                  color="#1565C0"
                />
                <Text style={styles.infoLabelText}>Ruangan</Text>
              </View>
              <Text style={styles.infoValueText}>{detailMatkul.room}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="calendar-range"
                  size={16}
                  color="#1565C0"
                />
                <Text style={styles.infoLabelText}>Hari</Text>
              </View>
              <Text style={styles.infoValueText}>{detailMatkul.hari}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={16}
                  color="#1565C0"
                />
                <Text style={styles.infoLabelText}>Jam</Text>
              </View>
              <Text style={styles.infoValueText}>{detailMatkul.jam}</Text>
            </View>

            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <View style={styles.iconLabelGroup}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={16}
                  color="#1565C0"
                />
                <Text style={styles.infoLabelText}>Dosen</Text>
              </View>
              <Text style={styles.infoValueText}>{matkul.dosen}</Text>
            </View>
          </Card.Content>
        </Card>

        {/* 5. Implicit Intent Block */}
        <Card style={styles.cardWrapper}>
          <Card.Content>
            <Text style={styles.cardLabel}>Implicit Intent</Text>

            <View style={styles.intentButtonRow}>
              <Button
                mode="contained"
                buttonColor="#2E7D32"
                icon="whatsapp"
                style={styles.flexBtn}
                labelStyle={styles.btnLabel}
                onPress={handleWhatsApp}
              >
                WhatsApp
              </Button>
              <Button
                mode="outlined"
                icon="phone-outline"
                textColor="#1c1b1f"
                style={[styles.flexBtn, styles.borderBtn]}
                labelStyle={styles.btnLabel}
                onPress={handlePhone}
              >
                Telepon
              </Button>
            </View>

            <View style={[styles.intentButtonRow, { marginTop: 8 }]}>
              <Button
                mode="outlined"
                icon="map-marker-outline"
                textColor="#1c1b1f"
                style={[styles.flexBtn, styles.borderBtn]}
                labelStyle={styles.btnLabel}
                onPress={handleMaps}
              >
                Maps
              </Button>
              <Button
                mode="outlined"
                icon="share-variant-outline"
                textColor="#1c1b1f"
                style={[styles.flexBtn, styles.borderBtn]}
                labelStyle={styles.btnLabel}
                onPress={handleShare}
              >
                Bagikan
              </Button>
              <IconButton
                icon="email-outline"
                mode="outlined"
                size={20}
                iconColor="#1c1b1f"
                style={styles.mailIconBtn}
                onPress={handleEmail}
              />
            </View>
          </Card.Content>
        </Card>

        {/* 6. Explicit Intent - Kembali Ke Beranda & Passing Data */}
        <View style={styles.enrollActionRow}>
          <Button
            mode="contained"
            buttonColor="#1565C0"
            icon="check"
            style={styles.enrollMainBtn}
            labelStyle={{ fontSize: 13, fontWeight: "bold" }}
            onPress={() =>
              navigation.navigate("Home", {
                kelasTerpilih: matkul.name,
                mhsNama: mhsNama,
                mhsNIM: mhsNIM,
              })
            }
          >
            Daftar Mata Kuliah
          </Button>
          <IconButton
            icon="arrow-left"
            mode="outlined"
            size={20}
            iconColor="#1c1b1f"
            style={styles.backIconBtn}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  contentPadding: { padding: 14 },

  // Hero Header Layout
  heroHeader: {
    backgroundColor: "#1565C0",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  heroTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  heroCodeText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 11,
    fontWeight: "500",
  },
  heroMatkulName: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 3,
  },
  heroDosenName: { color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 2 },
  gradeAvatar: { backgroundColor: "white" },

  // Pills Badges
  pillsRow: { flexDirection: "row", marginTop: 12 },
  pillBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  pillText: { color: "white", fontSize: 11, marginLeft: 5, fontWeight: "500" },

  // Data Passing Card
  dataCard: {
    backgroundColor: "#fdfdfd",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 9,
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 0.4,
    marginBottom: 5,
  },
  cardMainText: { fontSize: 12, color: "#1c1b1f", marginTop: 1 },
  boldText: { fontWeight: "bold" },

  // Common Card Wrapper
  cardWrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    marginBottom: 10,
  },

  // Progress Bar Layout
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  progressBarOuter: {
    flex: 1,
    height: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarInner: {
    height: "100%",
    backgroundColor: "#1565C0",
    borderRadius: 3,
  },
  progressPercentText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1c1b1f",
    marginLeft: 10,
  },
  progressDescText: { fontSize: 11, color: "gray", marginTop: 2 },

  // Detail Table Rows
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 9,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f5f5f5",
  },
  iconLabelGroup: { flexDirection: "row", alignItems: "center" },
  infoLabelText: { fontSize: 12, color: "gray", marginLeft: 10 },
  infoValueText: { fontSize: 12, color: "#1c1b1f", fontWeight: "500" },

  // Intent Buttons Grid
  intentButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexBtn: { flex: 1, borderRadius: 8 },
  borderBtn: {
    backgroundColor: "#fafafa",
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
  },
  btnLabel: { fontSize: 11, marginVertical: 4 },
  mailIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    backgroundColor: "#fafafa",
    marginLeft: 6,
    marginVertical: 0,
  },

  // Enroll & Bottom Action Row
  enrollActionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  enrollMainBtn: { flex: 1, borderRadius: 8, paddingVertical: 2 },
  backIconBtn: {
    width: 42,
    height: 42,
    borderRadius: 8,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    backgroundColor: "white",
    marginLeft: 8,
    marginVertical: 0,
  },
});
