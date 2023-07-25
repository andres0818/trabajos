import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  casilla: yup
    .string('Ingrese el número de la casilla')
    .required('Casilla requerida'),
  factura: yup
    .string('Ingrese el número de la factura')
    .required('Número de la factura requerido'),
  usuario:yup
    .string('Ingrese el nombre del usuario')
    .required('Nombre del usuario requerido'),
  celular: yup
    .string('Ingrese el número de celular del usuario')
    .min(13,'El número de celular debe tener mínimo 10 caracteres y el indicativo del país')
    .required('Número de celular requerido'),
  venta: yup
    .string('Ingrese el valor de la venta')
    .required('Valor requerido'),
  abono: yup
    .string('Ingrese el saldo abonado por el usuario')
    .required('Saldo requerido'),
  fecha: yup
    .string('Fecha de la venta')
    .required('FEcha de venta requerido'),
  laboratorio: yup
    .string('Ingrese el nombre del laboratorio')
    .required('Nombre requerido'),
  orden: yup
    .string('Número de la orden')
    .required('Número de orden requerido'),
  entrega: yup
    .string('Fecha de entrega de la venta')
    .required('Fecha requ'),
});

const AddTask = () => {
  const formik = useFormik({
    initialValues: {
        casilla: '',
        factura: '',
        usuario: '',
        celular: '+57',
        venta: '',
        abono: '',
        fecha:'',
        laboratorio: '',
        orden:'',
        entrega:"",
      },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div >
        <h1 style={{textAlign:"center"}}>Ingresar Trabajo</h1>
      <form style={{display:"flex", flexWrap:'wrap', padding:"2rem", gap:'2rem', justifyContent:"center" }} onSubmit={formik.handleSubmit}>
        <TextField
        style={{ width: '30%',minWidth:"120px" }}
          id="casilla"
          name="casilla"
          label="Casilla"
          value={formik.values.casilla}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.casilla && Boolean(formik.errors.casilla)}
          helperText={formik.touched.casilla && formik.errors.casilla}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="factura"
          name="factura"
          label="Factura"
          type="factura"
          value={formik.values.factura}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.factura && Boolean(formik.errors.factura)}
          helperText={formik.touched.factura && formik.errors.factura}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="usuario"
          name="usuario"
          label="Usuario"
          type="usuario"
          value={formik.values.usuario}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.usuario && Boolean(formik.errors.usuario)}
          helperText={formik.touched.usuario && formik.errors.usuario}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="celular"
          name="celular"
          label="Celular"
          type="celular"
          value={formik.values.celular}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.celular && Boolean(formik.errors.celular)}
          helperText={formik.touched.celular && formik.errors.celular}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="venta"
          name="venta"
          label="Venta"
          type="venta"
          value={formik.values.venta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.venta && Boolean(formik.errors.venta)}
          helperText={formik.touched.venta && formik.errors.venta}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="abono"
          name="abono"
          label="Abono"
          type="abono"
          value={formik.values.abono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.abono && Boolean(formik.errors.abono)}
          helperText={formik.touched.abono && formik.errors.abono}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="fecha"
          name="fecha"
          label="Fecha de venta"
          type="fecha"
          value={formik.values.fecha}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fecha && Boolean(formik.errors.fecha)}
          helperText={formik.touched.fecha && formik.errors.fecha}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="laboratorio"
          name="laboratorio"
          label="Laboratorio"
          type="laboratorio"
          value={formik.values.laboratorio}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.laboratorio && Boolean(formik.errors.laboratorio)}
          helperText={formik.touched.laboratorio && formik.errors.laboratorio}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="orden"
          name="orden"
          label="Número de orden"
          type="orden"
          value={formik.values.orden}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.orden && Boolean(formik.errors.orden)}
          helperText={formik.touched.orden && formik.errors.orden}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="entrega"
          name="entrega"
          label="Fecha de Entrega"
          type="entrega"
          value={formik.values.entrega}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.entrega && Boolean(formik.errors.entrega)}
          helperText={formik.touched.entrega && formik.errors.entrega}
        />
        <TextField
          style={{ width: '30%',minWidth:"120px" }}
          id="observaciones"
          name="observaciones"
          label="Adjunte una nota"
          type="observaciones"
          value={formik.values.observaciones}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.observaciones && Boolean(formik.errors.observaciones)}
          helperText={formik.touched.observaciones && formik.errors.observaciones}
        />
        
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTask



