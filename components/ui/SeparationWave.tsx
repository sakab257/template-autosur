type WaveVariant = 'wave1' | 'wave2'

interface SeparationWaveProps {
    /** Position de la vague dans la section */
    position: 'top' | 'bottom'
    /** Classe Tailwind pour la couleur de remplissage du SVG (ex: 'fill-white', 'fill-blue-500') */
    fillColor?: string
    /** Inverser la vague horizontalement */
    flip?: boolean
    /** Hauteur personnalisée (ex: 'h-12 lg:h-20') */
    height?: string
    /** Variante du tracé de la vague */
    variant?: WaveVariant
    /** Classes additionnelles */
    className?: string
}

const wavePaths: Record<WaveVariant, string> = {
    wave1: 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z',
    wave2: 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z',
}

const SeparationWave = ({
    position,
    fillColor = 'fill-white',
    flip = false,
    height = 'h-12 lg:h-20',
    variant = 'wave1',
    className,
}: SeparationWaveProps) => {
    const positionClasses = position === 'top'
        ? 'top-0 left-0'
        : 'bottom-0 left-0'

    const containerClasses = [
        'absolute w-full overflow-hidden leading-none z-10',
        positionClasses,
        flip && 'rotate-180',
        className,
    ].filter(Boolean).join(' ')

    const svgClasses = [
        'relative block w-[calc(100%+1.3px)]',
        height,
    ].join(' ')

    return (
        <div className={containerClasses}>
            <svg
                className={svgClasses}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path d={wavePaths[variant]} className={fillColor} />
            </svg>
        </div>
    )
}

export default SeparationWave
