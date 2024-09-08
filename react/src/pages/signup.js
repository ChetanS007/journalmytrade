import React, { useState } from "react";
import SignInlogo from "./imagesPage/footerLogo.png";
import "./signup.css";
import { Link, Navigate } from "react-router-dom";
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
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleButton } from "../components/GoogleButton";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const InputfieldContainer = React.memo(({ children, isMobileDevice }) => {
  return isMobileDevice ? (
    <Flex direction={"column"}>{children}</Flex>
  ) : (
    <Group grow>{children}</Group>
  );
});

function SignUp({ isOpen = true, onClose, openSignInModal }) {
  const [finacial_year, setfinacial_year] = useState("0");
  const navigate = useNavigate();

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
  const isMobileDevice = useMediaQuery(`(max-width:576px)`); // Adjust the media query as needed

  // const InputfieldContainer = ({ children }) => {
  //   if (isMobileDevice) {
  //     return <Flex direction={"column"}>{children}</Flex>;
  //   } else {
  //     return <Group grow>{children}</Group>;
  //   }
  // };
  return (
    <Modal opened={isOpen} onClose={onClose} centered size="l">
      <Paper radius="md" p="lg">
        <Stack mb="sm" justify="center" align="center">
          <Image radius="md" h={50} w={50} fit="contain" src={SignInlogo} />
          <Text size="xl" fw={500}>
            Sign Up
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack>
            <InputfieldContainer isMobileDevice={isMobileDevice}>
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
            </InputfieldContainer>
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
            <Checkbox
              label={
                <>
                  I accept Journal my trade{" "}
                  <span
                    style={{ color: "#007bff", cursor: "pointer" }}
                    onClick={() => {
                      onClose();
                      navigate("/Terms");
                    }}
                  >
                    Terms of use & Privacy Policy
                  </span>
                </>
              }
              checked={form.values.terms}
              onChange={(event) => {
                form.setFieldValue("terms", event.currentTarget.checked);
              }}
              error={form.errors.terms && "Please accept terms and conditions"}
            />
          </Stack>
          <Flex justify={"center"}>
            <Button
              variant="primary"
              radius="md"
              onClick={handleSubmit}
              size="lg"
            >
              Sign up
            </Button>
          </Flex>
          <Text align="center" mt="md">
            Already have an account?{" "}
            <span
              onClick={() => {
                onClose();
                openSignInModal();
              }}
              style={{ color: "#007bff", cursor: "pointer" }}
            >
              Sign In
            </span>
          </Text>
        </form>
      </Paper>
    </Modal>
  );
}

export default SignUp;
