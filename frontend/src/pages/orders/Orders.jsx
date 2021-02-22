import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "wouter"

const stateSelection = {
    "completado": "",
    "en progreso": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

}

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [filters, setFilters] = useState({ name: "" })

    useEffect(() => {
        axios.get('http://localhost:3004/orders?_sort=id&_order=desc')
            .then(
                response => setOrders(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])



    useEffect(() => {
        if (filters.name) {
            axios.get(`http://localhost:3004/orders?transmitter_name_like=${filters.name}`)
                .then(
                    response => setOrders(response.data)
                )
                .catch(
                    err => console.log(err)
                )
        } else {
            axios.get('http://localhost:3004/orders?_sort=id&_order=desc')
                .then(
                    response => setOrders(response.data)
                )
                .catch(
                    err => console.log(err)
                )
        }
    }, [filters])

    //useEffect(() => setFilters({name: ""}))

    // Event handles
    const filterName = e => {
        console.log(filters)

        if (e.target.value) {
            setFilters({ name: e.target.value })
        } else {
            setFilters({ name: "" })

        }
    }

    return (
        <>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Estado del pedido
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}


            <div clasName="p-4" style={{ background: "#ecf0f5" }}>


                <div className="mt-5 container px-4 d-flex justify-content-between">

                    <div className="d-flex">
                        <input type="text" style={{ width: '200px' }} className="form-control"
                            placeholder={filters.name ? filters.name : "Buscar por código"}
                            onChange={filterName} />

                        <input type="text" style={{ width: '290px' }} className="form-control mx-2"
                            placeholder={filters.name ? filters.name : "Buscar por nombre"}
                            onChange={filterName} />

                    </div>

                    <div className="d-flex">

                    <select class="form-select" aria-label="Default select example" style={{ width: "170px" }}>
                        <option selected>Estado</option>
                        <option value="1">Completado</option>
                        <option value="2">En proceso</option>
                        <option value="3">Rechazado</option>
                    </select>


                        <Link href="/crear-proveedor">
                            <a className="btn btn-primary mx-2">+Nueva orden</a>
                        </Link>

                        <a className="btn btn-primary">
                            Filtrar
                        </a>
                    </div>


                </div>

                <div className="container px-4 mt-4">

                    <div className="card">

                        <div className="card-body">
                            <h5>Listado de Ordenes de Compra</h5>
                        </div>

                        <div className="card-footer">
                            <table className="table table-light table-striped table-hover">
                                <thead className="">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Emisor</th>
                                        <th scope="col">Beneficiario</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        orders.map(order => {


                                            return (

                                                <tr style={{ cursor: 'pointer' }}>
                                                    <Link href={`/proveedores/${order.id}`}>
                                                        <th scope="row" className="link">
                                                            {`#${order.id}`}
                                                        </th>
                                                    </Link>

                                                    <Link href={`/proveedores/${order.id}`}>
                                                        <td className="text-capitalize link">
                                                            {`${order.transmitter_name}`}
                                                        </td>
                                                    </Link>

                                                    <td className="text-capitalize">
                                                        {`${order.recipients_name}`}
                                                    </td>

                                                    <td className="text-capitalize">
                                                        {`${order.date} ${order.time}`}
                                                    </td>

                                                    <td>
                                                        <span class="badge bg-success">{order.state}</span>
                                                    </td>

                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Acciones
  </a>

                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span className="icon icon-pencil"></span> Editar
                                                            </a>
                                                                </li>

                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span className="icon icon-trash"></span> Imprimir
                                                            </a>
                                                                </li>

                                                                <li>
                                                                    <a class="dropdown-item" href="#">
                                                                        <span className="icon icon-trash"></span> Eliminar
                                                            </a>
                                                                </li>
                                                            </ul>
                                                        </div>


                                                    </td>
                                                </tr>

                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                <div className="container px-4 mt-4">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>

        </>
    )
}

export default Orders