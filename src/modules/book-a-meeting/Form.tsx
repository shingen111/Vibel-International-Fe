"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { sendEmailService } from "@/services";
import Visibility from "@/components/base/Visibility";
import { CircularProgress } from "@mui/material";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  isChecked: z.boolean().refine((val) => val === true, {
    message: "Please confirm policy",
  }),
});

type FormData = z.infer<typeof schema>;

function InputForm({
  control,
  name,
  placeholder,
}: {
  control: any;
  name: string;
  placeholder?: string;
}) {
  return (
    <div className="w-full rounded-md bg-transparent border border-white py-[18px] px-[21px]">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            className="outline-none h-full w-full sm:text-lg text-base bg-transparent text-white placeholder:text-white py-2"
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
}

function TextAreaForm({
  control,
  name,
  placeholder,
}: {
  control: any;
  name: string;
  placeholder?: string;
}) {
  return (
    <div className="w-full rounded-md bg-transparent border border-white py-[18px] px-[21px]">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            className="outline-none h-full w-full sm:text-lg text-base bg-transparent text-white placeholder:text-white min-h-[128px]"
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
}

export default function Form() {
  const t = useTranslations("book_a_meeting");
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      isChecked: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await sendEmailService.sendEmail({
        email: data.email,
        name: data.name,
        phone: data.phone,
        message: data.message,
      });

      toast.success(response.message);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#2E6C92] sm:min-h-[846px] sm:max-w-[576px] max-w-[476px] px-[56px] py-[65px] rounded-md flex flex-col justify-start items-start space-y-4">
      <InputForm control={control} name="name" placeholder={t("name")} />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <InputForm control={control} name="email" placeholder={t("email")} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <InputForm control={control} name="phone" placeholder={t("phone")} />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

      <TextAreaForm
        control={control}
        name="message"
        placeholder={t("yours_message")}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <div className="flex justify-start items-start space-x-2">
        <div className="w-5">
          <Controller
            control={control}
            name="isChecked"
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
                className="custom-checkbox"
              />
            )}
          />
        </div>
        <p className="text-white sm:text-sm text-xs font-medium text-justify">
          {t.rich("policy", {
            code: (chunks) => <a className="font-bold">{chunks}</a>,
          })}
        </p>
      </div>
      {errors.isChecked && (
        <p className="text-red-500">{errors.isChecked.message}</p>
      )}

      <Visibility
        visibility={!loading}
        suspenseComponent={
          <CircularProgress
            sx={{
              color: "white",
            }}
          />
        }
      >
        <button
          className="sm:p-[18px] p-3 w-[120px] border border-white rounded-[100px] !mt-5 text-white hover:bg-white hover:bg-opacity-30"
          onClick={handleSubmit(onSubmit)}
        >
          {t("submit")}
        </button>
      </Visibility>
    </div>
  );
}
