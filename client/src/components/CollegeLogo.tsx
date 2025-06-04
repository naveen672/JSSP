export function JSSPolytechnicLogo() {
  return (
    <svg width="120" height="120" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="148" stroke="#3730A3" strokeWidth="4" fill="none"/>
      <path d="M150 20L195 80H105L150 20Z" fill="#3730A3"/>
      <path d="M150 280L105 220H195L150 280Z" fill="#3730A3"/>
      <circle cx="150" cy="150" r="90" stroke="#3730A3" strokeWidth="3" fill="none"/>
      <path d="M100 110H200V190H100V110Z" stroke="#3730A3" strokeWidth="2" fill="none"/>
      <path d="M70 150H230" stroke="#3730A3" strokeWidth="2"/>
      <text x="150" y="210" fontSize="14" textAnchor="middle" fill="#3730A3" fontWeight="bold">JSS POLYTECHNIC, MYSORE</text>
      <g transform="translate(105, 120)">
        <path d="M45 30C45 43.8071 34.8071 54 21 54C7.19288 54 -3 43.8071 -3 30C-3 16.1929 7.19288 6 21 6C34.8071 6 45 16.1929 45 30Z" fill="#ef4444" fillOpacity="0.7"/>
        <path d="M21 12C21 12 24 15 24 20C24 25 21 30 21 35C21 40 24 42 24 42" stroke="white" strokeWidth="1.5"/>
        <path d="M16 20H26" stroke="white" strokeWidth="1.5"/>
        <path d="M14 26H28" stroke="white" strokeWidth="1.5"/>
        <path d="M16 32H26" stroke="white" strokeWidth="1.5"/>
      </g>
      <path d="M80 85L90 95M110 80L115 90M120 115L130 120" stroke="#3730A3" strokeWidth="1"/>
      <path d="M180 95L170 85M150 90L145 80M140 120L130 115" stroke="#3730A3" strokeWidth="1"/>
    </svg>
  );
}

export function JSSMVPLogo() {
  return (
    <svg width="120" height="120" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="148" stroke="#3730A3" strokeWidth="4" fill="none"/>
      <path d="M150 50 C 220 50, 250 120, 250 150 C 250 180, 220 250, 150 250 C 80 250, 50 180, 50 150 C 50 120, 80 50, 150 50 Z" fill="#f97316" fillOpacity="0.9"/>
      <path d="M150 80 C 200 80, 220 120, 220 150 C 220 180, 200 220, 150 220 C 100 220, 80 180, 80 150 C 80 120, 100 80, 150 80 Z" fill="white"/>
      <g transform="translate(120, 110)">
        <path d="M30 50C30 63.8071 23.8071 75 15 75C6.19288 75 0 63.8071 0 50C0 36.1929 6.19288 25 15 25C23.8071 25 30 36.1929 30 50Z" fill="#f97316"/>
        <path d="M15 30C15 30 18 35 18 40C18 45 15 50 15 55C15 60 18 65 18 65" stroke="white" strokeWidth="1.5"/>
        <path d="M10 40H20" stroke="white" strokeWidth="1.5"/>
        <path d="M8 50H22" stroke="white" strokeWidth="1.5"/>
        <path d="M10 60H20" stroke="white" strokeWidth="1.5"/>
      </g>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(30, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(60, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(90, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(120, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(150, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(180, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(210, 150, 150)"/>
      <path d="M15 150 L 45 150" stroke="white" strokeWidth="2" transform="rotate(240, 150, 150)"/>
      <text x="60" y="100" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold" transform="rotate(-30, 130, 90)">JSS MAHA</text>
      <text x="240" y="100" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold" transform="rotate(30, 170, 90)">VIDYAPEETHA</text>
    </svg>
  );
}

export default function CollegeLogo() {
  return (
    <div className="flex items-center justify-center gap-8">
      <JSSMVPLogo />
      <JSSPolytechnicLogo />
    </div>
  );
}