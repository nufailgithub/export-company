import { Target, Award, Users } from "lucide-react"

export default function MissionVision() {
  return (
    <>

    {/* Who We Are Card */}
    <div className="bg-orange-400 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 relative">
        <div className="absolute top-0 right-0 w-20 h-20">
          <svg viewBox="0 0 100 100" className="text-orange-300 opacity-20">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="p-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Who We Are</h3>
          <p className="text-white/90">
            Affectionately referred to as the 'Pearl of the Indian Ocean', Sri Lanka is renowned the world over for,
            both, the beauty and diversity of its natural landscapes.
          </p>
        </div>
        <div className="bg-orange-500 p-4 flex justify-end">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Vision Card */}
      <div className="bg-green-500 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 relative">
        <div className="absolute top-0 right-0 w-20 h-20">
          <svg viewBox="0 0 100 100" className="text-green-400 opacity-20">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="p-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-white/90">
            To become the most preferred exporter of fresh and value added Sri Lankan produce in the world.
          </p>
        </div>
        <div className="bg-green-600 p-4 flex justify-end">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mission Card */}
      <div className="bg-orange-500 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 relative">
        <div className="absolute top-0 right-0 w-20 h-20">
          <svg viewBox="0 0 100 100" className="text-orange-400 opacity-20">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="p-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-white/90">
            Delivering healthy, nutritious and naturally grown produce while maintaining the highest standards of
            quality.
          </p>
        </div>
        <div className="bg-orange-600 p-4 flex justify-end">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
