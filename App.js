import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Usamah Ghozi Robbani</Text>
      <Text>ghozirobbani74@gmail.com</Text>

    <View style={styles.deskripsi}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20, textAlign: 'center'}}>Data Diri</Text>
      <Text style={styles.Ket}>NIM</Text>
      <Text style={styles.isi}>2410501048</Text>
      <Text style={styles.Ket}>PRODI</Text>
      <Text style={styles.isi}>D3 Sistem Informasi</Text>

      <Text style={styles.Ket}>HOBI</Text>
      <View style={styles.hobi}>
      <Text style={styles.listhobi}>1. Coding</Text>
      <Text style={styles.listhobi}>2. Listening Music</Text>
      <Text style={styles.listhobi}>3. Gaming</Text>
      </View>
    </View>

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Change Color Mode</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ket: {
    fontWeight: 'bold',
  } ,
  isi: {
    color: 'gray',
    marginBottom: 15,
  },
  hobi: {
    alignItems: 'left',
  },
  deskripsi: {
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'left',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    padding: 20,
  },
  listhobi: {
    marginBottom: 5,
  },
});
