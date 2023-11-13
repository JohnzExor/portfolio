import contact from "@/assets/contact.svg";

const Contact = () => {
  return (
    <div
      className=" h-fit flex items-center justify-center gap-32"
      id="contact"
    >
      <img src={contact} className=" w-1/4 hidden md:block" />

      <form className=" flex flex-col p-8 items-center gap-4 w-full md:w-1/5 rounded-xl">
        <h1 className=" text-5xl">Contact me</h1>
        <input
          type="text"
          placeholder="Input your Username"
          className=" p-4 rounded-2xl bg-transparent border w-full"
        />
        <input
          type="email"
          placeholder="Input your Email"
          className=" p-4 rounded-2xl bg-transparent border w-full "
        />
        <textarea
          placeholder="Write a message"
          className=" p-4 rounded-md bg-transparent border w-full h-52"
        />
        <button
          type="submit"
          className=" border w-full p-2 bg-white font-bold rounded-md bg-opacity-10"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
