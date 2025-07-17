// Padrões de digitação para cada nota
export interface FingeringPattern {
  [key: string]: boolean;
}

export const fingeringPatterns: Record<string, FingeringPattern> = {
  // --- Oitava 4 ---
  C4: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    key6: true,
    pinkyC: true,
    pinkyCSharp: true, // A alavanca de C# é pressionada junto com a de C
  },
  "C#4/Db4": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    key6: true,
    pinkyCSharp: true,
  },
  D4: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    key6: true,
  },
  "D#4/Eb4": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    key6: true,
    pinkyEFlat: true,
  },
  E4: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    pinkyEFlat: true,
  },
  F4: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    pinkyEFlat: true,
  },
  "F#4/Gb4": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key6: true,
    pinkyEFlat: true,
  },
  G4: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    pinkyEFlat: true,
  },
  "G#4/Ab4": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    pinkyGSharp: true,
    pinkyEFlat: true,
  },
  A4: {
    thumbB: true,
    key1: true,
    key2: true,
    pinkyEFlat: true,
  },
  "A#4/Bb4": {
    thumbBFlat: true,
    key1: true,
    pinkyEFlat: true,
  },
  B4: {
    thumbB: true,
    key1: true,
    pinkyEFlat: true,
  },

  // --- Oitava 5 ---
  C5: {
    key1: true,
    pinkyEFlat: true,
  },
  "C#5/Db5": {
    // Digitação vazia, todas as chaves principais abertas
    pinkyEFlat: true,
  },
  D5: {
    thumbB: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    key6: true,
  },
  "D#5/Eb5": {
    thumbB: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    key6: true,
    pinkyEFlat: true,
  },
  E5: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true,
    pinkyEFlat: true,
  },
  F5: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    pinkyEFlat: true,
  },
  "F#5/Gb5": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    key6: true,
    pinkyEFlat: true,
  },
  G5: {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    pinkyEFlat: true,
  },
  "G#5/Ab5": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    pinkyGSharp: true,
    pinkyEFlat: true,
  },
  A5: {
    thumbB: true,
    key1: true,
    key2: true,
    pinkyEFlat: true,
  },
  "A#5/Bb5": {
    thumbBFlat: true,
    key1: true,
    pinkyEFlat: true,
  },
  B5: {
    thumbB: true,
    key1: true,
    pinkyEFlat: true,
  },

  // --- Oitava 6 ---
  C6: {
    key1: true,
    pinkyEFlat: true,
  },
  "C#6/Db6": {
  // Digitação vazia, todas as chaves principais abertas
  pinkyEFlat: true,
  },
  D6: {
    thumbB: true,
    key2: true,
    key3: true,
    pinkyEFlat: true,
  },
  "D#6/Eb6": {
    thumbB: true,
    key1: true,
    key2: true,
    key3: true,
    pinkyGSharp: true,
    key4: true,
    key5: true,
    key6: true,
    pinkyEFlat: true,
  },
  E6: {
    thumbB: true,
    key1: true,
    key2: true,
    key4: true,
    key5: true,
    pinkyEFlat: true,
  },
  F6: {
    thumbB: true,
    key1: true,
    key3: true,
    key4: true,
    pinkyEFlat: true,
  },
  "F#6/Gb6": {
    thumbB: true,
    key1: true,
    key3: true,
    key6: true,
    pinkyEFlat: true,
  },
  G6: {
    key1: true,
    key2: true,
    key3: true,
    pinkyEFlat: true,
  },
  "G#6/Ab6": {
    key2: true,
    key3: true,
    pinkyGSharp: true,
    pinkyEFlat: true,
  },
  A6: {
    thumbB: true,
    key2: true,
    key4: true,
    pinkyEFlat: true,
  },
  "A#6/Bb6": {
    thumbB: true,
    key4: true,
    trillD: true,
  },
  B6: {
    thumbB: true,
    key1: true,
    key3: true,
    trillDSharp: true,
  },

  // --- Oitava 7 ---
  C7: {
    key1: true,
    key2: true,
    key3: true,
    pinkyGSharp: true,
    key4: true,
  },
};
