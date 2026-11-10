export default function ContactForm() {
  return (
    <form className="card bg-base-200 shadow-md">
      <div className="card-body gap-4">
        <h2 className="card-title text-2xl">Send us a message</h2>
        <p className="text-base-content/70">
          We usually reply within one business day.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input validator w-full"
              placeholder="Jane Smith"
              required
            />
            <p className="validator-hint hidden">Enter your name</p>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Phone</legend>
            <input
              type="tel"
              name="phone"
              className="input validator w-full"
              placeholder="(937) 555-0123"
              pattern="[0-9()\-\s+.]{10,}"
            />
            <p className="validator-hint hidden">Enter a valid phone number</p>
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="email"
            name="email"
            className="input validator w-full"
            placeholder="you@example.com"
            required
          />
          <p className="validator-hint hidden">Enter a valid email address</p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Organization</legend>
          <input
            type="text"
            name="organization"
            className="input validator w-full"
            placeholder="All Saints Medical Center"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Message</legend>
          <textarea
            name="message"
            className="textarea validator h-32 w-full"
            placeholder="How can we help?"
            required
          />
          <p className="label">Please don&apos;t include medical details.</p>
        </fieldset>

        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}
