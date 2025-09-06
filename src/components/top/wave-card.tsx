import GeneratorCard from './generator-card'

export default function WaveCard() {
  return (
    <GeneratorCard name='Wave' link='svg-waves'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 590"
        className="absolute overflow-hidden bottom-0 left-0 transition duration-300 ease-in-out delay-150"
      >
        <title>波</title>
        <path
          d="M 0,600 L 0,225 C 114.6602870813397,200.76076555023923 229.3205741626794,176.52153110047848 333,186 C 436.6794258373206,195.47846889952152 529.377990430622,238.67464114832535 611,257 C 692.622009569378,275.32535885167465 763.1674641148325,268.7799043062201 843,237 C 922.8325358851675,205.2200956937799 1011.9521531100479,148.20574162679426 1113,142 C 1214.047846889952,135.79425837320574 1327.023923444976,180.39712918660285 1440,225 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="#ff5555"
          fillOpacity="1"
          className="animate-pathAnim-0"
        />
      </svg>
    </GeneratorCard>
  )
}
