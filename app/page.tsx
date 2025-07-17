// /app/page.tsx
"use client"

import { useState, useMemo, type ReactNode } from "react"
import { fluteNotes } from "@/lib/noteData"
import { TransverseFluteChart } from "@/components/TransverseFluteChart"
import { MusicalStaff } from "@/components/MusicalStaff"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Note } from "@/lib/noteData";

// --- Lógica de Hook ---
const useNoteNavigation = (initialIndex: number) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : fluteNotes.length - 1))
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < fluteNotes.length - 1 ? prevIndex + 1 : 0))
  }
  const currentNote: Note = useMemo(() => fluteNotes[currentIndex], [currentIndex])
  return { currentNote, handlePrevious, handleNext }
}

// --- Componente Auxiliar: InfoCard ---
type InfoCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}
function InfoCard({ title, subtitle, children, className = "" }: InfoCardProps) {
  return (
    <div className={`bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm h-full ${className}`}>
      <div className="text-center pt-3">
        <h2 className="text-lg font-semibold text-slate-300">{title}</h2>
        {subtitle && <p className="text-slate-400 text-sm">{subtitle}</p>}
      </div>
      <div className="h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

// --- Componente Auxiliar: NoteControls ---
type NoteControlsProps = {
  currentNote: Note
  onPrevious: () => void
  onNext: () => void
  className?: string;
}
function NoteControls({ currentNote, onPrevious, onNext, className = "" }: NoteControlsProps) {
  return (
    <div className={`w-full bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm flex flex-col justify-center ${className} portrait:pb-2 portrait:pt-2`}>
      <div className="flex items-center justify-around">
        <button
          onClick={onPrevious}
          className="p-3 md:p-4 rounded-full hover:bg-slate-700 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Nota anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="text-center px-2 md:px-4">
          <h3 className="text-lg md:text-2xl font-bold mb-1">{currentNote.display}</h3>
          <p className="text-slate-400 text-xs md:text-sm">Oitava {currentNote.octave}</p>
        </div>
        <button
          onClick={onNext}
          className="p-3 md:p-4 rounded-full hover:bg-slate-700 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Próxima nota"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}


// --- Componente Principal ---
export default function HomePage() {
  const { currentNote, handlePrevious, handleNext } = useNoteNavigation(7);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Layout principal em grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Coluna da Flauta */}
          <div className="md:col-span-3">
            <InfoCard
              title={`Digitação para ${currentNote.display}`}
              className="flex flex-col justify-center min-h-[180px] md:min-h-0">
              <TransverseFluteChart currentNote={currentNote} />
            </InfoCard>
          </div>
          
          {/* Coluna da Pauta e Controles */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-row portrait:flex-col gap-4">
            
            {/* Bloco da Pauta Musical */}
            <div className="w-1/2 w-full">
              <InfoCard className="h-full flex flex-col justify-center">
                  <MusicalStaff currentNote={currentNote} />
              </InfoCard>
            </div>
            
            {/* Bloco dos Controles de Navegação */}
            <div className="w-1/2 w-full">
              <NoteControls
                className="h-full"
                currentNote={currentNote}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
