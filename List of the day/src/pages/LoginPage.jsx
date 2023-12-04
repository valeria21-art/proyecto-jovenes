import React, { useState } from 'react';

function PaginaPrincipal() {
  const [paginaActual, setPaginaActual] = useState(1);

  const irAPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <div>
      <h2>Página {paginaActual}</h2>
      {/* Contenido de la página actual */}
      
      {/* Botones para cambiar de página */}
      <button onClick={() => irAPagina(paginaActual - 1)} disabled={paginaActual === 1}>
        Página Anterior
      </button>
      <button onClick={() => irAPagina(paginaActual + 1)}>
        Página Siguiente
      </button>
    </div>
  );
}

export default app;
