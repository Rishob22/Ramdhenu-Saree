import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";
const Navbar = () => {
  const theme = useTheme();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      {/* Logo */}

      <Stack direction="row">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            gap: { sm: "122px", xs: "20px" },
            mt: { sm: "32px", xs: "20px" },
            px: "20px",
          }}
        >
          <Link href="/" passHref>
            <a style={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  height: { xs: 60, sm: 60, md: 100 },
                  width: { xs: 60, sm: 60, md: 100 },
                }}
              >
                <Image
                  src="/asset/Logo.png"
                  alt="Logo"
                  layout="responsive" // This will make the image responsive
                  width={28}
                  height={28}
                  priority
                />
              </Box>
            </a>
          </Link>
          {/* Navigation Links */}
          <Stack
            direction="row"
            gap={{ xs: "10px", sm: "40px" }}
            alignItems="center"
            sx={{
              fontSize: {
                xs: "14px", // Mobile screen size font
                sm: "14px", // Medium screen size font
                md: "22px", // Larger screen size font
              },
            }}
          >
            <Link href="/" passHref>
              <a
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  fontFamily: "'Playfair Display', serif",
                  borderBottom: "3px solid #FF2625",
                }}
              >
                Home
              </a>
            </Link>

            <Link href="/book-services" passHref>
              <a
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Book Services
              </a>
            </Link>

            <Link href="#contactus" passHref>
              <a
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Contact Us
              </a>
            </Link>

            <Link href="#aboutus" passHref>
              <a
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                About Us
              </a>
            </Link>
          </Stack>
          <button
            className="cart-icon"
            onClick={() => {
              setShowCart(true);
            }}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </Stack>
      </Stack>
      {showCart === true && <Cart />}
    </>
  );
};

export default Navbar;
