'use client'

import { motion } from 'framer-motion'

export default function F1Car() {
  return (
    <motion.svg
      viewBox="0 0 900 380"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', overflow: 'visible' }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
    >
      {/* Ground shadow */}
      <ellipse cx="450" cy="345" rx="340" ry="12" fill="rgba(227,121,3,0.08)" />

      {/* Track line */}
      <line x1="50" y1="340" x2="860" y2="340" stroke="#e37903" strokeWidth="1.5" opacity="0.2" />

      {/* === REAR WING === */}
      {/* Top element */}
      <rect x="155" y="140" width="72" height="11" rx="3" fill="#2a7071" />
      {/* DRS flap */}
      <rect x="162" y="130" width="58" height="7" rx="2" fill="#1e5253" />
      {/* Lower element */}
      <rect x="168" y="162" width="52" height="9" rx="2" fill="#e37903" />
      {/* Endplates */}
      <rect x="148" y="128" width="7" height="52" rx="1" fill="#141414" />
      <rect x="227" y="128" width="7" height="52" rx="1" fill="#141414" />
      {/* Strut */}
      <line x1="191" y1="179" x2="191" y2="230" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />

      {/* === REAR BODYWORK === */}
      <path d="M225,218 L285,205 L285,258 L225,268 Z" fill="#e37903" />
      <path d="M232,221 L278,210 L278,252 L232,260 Z" fill="rgba(255,255,255,0.07)" />

      {/* === MAIN CHASSIS / FLOOR === */}
      <path d="M250,218 L680,242 L680,268 L250,272 Z" fill="#e37903" />

      {/* === SIDEPODS === */}
      <path d="M340,212 L560,200 L620,218 L635,242 L340,248 Z" fill="#2a7071" />
      <path d="M352,215 L548,203 L600,218 L612,238 L352,242 Z" fill="#1e5253" opacity="0.6" />
      {/* Sidepod inlet highlight */}
      <path d="M360,214 L410,204 L420,216 L365,222 Z" fill="rgba(255,255,255,0.06)" />

      {/* === ENGINE COVER / TOP BODYWORK === */}
      <path d="M275,205 L560,188 L635,215 L275,220 Z" fill="#e37903" opacity="0.95" />
      <path d="M285,207 L552,191 L622,213 L285,217 Z" fill="rgba(255,255,255,0.07)" />

      {/* === COCKPIT === */}
      <path d="M415,190 L450,168 L520,163 L555,190 L510,200 L455,202 Z" fill="#141414" />
      <path d="M423,192 L453,172 L517,168 L548,192 L508,198 L458,200 Z" fill="#0a0a0a" />

      {/* === HALO === */}
      <path
        d="M440,167 Q484,148 535,167"
        stroke="#bbb"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="484" y1="156" x2="487" y2="170" stroke="#bbb" strokeWidth="6" />

      {/* === AIR INTAKE / ROLL HOOP === */}
      <path
        d="M445,164 L461,138 L495,132 L522,138 L535,164 L518,160 L508,136 L482,136 L469,160 Z"
        fill="#141414"
        stroke="#333"
        strokeWidth="1"
      />
      <rect x="474" y="135" width="21" height="19" rx="10" fill="#0a0a0a" />

      {/* === NOSE CONE === */}
      <path d="M635,244 L730,238 L730,262 L635,264 Z" fill="#e37903" />
      <path d="M638,246 L724,241 L724,248 L638,248 Z" fill="rgba(255,255,255,0.14)" />

      {/* === FRONT WING === */}
      {/* Main plane */}
      <path d="M710,252 L802,238 L808,242 L808,262 L710,267 Z" fill="#2a7071" />
      {/* Upper flap */}
      <path d="M718,244 L800,232 L804,235 L804,241 L718,250 Z" fill="#e37903" opacity="0.8" />
      {/* Extra element */}
      <path d="M726,235 L798,224 L800,227 L800,231 L726,239 Z" fill="#1e5253" />
      {/* Endplates */}
      <rect x="802" y="223" width="7" height="42" rx="1" fill="#141414" />
      {/* Cascade */}
      <path d="M726,250 L742,244 L744,252 L728,258 Z" fill="#e37903" opacity="0.6" />

      {/* === LIVERY DETAILS === */}
      {/* SB number on sidepod */}
      <text
        x="480"
        y="240"
        fontFamily="'Barlow Condensed', sans-serif"
        fontSize="34"
        fontWeight="900"
        fontStyle="italic"
        fill="white"
        opacity="0.85"
        textAnchor="middle"
      >
        SB
      </text>
      <text
        x="555"
        y="237"
        fontFamily="'Barlow Condensed', sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#e37903"
      >
        12
      </text>
      {/* Orange stripe on top */}
      <path d="M355,205 L560,192 L570,197 L358,210 Z" fill="rgba(42,112,113,0.4)" />

      {/* === DIFFUSER === */}
      <path d="M215,268 L285,262 L285,276 L215,280 Z" fill="#141414" />
      <path d="M215,265 L285,259 L288,266 L215,272 Z" fill="#2a7071" opacity="0.4" />

      {/* === FLOOR ===  */}
      <path d="M215,270 L685,265 L685,278 L215,282 Z" fill="#141414" />

      {/* === REAR WHEEL === */}
      <circle cx="290" cy="298" r="48" fill="#1a1a1a" />
      <circle cx="290" cy="298" r="43" fill="#222" />
      <circle cx="290" cy="298" r="30" fill="#141414" />
      <circle cx="290" cy="298" r="18" fill="#1a1a1a" />
      <circle cx="290" cy="298" r="8" fill="#e37903" />
      <motion.circle
        cx="290" cy="298" r="43"
        fill="none"
        stroke="#2a7071"
        strokeWidth="3"
        strokeDasharray="26 13"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '290px 298px' }}
      />

      {/* === FRONT WHEEL === */}
      <circle cx="650" cy="292" r="42" fill="#1a1a1a" />
      <circle cx="650" cy="292" r="37" fill="#222" />
      <circle cx="650" cy="292" r="25" fill="#141414" />
      <circle cx="650" cy="292" r="14" fill="#1a1a1a" />
      <circle cx="650" cy="292" r="6" fill="#e37903" />
      <motion.circle
        cx="650" cy="292" r="37"
        fill="none"
        stroke="#2a7071"
        strokeWidth="3"
        strokeDasharray="22 11"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '650px 292px' }}
      />

      {/* === SUSPENSION ===  */}
      <line x1="248" y1="272" x2="248" y2="290" stroke="#333" strokeWidth="4" />
      <line x1="332" y1="270" x2="332" y2="286" stroke="#333" strokeWidth="4" />
      <line x1="608" y1="268" x2="608" y2="280" stroke="#333" strokeWidth="4" />
      <line x1="692" y1="267" x2="692" y2="280" stroke="#333" strokeWidth="4" />

      {/* === ANIMATED MOTION LINES === */}
      <motion.g
        animate={{ x: [0, -18, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="60" y1="210" x2="200" y2="210" stroke="#e37903" strokeWidth="2" opacity="0.55" />
        <line x1="40" y1="228" x2="210" y2="228" stroke="white" strokeWidth="1" opacity="0.25" />
        <line x1="70" y1="192" x2="175" y2="192" stroke="#e37903" strokeWidth="1.5" opacity="0.35" />
        <line x1="30" y1="246" x2="165" y2="246" stroke="white" strokeWidth="0.8" opacity="0.18" />
        <line x1="50" y1="262" x2="150" y2="262" stroke="#2a7071" strokeWidth="1.5" opacity="0.4" />
      </motion.g>
    </motion.svg>
  )
}
