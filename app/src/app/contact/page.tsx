import ContactForm from "@/components/contactform";

export default function Contact() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-12">
      <div className="aura aura-lg bg-info rounded-xl">
        <a
          href="tel:+19373967056"
          className="block rounded-xl bg-info p-6 text-center text-lg text-info-content"
        >
          Contact us 24/7 at (937) 396-7056
        </a>
      </div>
      <div role="alert" className="alert alert-error alert-soft">
        For a medical emergency, call 911. This form is not monitored in real
        time.
      </div>
      <ContactForm />
    </main>
  );
}
