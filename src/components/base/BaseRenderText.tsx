import { Typography } from "@mui/material";

export default function BaseRenderText({
  text,
  component,
}: {
  text: string;
  component?: React.ElementType;
}) {
  return (
    <Typography
      className="sm:text-[20px] text-base font-normal text-black"
      component={component ?? "span"}
    >
      {text}
    </Typography>
  );
}
