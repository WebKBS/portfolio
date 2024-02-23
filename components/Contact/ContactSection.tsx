import ContactForm from "../Form/ContactForm";

const ContactSection = () => {
  return (
    <section className="mx-auto w-full max-w-screen-sm px-6 pb-20 pt-20">
      <h2 className="mb-12 text-3xl font-bold">문의하기</h2>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
