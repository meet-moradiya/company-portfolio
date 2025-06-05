"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="min-h-[70vh] 2xl:min-h-fit bg-black text-white py-18">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
                {/* Left Side */}
                <div className="flex-1 flex flex-col justify-between gap-12">
                    <div>
                        <h1 className="mil-up text-4xl xl:text-5xl font-bold">MD.</h1>
                        <div className="mt-8 text-white/50">
                            <p className="mil-up text-lg">Subscribe Our Newsletter:</p>
                            <div className="mil-up mt-4 w-full sm:w-fit px-6 sm:pr-4 sm:pl-12 py-4 bg-neutral-900 rounded-full flex items-center group hover:bg-white focus-within:bg-white transition-all duration-400 ease-in-out">
                                <input
                                    type="text"
                                    placeholder="ENTER YOUR EMAIL"
                                    className="w-full sm:w-auto text-sm tracking-widest uppercase text-white group-hover:text-black focus:text-black bg-transparent focus:outline-none"
                                />
                                <span className="bg-violet-500 p-2 text-white cursor-pointer rounded-full transition-all duration-300-transform duration-300 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M 14 5.34C 13.74 5.34 13.49 5.44 13.29 5.64L 13.21 5.72C 12.82 6.11 12.82 6.75 13.21 7.14L 17.07 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H17.07L13.21 16.86C12.82 17.25 12.82 17.89 13.21 18.28L13.29 18.36C13.68 18.75 14.32 18.75 14.71 18.36L20.36 12.71C20.75 12.32 20.75 11.68 20.36 11.29L14.71 5.64C14.51 5.44 14.26 5.34 14 5.34Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mil-up hidden lg:block">
                        <h3 className="text-base sm:text-lg font-medium text-violet-500">Social Media:</h3>
                        <div className="flex text-white/80 items-center gap-6 mt-4">
                            <Link href={"/"} target="_blank" className="hover:text-violet-500 duration-200 ease-in-out">
                                <svg className="h-7 w-7 fill-current" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </Link>
                            <Link href={"/"} target="_blank" className="hover:text-violet-500 duration-200 ease-in-out">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 448 512">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </Link>
                        </div>
                        <p className="text-white/50 mt-8 text-sm sm:text-base">© Copyright 2025 - MD. All Rights Reserved.</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        <div className="flex flex-col items-start gap-4 text-2xl">
                            <Link href={"/portfolio"} className="mil-up hover:text-violet-500 hover:translate-x-2 transition-all duration-300">
                                Portfolio
                            </Link>
                            <Link href={"/services"} className="mil-up hover:text-violet-500 hover:translate-x-2 transition-all duration-300">
                                Services
                            </Link>
                            <Link href={"/blog"} className="mil-up hover:text-violet-500 hover:translate-x-2 transition-all duration-300">
                                Services
                            </Link>
                            <Link href={"/contact"} className="mil-up hover:text-violet-500 hover:translate-x-2 transition-all duration-300">
                                Blog
                            </Link>
                            <Link href={"/about"} className="mil-up hover:text-violet-500 hover:translate-x-2 transition-all duration-300">
                                About
                            </Link>
                        </div>

                        <div className="flex flex-col gap-4 lg:text-left border-t border-t-white/10 pt-8 lg:border-t-0 lg:pt-0">
                            <Link href={"/"} className="mil-up hover:text-violet-500 transition-all duration-300">
                                Privacy & Policy
                            </Link>
                            <Link href={"/"} className="mil-up hover:text-violet-500 transition-all duration-300">
                                Terms & Conditions
                            </Link>
                            <Link href={"/"} className="mil-up hover:text-violet-500 transition-all duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                        <div className="space-y-4">
                            <div>
                                <div className="mil-up flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-violet-500" />
                                    <h3 className="text-base sm:text-lg font-medium text-violet-500">India Office</h3>
                                </div>
                                <p className="mil-up text-white/50 text-sm sm:text-base leading-relaxed">
                                    1002, Near Sector-6,
                                    <br />
                                    Gandhinagar, Gujarat
                                    <br />
                                    India, 382006
                                </p>
                            </div>
                            <div className="mil-up flex items-center gap-2 text-white/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z" />
                                </svg>
                                <span className="text-md font-medium tracking-widest">+91 9875111723</span>
                            </div>
                            <div className="mil-up flex items-center gap-2 text-white/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="20" height="20" viewBox="0 0 512 512">
                                    <path d="M424,80H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,424,80Zm-14.18,92.63-144,112a16,16,0,0,1-19.64,0l-144-112a16,16,0,1,1,19.64-25.26L256,251.73,390.18,147.37a16,16,0,0,1,19.64,25.26Z" />
                                </svg>
                                <span className="text-md font-medium tracking-wide">mdmoradiya2705@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mil-up lg:hidden">
                    <h3 className="text-base sm:text-lg font-medium text-violet-500">Social Media:</h3>
                    <div className="flex text-white/80 items-center gap-6 mt-4">
                        <Link href={"/"} target="_blank" className="hover:text-violet-500 duration-200 ease-in-out">
                            <svg className="h-7 w-7 fill-current" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </Link>
                        <Link href={"/"} target="_blank" className="hover:text-violet-500 duration-200 ease-in-out">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 448 512">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                        </Link>
                    </div>
                    <p className="text-white/50 mt-8 text-sm sm:text-base">© Copyright 2025 - MD. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
