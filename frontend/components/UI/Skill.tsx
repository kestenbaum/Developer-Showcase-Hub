const Skill = ({children}: { children: string }) => {
    return (
        <li className="w-fit px-4 py-1 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wide whitespace-nowrap">
            {children}
        </li>
    );
};

export default Skill;