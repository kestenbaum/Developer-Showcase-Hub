const Title = ({title, description}: { title: string, description: string }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full mb-16">
            <h2 className="font-extrabold text-2xl text-gray-900 text-center mb-6">
                {title}
            </h2>
            <span className="w-16 h-1.5 bg-blue-600 rounded mb-6"></span>
            <p className="text-[14px] font-medium text-center text-gray-600 max-w-3xl leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default Title;