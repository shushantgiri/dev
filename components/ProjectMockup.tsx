'use client';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import TransitionLink from '@/components/TransitionLink';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

// Which project to showcase here — swap the slug to feature a different one.
const FEATURED_PROJECT =
    PROJECTS.find((p) => p.slug === 'yarsa-rooms') ?? PROJECTS[0];

const ProjectMockup = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const card = cardRef.current;
        const wrap = wrapRef.current;
        if (!card || !wrap) return;

        const handleMove = (e: MouseEvent) => {
            const rect = wrap.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
                rotateY: px * 14,
                rotateX: -py * 10,
                duration: 0.6,
                ease: 'power2.out',
                transformPerspective: 900,
            });
        };

        const handleLeave = () => {
            gsap.to(card, {
                rotateY: -6,
                rotateX: 4,
                duration: 0.8,
                ease: 'power3.out',
            });
        };

        window.addEventListener('mousemove', handleMove);
        handleLeave(); // set the resting tilt on mount

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <div
            ref={wrapRef}
            className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[480px] h-[420px] max-xl:w-[380px] max-xl:h-[340px] max-lg:hidden"
        >
            <div
                ref={cardRef}
                className="relative w-full h-full [transform-style:preserve-3d]"
            >
                {/* laptop / browser mockup */}
                <TransitionLink
                    href={`/projects/${FEATURED_PROJECT.slug}`}
                    className="absolute top-0 left-0 w-[85%] rounded-xl border border-border/70 bg-background-light/40 shadow-2xl overflow-hidden [transform:translateZ(0px)]"
                >
                    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border/60 bg-background-light/60">
                        <span className="size-2.5 rounded-full bg-red-400/70" />
                        <span className="size-2.5 rounded-full bg-yellow-400/70" />
                        <span className="size-2.5 rounded-full bg-green-400/70" />
                        <span className="ml-3 text-[11px] text-muted-foreground truncate">
                            {FEATURED_PROJECT.liveUrl?.replace(
                                /^https?:\/\//,
                                '',
                            ) ||
                                `${FEATURED_PROJECT.slug}.com`}
                        </span>
                    </div>
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={FEATURED_PROJECT.thumbnail}
                            alt={FEATURED_PROJECT.title}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </TransitionLink>

                {/* phone mockup, layered on top for a "responsive on
                    every device" showcase */}
                <TransitionLink
                    href={`/projects/${FEATURED_PROJECT.slug}`}
                    className="absolute bottom-0 right-0 w-[30%] rounded-[1.4rem] border-4 border-background-light/80 bg-background shadow-2xl overflow-hidden [transform:translateZ(50px)]"
                >
                    <div className="relative aspect-[9/19]">
                        <Image
                            src={
                                FEATURED_PROJECT.images?.[1] ??
                                FEATURED_PROJECT.thumbnail
                            }
                            alt={`${FEATURED_PROJECT.title} mobile view`}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </TransitionLink>
            </div>

            <p className="mt-4 text-xs text-muted-foreground text-center tracking-wide">
                {FEATURED_PROJECT.title} — {FEATURED_PROJECT.year}
            </p>
        </div>
    );
};

export default ProjectMockup;