'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import ProjectMockup from '@/components/ProjectMockup';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const roleRef = useRef<HTMLHeadingElement>(null);
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = GENERAL_INFO.roleLines;

    // cycle to the next role every few seconds
    useEffect(() => {
        if (roles.length < 2) return;
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2800);
        return () => clearInterval(interval);
    }, [roles.length]);

    // crossfade the headline whenever the role changes
    useGSAP(
        () => {
            gsap.fromTo(
                roleRef.current,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            );
        },
        { dependencies: [roleIndex], scope: roleRef },
    );

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />

            {/* thin editorial divider — real content, not decoration */}
            <div className="pointer-events-none absolute top-[18%] bottom-[18%] left-[58%] w-px bg-border/60 max-lg:hidden" />
            <div className="pointer-events-none absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs tracking-[0.3em] text-muted-foreground max-lg:hidden">
                {GENERAL_INFO.location?.toUpperCase()}
            </div>

            <ProjectMockup />

            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    {GENERAL_INFO.availableForWork && (
                        <div className="slide-up-and-fade flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-border/80 bg-background-light/60 backdrop-blur-sm w-fit">
                            <span className="relative flex size-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
                            </span>
                            <span className="text-xs tracking-wide text-muted-foreground">
                                Available for new opportunities
                            </span>
                        </div>
                    )}

                    <h1
                        ref={roleRef}
                        className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton min-h-[2.1em] sm:min-h-[1.9em]"
                    >
                        <span className="text-primary">
                            {roles[roleIndex][0]}
                        </span>
                        <br />{' '}
                        <span className="ml-4">{roles[roleIndex][1]}</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            {GENERAL_INFO.name}
                        </span>
                        . {GENERAL_INFO.tagline}
                    </p>
                    <div className="flex items-center flex-wrap gap-4 mt-9 slide-up-and-fade">
                        <Button
                            as="link"
                            href="#contact"
                            variant="primary"
                            className="banner-button"
                        >
                            Let&apos;s Talk
                        </Button>
                        <Button
                            as="link"
                            href="#selected-projects"
                            variant="secondary"
                            className="banner-button"
                        >
                            View My Work
                        </Button>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {GENERAL_INFO.yearsOfExperience}
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {GENERAL_INFO.completedProjects}
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {GENERAL_INFO.hoursWorked}
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;