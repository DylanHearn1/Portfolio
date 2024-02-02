import { useFormik } from 'formik';

const ContactMe = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1 className="title">
        <span className="primary">Contact</span> me
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          onChange={formik.handleChange}
          id="email"
          name="email"
          value={formik.values.email}
          className="bg-slate-200"
        />
        <input
          type="text"
          onChange={formik.handleChange}
          id="message"
          name="message"
          value={formik.values.message}
          className="bg-slate-200"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
