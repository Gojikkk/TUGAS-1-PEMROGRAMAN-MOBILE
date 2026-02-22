import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList, Alert} from 'react-native';

const DATA = [
  {
    title: 'HOBI',
    data: ['Coding', 'Listening Music', 'Gaming'],
  },
];
export default function App() {
  return (
    <View style={styles.container}>

    <Image source={require('./goji.jpeg')} style={styles.Image}/>
      <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Usamah Ghozi Robbani</Text>
      <Text>ghozirobbani74@gmail.com</Text>

    <View style={styles.deskripsi}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20, textAlign: 'center'}}>DATA DIRI</Text>
      <Text style={styles.Ket}>NIM</Text>
      <Text style={styles.isi}>2410501048</Text>
      <Text style={styles.Ket}>PRODI</Text>
      <Text style={styles.isi}>D3 Sistem Informasi</Text>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.listhobi}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.Ket}>{title}</Text>
        )}
      />
    </View>

        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 } } onPress={() => Alert.alert("Kata Kata Hari Ini", "Semangat Terus Ya !!!")}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Tekan Aku!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaeaa5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ket: {
    color: 'gray',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
  } ,
  isi: {
    color: 'black',
    marginBottom: 15,
    borderBottomColor: 'light gray',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  hobi: {
    alignItems: 'left',
  },
  deskripsi: {
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'left',
    borderRadius: 20,
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#2e2e2e',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  listhobi: {
    marginBottom: 5,
  },
  Image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: 'blue',
    borderWidth: 4,
  },
});
