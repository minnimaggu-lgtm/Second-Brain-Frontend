
export function Tag({title}: {title: string}){
    return (
        <span className="bg-purple-300 text-purple-500 rounded-3xl p-2 text-[15px] select-none">
            #{title}
        </span>
    );
}