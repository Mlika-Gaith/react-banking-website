import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Awards</FooterLink>
              <FooterLink to="/">Certifications</FooterLink>
              <FooterLink to="/">Reviews</FooterLink>
              <FooterLink to="/">Brands</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Quick Links</FooterLinkTitle>
              <FooterLink to="/">E-payment Offers</FooterLink>
              <FooterLink to="/">E-bank Offers</FooterLink>
              <FooterLink to="/">Our Partners</FooterLink>
              <FooterLink to="/">Customer Support</FooterLink>
              <FooterLink to="/">Our Blog</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Opportunities</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Linkedin</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Reddit</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              DigiVault
            </SocialLogo>
            <WebsiteRights>
              DigiVault &trade; {new Date().getFullYear()} Registered TradeMark.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
