"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto">
      <div className="p-6 border border-gray-300 sm:rounded-md">
        <form>
          <label className="block mb-6">
            <span className="text-gray-700">Your name</span>
            <input
              type="text"
              id="name"
              className="
              p-2
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Your Name"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Email address</span>
            <input
              id="email"
              type="email"
              className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-opacity-50 focus:ring-indigo-200"
              placeholder="example@mail.com"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              className="p-2 block w-full mt-1 border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={3}
              placeholder="Tell us what you're thinking about..."
            ></textarea>
          </label>
          <div className="mb-6">
            <Button
              type="submit"
              disabled={loading}
              className="rounded-md disabled:cursor-not-allowed bg-slate-600"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
