import contact from "@/assets/contact.svg";

const Contact = () => {
  return (
    <div
      className=" h-fit flex flex-col md:flex-row items-center p-6 justify-center md:gap-32"
      id="contact"
    >
      <img src={contact} className=" md:w-1/4 w-1/2 md:hidden " />

      <form className=" flex flex-col  items-center gap-4 w-full md:w-1/5 rounded-xl">
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
          className=" border w-full p-2 font-bold rounded-md bg-opacity-10 hover:bg-black hover:text-white dark:hover:bg-opacity-70 dark:hover:bg-white duration-500 dark:hover:text-black hover:ease-in"
        >
          Send
        </button>
      </form>
      <img src={contact} className=" w-1/4 hidden md:block" />
    </div>
  );
};

export default Contact;
