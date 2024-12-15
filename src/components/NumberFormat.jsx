//import { NumberFormatBase, useNumericFormat } from "react-number-format";
import { NumberFormatBase , useNumericFormat } from "react-number-format";

const persianNumeral = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

function CustomNumeralNumericFormat(props) {
  const { format, removeFormatting, isCharacterSame, ...rest } = useNumericFormat(props);

  const _format = (val) => {
    const _val = format(val);

    return _val.replace(/\d/g, ($1) => persianNumeral[Number($1)]);
  };

  const _removeFormatting = (val) => {
    const _val = val.replace(new RegExp(persianNumeral.join('|'), 'g'), ($1) =>
      persianNumeral.indexOf($1),
    );

    return removeFormatting(_val);
  };

  return (
    <NumberFormatBase
    displayType="text"
      format={_format}
      removeFormatting={_removeFormatting}
      {...rest}
    />
  );
}
export default CustomNumeralNumericFormat;