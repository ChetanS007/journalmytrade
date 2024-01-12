import React, { useContext, useState } from "react";
import "./signIn.css";
import SignInlogo from "./imagesPage/footerLogo.png";
import { loginApiCall } from "../apis/apicalls";
import { AuthContext } from "../context/AuthContext";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Divider,
  Stack,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleButton } from "../components/GoogleButton";

function SignIn({ isOpen, onClose }) {
  const { login } = useContext(AuthContext);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first");
    if (form.validate(form.values.email)) {
      const res = await loginApiCall(form.values.email, form.values.password);
      console.log(res);
      if (res.Message === "Login Successfully") {
        onClose();
        login(res.refresh_token, res.access_token);
      } else {
        alert(res.Message);
      }
    }
  };

  return (
    <Modal opened={isOpen} onClose={onClose} centered>
      <Paper radius="md" p="xl">
        <Stack mb="md" mt="md" justify="center" align="center">
          <Image radius="md" h={80} w={100} fit="contain" src={SignInlogo} />
          <Text size="xl" fw={500}>
            Sign In
          </Text>
        </Stack>
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              radius="md"
            />
            <Button
              variant="primary"
              radius="md"
              mt={"md"}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  );
}

export default SignIn;
