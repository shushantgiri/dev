import { GENERAL_INFO } from '@/lib/data';
import ContactForm from '@/app/_components/ContactForm';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <ContactForm />

                <p className="leading-none text-muted-foreground mt-16">
                    &copy; {year} {GENERAL_INFO.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;