export interface Note {
  id: string
  name: string
  display: string
  octave: number
  staffPosition: number // Posição na pauta para desenho
  accidental: "natural" | "sharp" | "flat" | "enharmonic"
  imageUrl: string // Caminho para a imagem da digitação
}
