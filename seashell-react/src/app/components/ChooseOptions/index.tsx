import "./style.scss";

type TChooseOptionsProps = {
  isOpen?: boolean;
};

function ChooseOptions({ isOpen = false }: TChooseOptionsProps) {
  if (isOpen) {
    return (
      <div className="choose-options-wrapper">
        Choose options
      </div>
    );
  }
}
export default ChooseOptions;
