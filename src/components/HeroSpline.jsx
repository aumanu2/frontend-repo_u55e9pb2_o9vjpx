import Spline from '@splinetool/react-spline'

const HeroSpline = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl">
      <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </div>
  )
}

export default HeroSpline
