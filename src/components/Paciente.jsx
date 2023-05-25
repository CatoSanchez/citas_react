const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?")

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-5 border border-slate-300 drop-shadow-xl rounded-md px-5 py-5">
      <p className="font-bold prose lg:prose-l text-slate-300 mb-2">
        {" "}
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold  text-slate-300 mb-2">
        {" "}
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold text-slate-300 mb-2">
        {" "}
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold text-slate-300 mb-2">
        {" "}
        Fecha de Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold text-slate-300 mb-2">
        {" "}
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          className="rounded-md py-2 px-10 bg-gray-500 hover:bg-gray-400 uppercase font-medium text-white"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          className="rounded-md py-2 px-10 bg-red-700 hover:bg-red-500 uppercase font-medium text-white"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar Paciente
        </button>
      </div>
    </div>
  );
};

export default Paciente;
