import React from "react";
import { Formik, Form, Field } from "formik";
import {Flex, Box, Button, Input, FormControl, FormLabel, FormErrorMessage, Heading, Image } from "@chakra-ui/react";
import * as Yup from "yup";
import foto from '../Cuerpo/mati.jpg'


const RegistroSchema = Yup.object().shape({
  nombre: Yup.string().min(2, "*El nombre es muy corto")
  .max(50, "*El nombre es muy largo").required("*El nombre es requerido"),
  apellido: Yup.string().min(2, "*El apellido es muy corto")
  .max(50, "*El apellido es muy largo").required("*El apellido es requerido"),
  email: Yup.string().email("*Correo electrónico inválido").required("*El correo electrónico es requerido"),
  telefono: Yup.string()
  .required("*El teléfono es requerido")
  .test('min-length', 'El teléfono debe tener al menos 6 números', (value) => value && value.replace(/\D/g, '').length >= 6),
  password: Yup.string().required("*La contraseña es requerida"),
  confirmarPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "*Las contraseñas deben coincidir")
    .required("*Confirme la contraseña"),
});

const Cuerpo = () => {
  const handleRegistro = (values) => {
  
  };

  return (
    <Flex align="start" justify="space-evenly" minH="80vh" flexWrap="wrap">
    <Box> 

    <Heading mt="8"> Ingreso al Sistema</Heading>
    <Image 
    src={foto} 
    w="800px" 
    opacity="0.9"
    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    mt="8" borderRadius={5}>

    </Image>


    </Box>
   
    <Box width="md" mt="8" pb="10px">
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        confirmarPassword: "",
      }}
      validationSchema={RegistroSchema}
      onSubmit={handleRegistro}
    >
      <Form>
        <Field name="nombre">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.nombre && form.touched.nombre} mb="4">
              <FormLabel htmlFor="nombre">Nombre</FormLabel>
              <Input {...field} id="nombre" placeholder="Nombre" />
              <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="apellido">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.apellido && form.touched.apellido} mb="4">
              <FormLabel htmlFor="apellido">Apellido</FormLabel>
              <Input {...field} id="apellido" placeholder="Apellido" />
              <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="email">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.email && form.touched.email} mb="4">
              <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
              <Input {...field} id="email" placeholder="Correo Electrónico" />
              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="telefono">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.telefono && form.touched.telefono} mb="4">
              <FormLabel htmlFor="telefono">Teléfono</FormLabel>
              <Input {...field} id="telefono" placeholder="Teléfono" />
              <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="password">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.password && form.touched.password} mb="4">
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Input {...field} id="password" type="password" placeholder="Contraseña" />
              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="confirmarPassword">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.confirmarPassword && form.touched.confirmarPassword} mb="4">
              <FormLabel htmlFor="confirmarPassword">Confirmar Contraseña</FormLabel>
              <Input {...field} id="confirmarPassword" type="password" placeholder="Confirmar Contraseña" />
              <FormErrorMessage>{form.errors.confirmarPassword}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Button colorScheme="teal" type="submit" mt="4">
          Registrarse
        </Button>
      </Form>
    </Formik>
  </Box>
  </Flex>
  );
};

export default Cuerpo;