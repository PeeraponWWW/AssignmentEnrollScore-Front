function NotFound() {
    return (
        <div className="relative w-screen h-screen flex items-center justify-center">
            <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <img src="catblacktail.png" alt='black_tail_cat' className="w-2xs h-2xs"/>
                <h1 className="my-4 font-bold tracking-wider  text-gray-300 text-shadow-2xs text-5xl">404 Page Not Found</h1>
            </div>
        </div>
        
    );
};

export default NotFound;