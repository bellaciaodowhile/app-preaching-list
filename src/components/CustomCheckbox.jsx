// import {useCheckbox, Chip, VisuallyHidden, tv} from "@heroui/react";

// export const CustomCheckbox = (props) => {
//   const checkbox = tv({
//     slots: {
//       base: "border-indigo-500 bg-indigo-100 p-5 hover:bg-indigo-200 w-[400px]",
//       content: "text-indigo-500",
//     },
//     variants: {
//       isSelected: {
//         true: {
//           base: "border-indigo-500 bg-indigo-500 hover:bg-indigo-500 hover:border-indigo-500",
//           content: "text-primary-foreground pl-1",
//         },
//       },
//       isFocusVisible: {
//         true: {
//           base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
//         },
//       },
//     },
//   });

//   const {children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps} =
//     useCheckbox({
//       ...props,
//     });

//   const styles = checkbox({isSelected, isFocusVisible});

//   return (
//     <label {...getBaseProps()}>
//       <VisuallyHidden>
//         <input {...getInputProps()} />
//       </VisuallyHidden>
//       <Chip
//         classNames={{
//           base: styles.base(),
//           content: styles.content(),
//           label: "w-full"
//         }}
//         color="primary"
//         startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
//         variant="faded"
//         {...getLabelProps()}
//       >
//         {children ? children : isSelected ? "Enabled" : "Disabled"}
//       </Chip>
//     </label>
//   );
// };

// export const CheckIcon = (props) => {
//   return (
//     <svg
//       aria-hidden="true"
//       fill="none"
//       focusable="false"
//       height="1em"
//       stroke="#fff"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       viewBox="0 0 24 24"
//       width="1em"
//       {...props}
//     >
//       <polyline points="20 6 9 17 4 12" />
//     </svg>
//   );
// };


import { Checkbox, cn} from "@heroui/react";
import { useState } from "react";

export const CustomCheckbox = ({title, value}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      aria-label={title}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full m-0 checkbox-main",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-indigo-100",
          "data-[selected=true]:border-primary",
          "data-[selected=true]:bg-primary",
        ),
        label: "w-full",
      }}
      color="default"
      isSelected={isSelected}
      onValueChange={setIsSelected}
      value={value}
    >
      <span className={`w-full flex justify-center text-indigo-500 text-center gap-2 uppercase ${ isSelected && 'text-white' }`}>
        {title}
      </span>
    </Checkbox>
  );
};