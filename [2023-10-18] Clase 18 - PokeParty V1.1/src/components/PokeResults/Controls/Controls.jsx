import { GrPrevious, GrNext } from "react-icons/gr";

const Controls = ({ onNext=()=> {}, onPrev=()=> {} }) => {
    return (
        <section className="flex justify-center items-center gap-10">
            <GrPrevious onClick={()=> { onPrev(); }}
                className="text-2xl cursor-pointer"/>

            <h3 className="font-bold text-xl"> Resultados </h3>    
            
            <GrNext onClick={()=> { onNext(); }} 
                className="text-2xl cursor-pointer"/>
        </section>
    );
}

export default Controls;