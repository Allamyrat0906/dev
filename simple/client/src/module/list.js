import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import axios from "axios";

import { Link } from "react-router-dom";
class listComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    };
  }
  componentDidMount() {
    this.loadProduct();
  }
  loadProduct() {
    const url = "http://192.168.1.8:2000/product/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          // alert(JSON.stringify(res.data));
          const data = res.data.data;
          this.setState({ listProduct: data });
        } else {
          alert("Web serwisde problema bar");
        }
      })
      .catch((error) => {
        alert("Serverde problema bar " + error);
      });
  }
  render() {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">tb</th>
            <th scope="col">Product name</th>
            <th scope="col">Product category</th>
            <th scope="col">Product description</th>
            <th scope="col">Product cost</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
  }
  loadFillData() {
    return this.state.listProduct.map((data) => {
      return (
        <tr>
          <th>{data.id}</th>
          <td>{data.pName}</td>
          <td>{data.category.category}</td>
          <td>{data.pDescription}</td>
          <td>{data.pCost}</td>
          <td>
            <Link class="btn btn-info " to={"/edit/" + data.id}>
              Edit
            </Link>
          </td>
          <td>
            <button
              class="btn btn-danger"
              onClick={() => this.onDelete(data.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }

  onDelete(id) {
    Swal.fire({
      title: "Siz chyndanam pozmakchymy?",
      text: "Siz pozulandan son yzyna gaytaryp bilmersiniz!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Howwo!",
      cancelButtonText: "Yok",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Goybolsun", "Bolmady", "error");
      }
    });
  }

  sendDelete(userId) {
    const baseUrl = "http://localhost:2000/product/delete";
    axios
      .post(baseUrl, {
        id: userId,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire(
            "Pozuldy",
            "Shol talyplaryn hataryndan chykaryldy",
            "success"
          );
          this.loadProduct();
        }
      })
      .catch((error) => {
        alert("Meselebar shu yerde ");
      });
  }
}

export default listComponent;
