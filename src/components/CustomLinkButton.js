export default function CustomLinkButton({ href, text = "default text", containerClassName = "", textClassName = "", iconWrapperClassName = "" }) {

    return (
        <div className={`flex items-center gap-4 group cursor-pointer ${containerClassName}`}>
            <span className={`text-xs uppercase font-medium py-2 hover:text-violet-500 duration-300 ease-in-out tracking-[2px] ${textClassName}`}>
                {text}
            </span>
            <span
                className={`p-2 bg-white/10 text-white rounded-full transition-transform duration-400 ease-in-out group-hover:scale-115 ${iconWrapperClassName}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                </svg>
            </span>
        </div>
    );
}
