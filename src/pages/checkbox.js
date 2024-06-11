import { RiveCheckbox } from "@/components/RiveCheckbox";

const Checkbox = () => {
  return (
    <>
      {[1, 2, 3].map((num) => {
        return (
          <RiveCheckbox
            key={num}
            isChecked={false}
            onToogle={(value) => console.log(`Checkbox ${num}`, value)}
          />
        );
      })}
    </>
  );
};

export default Checkbox;
