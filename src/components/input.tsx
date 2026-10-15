export function Input({placeHolder, reference, type}: {placeHolder: string, reference?: React.RefObject<HTMLInputElement>, type?:string}){
    return (

        <input type={`${type? type : "text"}`} ref={reference} placeholder={placeHolder} spellCheck="false" className="p-2 mt-2 outline-2 outline-grey-200 hover:outline-2 hover:outline-black select-none"></input>


    );
}