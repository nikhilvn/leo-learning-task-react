import { useState } from "react";

interface SwitchProps {
  checked: boolean;
  onSwitchChange: (checked: boolean) => void;
}

const Switch: React.FunctionComponent<SwitchProps> = ({
  onSwitchChange,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const switchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onSwitchChange(e.target.checked);
  };

  return (
    <label className="relative w-[60px] h-[34px]">
      <input
        type="checkbox"
        className="opacity-0 w-o h-0"
        checked={isChecked}
        onChange={switchChangeHandler}
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-neutral-300 rounded-full before:absolute before:w-[26px] before:h-[26px] before:left-1 before:bottom-1 before:rounded-full before:transition-transform before:duration-300 ${
          isChecked
            ? "before:bg-blue-400 before:translate-x-[26px]"
            : "before:bg-white"
        }`}
      ></span>
    </label>
  );
};

export default Switch;
