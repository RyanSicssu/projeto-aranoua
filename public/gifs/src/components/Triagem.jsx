import React from "react";

export default function Triagem() {
  return (
    <div className="container my-4">
      <h3 className="mb-3">Instruções de Triagem</h3>
      <p className="text-muted">
        Siga as instruções abaixo antes da consulta online:
      </p>

      <div className="row">
        <div className="col-md-4 text-center">
          <img src="/gifs/medir-pressao.gif" alt="Medir Pressão" className="img-fluid rounded" />
          <p>Medir Pressão</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/gifs/verificar-pulso.jpg" alt="Verificar Pulso" className="img-fluid rounded" />
          <p>Verificar Pulso</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/gifs/termometro.png" alt="Medir Temperatura" className="img-fluid rounded" />
          <p>Medir Temperatura</p>
        </div>
      </div>

      <hr />

      <h5 className="mt-4">Primeiros Socorros</h5>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="/gifs/lavar-ferimento.jpg" alt="Lavar Ferimento" className="img-fluid rounded" />
          <p>Lavar Ferimento</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/gifs/aplicar-curativo.jpg" alt="Aplicar Curativo" className="img-fluid rounded" />
          <p>Aplicar Curativo</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/gifs/curativo.png" alt="Curativo" className="img-fluid rounded" />
          <p>Curativo Simples</p>
        </div>
      </div>
    </div>
  );
}
