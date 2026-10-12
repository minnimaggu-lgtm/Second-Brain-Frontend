export function Input({placeHolder, reference}: {placeHolder: string, reference?: React.RefObject<HTMLInputElement>}){
    return (
        <div className="p-1">
            <input type="text" ref={reference} placeholder={placeHolder} className="p-2 px-4 m-1 outline-2 outline-grey-200 rounded-md"></input>
        </div>
    );
}