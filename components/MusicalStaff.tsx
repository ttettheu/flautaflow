import type { Note } from "@/lib/types"
import { useState, useEffect } from "react" 

export function MusicalStaff({ currentNote }: { currentNote: Note }) {
  const { staffPosition, accidental } = currentNote

  const [viewY, setViewY] = useState(0)

  // Configurações da pauta
  const lineSpacing = 9
  const staffStartY = 40
  const viewBoxHeight = 120 

  useEffect(() => {
    const noteY = staffStartY + 40 - staffPosition * (lineSpacing / 2)
    setViewY(noteY - viewBoxHeight / 2)
  }, [currentNote, staffPosition]) 

  const dynamicViewBox = `0 ${viewY} 100 ${viewBoxHeight}`

  const ledgerLines = []
  const noteY = staffStartY + 40 - staffPosition * (lineSpacing / 2)

  // Lógica para desenhar as linhas suplementares
  // Para notas sustenidas
  if (staffPosition < 0) {
    for (let pos = -2; pos >= staffPosition; pos -= 2) {
      const y = staffStartY + 40 - pos * (lineSpacing / 2)
      ledgerLines.push(<line key={`ledger-below-${pos}`} x1="35" y1={y} x2="65" y2={y} stroke="white" strokeWidth="1.5" />)
    }
  }
  if (staffPosition > 8) {
    for (let pos = 10; pos <= staffPosition; pos += 2) {
      const y = staffStartY + 40 - pos * (lineSpacing / 2)
      ledgerLines.push(<line key={`ledger-above-${pos}`} x1="35" y1={y} x2="65" y2={y} stroke="white" strokeWidth="1.5" />)
    }
  }
  // Para a nota bemol da enarmônica (que fica um passo acima)
  if (accidental === 'enharmonic') {
      const flatStaffPosition = staffPosition + 1; // A nota bemol fica no espaço/linha seguinte
      if (flatStaffPosition > 8) {
        for (let pos = 10; pos <= flatStaffPosition; pos += 2) {
          const y = staffStartY + 40 - pos * (lineSpacing / 2)
          // Adicionamos um transform para mover a linha suplementar para a nota bemol
          ledgerLines.push(<line key={`ledger-above-flat-${pos}`} x1="75" y1={y} x2="105" y2={y} stroke="white" strokeWidth="1.5" />)
        }
      }
  }

  const NoteHead = ({ cx, cy }: { cx: number; cy: number }) => (
    <ellipse cx={cx} cy={cy} rx="4.5" ry="3.5" fill="white" />
  );

  const NoteStem = ({ noteY, staffPos, xPos }: { noteY: number, staffPos: number, xPos: number }) => (
    <>
      {/* A regra da música: a partir da linha do meio (B4, staffPos 4) para cima, a haste é para BAIXO. */}
      {staffPos >= 4 && <line x1={xPos - 4} y1={noteY} x2={xPos - 4} y2={noteY + 20} stroke="white" strokeWidth="1.2" />}
      {/* Abaixo da linha do meio, a haste é para CIMA. */}
      {staffPos < 4 && <line x1={xPos + 4} y1={noteY} x2={xPos + 4} y2={noteY - 20} stroke="white" strokeWidth="1.2" />}
    </>
  );

  return (
    <div className="w-full">
      <svg width="100%" height="120" viewBox={dynamicViewBox} className="mx-auto">
        <text x="8" y={staffStartY + 39} fontFamily="serif" fontSize="48" fill="white">𝄞</text>
        {[0, 2, 4, 6, 8].map((staffPos) => (
          <line key={`staff-line-${staffPos}`} x1="15" y1={staffStartY + 40 - staffPos * (lineSpacing / 2)} x2="115" y2={staffStartY + 40 - staffPos * (lineSpacing / 2)} stroke="white" strokeWidth="1.2" />
        ))}
        {ledgerLines}

        {/* Lógica de Desenho Principal */}
        {accidental === 'enharmonic' ? (
          <>
            {/* Desenha a nota sustenida (à esquerda) */}
            <g id="sharp-note">
              <text x="40" y={noteY + 4} fontSize="14" fill="#facc15">♯</text>
              <NoteHead cx={55} cy={noteY} />
              <NoteStem noteY={noteY} staffPos={staffPosition} xPos={55} />
            </g>
            
            {/* Desenha a nota bemol (à direita) */}
            <g id="flat-note">
              {(() => {
                const flatStaffPos = staffPosition + 1;
                const flatNoteY = noteY - (lineSpacing / 2);
                return (
                  <>
                    <text x="75" y={flatNoteY + 4} fontSize="15" fill="#facc15">♭</text>
                    <NoteHead cx={90} cy={flatNoteY} />
                    <NoteStem noteY={flatNoteY} staffPos={flatStaffPos} xPos={90} />
                  </>
                );
              })()}
            </g>
          </>
        ) : (
          <>
            {/* Lógica para nota única */}
            {accidental === 'sharp' && <text x="30" y={noteY + 4} fontSize="15" fill="#facc15">♯</text>}
            {accidental === 'flat' && <text x="30" y={noteY + 4} fontSize="15" fill="#facc15">♭</text>}
            <NoteHead cx={55} cy={noteY} />
            <NoteStem noteY={noteY} staffPos={staffPosition} xPos={55} />
          </>
        )}
      </svg>
    </div>
  )
}
