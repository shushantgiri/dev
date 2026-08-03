'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CalendarRange, Clock, Layers, MapPin } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { GENERAL_INFO, MY_STACK } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);



// Track record, in numbers — same source of truth as the Hero section,
// just presented differently here (icon cards vs. stacked numerals) so
// the two sections don't read as a copy-paste of each other.
const STATS = [
    {
        icon: CalendarRange,
        value: GENERAL_INFO.yearsOfExperience,
        label: 'Years Experience',
    },
    {
        icon: Layers,
        value: GENERAL_INFO.completedProjects,
        label: 'Projects Shipped',
    },
    {
        icon: Clock,
        value: GENERAL_INFO.hoursWorked,
        label: 'Hours Worked',
    },
];

// Capability tags — derived from the category headings already used in
// the "My Stack" section (Object.keys(MY_STACK)), not a hand-picked
// list. Add/rename a category there and this updates on its own —
// nothing to maintain here.
const CAPABILITIES = Object.keys(MY_STACK);

const AboutMe = () => {
    const container = useRef<HTMLDivElement>(null);
    const photoWrapRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);
    const watermarkRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    // Layered scroll parallax — the photo, its glow, the dot-grid and the
    // background numeral each drift at their own speed so the section has
    // real depth instead of moving as one flat block.
    useGSAP(
        () => {
            const parallaxTl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.8,
                },
            });

            parallaxTl
                .to(photoWrapRef.current, { yPercent: -14, ease: 'none' }, 0)
                .to(glowRef.current, { yPercent: -32, ease: 'none' }, 0)
                .to(dotsRef.current, { yPercent: 22, ease: 'none' }, 0)
                .to(
                    watermarkRef.current,
                    { yPercent: -18, ease: 'none' },
                    0,
                );
        },
        { scope: container },
    );

    // Subtle cursor-reactive tilt on the portrait for a bit of depth.
    const handlePhotoMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = photoWrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(el, {
            rotateY: relX * 14,
            rotateX: -relY * 14,
            transformPerspective: 600,
            duration: 0.5,
            ease: 'power2.out',
        });
    };

    const handlePhotoLeave = () => {
        gsap.to(photoWrapRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: 'elastic.out(1, 0.6)',
        });
    };

    return (
        <section
            className="pb-section relative overflow-hidden"
            id="about-me"
        >
            {/* ghost numeral watermark — background depth layer */}
            <span
                ref={watermarkRef}
                aria-hidden
                className="pointer-events-none select-none absolute -top-10 right-0 -z-10 font-anton text-[280px] leading-none text-foreground/[0.035] max-lg:hidden"
            >
                01
            </span>

            <div className="container" ref={container}>
                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade font-mono text-xs tracking-[0.25em] uppercase">
                    <span className="text-primary">01 //</span> About
                </p>

                <div className="grid md:grid-cols-12 gap-x-8 mt-9">
                    <div className="md:col-span-5">
                        <div className="relative w-32 sm:w-36 mb-4 [perspective:800px]">
                            {/* blurred glow — slowest layer */}
                            <div
                                ref={glowRef}
                                aria-hidden
                                className="pointer-events-none absolute -z-10 -top-8 -left-8 size-48 rounded-full bg-primary/25 blur-[64px]"
                            />
                            {/* dot-grid texture — fastest layer */}
                            <div
                                ref={dotsRef}
                                aria-hidden
                                className="pointer-events-none absolute -z-10 -bottom-6 -right-8 size-28 opacity-50 [background-image:radial-gradient(hsl(var(--primary)/0.5)_1px,transparent_1px)] [background-size:10px_10px]"
                            />

                            <div
                                ref={photoWrapRef}
                                onMouseMove={handlePhotoMove}
                                onMouseLeave={handlePhotoLeave}
                                className="slide-up-and-fade relative [transform-style:preserve-3d] will-change-transform"
                            >
                                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/40">
                                    <Image
                                        src="/profile.png"
                                        alt={GENERAL_INFO.name}
                                        fill
                                        className="object-cover grayscale contrast-125"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                                </div>
                                {/* corner-bracket focus frame */}
                                <span className="absolute -top-2 -left-2 size-4 border-t-2 border-l-2 border-primary" />
                                <span className="absolute -bottom-2 -right-2 size-4 border-b-2 border-r-2 border-primary" />
                            </div>
                        </div>

                        <p className="text-4xl sm:text-5xl slide-up-and-fade">
                            Hi, I&apos;m {GENERAL_INFO.name}.
                        </p>

                        {/* terminal-style status tag */}
                        <div className="slide-up-and-fade inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-muted-foreground bg-background-light/80 border border-border/60 rounded-full px-3 py-1 mt-3">
                            <span
                                className={`size-1.5 rounded-full ${GENERAL_INFO.availableForWork ? 'bg-primary animate-pulse' : 'bg-muted-foreground'}`}
                            />
                            <span className="text-primary">$</span>
                            status --
                            {GENERAL_INFO.availableForWork
                                ? 'available'
                                : 'unavailable'}
                        </div>

                        {/* location */}
                        <div className="slide-up-and-fade flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                            <MapPin className="size-3.5 text-primary" />
                            {GENERAL_INFO.location}
                        </div>
                    </div>

                    <div className="md:col-span-7 mt-8 md:mt-0">
                        <div className="text-lg text-muted-foreground max-w-[500px]">
                            <p className="slide-up-and-fade">
                                {GENERAL_INFO.aboutBio}
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                {GENERAL_INFO.aboutBioSecondary}
                            </p>
                        </div>

                        {/* track record */}
                        <div className="slide-up-and-fade grid grid-cols-3 gap-3 mt-9 max-w-[540px]">
                            {STATS.map(({ icon: Icon, value, label }) => (
                                <div
                                    key={label}
                                    className="group rounded-xl border border-border/50 bg-background-light/30 p-4 transition-colors duration-300 hover:border-primary/40 hover:bg-background-light/60"
                                >
                                    <Icon className="size-4 text-primary mb-3" />
                                    <p className="text-2xl sm:text-3xl font-anton leading-none">
                                        {value}
                                    </p>
                                    <p className="mt-1.5 font-mono text-[9px] sm:text-[10px] tracking-wide uppercase text-muted-foreground leading-snug">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* capability tags — derived from My Stack categories */}
                        <div className="slide-up-and-fade flex flex-wrap gap-2 mt-6 max-w-[540px]">
                            {CAPABILITIES.map((capability) => (
                                <span
                                    key={capability}
                                    className="capitalize text-xs font-mono tracking-wide text-muted-foreground border border-border/60 rounded-full px-3 py-1.5"
                                >
                                    {capability}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;