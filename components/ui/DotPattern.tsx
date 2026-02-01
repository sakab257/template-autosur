import { useId } from 'react'

interface DotPatternProps {
    /** Opacité du conteneur (ex: 'opacity-10', 'opacity-20') */
    opacity?: string
    /** Classes additionnelles pour le conteneur */
    className?: string
}

const DotPattern = ({
    opacity = 'opacity-20',
    className,
}: DotPatternProps) => {
    const uniqueId = useId()
    const patternId = `dot-pattern-${uniqueId}`

    const containerClasses = [
        'absolute inset-0 pointer-events-none',
        opacity,
        className,
    ].filter(Boolean).join(' ')

    return (
        <div className={containerClasses}>
            <svg width="100%" height="100%">
                <defs>
                    <pattern
                        id={patternId}
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="2" cy="2" r="2" fill="white" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
        </div>
    )
}

export default DotPattern
