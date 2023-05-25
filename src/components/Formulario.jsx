import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
   if(Object.keys(paciente).length > 0 ) {
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
   } 
  }, [paciente])

  function generarId() {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");

      setError(true);
      return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if(paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id
      
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados);
      setPaciente({})

    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    // Reiniciar Form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="sm:w-1/1 md:w-1/2 lg:w-2/5 mx-5">
      <h2 className=" text-slate-300 text-2xl text-center font-bold">
        Seguimiento de Pacientes
      </h2>
      <p className="text-slate-300 file:text-lg mt-5 text-center mb-5">
        Añade Pacientes y {""}
        <span className="text-slate-300 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800	 drop-shadow-xl rounded-md py-5 px-5 mb-10"
      >
        {error && <Error>Todos los campos son requeridos</Error>}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="text-slate-300 block font-medium uppercase mb-2"
          >
            Nombre de Mascota
          </label>

          <input
            className="border w-full p-2 rounded-md bg-transparent mt-2 placeholder-gray-500 text-slate-300"
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="text-slate-300 block font-medium uppercase mb-2"
          >
            Nombre del Propietario
          </label>

          <input
            className="border w-full p-2 rounded-md bg-transparent mt-2 placeholder-gray-500 text-slate-300"
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-slate-300 block font-medium uppercase mb-2"
          >
            Email
          </label>

          <input
            className="border w-full p-2 rounded-md bg-transparent mt-2 placeholder-gray-500 text-slate-300"
            id="email"
            type="email"
            placeholder="Email del Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="text-slate-300 block font-medium uppercase mb-2"
          >
            Alta
          </label>

          <input
            className="border w-full p-2 rounded-md bg-transparent mt-2 text-gray-500"
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="text-slate-300 block font-medium uppercase mb-2"
          >
            Sintomas
          </label>
          <textarea
            className="border w-full p-2 rounded-md bg-transparent mt-2 placeholder-gray-500 text-slate-300"
            id="sintomas"
            placeholder="Detalle los sintomas de su mascota."
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="w-full text-slate-300 uppercase border rounded-md p-2 hover:bg-slate-300 hover:text-neutral-800 
          hover:font-bold cursor-pointer transition-all"
          value={paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
