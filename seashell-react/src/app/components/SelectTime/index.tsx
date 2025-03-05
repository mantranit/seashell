import "./style.scss";

type TSelectTimeProps = {
  isOpen?: boolean;
};

function SelectTime({ isOpen = false }: TSelectTimeProps) {
  if (isOpen) {
    return (
      <div className="select-time-wrapper">
        Select time
      </div>
    );
  }
}
export default SelectTime;
