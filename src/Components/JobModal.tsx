import { values } from "lodash";
import React, { FormEvent, useEffect, useState } from "react";
import { register } from "module";
import router, { useRouter } from "next/router";
import { toast } from "react-toastify";
import { type } from "os";
import path from "path";

// import { sendInquiryForm } from "@/lib/api";

interface IProps {
  job?: any;
  setJob?: any;
}
const initValues = {
  firstname: "",
  lastname: "",
  contactnumber: "",
  email: "",
  resume: null,
};
const initState = {
  isLoading: false,
  error: "",
  values: initValues,
};

const JobModal = (props: IProps) => {
  const { job, setJob } = props;
  const router = useRouter();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const [file, setFile] = useState(null);
  const { values, isLoading, error } = state;
  console.log(state, "<<state");

  const onBlur = ({ target }: any) =>
    setTouched((prev: any) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  // Handler function for file input change
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setState(selectedFile);
  };

  const handleCaptcha = (value: any) => {
    console.log("Captcha value:", value);
  };
  const handleSubmit = async (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    // const formData = new FormData(event.target);

    // function submitForm(event: FormEvent<HTMLFormElement>): void {
    //   throw new Error("Function not implemented.");
    // }

    // return (
    //   <form onSubmit={handleSubmit} encType="multipart/form-data">
    //     {/* Your form inputs go here */}
    //     <input type="file" name="file" />
    //     <button type="submit">Submit</button>
    //   </form>
    // );

    const submitForm = async (e: any) => {
      e.preventDefault();
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      setBtnLoading(true);
      try {
        if (
          values.firstname.length === 0 ||
          values.lastname.length === 0 ||
          values.contactnumber.length === 0 ||
          values.email.length === 0 ||
          values.resume
        ) {
          setFormErrors(true);
          toast.error("Please fill all the fields");
          setBtnLoading(false);
        } else {
          setTouched({});
          setState(initState);
          setBtnLoading(false);
          toast.success("Form submitted successfully!");
        }
      } catch (error: any) {
        setState((prev: any) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };
    return (
      <section className="">
        <div className="registermodal ">
          <div
            id="authentication-modal"
            aria-hidden="true"
            className={`flex  job overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-md  ${
              job ? "visible" : "hidden"
            }`}
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Apply online :--
                  </h3>
                  <button
                    type="button"
                    className=" end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={() => setJob(false)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" action="#" onSubmit={submitForm}>
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Firstame
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={onBlur}
                        id="firstname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Lastame
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={onBlur}
                        id="lastname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactnumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contact number
                      </label>
                      <input
                        type="text"
                        name="contactnumber"
                        id="contactnumber"
                        value={values.contactnumber}
                        onChange={handleChange}
                        onBlur={onBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter your Contact Number"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="file"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Upload CV
                      </label>
                      <input
                        name="file"
                        type="file"
                        id="resume"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="upload resume"
                        // value={values.resume}
                        onChange={handleFileChange}
                        onBlur={onBlur}
                        required
                      />
                    </div>
                    {/* <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div> */}
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onChange={handleFileChange}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};
export default JobModal;
