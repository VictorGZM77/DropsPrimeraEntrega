import React, { useState } from 'react';

const FormDePago = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    rut: '',
    region: '',
    comuna: '',
    localidad: '',
    calle: '',
    numero: '',
    departamento: '',
    telefono: '',
    guardarDireccion: false,
  });


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      rut: '',
      region: '',
      comuna: '',
      localidad: '',
      calle: '',
      numero: '',
      departamento: '',
      telefono: '',
      guardarDireccion: false,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Compra Realizada');

  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-6">LIBRETA DE DIRECCIONES</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4">

          <label>
            NOMBRE
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="Nombre"
              required
            />
          </label>


          <label>
            APELLIDO
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="Apellido"
              required
            />
          </label>


          <label>
            RUT
            <input
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="RUT"
              required
            />
          </label>


          <label>
            REGIÓN
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              required
            >
              <option value="">Región</option>
              <option value="Region 1">Región 1</option>
              <option value="Region 2">Región 2</option>

            </select>
          </label>


          <label>
            COMUNA
            <select
              name="comuna"
              value={formData.comuna}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              required
            >
              <option value="">Comuna</option>
              <option value="Comuna 1">Comuna 1</option>
              <option value="Comuna 2">Comuna 2</option>

            </select>
          </label>


          <label>
            LOCALIDAD
            <input
              type="text"
              name="localidad"
              value={formData.localidad}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="Localidad"
              required
            />
          </label>


          <label>
            CALLE
            <input
              type="text"
              name="calle"
              value={formData.calle}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="Calle"
              required
            />
          </label>


          <label>
            NÚMERO
            <input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="Número"
              required
            />
          </label>


          <label>
            CASA / BLOQUE / DEPARTAMENTO
            <input
              type="text"
              name="departamento"
              value={formData.departamento}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="Casa / Bloque / Departamento"
            />
          </label>

          <label>
            NÚMERO DE TELÉFONO
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full"
              placeholder="(+56)"
              required
            />
          </label>


          <label className="flex items-center">
            <input
              type="checkbox"
              name="guardarDireccion"
              checked={formData.guardarDireccion}
              onChange={handleInputChange}
              className="mr-2"
            />
            GUARDAR DIRECCIÓN DE ENVÍO
          </label>
        </div>


        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white px-6 py-3 font-bold hover:bg-gray-700"
          >
            LIMPIAR DIRECCIÓN
          </button>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800"
          >
            SIGUIENTE
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDePago;
