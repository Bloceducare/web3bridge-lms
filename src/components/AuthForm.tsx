import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Connections from "./Connections";

export default function AuthForm() {
  return (
    <div className="mt-8 rounded-xl space-y-8 shadow-sm p-6 w-3/4 bg-white">
      <form>
        <label htmlFor="email" className="block mb-1.5">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-3/4 rounded-md border border-input bg-background px-3 py-1 transition-all
    focus:border-input/200 focus:ring-2 focus:ring-input/200
    focus-visible:outline-none"
        />

        <button className="ring-2 border border-red-400 cursor-pointer flex mt-5 p-2 bg-red-600 rounded-4xl text-white ring-red-600">
          Send Magic Link <ArrowRightIcon className="ms-2 w-4 text-white" />{" "}
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <p className="text-sm whitespace-nowrap">Or continue with</p>
        <div className="border-b border-gray-500 w-full"></div>
      </div>

      <Connections />
    </div>
  );
}
