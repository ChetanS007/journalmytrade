import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import navlogo from "./images/homeImg1.png";
import "./header.css";

import classes from "./NewHeader.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import SignUp from "../pages/signup";
import SignIn from "../pages/signIn";
import { useLocation,Link } from "react-router-dom";

export function NewHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignUpModal = () => {
    closeDrawer();
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const openSignInModal = () => {
    closeDrawer();
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };
  const location = useLocation(); // Get the current location

  return (
    <Box className="newContainer">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={navlogo} w={120} />
          <Group h="100%" gap={0} visibleFrom="md">
          <Link to="/" className={`${classes.link} ${location.pathname === '/' ? `${classes.active}` : ''}`}>
            Home
          </Link>
          <Link to="/Pricing" className={`${classes.link} ${location.pathname === '/Pricing' ? `${classes.active}` : ''}`}>
            Pricing
          </Link>
          <Link to="/faq" className={`${classes.link} ${location.pathname === '/faq' ? `${classes.active}` : ''}`}>
            F.A.Q
          </Link>
          <Link to="/blog" className={`${classes.link} ${location.pathname === '/blog' ? `${classes.active}` : ''}`}>
            Blog
          </Link>
          <Link to="/contact" className={`${classes.link} ${location.pathname === '/contact' ? `${classes.active}` : ''}`}>
            Contact
          </Link>
          </Group>

          <Group visibleFrom="md">
            <Button
              onClick={openSignUpModal}
              className={classes.siginbutton}
              size="md"
              variant={"secondary"}
            >
              Sign Up
            </Button>
            <Button
              onClick={openSignInModal}
              variant="primary"
              color="#0d0a3f"
              size="md"
            >
              Sign In
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title=""
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/Pricing" className={classes.link}>
              Pricing
            </Link>
            <Link to="/faq" className={classes.link}>
              F.A.Q
            </Link>
            <Link to="/blog" className={classes.link}>
              Blog
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              variant="secondary"
              onClick={openSignUpModal}
              className={classes.siginbutton}
            >
           Sign Up
            </Button>
            <Button variant="primary" onClick={openSignInModal}>
            Sign In          
              </Button>
          </Group>
        </ScrollArea>
      </Drawer>
      <SignUp onClose={closeSignUpModal} isOpen={isSignUpModalOpen} openSignInModal={openSignInModal}/>
      <SignIn isOpen={isSignInModalOpen} onClose={closeSignInModal} openSignUpModal={openSignUpModal}/>
    </Box>
  );
}
