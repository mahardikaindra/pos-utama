// mahasiswa.ts
import { defineStore } from 'pinia';

interface Mahasiswa {
  npm: string;
  nama: string;
  semester: string;
}

export const useMahasiswaStore = defineStore('mahasiswa', {
  state: () => ({
    mahasiswas: [] as Mahasiswa[],
  }),
  actions: {
    addMahasiswa(mahasiswa: Mahasiswa) {
      this.mahasiswas.push(mahasiswa);
    },
    getMahasiswas() {
      return this.mahasiswas;
    },
  },
});
