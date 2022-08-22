import React from "react";
import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Form } from "../components";
import NextLink from "next/link";
import Link from "next/link";

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {};
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <Typography component="h5" variant="h5">
        Login
      </Typography>
      <List>
        <ListItem>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            }}
            //   render is a function accept field
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
                error={Boolean(errors.email)}
                helperText={
                  errors.email
                    ? errors.email.type === "pattern"
                      ? "Email is not valid"
                      : "Email is required"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: "password" }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password
                    ? errors.password.type === "minLength"
                      ? "Password length is more than 5"
                      : "Password is required"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit" fullWidth color="primary">
            Login
          </Button>
        </ListItem>
        <ListItem>
          Do not have an account? {""}
          <NextLink href={"/register"} passHref>
            <Link>
              <u> Register </u>
            </Link>
          </NextLink>
        </ListItem>
      </List>
    </Form>
  );
};
export default LoginScreen;
