export function Input({placeHolder, reference}: {placeHolder: string, reference?: React.RefObject<HTMLInputElement>}){
    return (

        <input type="text" ref={reference} placeholder={placeHolder} className="p-2 mt-2 outline-2 outline-grey-200 hover:outline-2 hover:outline-black "></input>


    );
}