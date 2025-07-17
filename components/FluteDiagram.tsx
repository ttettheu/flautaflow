"use client"

interface FingeringPattern {
  [key: string]: boolean
}

interface FluteDiagramProps {
  fingering?: FingeringPattern
}

function FluteDiagram({ fingering = {} }: FluteDiagramProps) {
  const getKeyClass = (keyName: string): string => {
    return fingering?.[keyName] ? "key pressed" : "key"
  }

  return (
    <div className="flute-container">
      <svg width="100%" viewBox="0 0 900 180" aria-label="Diagrama da flauta na horizontal" className="flute-svg">
        <image href="/images/flute-base.png" x="0" y="0" width="900" height="215" />

        {/* --- CHAVES PRINCIPAIS (Coordenadas ajustadas para a imagem) --- */}

        {/* Polegar Esquerdo */}
        <rect id="thumb-b-flat" x="267" y="142" width="18" height="18" rx="8" className={getKeyClass("thumbBFlat")} />
        <rect id="thumb-b" x="289" y="142" width="35" height="18" rx="8" className={getKeyClass("thumbB")} />

        {/* Mão Esquerda */}
        <circle id="key-1" cx="279" cy="84" r="12" className={getKeyClass("key1")} />
        <circle id="key-2" cx="349" cy="84" r="15" className={getKeyClass("key2")} />
        <circle id="key-3" cx="385" cy="75" r="15" className={getKeyClass("key3")} />

        {/* Alavanca G# (Mindinho) */}
        <ellipse id="pinky-g-sharp" cx="392" cy="54" rx="15" ry="4" className={getKeyClass("pinkyGSharp")} />

        {/* Mão Direita */}
        <circle id="key-4" cx="504" cy="84" r="15" className={getKeyClass("key4")} />
        <circle id="key-5" cx="549" cy="84" r="15" className={getKeyClass("key5")} />
        <circle id="key-6" cx="597" cy="84" r="15" className={getKeyClass("key6")} />

        {/* Chaves de Trilo */}
        <circle id="trill-d" cx="529" cy="93" r="6" className={getKeyClass("trillD")} />
        <circle id="trill-d-sharp" cx="572" cy="93" r="6" className={getKeyClass("trillDSharp")} />

        {/* Chaves do Mindinho Direito (Pé em Dó) */}
        <rect id="pinky-e-flat" x="619" y="90" width="15" height="28" rx="5" className={getKeyClass("pinkyEFlat")} />
        <rect id="pinky-c-sharp" x="639" y="105" width="21" height="12" rx="5" className={getKeyClass("pinkyCSharp")} />
        <rect id="pinky-c" x="639" y="93" width="21" height="9" rx="5" className={getKeyClass("pinkyC")} />
      </svg>

      <style jsx>{`
        .flute-container {
          width: 100%;
          display: flex;
          justify-content: center;
          overflow-x: auto;
        }

        .flute-svg {
          max-width: 100%;
          height: auto;
        }

        /* As chaves SVG são transparentes por padrão */
        .key {
          fill: rgba(255, 255, 255, 0);
          stroke: rgba(59, 130, 246, 0);
          stroke-width: 2;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
        }

        /* Quando uma chave é pressionada */
        .key.pressed {
          fill: rgba(239, 68, 68, 0.7);
          stroke: rgba(239, 68, 68, 1);
          stroke-width: 2;
        }

        /* Efeito de hover */
        .key:hover {
          fill: rgba(59, 130, 246, 0.3);
          stroke: rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </div>
  )
}

export default FluteDiagram
