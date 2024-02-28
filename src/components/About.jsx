import React, {useEffect} from "react";
import Aos from "aos";
import '../styles/styles.css'; 
import "aos/dist/aos.css";

const About = () => {
  useEffect (() =>{
    Aos.init({duration: 3000});
  }, [])
  return (
    <div id="about">
      <h2 data-aos="fade-right">About Quan Imagery</h2>
      <p data-aos="fade-left">
        In a world filled with fleeting moments, we believe in the enduring
        power of photography to capture the essence of life's most precious
        occassions. Founded with a passion for story telling through imagery,
        <b> <i>Quan Imagery</i></b> is the culmination of a lifelong love affair wth the art of
        photography. <br /> Led by <b>Kwoopnan Anpe</b>, our team is driven by a shared
        commitment to craftsmanship, creativity and conection. With the click of
        the shutter, we strive to encapsulate the beauty, emotion and authencity
        of the human experience.
      </p>
    </div>
  );
};

export default About;
