export function MsgBox({msg}:{msg: string}){
    return (
        <div className="text-red-500 text-sm">
            {msg}
        </div>
    );
}