import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="flex items-center gap-[20px]">
        <HomeIcon />
        <Link to={"/"}>Home</Link>
      </div>
      <div className="flex items-center gap-[20px]">
        <ContactPageIcon />
        <Link to={"contact"}>Contact</Link>
      </div>
      <div className="flex items-center gap-[20px]">
        <InfoIcon />
        <Link to={"aboutus"}>About Us</Link>
      </div>
      <div className="flex items-center gap-[20px]">
        <ExitToAppIcon />
        <Link to={"signUp"}>Sign Up</Link>
      </div>
    </Box>
  );

  return (
    <div className="flex gap-[10px]">
      <button
        className="hidden sm:block md:block lg:block xl:hidden 2xl:hidden"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </button>
      <h1 className="text-[24px] text-black font-[700] hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden">
        Exclusive
      </h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
        className="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f699d26df6a2a4b05976f215af14144c390dd00ff9936de0c46b22d1f6e32b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
        className="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/505a01368e57ac667ecd551fd161eb3fa8202cee72841e5b11d9f712055e4607?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
        className="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
