import Contact from "@/components/Contact/Index";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactPage = () => {
  return <>{/* <Contact /> */}</>;
};

export default ContactPage;

const StyledContact = styled.div``;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
};
