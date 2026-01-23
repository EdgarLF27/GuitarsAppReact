export default function Header() {
  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="./index.html">
                <img
                  className="img-fluid"
                  src="./img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="./img/carrito.png"
                  alt="imagen carrito"
                />

                <div id="carrito" className="bg-white p-3">
                  <p className="text-center">El carrito esta vacio</p>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="img-fluid"
                            src="./img/guitarra_02.jpg"
                            alt="imagen guitarra"
                          />
                        </td>
                        <td>SRV</td>
                        <td className="fw-bold">$299</td>
                        <td className="flex align-items-start gap-4">
                          <button type="button" className="btn btn-dark">
                            -
                          </button>
                          1
                          <button type="button" className="btn btn-dark">
                            +
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-danger" type="button">
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="text-end">
                    Total pagar: <span className="fw-bold">$899</span>
                  </p>
                  <button className="btn btn-dark w-100 mt-3 p-2">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
          {/* .row */}

          <div className="row mt-5">
            <div className="col-md-6 text-center text-md-start pt-5">
              <h1 className="display-2 fw-bold">Modelo VAI</h1>
              <p className="mt-5 fs-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, possimus quibusdam dolor nemo velit quo, fuga omnis,
                iure molestias optio tempore sint at ipsa dolorum odio
                exercitationem eos inventore odit.
              </p>
              <p className="text-primary fs-1 fw-black">$399</p>
              <button
                type="button"
                className="btn fs-4 bg-primary text-white py-2 px-5"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>

        <img
          className="header-guitarra"
          src="./img/header_guitarra.png"
          alt="imagen header"
        />
      </header>
    </>
  );
}
