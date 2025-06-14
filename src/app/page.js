import Link from "next/link";
import CustomLinkButton from "@/components/CustomLinkButton";
import TeamMember from "@/components/TeamMember";
import InfiniteLogoScroller from "@/components/InfiniteLogoScroller";
import Image from "next/image";

export default function Home() {
    const logos = [
        "/logos/DairyDonLogo.svg",
        "/logos/MahimaLogo.png",
        "/logos/BhavyataArchitectsLogo.png",
        "/logos/LifeSurgeHealthCare.svg",
        "/logos/ChhotiSiMuskanLogo.svg",
        "/logos/SapphireLogo.png",
        "/logos/ParamHospitalLogo.png",
    ];

    return (
        <>
            <section className="py-34 bg-black text-white h-screen flex flex-col justify-center items-center">
                <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium">
                    <span>Crafting</span>
                    <span className="font-thin"> Your</span>
                    <br />
                    <span>Online</span>
                    <span className="font-thin"> Identity</span>
                </div>
                <div className="text-white/50 text-center text-md md:text-lg font-light mt-18">
                    Powering Progress with People, Process, and Technology.
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
                    <Link href={"/services"}>
                        <CustomLinkButton
                            text="what we do"
                            containerClassName="bg-violet-500 pr-4 pl-8 py-3 rounded-full hover:bg-purple-500 duration-500 ease-in-out"
                            textClassName="hover:text-white"
                            iconWrapperClassName="!bg-white !text-black"
                        />
                    </Link>
                    <Link href={"/portfolio"}>
                        <CustomLinkButton text="view works" />
                    </Link>
                </div>
            </section>

            <section className="bg-white min-h-screen 2xl:min-h-fit">
                <div className="container py-18 md:py-32 flex flex-col gap-12 items-center lg:flex-row justify-between">
                    <div className="max-w-[500px] max-h-[700px]">
                        <h1 className="mil-up text-center lg:text-left text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium md:mt-12">
                            Discover
                            <br /> Our <span className="font-thin">Hub</span>
                        </h1>
                        <p className="mil-up text-center lg:text-left mt-8 md:mt-18 text-lg font-light text-black/50">
                            {
                                "We're a collective of skilled minds, ignited by our passion for turning concepts into reality. With diverse backgrounds and extensive expertise, we unite to craft innovative IT solutions. Collaboration fuels our creativity, blending unique perspectives to exceed expectations."
                            }
                        </p>
                        <p className="mil-up text-center lg:text-left mt-8 text-lg font-light text-black/50">
                            Our team thrives on synergy, creating an environment of boundless creativity. By harnessing our collective expertise, we
                            produce extraordinary results that consistently surpass expectations and propel your business forward.
                        </p>
                        <div className="mil-up mt-12 mx-auto lg:mx-0 md:mt-18 w-fit">
                            <Link href={"/"}>
                                <CustomLinkButton
                                    text="our team"
                                    containerClassName="bg-violet-500 pr-4 pl-8 py-3 rounded-full hover:bg-purple-500 duration-500 ease-in-out"
                                    textClassName="hover:!text-black text-white"
                                    iconWrapperClassName="!bg-white !text-black"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-[450px] max-h-[700px] overflow-hidden">
                        <Image
                            height={700}
                            width={450}
                            src="/images/StartUp.webp"
                            alt="startup"
                            className="mil-scale mil-up"
                            data-value1="1"
                            data-value2="1.2"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-black min-h-[96vh] text-white 2xl:min-h-fit">
                <div className="container py-16 md:py-24">
                    <h1 className="mil-up text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-center font-medium">
                        Unique <span className="font-thin">Ideas</span>
                        <br />
                        For Your <span className="font-thin">Business.</span>
                    </h1>
                    <p className="mil-up text-white/50 text-center mt-8 text-lg md:text-xl font-light">
                        Pioneering IT solutions, unmatched excellence. Elevate your digital presence with our cutting-edge technology and expertise.
                    </p>
                    <div className="mil-up mx-auto w-fit mt-8">
                        <Link href={"/services"}>
                            <CustomLinkButton
                                text="what we do"
                                containerClassName="bg-violet-500 pr-4 pl-8 py-3 rounded-full hover:bg-purple-500 duration-500 ease-in-out"
                                textClassName="hover:text-white"
                                iconWrapperClassName="!bg-white !text-black"
                            />
                        </Link>
                    </div>
                    <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 sm:gap-12 xl:grid-cols-4 xl:gap-0 w-full">
                        <Link href={"/services"}>
                            <div className="mil-up border border-white/10 sm:border-l-2 sm:border-l-violet-500 xl:border xl:border-t-3 xl:border-t-violet-500 xl:border-white/10 text-white py-12 px-8 group">
                                <h1 className="text-3xl font-medium">Branding and Identity Design</h1>
                                <p className="font-light text-white/50 mt-8 duration-500 ease-in-out xl:opacity-0 xl:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                                    Proficiency in creating memorable logos and recognizable visual brands.
                                </p>
                                <div className="w-fit mt-12 p-2 bg-violet-500 xl:scale-40 rounded-full xl:bg-white/20 transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:bg-violet-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/services"}>
                            <div className="mil-up border border-white/10 sm:border-l-2 sm:border-l-violet-500 xl:border xl:border-b-3 xl:border-b-violet-500 xl:border-white/10 text-white py-12 px-8 group">
                                <h1 className="text-3xl font-medium">Website Design & Development</h1>
                                <p className="font-light text-white/50 mt-8 duration-500 ease-in-out xl:opacity-0 xl:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                                    Our creative agency is a team of professionals focused on helping your brand grow.
                                </p>
                                <div className="w-fit mt-12 p-2 bg-violet-500 xl:scale-40 rounded-full xl:bg-white/20 transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:bg-violet-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/services"}>
                            <div className="mil-up border border-white/10 sm:border-l-2 sm:border-l-violet-500 xl:border xl:border-t-3 xl:border-t-violet-500 xl:border-white/10 text-white py-12 px-8 group">
                                <h1 className="text-3xl font-medium">Creative App Development</h1>
                                <p className="font-light text-white/50 mt-8 duration-500 ease-in-out xl:opacity-0 xl:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                                    {"Our skilled team is committed to developing mobile applications that amplify your brand's reach."}
                                </p>
                                <div className="w-fit mt-12 p-2 bg-violet-500 xl:scale-40 rounded-full xl:bg-white/20 transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:bg-violet-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/services"}>
                            <div className="mil-up border border-white/10 sm:border-l-2 sm:border-l-violet-500 xl:border xl:border-b-3 xl:border-b-violet-500 xl:border-white/10 text-white py-12 px-8 group">
                                <h1 className="text-3xl font-medium">Game Development</h1>
                                <p className="font-light text-white/50 mt-8 duration-500 ease-in-out xl:opacity-0 xl:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                                    We have a team of Professional game designer and developer to bring your game to the world.
                                </p>
                                <div className="w-fit mt-12 p-2 bg-violet-500 xl:scale-40 rounded-full xl:bg-white/20 transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:bg-violet-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white min-h-screen 2xl:min-h-fit">
                <div className="container py-16 md:py-24">
                    <h1 className="mil-up text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium">
                        <span className="font-thin">Our Proven</span> Process
                        <br />
                        <span className="font-thin">To Build Great</span> Products
                    </h1>
                    <p className="mil-up text-black/50 text-center mt-8 text-lg md:text-xl font-light">
                        From idea to execution, we follow a refined process that ensures quality, clarity, and on-time delivery.
                    </p>
                    <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full cursor-default">
                        <div className="mil-up border flex-1 flex flex-col justify-between p-4 group hover:border-violet-500 hover:shadow-2xl duration-500 ease-in-out">
                            <div>
                                <p className="text-xl text-white font-medium bg-violet-500 group-hover:scale-95 duration-400 ease-in-out h-10 w-10 flex justify-center items-center rounded-full">
                                    <span>1</span>
                                </p>
                                <h2 className="mt-6 text-3xl font-medium">DISCOVER</h2>
                                <p className="mt-4 text-xl text-black/70">
                                    We begin by understanding your business goals, audience, and market needs to aline our strategy.
                                </p>
                            </div>
                            <div>
                                <img src="/images/Discover.svg" alt="discover" className="max-h-60 group-hover:scale-95 duration-400 ease-in-out" />
                            </div>
                        </div>
                        <div className="mil-up border flex-1 flex flex-col justify-between p-4 group hover:border-violet-500 hover:shadow-2xl duration-500 ease-in-out">
                            <div>
                                <p className="text-xl text-white font-medium bg-violet-500 group-hover:scale-95 duration-400 ease-in-out h-10 w-10 flex justify-center items-center rounded-full">
                                    <span>2</span>
                                </p>
                                <h2 className="mt-6 text-3xl font-medium">DESIGN</h2>
                                <p className="mt-4 text-xl text-black/70">Our UI/UX experts craft intuitive interfaces and engaging experiences.</p>
                            </div>
                            <div>
                                <img src="/images/Design.svg" alt="design" className="max-h-60 group-hover:scale-95 duration-400 ease-in-out" />
                            </div>
                        </div>
                        <div className="mil-up border flex-1 flex flex-col justify-between p-4 group hover:border-violet-500 hover:shadow-2xl duration-500 ease-in-out">
                            <div>
                                <p className="text-xl text-white font-medium bg-violet-500 group-hover:scale-95 duration-400 ease-in-out h-10 w-10 flex justify-center items-center rounded-full">
                                    <span>3</span>
                                </p>
                                <h2 className="mt-6 text-3xl font-medium">DEVELOP</h2>
                                <p className="mt-4 text-xl text-black/70">
                                    We begin by understanding your business goals, audience, and market needs to aline our strategy.
                                </p>
                            </div>
                            <div>
                                <img src="/images/Develop.svg" alt="develop" className="max-h-60 group-hover:scale-95 duration-400 ease-in-out" />
                            </div>
                        </div>
                        <div className="mil-up border flex-1 flex flex-col justify-between p-4 group hover:border-violet-500 hover:shadow-2xl duration-500 ease-in-out">
                            <div>
                                <p className="text-xl text-white font-medium bg-violet-500 group-hover:scale-95 duration-400 ease-in-out h-10 w-10 flex justify-center items-center rounded-full">
                                    <span>4</span>
                                </p>
                                <h2 className="mt-6 text-3xl font-medium">DELIVER</h2>
                                <p className="mt-4 text-xl text-black/70">
                                    We begin by understanding your business goals, audience, and market needs to aline our strategy.
                                </p>
                            </div>
                            <div>
                                <img src="/images/Delivery.svg" alt="discover" className="max-h-60 group-hover:scale-95 duration-400 ease-in-out" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black min-h-screen 2xl:min-h-fit">
                <div className="container flex flex-col lg:flex-row gap-16 py-18 md:py-24">
                    <div className="flex flex-col justify-around">
                        <div>
                            <h1 className="mil-up text-white text-center lg:text-left text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium">
                                <span className="font-thin">Crafting Digital </span>Excellence
                            </h1>
                            <p className="mil-up mt-8 text-center lg:text-left text-lg font-light text-white/50 lg:max-w-lg">
                                Our goal is to deliver practical and effective digital solutions that help businesses operate more efficiently,
                                connect with their customers, and stay ahead in a fast-moving digital world. Whether it's a small feature or a
                                complete system, we approach every project with the same level of dedication and care.
                            </p>
                            <div className="mil-up mt-16 mx-auto lg:mx-0 w-fit">
                                <Link href={"/services"}>
                                    <CustomLinkButton
                                        text="view more"
                                        containerClassName="bg-violet-500 pr-4 pl-8 py-3 rounded-full hover:bg-purple-500 duration-500 ease-in-out"
                                        textClassName="hover:text-white"
                                        iconWrapperClassName="!bg-white !text-black"
                                    />
                                </Link>
                            </div>
                        </div>
                        <h2 className="mil-up text-white text-center lg:text-left mt-12 lg:mt-0 font-thin text-3xl mb-0">
                            We <span className="font-medium">delivering</span>
                            <br />
                            exceptional <span className="font-medium">results.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex items-center flex-col sm:flex-row sm:justify-around lg:flex-col lg:justify-start gap-8">
                            <div className="mil-up group relative h-[350px] w-[270px] sm:h-[400px] sm:w-[330px] md:h-[500px] md:w-[400px] lg:h-[350px] lg:w-[270px] overflow-hidden border border-white">
                                <img
                                    src="/images/Sapphire1.png"
                                    alt="Sapphire"
                                    className="object-cover origin-top duration-400 ease-out scale-102 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-400 ease-in-out" />
                                <div className="absolute inset-0 flex items-end justify-center">
                                    <span className="mb-18 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150 text-white text-xl font-medium">
                                        Sapphire
                                    </span>
                                </div>
                            </div>
                            <div className="mil-up group relative h-[350px] w-[270px] sm:h-[400px] sm:w-[330px] md:h-[500px] md:w-[400px] lg:h-[350px] lg:w-[270px] overflow-hidden border border-white">
                                <img
                                    src="/images/LiveStreamCoffee1.png"
                                    alt="LiveStreamCoffee"
                                    className="object-cover origin-top duration-400 ease-out scale-102 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-400 ease-in-out" />
                                <div className="absolute inset-0 flex items-end justify-center">
                                    <span className="mb-18 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150 text-white text-xl font-medium">
                                        LiveStreamCoffee
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:mt-12 flex items-center flex-col sm:flex-row sm:justify-around lg:flex-col lg:justify-start gap-8">
                            <div className="mil-up group relative h-[350px] w-[270px] sm:h-[400px] sm:w-[330px] md:h-[500px] md:w-[400px] lg:h-[350px] lg:w-[270px] overflow-hidden border border-white">
                                <img
                                    src="/images/DairyDon1.png"
                                    alt="DairyDon"
                                    className="object-cover origin-top duration-400 ease-out scale-102 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-400 ease-in-out" />
                                <div className="absolute inset-0 flex items-end justify-center">
                                    <span className="mb-18 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150 text-white text-xl font-medium">
                                        DairyDon
                                    </span>
                                </div>
                            </div>
                            <div className="mil-up group relative h-[350px] w-[270px] sm:h-[400px] sm:w-[330px] md:h-[500px] md:w-[400px] lg:h-[350px] lg:w-[270px] overflow-hidden border border-white">
                                <img
                                    src="/images/ChhotiSiMuskan1.png"
                                    alt="ChhotiSiMuskan"
                                    className="object-cover origin-top duration-400 ease-out scale-102 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-400 ease-in-out" />
                                <div className="absolute inset-0 flex items-end justify-center">
                                    <span className="mb-18 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150 text-white text-xl font-medium">
                                        ChhotiSiMuskan
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white min-h-screen 2xl:min-h-fit">
                <div className="container py-18 md:py-28">
                    <div className="mil-up">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-center font-medium">
                            <span className="font-thin">Meet Our </span>Team
                        </h1>
                        <p className="px-12 mil-up mt-12 text-lg font-light text-black/50">
                            Our team is a powerhouse of creativity and enthusiasm, always eager to take on new challenges. We thrive on pushing
                            boundaries because it drives us to perfection.
                        </p>
                        <p className="px-12 mil-up mt-4 text-lg font-light text-black/50">
                            With over 7 years of collective experience, our developers bring a wealth of expertise to the table. Whether it's tackling
                            complex projects or finding innovative solutions, we're dedicated to delivering excellence. Join us as we embark on a
                            journey of innovation and success together.
                        </p>
                    </div>
                    <TeamMember />
                </div>
            </section>

            <section className="pb-16 sm:pb-24">
                <InfiniteLogoScroller logos={logos} />
            </section>
        </>
    );
}
