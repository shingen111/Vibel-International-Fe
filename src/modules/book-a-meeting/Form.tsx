"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { toast } from "react-toastify";

function InputForm({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="w-full rounded-md bg-transparent border border-white py-[18px] px-[21px]">
      <input
        className="outline-none h-full w-full text-base bg-transparent text-white placeholder:text-white"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

function TextAreaForm({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="w-full rounded-md bg-transparent border border-white py-[18px] px-[21px]">
      <textarea
        className="outline-none h-full w-full text-base bg-transparent text-white placeholder:text-white min-h-[128px]"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default function Form() {
  const t = useTranslations("book_a_meeting");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isChecked, setIsChecked] = React.useState(false);

  const handleClick = () => {
    if (!isChecked) {
      toast.error("Please confirm policy");
    }
  };

  return (
    <div className="bg-[#2E6C92] sm:min-h-[846px] sm:max-w-[576px] px-[56px] py-[65px] rounded-md flex flex-col justify-start items-start space-y-4">
      <InputForm
        value={form.name}
        placeholder={t("name")}
        onChange={(value) => {
          setForm({ ...form, name: value });
        }}
      />
      <InputForm
        value={form.email}
        placeholder={t("email")}
        onChange={(value) => {
          setForm({ ...form, email: value });
        }}
      />
      <InputForm
        value={form.phone}
        placeholder={t("phone")}
        onChange={(value) => {
          setForm({ ...form, phone: value });
        }}
      />
      <TextAreaForm
        value={form.message}
        placeholder={t("yours_message")}
        onChange={(value) => {
          setForm({ ...form, message: value });
        }}
      />
      <div className="flex justify-start items-start space-x-2">
        <div className="w-5">
          <input
            className="custom-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <p className="text-white text-sm font-medium text-justify">
          {t.rich("policy", {
            code: (chunks) => <a className="font-bold">{chunks}</a>,
          })}
        </p>
      </div>
      <button
        className="p-[18px] w-[120px] border border-white rounded-[100px] !mt-5 text-white hover:bg-white hover:bg-opacity-30"
        onClick={handleClick}
      >
        {t("submit")}
      </button>
    </div>
  );
}
