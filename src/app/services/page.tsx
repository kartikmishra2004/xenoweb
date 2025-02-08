import React from 'react';
import { Button } from "@/components/ui/button"
import {
    ShoppingCart,
    Globe2,
    User,
    Cloud,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Carousel from '@/app/components/Carousel';

function Services() {
    const services = [
        {
            title: "E-Commerce Solutions",
            icon: <ShoppingCart className="w-8 h-8" />,
            description: "Transform your business with our custom e-commerce solutions. We build scalable online stores that drive sales and enhance customer experience.",
            features: [
                "Custom shopping cart integration",
                "Secure payment gateways",
                "Inventory management",
                "Mobile-responsive design"
            ]
        },
        {
            title: "Custom Web Portals",
            icon: <Globe2 className="w-8 h-8" />,
            description: "Streamline your operations with tailor-made web portals. We create intuitive platforms that connect your business with customers and partners.",
            features: [
                "User authentication",
                "Custom dashboards",
                "Real-time analytics",
                "API integration"
            ]
        },
        {
            title: "Personal Portfolio",
            icon: <User className="w-8 h-8" />,
            description: "Showcase your work with a stunning portfolio website. We design and develop personal websites that help you stand out in your industry.",
            features: [
                "Custom design",
                "Project showcases",
                "Blog integration",
                "Contact forms"
            ]
        },
        {
            title: "Web Hosting & Deployment",
            icon: <Cloud className="w-8 h-8" />,
            description: "Reliable hosting solutions for your web applications. We ensure your website stays fast, secure, and always available.",
            features: [
                "Cloud hosting",
                "SSL certificates",
                "Regular backups",
                "24/7 monitoring"
            ]
        }
    ];

    return (
        <div className="relative min-h-screen">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>
            <div className="relative z-10">
                <div className="container flex lg:min-h-[calc(100vh-3.5rem)] min-h-max max-w-screen-2xl flex-col items-center justify-center space-y-8 lg:py-24 py-32 text-center">
                    <div className="relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                            <div className="absolute top-0 left-0 w-full h-full"></div>
                            <div className="relative space-y-4">
                                <h1 className="bg-gradient-to-br from-foreground from-30% w-full text-center via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                                    Transform Your Digital<br />
                                    Presence
                                </h1>
                                <p className="mx-auto text-center max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                                    XenoWeb delivers cutting-edge web solutions tailored to your unique needs.
                                    From e-commerce to custom web portals, we bring your vision to life.
                                </p>
                            </div>
                            <div className="flex w-full justify-center mt-20">
                                <Carousel />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-lg border bg-background p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 rounded-lg border-purple-500/20">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold ml-2 text-white">{service.title}</h3>
                                    </div>
                                    <p className="mb-6 text-left text-muted-foreground">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-muted-foreground group">
                                                <CheckCircle2 className="w-5 h-5 mr-2 group-hover:text-primary" />
                                                <span className="group-hover:text-primary transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="mt-6 flex items-center text-primary font-semibold transition-all group">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section className="border-t w-full">
                    <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
                        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                            Ready to Get Started?
                        </h2>
                        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                            Let's discuss how we can help transform your digital presence.
                        </p>
                        <Link href='/contact'>
                            <Button size='lg'>
                                Contact Us Today
                            </Button>
                        </Link>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default Services;