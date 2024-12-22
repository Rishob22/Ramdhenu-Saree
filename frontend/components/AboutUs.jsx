import { Stack } from "@mui/material";

const AboutUs = () => {
  return (
    <div className="products-heading">
      <h2 className="about-us-title">About Us</h2>
      <Stack
        direction="row"
        className="about-us-container"
        spacing={4}
        alignItems="center"
        justifyContent="space-around"
      >
        <img
          src="/asset/aboutus/AboutUs.jpeg"
          className="about-us"
          alt="About Us"
        />
        <div className="about-us-content">
          <p className="about-us-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </Stack>
    </div>
  );
};

export default AboutUs;
