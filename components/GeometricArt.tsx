'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

/**
 * Abstract line-art wireframe used to fill empty space in the hero.
 * Pure geometry — concentric rings, a rotated square, and a sparse
 * node/line network — rotating slowly for a subtle, premium feel.
 */
const GeometricArt = () => {
    const scope = useRef<SVGSVGElement>(null);

    useGSAP(
        () => {
            gsap.to('.gart-ring-outer', {
                rotate: 360,
                transformOrigin: '50% 50%',
                duration: 90,
                repeat: -1,
                ease: 'none',
            });
            gsap.to('.gart-ring-inner', {
                rotate: -360,
                transformOrigin: '50% 50%',
                duration: 70,
                repeat: -1,
                ease: 'none',
            });
            gsap.to('.gart-square', {
                rotate: 360,
                transformOrigin: '50% 50%',
                duration: 120,
                repeat: -1,
                ease: 'none',
            });
            gsap.to('.gart-node', {
                opacity: 0.25,
                duration: 2,
                stagger: {
                    each: 0.4,
                    repeat: -1,
                    yoyo: true,
                },
                ease: 'sine.inOut',
            });
        },
        { scope },
    );

    return (
        <svg
            ref={scope}
            viewBox="0 0 600 600"
            className="w-full h-full overflow-visible"
            fill="none"
        >
            {/* concentric rings */}
            <circle
                className="gart-ring-outer"
                cx="300"
                cy="300"
                r="260"
                stroke="currentColor"
                strokeOpacity="0.12"
                strokeDasharray="2 10"
            />
            <circle
                className="gart-ring-outer"
                cx="300"
                cy="300"
                r="200"
                stroke="currentColor"
                strokeOpacity="0.16"
            />
            <circle
                className="gart-ring-inner"
                cx="300"
                cy="300"
                r="140"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeDasharray="1 6"
            />

            {/* rotated square frame */}
            <rect
                className="gart-square"
                x="200"
                y="200"
                width="200"
                height="200"
                stroke="currentColor"
                strokeOpacity="0.14"
                transform="rotate(45 300 300)"
            />

            {/* sparse node / line network */}
            <g stroke="currentColor" strokeOpacity="0.18">
                <line x1="300" y1="40" x2="300" y2="100" />
                <line x1="300" y1="500" x2="300" y2="560" />
                <line x1="40" y1="300" x2="100" y2="300" />
                <line x1="500" y1="300" x2="560" y2="300" />
                <line x1="120" y1="120" x2="170" y2="170" />
                <line x1="480" y1="480" x2="430" y2="430" />
            </g>
            <g className="text-primary">
                <circle className="gart-node" cx="300" cy="40" r="4" fill="currentColor" />
                <circle className="gart-node" cx="300" cy="560" r="4" fill="currentColor" />
                <circle className="gart-node" cx="40" cy="300" r="4" fill="currentColor" />
                <circle className="gart-node" cx="560" cy="300" r="4" fill="currentColor" />
                <circle className="gart-node" cx="120" cy="120" r="4" fill="currentColor" />
                <circle className="gart-node" cx="480" cy="480" r="4" fill="currentColor" />
            </g>
        </svg>
    );
};

export default GeometricArt;