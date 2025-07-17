import type { Note } from "./types"

// Array ordenado com notas enarmônicas unificadas
export const fluteNotes: Note[] = [
  // --- Oitava 4 ---
  {
    id: "C4",
    name: "Dó 4",
    display: "C4",
    octave: 4,
    staffPosition: -2,
    accidental: "natural",
  },
  {
    id: "C#4/Db4",
    name: "Dó♯4 / Ré♭4",
    display: "C♯4 / D♭4",
    octave: 4,
    staffPosition: -2, // Posição do Dó
    accidental: "enharmonic",
  },
  {
    id: "D4",
    name: "Ré 4",
    display: "D4",
    octave: 4,
    staffPosition: -1,
    accidental: "natural",
  },
  {
    id: "D#4/Eb4",
    name: "Ré♯4 / Mi♭4",
    display: "D♯4 / E♭4",
    octave: 4,
    staffPosition: -1, // Posição do Ré
    accidental: "enharmonic",
  },
  {
    id: "E4",
    name: "Mi 4",
    display: "E4",
    octave: 4,
    staffPosition: 0,
    accidental: "natural",
  },
  {
    id: "F4",
    name: "Fá 4",
    display: "F4",
    octave: 4,
    staffPosition: 1,
    accidental: "natural",
  },
  {
    id: "F#4/Gb4",
    name: "Fá♯4 / Sol♭4",
    display: "F♯4 / G♭4",
    octave: 4,
    staffPosition: 1, // Posição do Fá
    accidental: "enharmonic",
  },
  {
    id: "G4",
    name: "Sol 4",
    display: "G4",
    octave: 4,
    staffPosition: 2,
    accidental: "natural",
  },
  {
    id: "G#4/Ab4",
    name: "Sol♯4 / Lá♭4",
    display: "G♯4 / A♭4",
    octave: 4,
    staffPosition: 2, // Posição do Sol
    accidental: "enharmonic",
  },
  {
    id: "A4",
    name: "Lá 4",
    display: "A4",
    octave: 4,
    staffPosition: 3,
    accidental: "natural",
  },
  {
    id: "A#4/Bb4",
    name: "Lá♯4 / Si♭4",
    display: "A♯4 / B♭4",
    octave: 4,
    staffPosition: 3, // Posição do Lá
    accidental: "enharmonic",
  },
  {
    id: "B4",
    name: "Si 4",
    display: "B4",
    octave: 4,
    staffPosition: 4,
    accidental: "natural",
  },

  // --- Oitava 5 ---
  {
    id: "C5",
    name: "Dó 5",
    display: "C5",
    octave: 5,
    staffPosition: 5,
    accidental: "natural",
  },
  {
    id: "C#5/Db5",
    name: "Dó♯5 / Ré♭5",
    display: "C♯5 / D♭5",
    octave: 5,
    staffPosition: 5, // Posição do Dó
    accidental: "enharmonic",
  },
  {
    id: "D5",
    name: "Ré 5",
    display: "D5",
    octave: 5,
    staffPosition: 6,
    accidental: "natural",
  },
  {
    id: "D#5/Eb5",
    name: "Ré♯5 / Mi♭5",
    display: "D♯5 / E♭5",
    octave: 5,
    staffPosition: 6, // Posição do Ré
    accidental: "enharmonic",
  },
  {
    id: "E5",
    name: "Mi 5",
    display: "E5",
    octave: 5,
    staffPosition: 7,
    accidental: "natural",
  },
  {
    id: "F5",
    name: "Fá 5",
    display: "F5",
    octave: 5,
    staffPosition: 8,
    accidental: "natural",
  },
  {
    id: "F#5/Gb5",
    name: "Fá♯5 / Sol♭5",
    display: "F♯5 / G♭5",
    octave: 5,
    staffPosition: 8, // Posição do Fá
    accidental: "enharmonic",
  },
  {
    id: "G5",
    name: "Sol 5",
    display: "G5",
    octave: 5,
    staffPosition: 9,
    accidental: "natural",
  },
  {
    id: "G#5/Ab5",
    name: "Sol♯5 / Lá♭5",
    display: "G♯5 / A♭5",
    octave: 5,
    staffPosition: 9, // Posição do Sol
    accidental: "enharmonic",
  },
  {
    id: "A5",
    name: "Lá 5",
    display: "A5",
    octave: 5,
    staffPosition: 10,
    accidental: "natural",
  },
  {
    id: "A#5/Bb5",
    name: "Lá♯5 / Si♭5",
    display: "A♯5 / B♭5",
    octave: 5,
    staffPosition: 10, // Posição do Lá
    accidental: "enharmonic",
  },
  {
    id: "B5",
    name: "Si 5",
    display: "B5",
    octave: 5,
    staffPosition: 11,
    accidental: "natural",
  },

  // --- Oitava 6 ---
  {
    id: "C6",
    name: "Dó 6",
    display: "C6",
    octave: 6,
    staffPosition: 12,
    accidental: "natural",
  },
  {
    id: "C#6/Db6",
    name: "Dó♯6 / Ré♭6",
    display: "C♯6 / D♭6",
    octave: 6,
    staffPosition: 12, // Posição do Dó
    accidental: "enharmonic",
  },
  {
    id: "D6",
    name: "Ré 6",
    display: "D6",
    octave: 6,
    staffPosition: 13,
    accidental: "natural",
  },
  {
    id: "D#6/Eb6",
    name: "Ré♯6 / Mi♭6",
    display: "D♯6 / E♭6",
    octave: 6,
    staffPosition: 13, // Posição do Ré
    accidental: "enharmonic",
  },
  {
    id: "E6",
    name: "Mi 6",
    display: "E6",
    octave: 6,
    staffPosition: 14,
    accidental: "natural",
  },
  {
    id: "F6",
    name: "Fá 6",
    display: "F6",
    octave: 6,
    staffPosition: 15,
    accidental: "natural",
  },
  {
    id: "F#6/Gb6",
    name: "Fá♯6 / Sol♭6",
    display: "F♯6 / G♭6",
    octave: 6,
    staffPosition: 15, // Posição do Fá
    accidental: "enharmonic",
  },
  {
    id: "G6",
    name: "Sol 6",
    display: "G6",
    octave: 6,
    staffPosition: 16,
    accidental: "natural",
  },
  {
    id: "G#6/Ab6",
    name: "Sol♯6 / Lá♭6",
    display: "G♯6 / A♭6",
    octave: 6,
    staffPosition: 16, // Posição do Sol
    accidental: "enharmonic",
  },
  {
    id: "A6",
    name: "Lá 6",
    display: "A6",
    octave: 6,
    staffPosition: 17,
    accidental: "natural",
  },
  {
    id: "A#6/Bb6",
    name: "Lá♯6 / Si♭6",
    display: "A♯6 / B♭6",
    octave: 6,
    staffPosition: 17, // Posição do Lá
    accidental: "enharmonic",
  },
  {
    id: "B6",
    name: "Si 6",
    display: "B6",
    octave: 6,
    staffPosition: 18,
    accidental: "natural",
  },

  // --- Oitava 7 ---
  {
    id: "C7",
    name: "Dó 7",
    display: "C7",
    octave: 7,
    staffPosition: 19,
    accidental: "natural",
  },
]
