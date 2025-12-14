import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Form Handling in React</h1>

      <section style={{ marginBottom: "3rem" }}>
        <h2>Controlled Components</h2>
        <RegistrationForm />
      </section>

      <hr />

      <section style={{ marginTop: "3rem" }}>
        <h2>Formik Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
