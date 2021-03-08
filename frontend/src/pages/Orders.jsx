import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "wouter"


const Orders = () => {

    /* 
    #############
    #   States  #
    #############
    */
    const [orders, setOrders] = useState([])
    const [filters, setFilters] = useState({ name: "", code: "" })

    /* 
    ####################
    #  GET Orders  #
    ####################
    */
    useEffect(() => {
        axios.get('http://localhost:3004/orders?_sort=id&_order=desc')
            .then(
                response => setOrders(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])


    /* 
    #################
    # Filter Orders #
    #################
    */
    useEffect(() => {
        if (filters.name) {
            axios.get(`http://localhost:3004/orders?transmitter_name_like=${filters.name}`)
                .then(
                    response => setOrders(response.data)
                )
                .catch(
                    err => console.log(err)
                )
        } else if (filters.code) {
            axios.get(`http://localhost:3004/orders?id_like=${filters.code}`)
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

    /* 
    ####################
    #  Events handles  #
    ####################
    */
    const filterName = e => {
        console.log(filters)

        if (e.target.value) {
            setFilters({ name: e.target.value })
        } else {
            setFilters({ name: "" })

        }
    }

    /* 
    ##################
    #  Render View   #
    ##################
    */
    return (
        <>

            <div clasName="p-4" style={{ background: "#ecf0f5" }}>


                <div className="mt-5 container px-4 d-flex justify-content-between">

                    <div className="d-flex">
                        <input type="text" style={{ width: '200px', borderRadius: "0" }} className="form-control"
                            placeholder={filters.code ? filters.code : "Buscar por código"}
                            onChange={filterName} />

                        <input type="text" style={{ width: '290px', borderRadius: "0" }} className="form-control mx-2"
                            placeholder={filters.name ? filters.name : "Buscar por nombre"}
                            onChange={filterName} />

                    </div>

                    <div className="d-flex">

                        <select class="form-select btn-default" style={{ width: "170px" }}>
                            <option selected>Estado</option>
                            <option value="1">Completado</option>
                            <option value="2">En proceso</option>
                            <option value="3">Rechazado</option>
                        </select>


                        <Link href="/crear-proveedor">
                            <a className="btn btn-default mx-2">+Nueva orden</a>
                        </Link>

                        <a className="btn btn-default">
                            Filtrar
                        </a>
                    </div>


                </div>

                <div className="container px-4 mt-4">

                    <div className="card" style={{ boxShadow: "0 0 15px rgb(0 0 0 / 50%)" }}>

                        <div className="card-body">
                            <h5>Listado de Ordenes de Compra</h5>
                        </div>

                        <div className="card-footer">
                            <table className="table table-light table-striped table-hover">
                                <thead className="">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Realizado por</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Total</th>
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
                                                        {`${order.date} ${order.time}`}
                                                    </td>

                                                    <td>
                                                        <span class="badge bg-success">{order.state}</span>
                                                    </td>

                                                    <td className="text-capitalize">
                                                        {`${order.recipients_name}`}
                                                    </td>


                                                    <td>
                                                        <div class="dropdown">
                                                            <a class="btn btn-default dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                                        <span className="icon icon-printer"></span> Imprimir
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

                <div className="container p-4 d-flex mb-5 justify-content-between align-items-center">
                    <p className="mx-2">Mostrando 1 al 15 de 26 registros</p>

                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Siguiente</a>
                            </li>
                        </ul>
                    </nav>

                </div>




            </div>

        </>
    )
}

export default Orders