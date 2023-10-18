import { GrPrevious, GrNext } from "react-icons/gr";

const Controls = ({  }) => {
    return (
        <section className="flex justify-center items-center gap-10">
            <GrPrevious className="text-2xl cursor-pointer"/>

            <h3 className="font-bold text-xl"> Resultados </h3>    
            
            <GrNext className="text-2xl cursor-pointer"/>
        </section>
    );
}

export default Controls;