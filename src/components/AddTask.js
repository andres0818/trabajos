import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";

const validationSchema = yup.object({
  casilla: yup
    .string("Ingrese el número de la casilla")
    .required("Casilla requerida"),
  factura: yup
    .string("Ingrese el número de la factura")
    .required("Número de la factura requerido"),
  usuario: yup
    .string("Ingrese el nombre del usuario")
    .required("Nombre del usuario requerido"),
  celular: yup
    .string("Ingrese el número de celular del usuario")
    .min(
      13,
      "El número de celular debe tener mínimo 10 caracteres y el indicativo del país"
    )
    .required("Número de celular requerido"),
  venta: yup.string("Ingrese el valor de la venta").required("Valor requerido"),
  abono: yup
    .string("Ingrese el saldo abonado por el usuario")
    .required("Saldo requerido"),
  fecha: yup.string("Fecha de la venta").required("Fecha de venta requerido"),
  laboratorio: yup
    .string("Ingrese el nombre del laboratorio")
    .required("Nombre requerido"),
  orden: yup.string("Número de la orden").required("Número de orden requerido"),
  entrega: yup
    .string("Fecha de entrega de la venta")
    .required("Fecha de entrega requerida"),
});

const AddTask = () => {
  const formik = useFormik({
    initialValues: {
      casilla: "",
      factura: "",
      usuario: "",
      celular: "+57",
      venta: "",
      abono: "",
      fecha: "",
      laboratorio: "",
      orden: "",
      entrega: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let inputs = [
    { id: "casilla", name: "casilla", label: "Casilla" },
    { id: "factura", name: "factura", label: "Factura" },
    { id: "usuario", name: "usuario", label: "Usuario" },
    { id: "celular", name: "celular", label: "Celular" },
    { id: "venta", name: "venta", label: "Venta" },
    { id: "abono", name: "abono", label: "Abono" },
    { id: "fecha", name: "fecha", label: "Fecha de Venta" },
    { id: "laboratorio", name: "laboratorio", label: "Laboratorio" },
    { id: "orden", name: "orden", label: "Número de Orden" },
    { id: "entrega", name: "entrega", label: "Fecha de Entrega" },
    { id: "observaciones", name: "observaciones", label: "Adjunte una nota" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Ingresar Trabajo</h1>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "2rem",
          gap: "2rem",
          justifyContent: "center",
        }}
        onSubmit={formik.handleSubmit}
      >
        {inputs.map((e) => {
          const fieldName = e.id;
          return (
            <TextField
              key={e.id}
              type={e.id === "fecha" || e.id === "entrega" ? "date" : "text"}
              style={{ width: "30%", minWidth: "120px" }}
              id={fieldName}
              name={fieldName}
              label={e.label}
              value={formik.values[fieldName]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched[fieldName] && Boolean(formik.errors[fieldName])
              }
              helperText={formik.touched[fieldName] && formik.errors[fieldName]}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: "",
              }}
            />
          );
        })}

        <Button
          style={{ width: "65%", minWidth: "120px" }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
