import React, { useState } from "react";
import SignInlogo from "./imagesPage/footerLogo.png";
import "./signup.css";
import { Link } from "react-router-dom";
import { registerApi } from "../apis/apicalls";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Divider,
  Checkbox,
  Radio,
  Stack,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleButton } from "../components/GoogleButton";

function SignUp({ isOpen = true, onClose }) {
  const [finacial_year, setfinacial_year] = useState("0");
  const form = useForm({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      mobileNo: "",
      password: "",
      confirmpassword: "",
      terms: false,
      finacial_year: "0",
    },

    validate: {
      terms: (val) => (val ? null : "z"),
      firstname: (val) => (val.trim().length < 1 ? "Enter name" : null),
      lastname: (val) => (val.trim().length < 1 ? "Enter name" : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      mobileNo: (val) => (val.length < 10 ? "Inavlid Mobiel No." : null),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      confirmpassword: (val) =>
        val !== form.values.password ? "Password does not match" : null,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.validate()) {
      const res = await registerApi({
        email: form.values.email,
        firstName: form.values.firstname,
        lastName: form.values.lastname,
        mobileNo: form.values.mobileNo,
        password: form.values.password,
        confirmPassword: form.values.confirmpassword,
        country: "India",
        finYeartype: finacial_year,
        currency: "INR",
      });
      if (res.Message === "User Register Successfully") {
        onClose();
      } else {
        alert(res.Message);
      }
    } else {
      alert("Please agree terms and condition");
    }
  };

  return (
    <Modal opened={isOpen} onClose={onClose} centered>
      <Paper radius="md" p="xl">
        <Stack mb="md" mt="md" justify="center" align="center">
          <Image radius="md" h={80} w={100} fit="contain" src={SignInlogo} />
          <Text size="xl" fw={500}>
            Sign Up
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
            <Group grow>
              <TextInput
                required
                label="First Name"
                placeholder="First name"
                value={form.values.firstname}
                onChange={(event) =>
                  form.setFieldValue("firstname", event.currentTarget.value)
                }
                radius="md"
                error={form.errors.firstname && "Enter name"}
              />
              <TextInput
                required
                label="Last Name"
                placeholder="Last name"
                value={form.values.lastname}
                onChange={(event) =>
                  form.setFieldValue("lastname", event.currentTarget.value)
                }
                radius="md"
                error={form.errors.lastname && "Enter name"}
              />
            </Group>
            <TextInput
              required
              label="Mobile No"
              placeholder="Mobile No"
              value={form.values.mobileNo}
              onChange={(event) =>
                form.setFieldValue("mobileNo", event.currentTarget.value)
              }
              error={form.errors.mobileNo && "Invalid Mobile No"}
              radius="md"
              type="number"
            />
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
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm password"
              value={form.values.confirmpassword}
              onChange={(event) =>
                form.setFieldValue("confirmpassword", event.currentTarget.value)
              }
              error={form.errors.confirmpassword && "Password Does Not Match"}
              radius="md"
            />
            <Radio.Group
              label="Select finacial year type:"
              withAsterisk
              value={form.values.finacial_year}
              onChange={(event) => {
                form.setFieldValue("finacial_year", event);
              }}
            >
              <Group mt="xs">
                <Radio value="0" label="Jan - Dec" />
                <Radio value="1" label="Apr - March" />
              </Group>
            </Radio.Group>
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => {
                form.setFieldValue("terms", event.currentTarget.checked);
              }}
              error={form.errors.terms && "Please accept terms and conditions"}
            />
            <Button
              variant="primary"
              radius="md"
              mt={"md"}
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  );
}

export default SignUp;
