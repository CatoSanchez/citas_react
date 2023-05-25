import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-slate-300 text-2xl text-center font-bold">
            Listado de Pacientes
          </h2>
          <p className="text-slate-300 file:text-lg mt-5 text-center mb-5">
            Administra tus {""}
            <span className="text-slate-300 font-bold text-lg">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
              key={paciente.id} 
              paciente={paciente} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-red-500 text-2xl text-center font-bold">
            No hay Pacientes
          </h2>
          <p className="text-slate-300 file:text-lg mt-5 text-center mb-5">
            Comienza agregando pacientes {""}
            <span className="text-slate-300 font-bold text-lg">
              y aparecerán aquí.
            </span>
          </p>
        </>
      )}

    </div>
  );
};

export default ListadoPacientes;
