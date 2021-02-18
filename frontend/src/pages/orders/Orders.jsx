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

const Providers = () => {
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
        <div clasName="p-4">
            <h3 className="text-center mt-4">Pedidos</h3>


            <div className="container px-4 d-flex justify-content-between">
                <input type="text" style={{ width: '210px' }} className="form-control"
                    placeholder={filters.name ? filters.name : "Buscar por nombre..."}
                    onChange={filterName} />


                <div>
                    <Link href="/crear-proveedor">
                        <a className="btn btn-primary mx-2">+ Nuevo</a>
                    </Link>

                    <a className="btn btn-primary">
                        Filtrar
                    </a>
                </div>
            </div>

            <div className="container px-4 mt-4">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Pedido</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => {
                                

                                return (
                                    <Link href={`/proveedores/${order.id}`}>
                                        <tr style={{ cursor: 'pointer' }}>
                                            <th scope="row">
                                                {`#${order.id} ${order.transmitter_name}`}
                                            </th>

                                            <td className="text-capitalize">
                                                {`${order.date} ${order.time}`}
                                            </td>

                                            <td>
                                                <button type="button" class="btn btn-success">
                                                    {order.state}
                                                </button>
                                            </td>

                                            <td>
                                                <button type="button" class="btn btn-info">
                                                    <span className="icon icon-pencil"></span>
                                                </button>

                                                <button type="button" class="btn btn-danger mx-2">
                                                    <span className="icon icon-trash"></span>
                                                </button>
                                            </td>
                                        </tr>
                                    </Link>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>

            <div className="container px-4 mt-4">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link">
                                Anterior
                            </a>
                        </li>

                        <li className="page-item">
                            <a className="page-link">
                                1
                            </a>
                        </li>

                        <li className="page-item">
                            <a className="page-link">
                                2
                            </a>
                        </li>

                        <li className="page-item">
                            <a className="page-link">
                                3
                            </a>
                        </li>

                        <li className="page-item">
                            <a className="page-link">
                                Siguiente
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}

export default Providers