// /components/TransverseFluteChart.tsx
import type { Note } from "@/lib/types"
import FluteDiagram from "./FluteDiagram"
import { fingeringPatterns } from "@/lib/fingeringPatterns"

export function TransverseFluteChart({ currentNote }: { currentNote: Note }) {
  // Busca o padrão de digitação para a nota atual
  const fingering = fingeringPatterns[currentNote.id] || {}

  return (
    <div className="w-full">
      {/* Diagrama interativo da flauta */}
        <FluteDiagram fingering={fingering} />
    </div>
  )
}
